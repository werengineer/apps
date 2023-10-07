import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import { AddComment } from "./AddComment";
import { Comment } from "./Comment";
import { PropTypes } from "prop-types";

export const Comments = ({ comments, storyId, setComments }) => {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				gap: "2vh"
			}}
		>
			<AddComment storyId={storyId} setComments={setComments} comments={comments} />
			<Divider
				sx={{
					backgroundColor: "#1D5352",
					ml: [2, 2, 0],
					mt: [2, 2, 4]
				}}
			/>
			<Typography
				sx={{
					px: [2.5, 2.5, "0"],
					mt: 1
				}}
			>
				{comments?.length} Comments
			</Typography>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					gap: "5vh",
					mt: 2,
					px: [2.5, 2.5, "0"]
				}}
			>
				{comments?.map((a, i) => (
					<Comment  storyId={storyId} key={i} id={a} />
				))}
			</Box>
		</Box>
	);
};
Comments.propTypes = {
	comments: PropTypes.any,
	storyId: PropTypes.any,
	setComments: PropTypes.any
};
