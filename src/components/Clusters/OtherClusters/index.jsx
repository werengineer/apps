"use client";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useContext } from "react";
import { ClustersContext } from "@context/cluster";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { Cluster } from "../Cluster";

function OtherClusters() {
	// { otherClusters, filter, setViewMore, viewMore }
	const clustersContext = useContext(ClustersContext);
	const { filter, otherClusters, viewMore, handleViewMoreClick } = clustersContext;

	return (
		<Box
			sx={{
				// display: filter.length > 0 ? filter.includes('Others') ? 'flex' : 'none' : 'flex',
				display:
					otherClusters.length > 0
						? filter?.includes("Others") || filter?.length === 0
							? "flex"
							: "none"
						: "none",
				flexDirection: "column",
				gap: "10px"
			}}
		>
			<Typography>Other Clusters</Typography>
			<Box
				sx={{
					display: "grid",
					gridTemplateColumns: [
						"repeat(1, minmax(0, 1fr))",
						"repeat(2, minmax(0, 1fr))",
						"repeat(3, minmax(0, 1fr))"
					],
					directon: ["column", "row"],
					flexDirection: "column",
					gap: 3
				}}
			>
				{otherClusters
					?.slice(0, viewMore.otherClusters === true ? otherClusters?.length : 6)
					.map((data, index) => (
						<Cluster
							data={data}
							glow={
								Date.parse(Date()) - Date.parse(data?.createdAt) < 2592000000 ? true : false
							}
							key={index}
							index={index}
							type={"Others"}
						/>
					))}
			</Box>
			<Box
				sx={{
					display: otherClusters?.length > 6 ? "flex" : "none",
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
					//     otherClusters: !viewMore.otherClusters
					// })}

					onClick={() => handleViewMoreClick({ group: "otherClusters" })}
				>
					{viewMore.otherClusters === true ? (
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

export default OtherClusters;
