import { EmailContext } from "@context/email";
import { Box, Typography, Button } from "@mui/material";
import React, { useContext } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export const Error = () => {
	const emailContext = useContext(EmailContext);
	const { state } = emailContext;
	const router = useRouter();

	return (
		<Box
			sx={{
				display: state.error ? "flex" : "none",
				width: "100%",
				height: "100%",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				gap: "30px"
			}}
		>
			<Image src={"/images/404.png"} width={300} height={250} />
			<Typography
				sx={{
					fontSize: "20px",
					textAlign: "center",
					color: "#1D5352",
					px: "50px"
				}}
			>
				It seems that the link is epired, please try again.
			</Typography>
			<Button
				sx={{
					backgroundColor: "#1D5352",
					borderRadius: "30px",
					color: "#05D9D7",
					px: "15px"
				}}
				onClick={() => router.replace("/settings")}
			>
				Go To Settings
			</Button>
		</Box>
	);
};
