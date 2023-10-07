import { SettingsContext } from "@context/settings";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useSnackbar } from "notistack";
import React from "react";
import { useContext } from "react";

export const ResetPass = () => {
	const settingsContext = useContext(SettingsContext);
	const { sendPassLink } = settingsContext;
	const { enqueueSnackbar } = useSnackbar();

	return (
		<Box
			display={"flex"}
			justifyContent={"space-between"}
			border="2px solid rgba(29, 83, 82, 1)"
			borderRadius="12px"
			width={["97%"]}
			padding={"20px"}
			flexDirection="column"
			height="100%"
			boxShadow={"0px 4px 15px rgba(0, 0, 0, 0.25)"}
		>
			<Typography fontSize={"20px"}>Reset Password</Typography>
			<Stack spacing={3} mt={3}>
				<Button
					type="submit"
					//   disabled={!form.isStepValid}
					sx={{
						padding: "10px",
						border: "1px solid white",
						borderRadius: "50px",
						color: "white",
						paddingRight: "30px",
						paddingLeft: "30px",
						fontWeight: 700,
						"&:hover": {
							backgroundColor: "white",
							color: "black"
						},
						alignSelf: "flex-start"
					}}
					onClick={() => sendPassLink(enqueueSnackbar)}
				>
					Reset Password
				</Button>
				<Typography fontSize={"12px"}>
					You&#39;ll Recieve an Email link to reset your password.
				</Typography>
			</Stack>
		</Box>
	);
};
