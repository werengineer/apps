"use client";
import { ClustersContext } from "@context/cluster";
import { Box, Button, Typography } from "@mui/material";
import React, { useContext } from "react";
import { Cluster } from "../Cluster";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";

function CompletedClusters() {
	// { completedClusters, filter, setViewMore, viewMore }
	const clustersContext = useContext(ClustersContext);
	const { filter, completedClusters, viewMore, handleViewMoreClick } = clustersContext;

	return (
		<Box
			sx={{
				// display: filter.length > 0 ? filter.includes('Completed') ? 'flex' : 'none' : 'flex',
				display:
					completedClusters.length > 0
						? filter?.includes("Completed") || filter?.length === 0
							? "flex"
							: "none"
						: "none",
				flexDirection: "column",
				gap: "10px"
			}}
		>
			<Typography>Completed Clusters</Typography>
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
					gap: 3
				}}
			>
				{completedClusters
					?.slice(0, viewMore.completedClusters === true ? completedClusters?.length : 6)
					.map((data, index) => (
						<Cluster data={data} glow={false} key={index} index={index} type={"Completed"} />
					))}
			</Box>
			<Box
				sx={{
					display: completedClusters?.length > 6 ? "flex" : "none",
					justifyContent: "center",
					alignItems: "center",
					mt: "10px"
				}}
			>
				<Button
					sx={{
						mx: "auto",
						color: "grey",
						fontSize: "13px",
						display: "flex",
						gap: "5px",
						borderRadius: "20px"
					}}
					// onClick={() => setViewMore({
					//     ...viewMore,
					//     completedClusters: !viewMore.completedClusters
					// })}
					onClick={() => handleViewMoreClick({ group: "completedClusters" })}
				>
					{viewMore.completedClusters === true ? (
						<KeyboardArrowUp />
					) : (
						<KeyboardArrowDown />
					)}
					View More
				</Button>
			</Box>
		</Box>
	);
}

export default CompletedClusters;
