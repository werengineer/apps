import { Avatar, Box, Button, Card, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import { Done } from "@mui/icons-material";
import { useRecoilState } from "recoil";
import { loginModalState } from "@atom";
import { useSnackbar } from "notistack";
import { getEngineer } from "@cookies";
import { completeAchievement } from "@api/achievement";
import { achievementID, werID } from "@lib/achievementID";
import { follow } from "@api";

export const EngineerProfile = ({ profile }) => {
	const [loginModal, setLoginModal] = useRecoilState(loginModalState);
	const { enqueueSnackbar } = useSnackbar();
	const engineer = getEngineer();
	const [followed, setFollowed] = useState(profile?.followers?.includes(engineer?._id));
	const [self, setSelf] = useState(engineer._id === profile._id);

	const handleFollow = async () => {
		if (!engineer) {
			setLoginModal(true);
			return;
		}
		try {
			if (followed) {
				enqueueSnackbar(`Unfollowed ${profile.username}`, { variant: "warning" });
				follow({ profileId: profile?._id, engineerID: engineer?._id });
			} else {
				enqueueSnackbar(`Followed ${profile?.username}`, { variant: "success" });
				if (profile?._id === werID) {
					completeAchievement({
						id: achievementID.followWAE,
						enqueueSnackbar: enqueueSnackbar
					}).catch((error) =>
						enqueueSnackbar(error.message || "Server error", { variant: "error" })
					);
				}
			}
			setFollowed(!followed);
			follow({ profileId: profile?._id, engineerID: engineer?._id });
		} catch (error) {
			//Throw error
			enqueueSnackbar(error?.response?.data?.message || "Some Error Occured", {
				variant: "error"
			});
		}
	};
	return (
		<>
			<Card
				sx={{
					display: "flex",
					flexDirection: ["column", "row"],
					minWidth: "90%",
					maxWidth: "90%",
					justifyContent: "space-between",
					height: "auto",
					backgroundColor: "",
					boxShadow: "0px 4px 19px rgba(80, 217, 215, 0.25)",
					backdropFilter: "blur(20px)",
					background:
						"linear-gradient(180deg, rgba(39, 39, 39, 0.94) 0%, rgba(39, 39, 39, 0.83) 0.01%, rgba(39, 39, 39, 0.08) 100%)",
					border: "1px solid #05D9D7",
					borderRadius: 3,
					padding: 3,
					gap: "10px"
				}}
				// onClick={() => openCluster({ path: `/clusters/${data?._id}` })}
			>
				<Stack
					onClick={() => window.open(`https://weareengineer.com/profile/${profile._id}`)}
					flexDirection={"row"}
					sx={{
						cursor: "pointer"
					}}
					gap={2}
				>
					<Avatar
						src={profile.avatar}
						sx={{
							width: ["40px", "60px"],
							height: ["40px", "60px"],
							border: "2px solid #1D5352"
						}}
					/>
					<Stack>
						<Typography fontSize={["18px", "25px"]}>{profile.name}</Typography>
						<Typography>@{profile.username}</Typography>
					</Stack>
					<Stack
						display={["flex", "none"]}
						flexDirection={"row"}
						alignItems={"center"}
						justifyContent={"space-between"}
						minWidth={50}
					>
						<Image width={25} height={25} alt={"coin img"} src={"/icons/Tools.svg"} />
						<Typography fontSize={"13px"} color={"grey"}>
							{profile.coins}
						</Typography>
					</Stack>
				</Stack>
				<Box
					display={"flex"}
					flexDirection={"column"}
					alignSelf={"start"}
					alignItems={"center"}
					gap={"2vw"}
				>
					<Stack
						display={["none", "flex"]}
						flexDirection={"row"}
						alignItems={"center"}
						justifyContent={"space-between"}
						minWidth={50}
					>
						<Image width={25} height={25} alt={"coin img"} src={"/icons/Tools.svg"} />
						<Typography fontSize={"13px"} color={"grey"}>
							{profile.coins}
						</Typography>
					</Stack>
					<Box>
						<Button
							sx={{
								display: followed || self ? "none" : "flex",
								// display: 'flex',
								justifyContent: "center",
								alignItems: "center",
								gap: "4px",
								px: "10px",
								backgroundColor: "white",
								color: "#212121",
								borderRadius: "20px",
								py: "5px",
								fontWeight: 400,
								":hover": {
									backgroundColor: "white",
									color: "#212121"
								}
							}}
							onClick={handleFollow}
						>
							Follow
						</Button>
						<Button
							sx={{
								display: !followed ? "none" : "flex",
								// display: 'flex',
								justifyContent: "center",
								alignItems: "center",
								gap: "4px",
								px: "10px",
								backgroundColor: "white",
								color: "#212121",
								borderRadius: "20px",
								py: "5px",
								fontWeight: 400,
								":hover": {
									backgroundColor: "white",
									color: "#212121"
								}
							}}
							onClick={handleFollow}
						>
							<Done />
							Following
						</Button>
					</Box>
				</Box>
			</Card>
		</>
	);
};

EngineerProfile.propTypes = {
	profile: PropTypes.any,
	nam: PropTypes.any,
	username: PropTypes.any,
	coins: PropTypes.any,
	id: PropTypes.any
};
