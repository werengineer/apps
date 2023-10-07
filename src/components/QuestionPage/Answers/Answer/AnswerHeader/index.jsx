"use client";
import { Avatar, Box, IconButton, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import { format } from "timeago.js";
import { PropTypes } from "prop-types";
import { NEXT_PUBLIC_WEBSITE_URL } from "@constants";
import { Delete } from "@mui/icons-material";
import { getEngineer } from "@cookies";
import { useSnackbar } from "notistack";
import { deleteAnswer } from "@api/answers";
import { useRouter } from "next/navigation";

export function AnswerHeader({ questionId, answeredBy, data }) {

	const engineer = getEngineer();
	const { enqueueSnackbar } = useSnackbar();
	const router = useRouter();

	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				pr: "10px"
			}}
		>
			<Box
				sx={{
					display: "flex",
					gap: "10px",
					alignItems: "center"
				}}
			>
				<Link href={`${NEXT_PUBLIC_WEBSITE_URL}/profile/${answeredBy?._id}`}>
					<Avatar
						src={answeredBy?.avatar}
						sx={{
							width: ["35px", "40px", "40px"],
							height: ["35px", "40px", "40px"]
						}}
					/>
				</Link>
				<Link href={`${NEXT_PUBLIC_WEBSITE_URL}/profile/${answeredBy?._id}`}>
					<Typography
						sx={{
							fontSize: ["13px", "13px", "16px"]
						}}
					>
						{answeredBy?.name}
					</Typography>
				</Link>
				<Typography
					sx={{
						color: "grey",
						fontSize: ["10px", "10px", "12px"]
					}}
				>
					{format(data?.createdAt)}
				</Typography>
			</Box>
			<Box
				sx={{
					display: answeredBy?._id === engineer?._id ? "flex" : "none",
				}}
			>
				<IconButton
					onClick={async() => {await deleteAnswer({questionId: questionId, answerID: data?._id, engineerID: engineer?._id, enqueueSnackbar: enqueueSnackbar, router: router}); router.refresh();}}
					sx={{
						color: "darkred"
					}}
				>
				<Delete />
				</IconButton>
			</Box>
		</Box>
	);
}

AnswerHeader.propTypes = {
	questionId: PropTypes.any,
	answeredBy: PropTypes.any,
	data: PropTypes.any
};
