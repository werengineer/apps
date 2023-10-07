import Box from "@mui/material/Box";
import React from "react";
import { VideoCarousel } from "./VideoCarousel";
import { Task } from "./Task";
import PropTypes from "prop-types";

export const CarouselNTask = ({ blockModalData, setOpen1, setTaskData }) => {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: ["column", "row"],
				gap: "20px"
			}}
		>
			<VideoCarousel />
			<Task tasks={blockModalData?.tasks} setOpen={setOpen1} setTaskData={setTaskData} />
		</Box>
	);
};

CarouselNTask.propTypes = {
	blockModalData: PropTypes.any,
	setOpen1: PropTypes.any,
	setTaskData: PropTypes.any
};
