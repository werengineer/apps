"use client";
import { Block } from "@components/Clusters/Block";
import { BlocksState } from "@context/blocks";
import Box from "@mui/material/Box";
import React from "react";
import PropTypes from "prop-types";

export default function BlocksPage({ params }) {
	return (
		<Box
			display={"flex"}
			sx={{
				mt: 10,
				ml: ["auto", 8, 11],
				maxWidth: "100vw",
				display: "flex",
				overflowY: "hidden"
			}}
		>
			<Box
				sx={{
					width: ["100%", "100%", "75%"],
					pl: [3, 3, 0],
					pr: [3, 3, 0],
					height: ["91vh", "88vh"],
					borderRight: ["none", "none", "1px solid gray"]
				}}
			>
				<BlocksState parameters={params}>
					<Block />
				</BlocksState>
			</Box>
		</Box>
	);
}

BlocksPage.propTypes = {
	params: PropTypes.any
};
