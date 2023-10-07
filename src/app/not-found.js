"use client";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function FourOFour() {
	const router = useRouter();
	return (
		<Box>
			<Box
				width={"100vw"}
				display={"flex"}
				height={"90vh"}
				flexDirection={"column"}
				justifyContent={"center"}
				alignItems={"center"}
				gap={"2vh"}
				textAlign={"center"}
				paddingX={["20px", "0"]}
				zIndex={99999999}
			>
				<Image alt="404 Image" width={300} height={200} src={"/images/404.png"} />
				<Typography fontSize={["35px", "40px"]} fontWeight={["600"]} color="#50D9D7">
					There&apos; Nothing Here...
				</Typography>
				<Typography fontSize={["20px", "25px"]} fontWeight={["500"]}>
					The page you are looking for is not found or does not exists
				</Typography>
				<Button
					sx={{
						backgroundColor: "white",
						borderRadius: "50px",
						color: "#212121",
						border: "1px solid white",
						paddingX: "30px",
						paddingY: "10px",
						marginTop: "40px",
						":hover": {
							backgroundColor: "#212121",
							color: "white"
						}
					}}
					onClick={() => router.push("/")}
				>
					Back to home
				</Button>
			</Box>
		</Box>
	);
}
