import { Avatar, Box, Button, Divider, IconButton, Typography } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import { Close, Done, PersonAdd } from "@mui/icons-material";
import { useState } from "react";
import { useSnackbar } from "notistack";
import { getEngineer } from "@cookies";
import { useContext } from "react";
import { ProfileContext } from "@context/profile";
export default function SingleList({ data }) {
	const engineer = getEngineer();
	const [follower, setFollower] = useState(data?.followers?.includes(engineer?._id));

	const profileContext = useContext(ProfileContext);
	const {
		handleUnfollow
	} = profileContext;

	const handleFollow = () => {
		setFollower(!follower);
		handleUnfollow({ data: data });
	};

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				gap: "10px"
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
						gap: "10px",
						justifyContent: "center",
						alignItems: "center"
					}}
				>
					<Avatar src={data?.avatar} />
					<Box
						sx={{
							display: "flex",
							flexDirection: "column"
						}}
					>
						<Typography>{data?.name}</Typography>
						<Typography
							sx={{
								fontSize: "12px",
								color: "grey"
							}}
						>
							{data?.username}
						</Typography>
					</Box>
				</Box>
				<Box
					sx={{
						display: "flex",
						gap: "10px"
					}}
				>
					<Button
						sx={{
							fontWeight: 500,
							fontSize: "13px",
							borderRadius: "20px",
							color: "#05D9D7",
							backgroundColor: !follower ? "transparent" : "#1D5352",
							px: "10px",
							display: "flex",
							gap: "10px",
							alignItems: "center",
							justifyContent: "center"
						}}
						onClick={handleFollow}
					>
						{follower ? (
							<Done
								sx={{
									fontSize: "15px"
								}}
							/>
						) : (
							<PersonAdd
								sx={{
									fontSize: "15px"
								}}
							/>
						)}
						{follower ? "Following" : "Follow"}
					</Button>
				</Box>
			</Box>
		</Box>
	);
}

SingleList.propTypes = {
	data: PropTypes.any
};
