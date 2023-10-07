"use client";
import { KeyboardArrowUp } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { PropTypes } from "prop-types";

export function AnswerFooter({ upvoted, handleUpvote, upvoteCounter }) {
	return (
		<Box
			sx={{
				display: "flex",
				gap: "0.8vw",
				alignItems: "center"
			}}
		>
			<Button
				sx={{
					color: upvoted ? "#05D9D7" : "grey",
					borderRadius: "20px"
				}}
				onClick={handleUpvote}
			>
				<KeyboardArrowUp
					sx={{
						fontSize: "18px",
						mr: 2
					}}
				/>
				<Typography
					sx={{
						fontSize: "14px",
						mt: 0.3
					}}
				>
					{upvoteCounter}
				</Typography>
			</Button>
		</Box>
	);
}

AnswerFooter.propTypes = {
	upvoted: PropTypes.any,
	handleUpvote: PropTypes.any,
	upvoteCounter: PropTypes.any
};
