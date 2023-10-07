"use client";
import Box from "@mui/material/Box";
import React from "react";
import { RightSection } from "./RightSection";
import { LeftSection } from "./LeftSection";
import { PropTypes } from "prop-types";

export const QuestionFooter = ({ data, count, playAudio, setOpen }) => {
	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "space-between"
			}}
		>
			<LeftSection data={data} count={count} playAudio={playAudio} setOpen={setOpen} />

			<RightSection data={data} setOpen={setOpen} />
		</Box>
	);
};

QuestionFooter.propTypes = {
	data: PropTypes.any,
	setOpen: PropTypes.any,
	count: PropTypes.any,
	playAudio: PropTypes.any
};
