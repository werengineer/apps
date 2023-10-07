import React from "react";
import LoadingAnimation from "../../../../../lotties/loading.json";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Lottie from "lottie-react";
import { useContext } from "react";
import { EmailContext } from "@context/email";

export const EmailVerification = () => {
	const emailContext = useContext(EmailContext);
	const { state } = emailContext;
	return (
		<Box
			sx={{
				display: state.loading ? "flex" : "none",
				width: "100%",
				height: "100%",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center"
			}}
		>
			<Lottie
				animationData={LoadingAnimation}
				style={{
					height: "300px",
					width: "300px"
				}}
			/>

			<Typography
				sx={{
					fontSize: "20px",
					textAlign: "center",
					color: "#05D9D7",
					px: "50px"
				}}
			>
				Sit back and relax we are verifying your email address
			</Typography>
		</Box>
	);
};
