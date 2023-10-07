import { Avatar, Box, Button, Divider, Typography } from "@mui/material";
import React from "react";
import { getEngineer } from "../../../../../../utils/getUserInfo";
import axios from "axios";
import { useSnackbar } from "notistack";
import { useState } from "react";
import { useEffect } from "react";
import PropTypes from "prop-types";
import { API_URL } from "@constants";

const SingleList = ({ data, followings, setFollowings }) => {
	const { enqueueSnackbar } = useSnackbar();

	const [followed, setFollowed] = useState();
	const engineer = getEngineer();

	useEffect(() => {
		const getEngineer = async () => {
			try {
				const res = await axios.get(
					`${API_URL}/engineer/get?id=${engineer?._id}`
				);
				console.log(res.data);
				if (res.data.followings?.includes(data?._id)) {
					setFollowed(true);
				} else {
					setFollowed(false);
				}
			} catch (error) {
				console.log(error);
			}
		};
		getEngineer();
	}, []);

	const handleFollowClick = async () => {
		if (followed) {
			try {
				setFollowed(!followed);
				const res = await axios.put(
					`${API_URL}/engineer/follow?id=${data?._id}`,
					{},
					{
						headers: {
							EngineerID: engineer?._id
						}
					}
				);
				console.log(res);
				enqueueSnackbar("Unfollowed", { variant: "warning" });
				const newFollowings = followings?.filter((f) => f?._id !== data?._id);
				setFollowings(newFollowings);
			} catch (error) {
				setFollowed(followed);
				enqueueSnackbar(error?.response?.data?.message || "Some Error Occurred", {
					variant: "error"
				});
			}
		} else {
			try {
				setFollowed(!followed);
				const res = await axios.put(
					`${API_URL}/engineer/follow?id=${data?._id}`,
					{},
					{
						headers: {
							EngineerID: engineer?._id
						}
					}
				);
				const res1 = await axios.get(
					`${API_URL}/engineer/get?id=${data?._id}`
				);

				setFollowings([...followings, res1.data]);
				enqueueSnackbar(`Followed ${data?.name}`, { variant: "success" });
			} catch (error) {
				setFollowed(!followed);
				enqueueSnackbar(error?.response?.data?.message || "Some Error Occurred", {
					variant: "error"
				});
			}
		}
	};

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				gap: "2vh"
			}}
		>
			<Box
				sx={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-between"
				}}
			>
				<Box
					sx={{
						display: "flex",
						gap: "1vw"
					}}
				>
					<Avatar
						sx={{
							width: "50px",
							height: "50px"
						}}
						src={data?.avatar}
					/>
					<Box>
						<Typography
							sx={{
								fontSize: "18px"
							}}
						>
							{data?.name}
						</Typography>
						<Typography
							sx={{
								fontSize: "13px"
							}}
						>
							{data?.username}
						</Typography>
					</Box>
				</Box>

				<Box>
					<Button
						sx={{
							backgroundColor: followed === true ? "white" : "transparent",
							color: followed === true ? "#212121" : "white",
							border: "1px solid white",
							paddingX: "20px",
							borderRadius: "30px",
							":hover": {
								backgroundColor: followed === true ? "white" : "transparent",
								color: followed === true ? "#212121" : "white"
							}
						}}
						onClick={handleFollowClick}
					>
						{followed ? "Following" : "Follow"}
					</Button>
				</Box>
			</Box>
			<Divider
				sx={{
					backgroundColor: "#1D5352"
				}}
			/>
		</Box>
	);
};
const Followers = ({ followers, setFollowers, followings, setFollowings }) => {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				gap: "3vh",
				overflowY: "scroll",
				height: "55vh"
			}}
		>
			{followers.length !== 0 &&
				followers.map((f, i) => (
					<SingleList key={i} data={f} followings={followings} setFollowings={setFollowings} />
				))}
			{followers.length === 0 && (
				<Box
					sx={{
						width: "100%",
						height: "48vh",
						display: "flex",
						justifyContent: "center",
						alignItems: "center"
					}}
				>
					<Typography
						sx={{
							color: "#1D5352"
						}}
					>
						You are not following anyone yet
					</Typography>
				</Box>
			)}
		</Box>
	);
};

export default Followers;

SingleList.propTypes = {
	data: PropTypes.any,
	followings: PropTypes.any,
	setFollowings: PropTypes.any
};

Followers.propTypes = {
	followers: PropTypes.any,
	setFollowers: PropTypes.any,
	followings: PropTypes.any,
	setFollowings: PropTypes.any
};
