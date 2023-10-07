import { ProfileContext } from "@context/profile";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import { useContext } from "react";
import SingleList from "./SingleList";

export const Followings = () => {
	const profileContext = useContext(ProfileContext);
	const { followings, modalTab } = profileContext;

	return (
		<Box
			sx={{
				mt: "20px",
				flexDirection: "column",
				gap: "20px",
				px: "10px",
				display: modalTab === "Followings" ? "flex" : "none",
				height: "90%",
				overflowY: "scroll"
			}}
		>
			{followings?.map((data) => (
				<SingleList data={data} key={data._id} />
			))}

			<Box
				sx={{
					justifyContent: "center",
					alignItems: "center",
					height: "100%",
					display: followings?.length === 0 ? "flex" : "none"
				}}
			>
				<Typography
					sx={{
						color: "#1D5352",
						fontSize: "16px"
					}}
				>
					You are not following anyone!
				</Typography>
			</Box>
		</Box>
	);
};
