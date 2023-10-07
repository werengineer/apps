import { ProfileContext } from "@context/profile";
import { Box, Button } from "@mui/material";
import React from "react";
import { useContext } from "react";

export const Tab = () => {
	const profileContext = useContext(ProfileContext);
	const { modalTab, setModalSelection } = profileContext;

	return (
		<Box
			sx={{
				width: "100%",
				display: "flex",
			}}
		>
			<Button
				sx={{
					flex: 1,
					borderBottom:
						modalTab === "Followers" ? "1px solid #05D9D7" : "1px solid transparent"
				}}
				onClick={() => setModalSelection({ tab: "Followers" })}
			>
				Followers
			</Button>
			<Button
				sx={{
					flex: 1,
					borderBottom:
						modalTab === "Followings" ? "1px solid #05D9D7" : "1px solid transparent"
				}}
				onClick={() => setModalSelection({ tab: "Followings" })}
			>
				Followings
			</Button>
		</Box>
	);
};
