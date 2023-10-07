import { ProfileContext } from "@context/profile";
import { Box, Button, Typography } from "@mui/material";
import React, { useContext } from "react";
import { Btn } from "./Btn";

export const TabButtons = () => {
	return (
		<Box
			display={"flex"}
			backgroundColor={"#212121"}
			width={"100%"}
			paddingY={2}
			justifyContent={"space-evenly"}
			alignItems={"flex-end"}
			mt={3}
			gap={"5vw"}
		>
			<Box>
				<Button
					sx={{
						borderBottom: "2px solid #05D9D7",
						p: 0,
						px: "12px",
						borderRadius: "0px",
						fontSize: ["13px", "15px", "18px"],
						color: "grey",
						borderTopLeftRadius: "10px",
						borderTopRightRadius: "10px",
						display: "flex"
					}}
				>
					About
				</Button>
			</Box>

			<Box>
				<Button
					sx={{
						borderBottom: "2px solid #05D9D7",
						p: 0,
						px: "12px",
						borderRadius: "0px",
						fontSize: ["13px", "15px", "18px"],
						color: "white",
						borderTopLeftRadius: "10px",
						borderTopRightRadius: "10px"
					}}
				>
					Posts
				</Button>
			</Box>

			<Box>
				<Button
					sx={{
						borderBottom: "2px solid #05D9D7",
						p: 0,
						px: "12px",
						borderRadius: "0px",
						fontSize: ["13px", "15px", "18px"],
						color: "grey",
						borderTopLeftRadius: "10px",
						borderTopRightRadius: "10px"
					}}
				>
					Alumni
				</Button>
			</Box>

			<Box>
				<Button
					sx={{
						borderBottom: "2px solid #05D9D7",
						p: 0,
						px: "12px",
						borderRadius: "0px",
						fontSize: ["13px", "15px", "18px"],
						color: "white",
						borderTopLeftRadius: "10px",
						borderTopRightRadius: "10px",
						display: "flex"
					}}
				>
					Clubs
				</Button>
			</Box>
		</Box>
	);
};
