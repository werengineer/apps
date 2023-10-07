"use client";
import { Box, Divider } from "@mui/material";
import React from "react";
import { Story } from "./Story";
import { Comments } from "./Comments";
import { useState } from "react";
import { PropTypes } from "prop-types";

export const StoryPageMain = ({ story }) => {
	const [comments, setComments] = useState(story?.comments?.reverse());
	return (
		<Box
			sx={{
				width: ["100%", "100%", "75"],
				display: "flex",
				flexDirection: "column",
				gap: "3vh",
				borderRight: ["0px", "0px", "1px solid grey"],
				paddingRight: ["0px", "0px", "30px"],
				mx: "auto",
				marginBottom: "5vh",
				height: "87vh",
				overflowY: "scroll",
				overflowX: "hidden"
			}}
		>
			<Story story={story} />
			<Divider
				sx={{
					bgcolor: "#1D5352",
					ml: [2, 2, 0]
				}}
			/>
			<Comments storyId={story?._id} comments={comments} setComments={setComments} />
		</Box>
	);
};

StoryPageMain.propTypes = {
	story: PropTypes.any
};
