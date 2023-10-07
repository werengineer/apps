"use client";
import { Avatar, Box, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import { format } from "timeago.js";
import { PropTypes } from "prop-types";

export const StoryHeader = ({ story, creator }) => {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "row",
				justifyContent: "space-between",
				alignItems: "center"
			}}
		>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					gap: ["10px", "10px", "15px"]
				}}
			>
				<Link href={`/profile/${creator?._id}`}>
					<Avatar src={creator?.avatar} />
				</Link>
				<Box
					sx={{
						display: "flex",
						flexDirection: ["row", "row", "column"],
						alignItems: ["center", "center", "flex-start"],
						gap: ["5px", "5px", "0"]
					}}
				>
					<Link href={`/profile/${creator?._id}`}>
						<Typography
							sx={{
								fontSize: "15px"
							}}
						>
							{creator?.name}
						</Typography>
					</Link>
					<Typography
						sx={{
							fontSize: "12px",
							color: "grey"
						}}
					>
						{format(story?.createdAt)}
					</Typography>
				</Box>
			</Box>
			<Box
				sx={{
					display: ["none", "none", "flex"],
					gap: "1vw",
					alignItems: "center"
				}}
			>
				{story?.tag !== null && story?.tag.map((d, i) => (
					<Typography
						sx={{
							color: "#05D9D7",
							fontSize: "14px",
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
		</Box>
	);
};

StoryHeader.propTypes = {
	story: PropTypes.any,
	creator: PropTypes.any
};
