"use client";
import { DashboardMain } from "@components";
import Box from "@mui/material/Box";
import React from "react";
// import { firebaseAuth } from "../firebase";

export default function DashboardPage() {


	return (
		<>
			<Box
				display={"flex"}
				sx={{
					mt: [8, 10],
					ml: ["auto", 8],
					maxWidth: "100vw",
					display: "flex",
					overflowY: "hidden"
				}}
			>
				<Box
					sx={{
						width: ["100%", "100%", "75%"],
						pl: [0, 0, 0],
						pr: [0, 0, 0]
					}}
				>
					<DashboardMain tab={undefined} setTab={undefined} />
				</Box>
			</Box>
		</>
	);
}
