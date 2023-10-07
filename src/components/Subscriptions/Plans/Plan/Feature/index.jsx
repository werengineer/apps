import { PayButton } from "@components/Subscriptions/PayButton";
import { SUBSCRIPTION_PLANS } from "@data";
import { Box, Button, Chip, Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";

export const SubscriptionFeature = ({ p, i, filter }) => {
	const mainPlan = (plan) => {
		return "Early Bird" === plan;
	};
	const [viewMore, setViewMore] = React.useState(false);
	const [plan, setPlan] = React.useState([
		{
			tag: "Early Bird",
			price: 0,
			gymPrice: 0,
			gymMonth: 0,
			coins: 0,
			xp: 0
		}
	]);
	const [dynamicFeatures, setDynamicFeatures] = React.useState([]);
	function percentage(toCalculate, totalValue) {
		return (toCalculate / 100) * totalValue;
	}
	React.useEffect(() => {
		const plans = [];
		let index = 1;

		SUBSCRIPTION_PLANS.find((p) => (index = p["time"].indexOf(filter.month)));
		SUBSCRIPTION_PLANS.map((p, i) =>
			plans.push({
				price: p["price"][index],
				gymPrice: Math.round(percentage(25, p["price"][index])),
				gymMonth: filter.month,
				coins: Math.round(percentage(75, p["price"][index])),
				xp: Math.round(percentage(75, p["price"][index]) * 10),
				planCode: i
			})
		);
		setPlan(plans);
	}, [filter, p]);
	React.useEffect(() => {
		const f = [];
		plan.map((p, i) =>
			i !== 1
				? f.push({
					planCode: i,
					features: [
						`Get gym membership worth ₹ ${p.gymPrice} for ${p.gymMonth} Months`,
						`Get ${p.coins} Gold coins and a ${p.xp} xp boost to your college page.`
					]
				})
				: f.push({
					planCode: i,
					features: [`Get gym membership worth ₹ ${p.gymPrice}`]
				})
		);
		setDynamicFeatures(f);
	}, [plan]);
	const viewMoreKar = () => {
		setViewMore(!viewMore);
	};
	return (
		<Box
			gap={5}
			sx={{
				background:
					mainPlan(p["tag"]) &&
					"linear-gradient(180deg, #F7EF8A 0%, #EDC967 37.5%, #D2AC47 78.65%, #AE8625 100%)",
				border: !mainPlan(p["tag"]) && "1px solid #EDC967",
				boxShadow: mainPlan(p["tag"]) && "0px 4px 38.959999084472656px 0px #867004",
				borderRadius: "20px",
				gap: "10px",
				color: mainPlan(p["tag"]) && "#272727",
				padding: 5,
				width: "350px",
				position: "relative",
				display: "flex",
				flexDirection: "column",
				alignItems: "center"
			}}
			key={i}
		>
			<Chip
				sx={{
					width: "Hug(90px)",
					height: "Hug(51px)",
					top: "25px",
					padding: "12px 16px 12px 16px",
					borderRadius: "0px 20px 20px 0px",
					gap: "10px",
					left: "0px",
					color: "#272727",
					position: "absolute",
					background: "rgba(236, 178, 45, 1)"
				}}
				label={p["tag"]}
			/>
			<Stack direction={"row"} alignItems={"center"} justifyContent={"center"} spacing={1}>
				<Typography
					sx={{
						fontFamily: "Inter",
						fontSize: "30px",
						fontWeight: "600",
						lineHeight: "165px",
						letterSpacing: "0.02em",
						mt: 2,
						textAlign: "center"
					}}
				>
					₹
				</Typography>
				<Typography
					sx={{
						fontFamily: "Inter",
						fontSize: "70px",
						fontWeight: "600",
						lineHeight: "165px",
						letterSpacing: "0.02em",
						textAlign: "center",
						textDecoration: i !== 1 && "line-through"
					}}
				>
					{plan[i]?.price}
				</Typography>
			</Stack>
			{i !== 1 && (
				<>
					<Typography
						sx={{
							fontFamily: "Inter",
							fontSize: "10px",
							fontWeight: "600",
							lineHeight: "12px",
							letterSpacing: "0.02em",
							textAlign: "center",
							mt: -3
						}}
					>
						New Price after launch if you subscribe to early bird now.
					</Typography>
					<Stack
						mb={3}
						direction={"row"}
						alignItems={"center"}
						justifyContent={"center"}
						spacing={1}
					>
						<Typography
							sx={{
								fontFamily: "Inter",
								fontSize: "20px",
								fontWeight: "600",
								lineHeight: "10px",
								letterSpacing: "0.02em",
								mt: 2,
								textAlign: "center"
							}}
						>
							₹
						</Typography>
						<Typography
							sx={{
								fontFamily: "Inter",
								fontSize: "40px",
								fontWeight: "600",
								lineHeight: "35px",
								letterSpacing: "0.02em",
								textAlign: "center"
							}}
						>
							{percentage(50, plan[i]?.price)}
						</Typography>
						<Typography
							sx={{
								fontFamily: "Inter",
								fontSize: "20px",
								fontWeight: "600",
								lineHeight: "10px",
								letterSpacing: "0.02em",
								mt: 2,
								textAlign: "center"
							}}
						>
							only
						</Typography>
					</Stack>
				</>
			)}

			<Typography
				sx={{
					fontFamily: "Inter",
					fontSize: "20px",
					fontWeight: 500,
					lineHeight: "28px",
					letterSpacing: "0.02em",
					textAlign: "center"
				}}
			>
				{p["name"]}
			</Typography>
			<Typography
				sx={{
					fontFamily: "Inter",
					fontSize: "14px",
					fontWeight: 400,
					lineHeight: "28px",
					letterSpacing: "0.02em",
					mt: 2,
					textAlign: "center"
				}}
			>
				{p["description"]}
			</Typography>
			{dynamicFeatures[i]?.features?.map((d, indexxx) => (
				<Typography
					key={indexxx}
					sx={{
						fontFamily: "Inter",
						fontSize: "14px",
						fontWeight: 400,
						lineHeight: "28px",
						letterSpacing: "0.02em",
						mt: 2
					}}
				>
					✔ {d}
				</Typography>
			))}
			{p["features"]
				?.slice(
					0,
					viewMore === true
						? mainPlan(p["tag"])
							? p["features"]?.length - 1
							: p["features"]?.length - 2
						: 5
				)
				.map((f, indexx) => (
					<Typography
						key={indexx}
						sx={{
							fontFamily: "Inter",
							fontSize: "14px",
							fontWeight: 400,
							lineHeight: "28px",
							letterSpacing: "0.02em",
							mt: 2
						}}
					>
						✔ {f}
					</Typography>
				))}
			{i !== 1 && (
				<Typography
					sx={{
						fontFamily: "Inter",
						fontSize: "14px",
						fontWeight: 400,
						lineHeight: "28px",
						letterSpacing: "0.02em",
						mt: 2,
						textAlign: "center",
						cursor: "pointer",
						":hover": {
							textDecoration: "underline"
						}
					}}
					onClick={() => viewMoreKar()}
				>
					View {viewMore ? "less 👆" : "more 👇"}
				</Typography>
			)}

			<PayButton main={mainPlan(p["tag"])} />
		</Box>
	);
};

SubscriptionFeature.propTypes = {
	p: PropTypes.any,
	i: PropTypes.any,
	filter: PropTypes.any
};
