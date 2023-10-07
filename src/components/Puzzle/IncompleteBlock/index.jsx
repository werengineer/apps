import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

export const IncompleteBlock = () => {
	const router = useRouter();
	const subscribeBlock = () => {
		router.back();
	};
	return (
		<Box
			width={"80vw"}
			display={"flex"}
			height={"87vh"}
			flexDirection={"column"}
			justifyContent={"center"}
			alignItems={"center"}
			gap={"2vh"}
			textAlign={"center"}
			paddingX={["20px", "0"]}
		>
			{/* <Image alt="404 Image" width={300} height={200} src={'/images/404.png'} /> */}
			<Typography fontSize={["35px", "40px"]} fontWeight={["600"]} color="#50D9D7">
				We are still working on this block!
			</Typography>
			<Typography fontSize={["20px", "25px"]} fontWeight={["500"]}>
				Please visit again later.
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
				onClick={subscribeBlock}
			>
				Go Back
			</Button>
		</Box>
	);
};
