"use client";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useContext } from "react";
import { ClustersContext } from "@context/cluster";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { Cluster } from "../Cluster";

export const UpcomingClusters = () => {
	const clustersContext = useContext(ClustersContext);
	const { filter, upcomingClusters, viewMore, handleViewMoreClick } = clustersContext;

	return (
		<Box
			sx={{
				// display: filter.length > 0 ? filter.includes('Upcoming') ? 'flex' : 'none' : 'flex',
				display:
					upcomingClusters.length > 0
						? filter?.includes("Upcoming") || filter?.length === 0
							? "flex"
							: "none"
						: "none",
				flexDirection: "column",
				gap: "10px"
			}}
		>
			<Typography>Upcoming Clusters</Typography>
			<Box
				sx={{
					display: "grid",
					gridTemplateColumns: [
						"repeat(1, minmax(0, 1fr))",
						"repeat(2, minmax(0, 1fr))",
						"repeat(3, minmax(0, 1fr))"
					],
					flexDirection: "column",
					gap: 3
				}}
			>
				{upcomingClusters
					?.slice(0, viewMore.upcomingClusters === true ? upcomingClusters?.length : 6)
					.map((data, index) => (
						<Cluster data={data} glow={false} key={index} index={index} type={"Upcoming"} />
					))}
			</Box>
			<Box
				sx={{
					display: upcomingClusters?.length > 6 ? "flex" : "none",
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
					// onClick={() => setViewMore({ ...viewMore, upcomingClusters: !viewMore.upcomingClusters })}
					onClick={() => handleViewMoreClick({ group: "upcomingClusters" })}
				>
					{viewMore.upcomingClusters === true ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
					View More
				</Button>
			</Box>
		</Box>
	);
};

export default UpcomingClusters;
