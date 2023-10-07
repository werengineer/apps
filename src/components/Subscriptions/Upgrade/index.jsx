import { Button, Link, Stack, Typography } from "@mui/material";
import React from "react";
import { PayButton } from "../PayButton";

export const UpgradeNow = () => {
	const mainPlan = (plan) => {
		return "Early Bird" === plan;
	};
	return (
		<Stack spacing={5} p={[5, 10]} alignItems={"center"} justifyContent={"center"}>
			<Typography
				sx={{
					fontFamily: "Inter",
					fontSize: ["30px", "35px"],
					fontWeight: "500",
					lineHeight: "42px",
					letterSpacing: "0em",
					textAlign: "center",
					mt: 10
				}}
			>
				Subscribe Now, And Grab Exclusive Benefits.
			</Typography>
			<Typography textAlign={"center"} my={1}>
				Become a premium part of the world&apos;s best engineering community! Join on the
				journey of building a bright future of engineering.
			</Typography>
			<PayButton main={mainPlan("Early Bird")} />
			<Typography textAlign={"center"} fontSize={"10px"} my={1}>
				Enjoy premium access till the launch. <Link href="/terms">Terms & Conditions</Link>{" "}
				Applied.
			</Typography>
		</Stack>
	);
};
