import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { SubscriptionPlan } from "./Plan";

export const SubscriptionPlans = () => {
	return (
		<>
			<Stack alignItems={"center"} width={"full"} direction={"column"} mt={5} spacing={5}>
				<SubscriptionPlan />
			</Stack>
		</>
	);
};
