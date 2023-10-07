import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import React from "react";
import "./style.css";

export const SubscriptionHeading = () => {
	return (
		<Box textAlign={"center"} position={"relative"} mt={8}>
			<div className="media">
				<Image
					src="/images/gold-mini-bot.svg"
					width={182}
					height={181}
					style={{
						transform: "rotate(-24.3deg)",
						position: "absolute",
						top: -40,
						left: "25%"
					}}
				/>
				<Image
					src="/images/gold-mini-bot.svg"
					width={122}
					height={121}
					style={{
						transform: "rotate(24.3deg)",
						position: "absolute",
						top: -20,
						right: "30%"
					}}
				/>
			</div>
			<Typography sx={{ fontSize: ["25px", "35px"], fontWeight: 600 }}>
				We Are Engineer
			</Typography>
			<Typography
				sx={{
					fontSize: ["45px", "55px"],
					fontWeight: 600,
					background:
						"linear-gradient(180deg, #F7EF8A -38.84%, #EDC967 14.01%, #D2AC47 101.76%, #AE8625 142.33%)",
					WebkitBackgroundClip: "text",
					WebkitTextFillColor: "transparent"
				}}
			>
				Early Bird Subscription
			</Typography>
		</Box>
	);
};
