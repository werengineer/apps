import { InterestsInput } from "@components/Global";
import { getEngineer } from "@cookies";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";


export const YourInterest = () => {
	const engineer = getEngineer();
	return (
		<Box
			display={"flex"}
			justifyContent={"space-between"}
			border="2px solid rgba(29, 83, 82, 1)"
			borderRadius="12px"
			width={["100%", "97%"]}
			padding={"20px"}
			flexDirection="column"
			height="100%"
			boxShadow={"0px 4px 15px rgba(0, 0, 0, 0.25)"}
			gap={"30px"}
		>
			<Typography fontSize={"20px"}>Your Interests</Typography>
			<InterestsInput name="interests" defaultValue={engineer.interests} />
		</Box>
	);
};
