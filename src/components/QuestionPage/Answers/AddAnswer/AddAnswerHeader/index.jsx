"use client";
import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import { PropTypes } from "prop-types";

export function AddAnswerHeader({ engineer }) {
	return (
		<>
			<Box
				sx={{
					display: engineer ? "none" : "flex",
					color: "#1D5352"
				}}
			>
				Let the world know what you think, Answer the question!
			</Box>
			<Box
				sx={{
					display: engineer ? "flex" : "none",
					alignItems: "center",
					gap: 2
				}}
			>
				<Avatar src={engineer?.avatar}>
					{engineer?.name?.split(" ")[0][0]}
					{engineer?.name?.split(" ")[1]}
				</Avatar>
				<Typography
					sx={{
						fontSize: ["13px", "14px", "15px"]
					}}
				>
					{engineer?.name}
				</Typography>
			</Box>
		</>
	);
}

AddAnswerHeader.propTypes = {
	engineer: PropTypes.any
};
