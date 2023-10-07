import { Avatar, Box, Button, Divider, Typography } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { useSnackbar } from "notistack";
import { useEffect } from "react";
import { getEngineer } from "@cookies";
import PropTypes from "prop-types";
import { API_URL } from "@constants";

const SingleList = ({ data, followings, setFollowings }) => {
	console.log(data);
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
				if (res.data.followers?.includes(data?._id)) {
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

	const handleUnfollow = async () => {
		try {
			const res = await axios.put(
				`${API_URL}/engineer/follow?id=${data?._id}`,
				{},
				{
					headers: {
						EngineerID: engineer?._id
					}
				}
			);
			const newFollowings = followings.filter((f) => f._id !== data?._id);
			setFollowings(newFollowings);
			console.log(res);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				gap: "2vh"
			}}
		>
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
					{/* <Typography
                        sx={{
                            fontSize: '15px',
                            color: '#1D5352',
                            pr: '5vw',
                            width: '25vw'
                        }}
                    >
                        {data?.name} is {followed? 'also following' : 'not following'} you
                    </Typography> */}
					<Button
						sx={{
							border: "1px solid white",
							backgroundColor: "#212121",
							paddingX: "20px",
							borderRadius: "30px",
							":hover": {
								backgroundColor: "transparent"
							}
						}}
						onClick={handleUnfollow}
					>
						Unfollow
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
const Followings = ({ followings, setFollowings }) => {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				gap: "1vh"
			}}
		>
			{followings.length !== 0 &&
				followings.map((f, i) => (
					<SingleList key={i} data={f} followings={followings} setFollowings={setFollowings} />
				))}
			{followings.length === 0 && (
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

export default Followings;

SingleList.propTypes = {
	data: PropTypes.any,
	followings: PropTypes.any,
	setFollowings: PropTypes.any
};

Followings.propTypes = {
	followings: PropTypes.any,
	setFollowings: PropTypes.any
};
