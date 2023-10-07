"use client";
import { getNotifications } from "@api";
import { NotificationsTab } from "@components";
import Box from "@mui/material/Box";
import React from "react";

export default function NotificationPage() {
	
	return (
		<Box
			display={"flex"}
			sx={{
				mt: 10,
				ml: [0, 8]
			}}
		>
			<Box
				width={["100%", "100%", "75%"]}
				height={"87vh"}
				borderRight={["none", "none", "1px solid grey"]}
				sx={{
					overflowY: "scroll",
					overflowX: "hidden"
				}}
			>
				<NotificationsTab />
			</Box>
		</Box>
	);
}
