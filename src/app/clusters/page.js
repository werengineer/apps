"use client";
import { Clusters } from "@components";
import ClustersState from "@context/cluster";
import Box from "@mui/material/Box";
import React from "react";

export default function ClusterPage() {
	return (
		<Box
			display={"flex"}
			sx={{
				mt: [9, 10],
				ml: ["auto", 8],
				maxWidth: "100vw",
				display: "flex",
				overflowY: "hidden"
			}}
		>
			<Box
				sx={{
					borderRight: ["0px", "0px", "1px solid grey"],
					width: ["100%", "100%", "75%"],
					height: "90vh",
					overflowY: "scroll"
				}}
			>
				<ClustersState>
					<Clusters />
				</ClustersState>
			</Box>
		</Box>
	);
}
