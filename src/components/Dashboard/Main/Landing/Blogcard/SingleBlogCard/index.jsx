import { Avatar, Box, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import * as timeago from "timeago.js";
import PropTypes from "prop-types";

export const SingleBlogCard = ({ blog }) => {
	return (
		<Box display={"flex"} alignItems={"center"} gap={"20px"}>
			<Avatar
				sx={{
					fontSize: "12px",
					borderRadius: "5px",
					height: "50px",
					width: "50px"
				}}
				src={blog?.coverImage}
				alt={blog?.title}
			/>
			<Box>
				<Link href={`https://hashnode.com/post/${blog.slug}`} target="_blank">
					<Typography fontSize={14}>{blog.title}</Typography>
				</Link>
				<Typography color={"grey"} fontSize={"12px"} mt={"2.5px"}>
					{timeago.format(blog.dateAdded)}
				</Typography>
			</Box>
		</Box>
	);
};

SingleBlogCard.propTypes = {
	blog: PropTypes.any.isRequired
};
