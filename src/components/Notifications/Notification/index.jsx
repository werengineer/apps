import { Avatar, Box, Typography } from "@mui/material";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

export const AnswerNotification = ({ title, body, date, n }) => {
	const [link, setLink] = useState("");

	useEffect(() => {
		setLink(`/${n.type}/${n.notifyPost.id}`);
	}, [n]);

	const redirectToPost = () => {
		window.open(`https://weareengineer.com${link}`, "__blank");
	};
	return (
		<Box
			onClick={redirectToPost}
			display={"flex"}
			flexDirection={"column"}
			border={"1px solid #1D5352"}
			borderRadius={"10px"}
			width={["100%"]}
			justifyContent={"space-between"}
			gap={"1vh"}
			sx={{
				paddingX: "1.2vw",
				paddingY: "2vh",
				boxShadow: "3px 3px 15px 3px rgba(0,0,0,0.2)",
				zIndex: 9999,
				background:
					"linear-gradient(21fgd0deg, rgba(39, 39, 39, 1) 0%, rgba(39, 39, 39, 1) 0.01%, rgba(39, 39, 39, 1) 100%)",
				cursor: "pointer"
			}}
		>
			<Box display={"flex"} alignItems={"flex-start"} gap={"1.5vw"}>
				<Box display={"flex"} flexDirection={"column"} p={1} gap={"5px"}>
					<Typography fontSize={"20px"} fontWeight={600}>
						{title}
					</Typography>
					<Typography width={"85%"}>{body}</Typography>
				</Box>
			</Box>
			<Box
				display={"flex"}
				justifyContent={"flex-end"}
				sx={{
					paddingLeft: "4vw"
				}}
			>
				<Typography color={"grey"} fontSize={"13px"} mr={2}>
					{date}
				</Typography>
			</Box>
		</Box>
	);
};

AnswerNotification.propTypes = {
	title: PropTypes.any,
	body: PropTypes.any,
	date: PropTypes.any,
	n: PropTypes.any
};

export const LikeNotification = ({ title, date, n }) => {
	const titleArray = n.notifyPost.title.split(" ");
	const urlType = titleArray.includes("question!") ? "questions" : "stories";
	const [link, setLink] = useState("");

	useEffect(() => {
		setLink(`/${urlType}/${n.notifyPost.id}`);
	}, [n]);

	const redirectToPost = () => {
		window.open(`https://weareengineer.com${link}`, "__blank");
	};
	return (
		<Box
			onClick={redirectToPost}
			width={["100%"]}
			border={"1px solid #1D5352"}
			borderRadius={"10px"}
			display={"flex"}
			justifyContent={"space-between"}
			sx={{
				paddingX: "1.2vw",
				paddingY: "2vh",
				boxShadow: "3px 3px 15px 3px rgba(0,0,0,0.2)",
				cursor: "pointer"
			}}
		>
			<Box display={"flex"} gap={"1.5vw"} p={1} alignItems={"center"}>
				<Typography fontSize={"20px"}>{title}</Typography>
			</Box>
			<Box display={"flex"} flexDirection={"column"}>
				<Box flexGrow={1}></Box>
				<Typography color={"grey"} fontSize={"12px"} mr={2}>
					{date}
				</Typography>
			</Box>
		</Box>
	);
};

LikeNotification.propTypes = {
	title: PropTypes.any,
	n: PropTypes.any,
	date: PropTypes.any
};
