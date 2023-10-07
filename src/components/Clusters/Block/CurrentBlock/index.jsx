"use client";
import { Box, Grid, Typography } from "@mui/material";
import React, { useContext } from "react";
import PropTypes from "prop-types";
import { BlockCard } from "../BlockCard";
import { BlocksContext } from "@context/blocks";

export const CurrentBlock = () => {
	const blocksContext = useContext(BlocksContext);
	const { currentBlock } = blocksContext;

	return (
		<Box
			id="current-block-container"
			sx={{
				display: currentBlock?.length > 0 ? "flex" : "none",
				flexDirection: "column",
				gap: "2vh"
			}}
		>
			<Typography>Current Block</Typography>

			<Grid container spacing={2} columnSpacing={3} rowSpacing={4}>
				<Grid xs={12} sm={6} md={4} item key={1}>
					
					{currentBlock?.map((b, i) => (
						<BlockCard data={b} key={i} status={"Current"} glow={i === 0 ? true : false} />
					))}
				</Grid>
			</Grid>
		</Box>
	);
};

CurrentBlock.propTypes = {
	currentBlock: PropTypes.any
};
