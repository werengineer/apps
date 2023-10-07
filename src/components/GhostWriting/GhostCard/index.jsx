import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import DateRangeIcon from "@mui/icons-material/DateRange";
import DescriptionIcon from "@mui/icons-material/Description";
import FileOpenIcon from "@mui/icons-material/FileOpen";
import PropTypes from "prop-types";
import dateFormat, { masks } from "dateformat";
import { Brush, CurrencyRupee } from "@mui/icons-material";
import { checkGhostPayment, confirmGhostPayment } from "@api";
import { getEngineer } from "@cookies";
import { getSubscription } from "@hooks/getSubscription";
import { getPercentageValue } from "@hooks/getPercentValue";
import Stripe from "stripe";
import { STRIPE_SECRET_KEY } from "@constants";
import { useSnackbar } from "notistack";
import { useRouter } from "next/navigation";

export const GhostCard = ({ data, i, setOpen, setResourceData }) => {
	const { subscription } = getSubscription();
	const [subed, setSubed] = useState();
	const getSub = async () => {
		setSubed(await subscription());
	};
	getSub();
	const { enqueueSnackbar } = useSnackbar();
	const stripee = Stripe(STRIPE_SECRET_KEY);
	const engineer = getEngineer();
	const router = useRouter();
	const [paid, setPaid] = useState(false);
	const getPayment = async () => {
		const dataa = await checkGhostPayment(data.responseId);
		if (!dataa) setPaid(false);
		else setPaid(true);
	};
	getPayment();
	const getSessionAndSetOrder = async (sessionId, product, id) => {
		const session = await stripee.checkout.sessions.retrieve(sessionId);
		console.log(session);
		try {
			if (session && session.status === "complete") {
				const paymentDetails = {
					customerId: session.customer,
					status: session.status,
					paymentStatus: session.payment_status,
					paymentIntent: session.payment_intent,
					invoice: session.invoice,
					id: session.id,
					customerDetails: session.customer_details,
					amount: session.amount_subtotal,
					writingId: id
				};
				const data = {
					service: product,
					engineer: engineer._id,
					paymentDetails
				};
				const res = await confirmGhostPayment(data);
				console.log(res);
				enqueueSnackbar(
					`${engineer?.name} Thankyou for your enrolling into ghostwriting with us!`,
					{
						variant: "success"
					}
				);

				enqueueSnackbar(
					"We've recieved your order our team will proceed further. Thanks for your patience!",
					{
						variant: "success"
					}
				);
				router.push("/ghostwriting");
			}
		} catch (error) {
			console.log(error);
			enqueueSnackbar(`Server Error ${error?.response?.data}!`, {
				variant: "error"
			});
		}
	};
	React.useEffect(() => {
		// Check to see if this is a redirect back from Checkout
		const query = new URLSearchParams(window.location.search);
		if (query.get("success") && query.get("session_id")) {
			const sessionId = query.get("session_id");
			const product = query.get("product");
			const id = query.get("id");
			if (id === data.responseId) {
				getSessionAndSetOrder(sessionId, product, id);
				console.log("Order placed! You will receive an email confirmation.");
			}
		}

		if (query.get("canceled")) {
			console.log("Order canceled -- continue to shop around and checkout when you’re ready.");
		}
		if (!engineer) {
			enqueueSnackbar("Please login to subscribe!", { variant: "warning" });
		}
	}, []);
	return (
		<Box
			key={i}
			sx={{
				display: "flex",
				flexDirection: "column",
				border: "1px solid #05D9D7",
				width: "100%",
				padding: "25px 20px",
				borderRadius: 5,
				backgroundColor: "#212121",
				gap: 3
			}}
		>
			<Typography fontSize={26}>{data.username}</Typography>
			<Box color={"gray"} display={"flex"} flexDirection={"column"} gap={1}>
				<Typography
					fontSize={15}
					sx={{
						display: "flex",
						alignItems: "center",
						gap: 1
					}}
				>
					<DescriptionIcon /> Pages:- {data.noOfPages}
				</Typography>
				<Typography
					fontSize={15}
					sx={{
						display: "flex",
						alignItems: "center",
						gap: 1
					}}
				>
					<FileOpenIcon /> PaperSize:-{data.paperSize}
				</Typography>
				<Typography
					sx={{
						display: "flex",
						alignItems: "center",
						gap: 1
					}}
				>
					{" "}
					<DateRangeIcon /> Submission Date:-
					{dateFormat(data.submissionDate, "dddd, mmmm dS, yyyy, h:MM  TT")}
				</Typography>
				<Typography
					fontSize={15}
					sx={{
						display: "flex",
						alignItems: "center",
						gap: 1
					}}
				>
					{" "}
					<Brush
						sx={{
							color:
								data.inkColor === "Blue"
									? "#007FFF"
									: data.inkColor === "Black"
									? "#000000"
									: "red"
						}}
					/>{" "}
					Ink Color:- {data.inkColor}
				</Typography>
				{subed?.enrolled ? (
					<Stack>
						<Typography
							fontSize={15}
							sx={{
								display: "flex",
								alignItems: "center",
								gap: 1,
								textDecoration: "line-through"
							}}
						>
							{" "}
							<CurrencyRupee /> Price:- {data.totalPrice}
						</Typography>
						<Typography
							fontSize={15}
							sx={{
								display: "flex",
								alignItems: "center",
								gap: 1
							}}
						>
							{" "}
							<CurrencyRupee /> Premium Price:- {getPercentageValue(20, data.totalPrice)}
						</Typography>
					</Stack>
				) : (
					<Typography
						fontSize={15}
						sx={{
							display: "flex",
							alignItems: "center",
							gap: 1
						}}
					>
						{" "}
						<CurrencyRupee /> Price:- {data.totalPrice}
					</Typography>
				)}
			</Box>
			<Box display={"flex"} justifyContent={"flex-start"}>
				<Button
					sx={{
						width: "60%",
						color: "black",
						borderRadius: 10,
						backgroundColor: "#05D9D7",
						border: "1px solid #05D9D7",
						mt: 1,
						"&:hover": {
							color: "white"
						}
					}}
					onClick={() => {
						setOpen(true);
						setResourceData(data);
					}}
				>
					{paid ? "Paid ✔" : "Confirm"}
				</Button>
			</Box>
		</Box>
	);
};

GhostCard.propTypes = {
	data: PropTypes.any,
	i: PropTypes.any,
	setOpen: PropTypes.any,
	setResourceData: PropTypes.any
};
