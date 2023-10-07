import { Box, Stack, Typography } from "@mui/material";
import { DeviceCard } from "./DeviceCard";
import React from "react";

export const ManageAccounts = () => {
	return (
		<Box
			display={"flex"}
			justifyContent={"space-between"}
			border="2px solid rgba(29, 83, 82, 1)"
			borderRadius="12px"
			width={["100%", "97%"]}
			padding={"20px"}
			flexDirection="column"
			height="100%"
			boxShadow={"0px 4px 15px rgba(0, 0, 0, 0.25)"}
		>
			<Typography fontSize={"20px"}>Manage Devices</Typography>
			<Stack spacing={3} mt={5}>
				<DeviceCard />
			</Stack>
		</Box>
	);
};
