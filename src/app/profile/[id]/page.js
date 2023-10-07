"use client";

import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import ProfileState from "@context/profile";
import { ProfileMain } from "@components/Profile";

const ProfilePage = ({ params }) => {

	console.log(params);

	return (
		<>
			<Box
				display={"flex"}
				sx={{
					mt: 8,
					ml: ["auto", 8],
					maxWidth: "100vw",
					display: "flex",
					overflowY: "hidden"
				}}
			>
				<Box
					sx={{
						width: ["100%", "100%", "75%"],
						pl: [0, 0, 0],
						pr: [0, 0, 0]
					}}
				>
					<ProfileState
						id={params?.id}
					>
						<ProfileMain />
					</ProfileState>
				</Box>
			</Box>
		</>
	);
};

export default ProfilePage;

ProfilePage.propTypes = {
	params: PropTypes.any
};
