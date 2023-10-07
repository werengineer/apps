import { Box, InputBase, Typography } from "@mui/material";
import React from "react";

const DeactivateAccount = () => {
	return (
		<Box
			marginX={["3%", "10px"]}
			display={"flex"}
			justifyContent={"space-between"}
			border="2px solid #D2434A"
			borderRadius="12px"
			width={["97%"]}
			padding={"20px"}
			flexDirection="column"
			gap={"2vh"}
			height="100%"
			boxShadow={"0px 4px 15px rgba(0, 0, 0, 0.25)"}
		>
			<Typography fontSize={"20px"} color={"#D2434A"}>
				Danger Zone
			</Typography>

			<Typography color={"#979797"} textAlign={"center"} fontSize={["13px", "14px", "16px"]}>
				Deactivating your account will erase all your saved preferences, bookmarks, and settings
			</Typography>
			<InputBase
				sx={{
					border: "1px solid #D2434A",
					borderRadius: "30px",
					width: ["100%", "80%", "45%"],
					py: "5px",
					px: ["20px"]
				}}
			/>
			<Typography
				sx={{
					display: "flex",
					flexDirection: ["column", "row"],
					textAlign: "center",
					gap: "3px",
					color: "#979797",
					mb: ["5vh", "10vh"],
					fontSize: ["13px", "16px"]
				}}
			>
				For deactivating your account reenter you user name{" "}
				<Typography color="#D2434A">@alexwalker345</Typography>
			</Typography>
		</Box>
	);
};

export default DeactivateAccount;
