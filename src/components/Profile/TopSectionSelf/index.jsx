import { ProfileContext } from "@context/profile";
import { getEngineer } from "@cookies";
// import { Button } from "@mui/base";
import { ModeEdit } from "@mui/icons-material";
import { Avatar, Box, CircularProgress, Typography, Button } from "@mui/material";
import Image from "next/image";
import React, { useContext, useState } from "react";

export const TopSectionSelf = () => {
	const engineer = getEngineer();
	const [loading, setLoading] = useState(false);

	const profileContext = useContext(ProfileContext);
	const { self, avatar, profile, changeProfilePicture, profileLoader, toggleFollowModal } =
		profileContext;

	return (
		<Box
			sx={{
				// backgroundColor: 'red'
				width: "100%",
				// display: "flex",
				height: ["60vh", "60vh"],
				overflowY: "hidden"
			}}
		>
			<Box
				sx={{
					position: "relative",
					width: "100%",
					height: "30vh"
				}}
			>
				<Image
					src={"/images/Layer1.svg"}
					alt="layer1"
					fill
					style={{
						objectFit: "cover",
						objectPosition: "top center",
						zIndex: -1
					}}
					priority
				/>
			</Box>

			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					mt: "-60px",
					gap: "15px"
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
						alt="myImage"
						sx={{
							width: "120px",
							height: "120px",
							opacity: profileLoader ? 0.5 : 1,
							border: "2px solid #05D9D7",
							":hover": {}
						}}
					/>

					<label
						style={{
							position: "absolute",
							top: "0%",
							right: "5%",
							zIndex: 999,
							backgroundColor: "black",
							borderRadius: "30px",
							display: profileLoader ? "none" : "flex",
							justifyContent: "center",
							alignItems: "center",
							padding: "2px",
							width: "30px",
							height: "30px",
							cursor: "pointer",
							border: "3.5px solid #05D9D7"
						}}
						htmlFor="profilePic"
					>
						<ModeEdit
							sx={{
								color: "#05D9D7",
								fontSize: "16px"
							}}
						/>
					</label>

					<input
						id="profilePic"
						type="file"
						style={{ display: "none" }}
						onChange={changeProfilePicture}
						accept=".png, .jpeg, .jpg"
					/>
				</Box>

				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
						gap: "10px"
					}}
				>
					<Typography
						sx={{
							fontSize: "20px"
						}}
					>
						{profile?.name}
					</Typography>
					<Typography>{profile?.email}</Typography>
					<Box
						sx={{
							display: "flex",
							gap: "10px"
						}}
					>
						<Button
							sx={{
								fontSize: "13px",
								fontWeight: 400,
								color: "#05D9D7",
								borderRadius: "30px"
							}}
							onClick={() => toggleFollowModal({ tab: "Followers" })}
						>
							{profile?.followers?.length}{" "}
							{profile?.followers?.length === 1 ? "Follower" : "Followers"}
						</Button>

						<Button
							sx={{
								fontSize: "13px",
								fontWeight: 400,
								color: "#05D9D7",
								borderRadius: "30px"
							}}
							onClick={() => toggleFollowModal({ tab: "Followings" })}
						>
							{profile?.followings?.length}{" "}
							{profile?.followings?.length === 1 ? "Following" : "Followings"}
						</Button>

						{/* <Typography
							sx={{
								fontSize: "13px",
								color: "#05D9D7"
							}}
						>
							{profile?.followers?.length} {profile?.followers?.length === 1 ? "Follower" : "Followers"}
						</Typography>

						<Typography
							sx={{
								fontSize: "13px",
								color: "#05D9D7"
							}}
						>
							{profile?.followings?.length} {profile?.followings?.length === 1 ? "Following" : "Followings"}
						</Typography> */}
					</Box>
				</Box>
			</Box>
		</Box>
	);
};
