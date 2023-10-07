import { Info } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";


export const DiscordCard = () => {
	return (
		<Box
			width={["92%", "50%"]}
			border={"1px solid #1D5352"}
			borderRadius={"10px"}
			paddingX={"1.5vw"}
			display={"flex"}
			height={["280px", "300px", "240px"]}
			flexDirection={"row"}
			// paddingBottom={"4vh"}
			justifyContent={"center"}
			alignItems={"center"}
			gap={"2vh"}
			sx={{
				boxShadow: "1px 3px 10px 0px rgba(0,0,0,0.75)"
			}}
		>
			{/* <Box display={"flex"} flexDirection={"column"} gap={"2vh"} alignItems={"center"}> */}
				<Button
					sx={{
						backgroundColor: "transparent",
						borderRadius: "30px",
						color: "black",
						// border: "1px solid #05D0D7",
						paddingX: "20px",
						":hover": {
							backgroundColor: "transparent",
							color: "#05D9D7"
						}
					}}
					onClick={() => {
						window.open("https://discord.gg/yvS2cSsvTv");
					}}
				>
					{/* Join Our Discord */}
					<Image width={70} height={70} src={"/icons/Discord.svg"} alt={"discord img"} />
				</Button>

				<Button
					sx={{
						backgroundColor: "transparent",
						borderRadius: "30px",
						color: "black",
						// border: "1px solid #05D0D7",
						paddingX: "20px",
						":hover": {
							backgroundColor: "transparent",
							color: "#05D9D7"
						}
					}}
					onClick={() => {
						window.open("https://chat.whatsapp.com/HhS5nAKMnbM47m3lpSSpVf");
					}}
				>
					{/* Join Our Discord */}
					<Image width={70} height={70} src={"/icons/whatsapp.svg"} alt={"WAE whatsapp"} />
				</Button>

				<Button
					sx={{
						backgroundColor: "transparent",
						borderRadius: "30px",
						color: "black",
						// border: "1px solid #05D0D7",
						paddingX: "20px",
						":hover": {
							backgroundColor: "transparent",
							color: "#05D9D7"
						}
					}}
					onClick={() => {
						window.open("https://nas.io/werengineer");
					}}
				>
					{/* Join Our Discord */}
					<Image width={70} height={70} src={"/icons/nas.svg"} alt={"WAE whatsapp"} />
				</Button>
			{/* </Box> */}
		</Box>
	);
};
