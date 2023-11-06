"use client";
import { Box, Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useContext } from "react";
import { ClustersContext } from "@context/cluster";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { Cluster } from "../Cluster";

export const EnrolledClusters = () => {
	// { filter, enrolledClusters, setViewMore, viewMore }
	const clustersContext = useContext(ClustersContext);
	const { filter, enrolledClusters, viewMore, handleViewMoreClick } = clustersContext;

	return (
		<Box
			sx={{
				// display: filter.length > 0 ? filter.includes('Enrolled') ? 'flex' : 'none' : 'flex',
				display:
					enrolledClusters.length > 0
						? filter?.includes("Enrolled") || filter?.length === 0
							? "flex"
							: "none"
						: "none",
				flexDirection: "column",
				gap: "10px"
			}}
		>
			<Typography textAlign={"start"}>Enrolled Clusters</Typography>
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
				{enrolledClusters
					?.slice(0, viewMore.enrolledClusters === true ? enrolledClusters?.length : 6)
					.map((data, index) => (
						<Cluster data={data} glow={true} key={index} index={index} type={"Enrolled"} />
					))}
			</Box>
			<Box
				sx={{
					display: enrolledClusters?.length > 6 ? "flex" : "none",
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
					//     enrolledClusters: !viewMore.enrolledClusters
					// })}
					onClick={() => handleViewMoreClick({ group: "enrolledClusters" })}
				>
					{viewMore.enrolledClusters === true ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
					View More
				</Button>
			</Box>
		</Box>
	);
};
