"use client";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "@constants";
import PropTypes from "prop-types";
import { getEngineer } from "@cookies";
import { CurrentBlock } from "./CurrentBlock";
import { UpcomingBlocks } from "./UpcomingBlocks";
import { PastBlocks } from "./PastBlocks";
import { BlocksContext } from "@context/blocks";
import { IncompleteBlock } from "@components/Puzzle/IncompleteBlock";

export const Block = () => {
	const blocksState = useContext(BlocksContext);
	const { loading } = blocksState;

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				gap: "4vh"
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
			) : (
				<>
					<CurrentBlock />
					<UpcomingBlocks />
					<PastBlocks />
				</>
			)}
		</Box>
	);
};

Block.propTypes = {
	blocks: PropTypes.any
};
