import { Box, Button, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

export const Collaborate = () => {
	const router = useRouter();
	return (
		<Box
			width={"100vw"}
			display={"flex"}
			flexDirection={"column"}
			justifyContent={"center"}
			alignItems={"center"}
			gap={"8vh"}
			height={["80vh", "500px", "700px"]}
			sx={{
				backgroundImage: "url('/images/collaborate.png')"
			}}
			marginY={"10vh"}
		>
			<Stack direction={"column"} alignItems="center">
				<Typography
					paddingX={["10vw", "5vw", "0"]}
					fontSize={["30px", "35px", "40px"]}
					color={"#fff"}
					textAlign={["center"]}
				>
					Collaborate And Unleash The Power Of Community
				</Typography>
				<Typography fontSize={["35px", "38px", "40px"]} color={"#50D9D7"}>
					We Are Engineer
				</Typography>
			</Stack>
			<Button
				sx={{
					paddingX: ["20px", "40px"],
					backgroundColor: "white",
					borderRadius: "30px",
					fontSize: ["12px", "15px"],
					color: "black",
					paddingY: "10px",
					border: "1px solid white",
					":hover": {
						backgroundColor: "transparent",
						color: "white"
					}
				}}
				onClick={() => router.push("/signup")}
			>
				Join Community
			</Button>
		</Box>
	);
};
