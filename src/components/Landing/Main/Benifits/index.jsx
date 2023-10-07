import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { BenifitsTimeline } from "./Timeline";
import React from "react";

export const Benifits = () => {
	return (
		<Box
			id={"benifits"}
			width={"100vw"}
			display={"flex"}
			flexDirection={"column"}
			justifyContent={"center"}
			alignItems={"center"}
			gap={"8vh"}
			marginY={"10vh"}
		>
			<Typography fontSize={"40px"} color={"#05D9D7"}>
				What You Get?
			</Typography>
			<BenifitsTimeline />
		</Box>
	);
};
