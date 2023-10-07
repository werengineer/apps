"use client";
import ProfileState from "@context/profile";
import Box from "@mui/material/Box";
import React from "react";
import PropTypes from "prop-types";
import { ProfileMain } from "@components/Profile";
import { AchievementState } from "@context/achievements";

export default function Profile() {
	return (
		<>
			<Box
				display={"flex"}
				sx={{
					mt: [7, 8],
					ml: ["auto", 8],
					maxWidth: "100vw",
					display: "flex",
					overflowY: "hidden",
					overflowX: "hidden"
				}}
			>
				<Box
					sx={{
						width: ["100%", "100%", "75.5%"]
					}}
				>
					<AchievementState>
						<ProfileState>
							<ProfileMain />
						</ProfileState>
					</AchievementState>
				</Box>
			</Box>
		</>
	);
}

Profile.propTypes = {
	params: PropTypes.any
};
