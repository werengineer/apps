"use client";
import { Puzzle } from "@components";
import { PuzzleState } from "@context/puzzle";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import React from "react";

export default function PuzzlesPage({ params }) {
	return (
		<Box
			display={"flex"}
			sx={{
				mt: [7, 10],
				height: ["93vh", "87vh"],
				ml: ["auto", 9],
				maxWidth: "100vw",
				display: "flex",
				// overflowY: 'hidden'
				overflowX: "hidden"
			}}
		>
			<Box
				sx={{
					width: ["100%", "100%", "75%"],
					pl: [1, 3, 0],
					pr: [1, 3, 0]
				}}
			>
				<PuzzleState parameters={params}>
					<Puzzle />
				</PuzzleState>
			</Box>
		</Box>
	);
}

PuzzlesPage.propTypes = {
	params: PropTypes.any
};
