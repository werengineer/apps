import { Close } from "@mui/icons-material";
import { Box, Button, IconButton, Snackbar, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FEEDBACK_FORM } from "@constants";
import { useTimeout } from "react-use";
import { getCookie, setCookie } from "cookies-next";

export function FeedbackPopup() {
	const [open, setOpen] = useState();
	const router = useRouter();

	useEffect(() => {
		const form = getCookie("wae-form");
		if (form === true || form === "Dont want to") {
			setOpen(false);
			return;
		}
		setTimeout(() => {
			setOpen(true);
			return;
		}, 120000);
	}, []);

	const setFormCookie = () => {
		setCookie("wae-form", true);
		window.open(FEEDBACK_FORM, "__blank");
	};

	const handleClose = () => {
		setCookie("wae-form", "Dont want to");
		setOpen(false);
		return;
	};

	return (
		<Snackbar open={open}>
			<Box
				sx={{
					backgroundColor: "#212121",
					width: ["80vw", "30vw"],
					display: "flex",
					mx: "auto",
					flexDirection: "column",
					gap: "15px",
					borderRadius: "10px",
					px: "15px",
					py: "15px",
					border: "1px solid #05D9D7"
				}}
			>
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center"
					}}
				>
					<Typography
						sx={{
							fontSize: "18px",
							color: "#05D9D7"
						}}
					>
						Share your valuable feedback!
					</Typography>
					<IconButton onClick={handleClose}>
						<Close
							sx={{
								color: "#05D9D7"
							}}
						/>
					</IconButton>
				</Box>

				<Typography
					sx={{
						color: "grey"
					}}
				>
					We appreciate your input and are looking forward to hear from you. Let us know how we
					can serve you better.
				</Typography>
				<Box
					sx={{
						display: "flex",
						flexDirection: "row-reverse"
					}}
				>
					<Button
						sx={{
							borderRadius: "20px",
							border: "1px solid grey",
							fontWeight: 400,
							px: "20px",
							fontSize: "14px",
							color: "grey",
							":hover": {
								backgroundColor: "grey",
								color: "white"
							}
						}}
						onClick={setFormCookie}
					>
						Give Feedback
					</Button>
				</Box>
			</Box>
		</Snackbar>
	);
}
