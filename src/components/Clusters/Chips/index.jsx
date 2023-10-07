"use client";
import { ClustersContext } from "@context/cluster";
import { getEngineer } from "@cookies";
import { Box, Chip } from "@mui/material";
import React from "react";
import { useContext } from "react";

export const Chips = () => {
	// { setFilter, filter }
	const clustersContext = useContext(ClustersContext);
	const engineer = getEngineer();
	const { filter, handleFilterClick } = clustersContext;

	return (
		<Box
			sx={{
				display: !engineer ? "none" : "flex",
				gap: "10px"
			}}
		>
			{["Enrolled", "Completed", "Upcoming", "Others"].map((el, index) => (
				<Chip
					key={index}
					index={index}
					label={el}
					onClick={(e) => handleFilterClick({ el: el })}
					sx={{
						display: "flex",
						backgroundColor: filter.includes(el) ? "#1D5352" : "#6F7378",
						":hover": {
							backgroundColor: filter.includes(el) ? "#1D5352" : "#6F7378"
						}
					}}
				/>
			))}
		</Box>
	);
};

export default Chips;
