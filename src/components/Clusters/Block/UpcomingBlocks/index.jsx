"use client";
import { Box, Grid, Typography } from "@mui/material";
import React, { useContext } from "react";
import PropTypes from "prop-types";
import { BlockCard } from "../BlockCard";
import { BlocksContext } from "@context/blocks";

export const UpcomingBlocks = () => {
	const blocksContext = useContext(BlocksContext);
	const { nextBlocks } = blocksContext;

	return (
		<Box
			id="upcoming-block-container"
			sx={{
				display: nextBlocks?.length > 0 ? "flex" : "none",
				flexDirection: "column",
				gap: "20px"
			}}
		>
			<Typography>Upcoming Block</Typography>
			<Grid container spacing={2} columnSpacing={3} rowSpacing={4}>
				{nextBlocks?.map((b, i) => (
					<Grid xs={12} sm={6} md={4} key={i} item>
						<BlockCard glow={i === 0 ? true : false} data={b} key={i} status={"Upcoming"} />
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

UpcomingBlocks.propTypes = {
	nextBlocks: PropTypes.any
};
