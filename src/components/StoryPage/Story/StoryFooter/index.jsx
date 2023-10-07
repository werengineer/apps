"use client";
import Box from "@mui/material/Box";
import React from "react";
import { RightSection } from "./RightSection";
import { LeftSection } from "./LeftSection";
import { PropTypes } from "prop-types";

export const StoryFooter = ({ data, count, playAudio, setOpen }) => {
	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "space-between",
				width: "100%"
			}}
		>
			<LeftSection data={data} count={count} playAudio={playAudio} setOpen={setOpen} />

			<RightSection data={data} setOpen={setOpen} />
		</Box>
	);
};

StoryFooter.propTypes = {
	data: PropTypes.any,
	setOpen: PropTypes.any,
	count: PropTypes.any,
	playAudio: PropTypes.any
};
