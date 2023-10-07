import React, { useContext, useEffect } from "react";
import { EmailVerificationError } from "./EmailVerificationError";
import { EmailVerificationSuccess } from "./EmailVerificationSuccess";
import { EmailVerification } from "./EmailVerification";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { EmailContext } from "@context/email";
import { useSnackbar } from "notistack";

export const Verification = () => {
	const emailContext = useContext(EmailContext);
	const { handleVerifyEmail } = emailContext;
	const { enqueueSnackbar }= useSnackbar();

	useEffect(() => {
		handleVerifyEmail(enqueueSnackbar);
	}, []);

	return (
		<Box
			sx={{
				width: ["100%", "100%", "80%"],
				height: "100vh",
				ml: [0, 3, 0],
				borderRight: ["0px", "0px", "1px solid grey"]
			}}
		>
			<EmailVerificationError />
			<EmailVerificationSuccess />
			<EmailVerification />
		</Box>
	);
};
