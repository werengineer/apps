import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import React from "react";
import PropTypes from "prop-types";

export const TeamMembers = ({ info }) => {
	return (
		<Box
			display={"flex"}
			flexDirection={"column"}
			gap={"1vh"}
			alignItems={"center"}
			minHeight={["370px", "420px"]}
			maxHeight={["370px", "420px"]}
			width={["75vw", "34vw", "19vw"]}
			marginLeft={["8vw", "8vw"]}
			sx={{
				border: "1px solid #05D9D7",
				paddingTop: "6px",
				paddingX: "8.5px",
				paddingBottom: "20px",
				borderRadius: "4px"
			}}
		>
			<Image
				style={{ borderRadius: "4px", objectFit: "cover" }}
				width={250}
				height={250}
				src={info.image.jpeg}
				alt={"3"}
			/>
			<Typography
				fontSize={["20px", "25px"]}
				sx={{
					marginTop: "20px"
				}}
			>
				{info.name}
			</Typography>
			<Typography fontSize={["16px", "20px"]} color={"#05D9D7"} textAlign={"center"}>
				{info.designation}
			</Typography>
		</Box>
	);
};

TeamMembers.propTypes = {
	info: PropTypes.any
};
