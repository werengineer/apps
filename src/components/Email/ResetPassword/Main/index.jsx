import React from "react";
import LoadingAnimation from "../../../../../lotties/loading.json";
import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import Lottie from "lottie-react";
import { useContext } from "react";
import { EmailContext } from "@context/email";
import { useSnackbar } from "notistack";
import { Formiz, useForm } from "@formiz/core";
import { TitleInput } from "@components/Settings";
import { getEngineer } from "@cookies";
import { LoadingButton } from "@mui/lab";

export const Main = () => {
	const emailContext = useContext(EmailContext);
	const { state, sendPassLink, verifyPassResetCode, resetPassword, form, handleReset } =
		emailContext;
	const { enqueueSnackbar } = useSnackbar();
	const engineer = getEngineer();

	return (
		<Box
			sx={{
				display: !state.loading && !state.success ? "flex" : "none",
				// display: "flex",
				width: "100%",
				height: "100%",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center"
			}}
		>
			<Box
				sx={{
					width: "80%",
					display: "flex",
					flexDirection: "column",
					gap: "20px"
				}}
			>
				<Formiz
					connect={form}
					// onChange={handleChange}
					onSubmit={() => console.log(form)}
				>
					<TitleInput type="email" defaultValue={engineer?.email} label="Email" name="email" />
					<TitleInput
						type="password"
						required={"This field cannot be empty"}
						name="password"
						label="New Password"
					/>
					<LoadingButton
						type="submit"
						loading={state?.loading}
						sx={{
							border: "1px solid #05D9D7",
							borderRadius: "30px",
							mt: "20px",
							":hover": {
								backgroundColor: "#1D5352",
								color: "#05D9D7"
							}
						}}
						onClick={() => resetPassword(enqueueSnackbar)}
					>
						Reset
					</LoadingButton>
				</Formiz>
			</Box>
		</Box>
	);
};
