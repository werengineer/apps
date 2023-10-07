"use client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import { PropTypes } from "prop-types";

export const QuestionContent = ({ data }) => {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				gap: ["10px", "15px"]
			}}
		>
			<Typography
				sx={{
					fontSize: ["20px", "20px", "30px"],
					fontWeight: 600,
					wordBreak: "break-all"
				}}
			>
				{data?.title}
			</Typography>

			<Typography
				id={`description-${data?._id}`}
				component={"p"}
				fontSize={["13px", "13px", "16px"]}
				sx={{
					wordBreak: "keep-all"
				}}
			></Typography>
		</Box>
	);
};

QuestionContent.propTypes = {
	data: PropTypes.any
};
