import { Attachment, Delete } from "@mui/icons-material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Masonry } from "@mui/lab";
import { Avatar, Box, Button, IconButton, Typography } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { format } from "timeago.js";
import { getEngineer } from "@cookies";
import { PropTypes } from "prop-types";
import { API_URL, NEXT_PUBLIC_WEBSITE_URL } from "@constants";
import { FullScreenModal } from "@components/Global/Modals/ViewImageModal";
import { useSetRecoilState } from "recoil";
import { loginModalState } from "@atom";
import { deleteComment } from "@api/comment";
import { useSnackbar } from "notistack";
import { useRouter } from "next/navigation";

export const Comment = ({storyId,  id, main }) => {
	const [data, setData] = useState();
	const [commentBy, setCommentBy] = useState();
	const engineer = getEngineer();
	const [upvoted, setUpvoted] = useState(false);
	const [upvoteCounter, setUpvoteCounter] = useState();
	const [visible, setVisible] = useState(false);
	const [open, setOpen] = useState(false);
	const [imageUrl, setImageUrl] = useState("");
	const { enqueueSnackbar } = useSnackbar();
	const setLoginModal = useSetRecoilState(loginModalState);
	const router = useRouter();
	useEffect(() => {
		const fetchComment = async () => {
			try {
				if (!data) {
					const res = await axios.get(`${API_URL}/comments/get/${id}`);
					setData(res.data);
					setUpvoteCounter(res?.data?.upvotes?.length);
					setUpvoted(res.data?.upvotes?.includes(engineer?._id) ? true : false);
				}
			} catch (error) {
				console.log("comment", error);
			}
		};
		fetchComment();
		const fetchData = async () => {
			try {
				if (!commentBy) {
					const commentBy = await axios.get(`${API_URL}/engineer/get?id=${data.engineer}`);
					setCommentBy(commentBy?.data);
				}
			} catch (error) {
				console.log("engineer", error);
			}
		};
		fetchData();
	}, [id, data]);

	useEffect(() => {
		const comment = document.getElementById(`comment-${id}`);
		comment.innerHTML = data?.comment;

		console.log(data?.files);

		for (let i = 0; i < data?.files.length; i++) {
			console.log(data?.files[i].link);
			if (data?.files[i]?.link.slice(-3) === "pdf") {
				setVisible(true);
				break;
			}
		}
	}, [data]);

	const handleUpvote = async () => {
		if (!engineer) {
			setLoginModal(true);
			return;
		}
		setUpvoted(!upvoted);
		upvoted === false ? setUpvoteCounter(upvoteCounter + 1) : setUpvoteCounter(upvoteCounter - 1);
		try {
			await axios.put(
				`${API_URL}/comments/upvote/${data?._id}`,
				{},
				{ headers: { EngineerID: `${engineer?._id}` } }
			);
			// setUpvoted(!upvoted)
			// upvoted === false ? setUpvoteCounter(upvoteCounter + 1) : setUpvoteCounter(upvoteCounter - 1);
		} catch (error) {
			console.log(error);
			setUpvoted(!!upvoted);
			upvoted === false
				? setUpvoteCounter(upvoteCounter - 1)
				: setUpvoteCounter(upvoteCounter + 1);
		}
	};

	console.log(commentBy);

	return (
		<Box
			id={`${data?._id}`}
			sx={{
				display: "flex",
				flexDirection: "column",
				gap: "2vh",
				borderLeft: main ? "2px solid #05D9D7" : "0px",
				paddingLeft: main ? "20px" : "0px",
				paddingY: "10px",
				background:
					main && "linear-gradient(137.67deg, rgba(29, 83, 82, 0) 41.25%, #1D5352 98.2%)",
				width: ["90vw", "90vw", "65vw"]
			}}
		>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					pr: "10px"
				}}
			>
				<Box
					sx={{
						display: "flex",
						gap: 2,
						alignItems: "center"
					}}
				>
					<Link href={`/profile/${commentBy?._id}}`}>
						<Avatar
							src={commentBy?.avatar}
							sx={{
								width: ["35px", "40px", "40px"],
								height: ["35px", "40px", "40px"]
							}}
						/>
					</Link>
					<Link href={`/profile/${commentBy?._id}}`}>
						<Typography
							sx={{
								fontSize: ["13px", "13px", "16px"]
							}}
						>
							{commentBy?.name}
						</Typography>
					</Link>
					<Typography
						sx={{
							color: "grey",
							fontSize: ["10px", "10px", "12px"],
							ml: "5px"
						}}
					>
						{format(data?.createdAt)}
					</Typography>
				</Box>
				<Box
					sx={{
						display: commentBy?._id === engineer?._id ? "flex" : "none"
					}}
				>
					<IconButton
						onClick={async () => {
							await deleteComment({
								storyID: storyId,
								commentID: id,
								engineerID: engineer?._id,
								enqueueSnackbar
							});
							router.refresh();
						}}
						sx={{
							color: "darkred"
						}}
					>
						<Delete />
					</IconButton>
				</Box>
			</Box>

			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					gap: ["0.5vh", 1, "2vh"]
				}}
			>
				<Typography id={`comment-${id}`} fontSize={["12px", "14px", "16px"]}></Typography>
				<Box
					sx={{
						width: "100%",
						display: "flex",
						flexDirection: "column",
						gap: "2vh"
					}}
				>
					<Masonry columns={[1, 2]} spacing={3} sx={{}}>
						{data?.files?.map(
							(f, i) =>
								f.name.slice(-3) !== "pdf" && (
									<Box
										sx={{
											width: ["300px", "400px", "450px"],
											height: ["300px", "400px", "450px"],
											position: "relative"
										}}
										key={i}
										onClick={() => {
											setOpen(true);
											setImageUrl(f.link);
										}}
									>
										<Image
											style={{
												borderRadius: "10px",
												backgroundColor: "#3C3B41",
												padding: "10px",
												objectFit: "cover",
												cursor: "poiner"
											}}
											fill
											alt={f.name}
											src={f.link}
										/>
									</Box>
								)
						)}
					</Masonry>
					<Box
						sx={{
							display: visible ? "flex" : "none",
							flexDirection: "column",
							gap: "1vh"
						}}
					>
						<Typography
							sx={{
								fontSize: ["13px", "13px", "20px"],
								display: "flex",
								alignItems: "center",
								gap: "1vw",
								color: "grey"
							}}
						>
							Other Attachments
							<Attachment
								sx={{
									width: ["18px", "20px", "25px"],
									height: ["18px", "20px", "25px"]
								}}
							/>
						</Typography>
						{data?.files?.map(
							(f, i) =>
								f.name.slice(-3) === "pdf" && (
									<Typography
										sx={{
											color: "grey",
											pl: 2,
											fontSize: ["14px", "14px", "23px"]
										}}
										key={i}
									>
										{f.name}
									</Typography>
								)
						)}
					</Box>
				</Box>
				<Box
					sx={{
						display: "flex",
						gap: "0.8vw",
						alignItems: "center"
					}}
				>
					<Button
						sx={{
							color: upvoted ? "#05D9D7" : "grey",
							borderRadius: "20px"
						}}
						onClick={handleUpvote}
					>
						<KeyboardArrowUpIcon
							sx={{
								fontSize: "18px",
								mr: 2
							}}
						/>
						<Typography
							sx={{
								fontSize: "14px",
								mt: 0.3
							}}
						>
							{upvoteCounter}
						</Typography>
					</Button>
				</Box>
			</Box>
			<FullScreenModal open={open} setOpen={setOpen} imageUrl={imageUrl} />
		</Box>
	);
};

Comment.propTypes = {
	storyId: PropTypes.any,
	id: PropTypes.any,
	main: PropTypes.any
};
