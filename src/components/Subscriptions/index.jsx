"use client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import { SubscriptionHeading } from "./Heading";
import { SubscriptionPlans } from "./Plans";
import { BenefitCards } from "./Benefits";
import { UpgradeNow } from "./Upgrade";

export const Subscriptions = () => {
	return (
		<>
			<SubscriptionHeading />
			<SubscriptionPlans />
			<BenefitCards />
			<UpgradeNow />
		</>
	);
};
