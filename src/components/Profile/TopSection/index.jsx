import { ProfileContext } from "@context/profile";
import { getEngineer } from "@cookies";
// import { Button } from "@mui/base";
import { Done, ModeEdit, MoreVert, NotificationAdd } from "@mui/icons-material";
import { Avatar, Box, CircularProgress, Typography, Button, IconButton } from "@mui/material";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";

export const TopSection = () => {
	const engineer = getEngineer();
	const profileContext = useContext(ProfileContext);
	const { profile, profileLoader, handleFollow, followed } = profileContext;
	// const [followed, setFollowed] = useState(false);

	useEffect(() => {
		// setFollowed(profile?.followers?.includes(engineer?._id))
	}, []);

	return (
		<Box
			sx={{
				// backgroundColor: 'red'
				width: "100%",
				// display: "flex",
				height: ["45vh", "55vh"],
				overflowY: "hidden"
			}}
		>
			<Box
				sx={{
					position: "relative",
					width: "100%",
					height: ["20vh", "30vh"]
				}}
			>
				<Image
					src={"/images/Layer1.svg"}
					fill
					style={{
						objectFit: "cover",
						objectPosition: "top center",
						zIndex: -1
					}}
				/>
			</Box>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					pl: "20px",
					pr: "20px",
					mt: ["-30px", "-60px"]
				}}
			>
				<Box
					sx={{
						display: "flex",
						flexDirection: ["column"],
						// justifyContent: "space-between",
						alignItems: ["flex-start", "center"],
						gap: "20px"
					}}
				>
					<Box
						sx={{
							position: "relative",
							backgroundColor: "#212121",
							borderRadius: "50%"
							// ":hover": {
							//   opacity: 0.8
							// }
						}}
					>
						<CircularProgress
							sx={{
								position: "absolute",
								zIndex: 999,
								top: "30%",
								left: "35%",
								color: "#1D5352",
								display: profileLoader ? "flex" : "none"
							}}
						/>
						<Avatar
							src={profile?.avatar}
							sx={{
								width: ["60px", "120px"],
								height: ["60px", "120px"],
								opacity: profileLoader ? 0.5 : 1,
								border: "4px solid #1D5352",
								":hover": {}
							}}
						/>
					</Box>

					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							// justifyContent: "flex-start",
							justifyContent: "start",
							alignItems: "flex-start",
							gap: "5px"
							// gap: ["5px", "10px"]
						}}
					>
						<Typography
							sx={{
								fontSize: "20px"
							}}
						>
							{profile?.name}
						</Typography>
						<Typography
							sx={{
								color: "#1D5352",
								fontSize: "14px"
							}}
						>
							@{profile?.username}
						</Typography>
						<Box
							sx={{
								display: "flex",
								gap: "10px"
							}}
						>
							{/* <Button
							sx={{
								fontSize: "13px",
								fontWeight: 400,
								color: "#05D9D7",
								borderRadius: "30px"
							}}
							onClick={() => toggleFollowModal({tab: 'Followers'})}
						>
							{profile?.followers?.length} {profile?.followers?.length === 1 ? "Follower" : "Followers"}
						</Button>

						<Button
							sx={{
								fontSize: "13px",
								fontWeight: 400,
								color: "#05D9D7",
								borderRadius: "30px"
							}}
							onClick={() => toggleFollowModal({tab: 'Followings'})}
						>
							{profile?.followings?.length} {profile?.followings?.length === 1 ? "Following" : "Followings"}
						</Button> */}

							<Typography
								sx={{
									fontSize: "13px",
									color: "#05D9D7"
								}}
							>
								{profile?.followers?.length}{" "}
								{profile?.followers?.length === 1 ? "Follower" : "Followers"}
							</Typography>
						</Box>
					</Box>
				</Box>
				<Box
					sx={{
						display: "flex",
						flexDirection: ["column", "row"],
						alignItems: "flex-end",
						gap: ["15px", "10px"]
					}}
				>
					<Box>
						<Button
							sx={{
								display: followed ? "none" : "flex",
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
							disabled={engineer.isEmailVerified && engineer.isMobileVerified ? false : true}
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
					<Box>
						<IconButton>
							<NotificationAdd />
						</IconButton>
						<IconButton>
							<MoreVert />
						</IconButton>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};
