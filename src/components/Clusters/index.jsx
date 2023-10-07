/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable indent */
"use client";
import { ClustersContext } from "@context/cluster";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import React, { useContext } from "react";
import Chips from "./Chips";
import { EnrolledClusters } from "./EnrolledClusters";
import OtherClusters from "./OtherClusters";
import CompletedClusters from "./CompletedClusters";
import UpcomingClusters from "./UpcomingClusters";
import { ContentLoading } from "@components/Global";
import { IncompleteBlock } from "@components/Puzzle/IncompleteBlock";

export const Clusters = () => {
	const clustersContext = useContext(ClustersContext);
	const { loading, currentBlock, completedBlocks, nextBlocks } = clustersContext;

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: ["center", "normal", "normal"],
				gap: "4vh",
				pl: [0, 2, 3],
				mb: 3
			}}
		>
			{loading ? (
				<Box
					sx={{
						display: "flex",
						width: "100%",
						height: ["90vh", "87vh"],
						justifyContent: "center",
						alignItems: "center",
						color: "#1D5352"
					}}
				>
					<CircularProgress color="inherit" />
				</Box>
			) : currentBlock?.length == 0 &&
			  completedBlocks?.length == 0 &&
			  nextBlocks?.length == 0 ? (
				<>
					<IncompleteBlock />
				</>
			) : (
				<>
					<Chips />
					<EnrolledClusters />
					<OtherClusters />
					<CompletedClusters />
					<UpcomingClusters />
				</>
			)}
		</Box>
	);
};
