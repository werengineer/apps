"use client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import { PropTypes } from "prop-types";

export const QuestionTags = ({ tags }) => {
	return (
		<Box
			sx={{
				display: ["flex", "flex", "none"],
				gap: "2vw"
			}}
		>
			{tags !== null && tags?.slice(0, 3).map((d, i) => (
				<Typography
					sx={{
						color: "#05D9D7",
						fontSize: "10px",
						paddingX: "10px",
						paddingY: "3px",
						borderRadius: "10px",
						backgroundColor: "rgba(29, 83, 82, 0.2)"
					}}
					key={i}
				>
					{d}
				</Typography>
			))}
		</Box>
	);
};

QuestionTags.propTypes = {
	tags: PropTypes.any
};
