import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import { BenefitCard } from "./Card";

const BENEFITS = [
	{
		image: "/images/subscription/ghostwriting.svg",
		title: "Get 20% off on ghostwriting services."
	},
	{
		image: "/images/subscription/boost.svg",
		title: "Get a boost of 20% on WAE coins and XP."
	},
	{
		image: "/images/subscription/tshirt.svg",
		title: "get 30% off WAE Merchandise + Free WAE T-shirt (worth ₹ 1000)."
	},
	{
		image: "/images/subscription/coursesnclusters.svg",
		title: "Exclusive discounts on paid courses and clusters! (worth ₹ 2000)"
	},
	{
		image: "/images/subscription/logo.svg",
		title: "Get 50% off on WAE Gold Premium subscriptions after the launch."
	},
	{
		image: "/images/subscription/gym.svg",
		title: "Get gym membership worth ₹ 1000"
	}
];

export const BenefitCards = () => {
	return (
		<>
			<Typography
				sx={{
					fontFamily: "Inter",
					fontSize: "35px",
					fontWeight: "500",
					lineHeight: "42px",
					letterSpacing: "0em",
					textAlign: "center",
					my: 10
				}}
			>
				Why Early Bird?
			</Typography>
			<Box
				sx={{
					display: "grid",
					gridTemplateColumns: [
						"repeat(1, minmax(0, 1fr))",
						"repeat(2, minmax(0, 1fr))",
						"repeat(3, minmax(0, 1fr))"
					],
					flexDirection: "column",
					directon: ["column", "row"],
					gap: 5,
					pl: 10,
					pb: 10,
					pr: 10
				}}
			>
				{BENEFITS.map((b, i) => (
					<BenefitCard key={i} image={b.image} text={b.title} />
				))}
			</Box>
		</>
	);
};
