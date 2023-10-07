import { ProfileContext } from "@context/profile";
import { Box, Modal } from "@mui/material";
import React from "react";
import { useContext } from "react";
import { Tab } from "./Tab";
import { Followers } from "./Followers";
import { Followings } from "./Followings";

export const FollowerModal = () => {
	const profileContext = useContext(ProfileContext);
	const { open, modalSelection, toggleFollowModal } = profileContext;

	return (
		<Modal
			open={open}
			sx={{
				width: "100%",
				height: "100%",
				backgroundColor: "rgba(0, 0, 0, 0.5)",
				display: "flex",
				justifyContent: "center",
				alignItems: "center"
			}}
			onClose={() => toggleFollowModal({ tab: "Follower" })}
		>
			<Box
				sx={{
					width: ["90%", "70%", "50%"],
					height: ["85%", "80%"],
					backgroundColor: "#212121",
					borderRadius: "20px",
					p: "10px",
					border: "1px solid #05D9D7"
				}}
			>
				<Tab />
				<Followers />
				<Followings />
			</Box>
		</Modal>
	);
};
