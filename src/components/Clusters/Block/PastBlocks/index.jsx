import { Box, Grid, Typography } from "@mui/material";
import React, { useContext } from "react";
import PropTypes from "prop-types";
import { BlockCard } from "../BlockCard";
import { BlocksContext } from "@context/blocks";

export const PastBlocks = () => {
	const blocksContext = useContext(BlocksContext);
	const { completedBlocks } = blocksContext;

	return (
		<Box
			id="past-block-container"
			sx={{
				display: completedBlocks?.length > 0 ? "flex" : "none",
				flexDirection: "column",
				gap: "20px"
			}}
		>
			<Typography>Completed Blocks</Typography>
			<Grid container spacing={2} columnSpacing={3} rowSpacing={4}>
				{completedBlocks.map((b, i) => (
					<Grid key={i} xs={12} sm={6} md={4} item>
						<BlockCard glow={i === 0 ? true : false} data={b} key={i} status={"Completed"} />
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

PastBlocks.propTypes = {
	completedBlocks: PropTypes.any
};
