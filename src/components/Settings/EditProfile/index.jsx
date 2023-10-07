"use client";
import { getEngineer } from "@cookies";
import { Box, Button, Tooltip, Typography } from "@mui/material";
import React, { useContext, useState, useEffect } from "react";
import { TitleInput } from "../Inputs";
import { SettingsContext } from "@context/settings";
import { Check } from "@mui/icons-material";
import { useSnackbar } from "notistack";
import { firebaseAuth } from "@fb";
// import { RecaptchaVerifier, getAuth, signInWithPhoneNumber } from "firebase/auth";
import { PropTypes } from "prop-types";
import { MobileVerificationModal } from "./MobileVerificationModal";
import { useSetRecoilState } from "recoil";
import { otpModal } from "@atom";

export const EditProfile = () => {
	const engineer = getEngineer();
	const { enqueueSnackbar } = useSnackbar();
	const settingsContext = useContext(SettingsContext);
	const { verifyEmail, updateEmailStatus } = settingsContext;
	const [verifiedEmail, setVerifiedEmail] = useState(false);
	const [open, setOpen] = useState();

	useEffect(() => {
		const getUser = () => {
			firebaseAuth?.onAuthStateChanged((user) => {
				if (user) {
					if (user.emailVerified) {
						updateEmailStatus();
					}
				}
			});
		};
		getUser();
	}, [firebaseAuth]);

	return (
		<Box
			display={"flex"}
			justifyContent={"space-between"}
			border="2px solid rgba(29, 83, 82, 1)"
			borderRadius="12px"
			width={["100%", "97%"]}
			padding={"20px"}
			flexDirection="column"
			height="100%"
			boxShadow={"0px 4px 15px rgba(0, 0, 0, 0.25)"}
		>
			<Typography fontSize={"20px"}>Edit Profile</Typography>
			<Box
				display={"flex"}
				flexDirection={"column"}
				gap={3}
				mt={5}
				alignItems={["center", "flex-start"]}
			>
				<TitleInput
					type="Name"
					required={"Name is required"}
					name="name"
					defaultValue={engineer?.name}
					label="Name"
				/>
				<TitleInput
					type="username"
					required={"Username is required"}
					name="username"
					defaultValue={engineer?.username}
					label="Username"
				/>
				<Box
					sx={{
						display: "flex",
						alignItems: "flex-end",
						width: "100%",
						gap: 3
					}}
				>
					<TitleInput
						type="email"
						required={"Email is required"}
						name="email"
						label="Email"
						defaultValue={engineer?.email}
					/>
					<Tooltip title={engineer?.isEmailVerified ? "Verified" : "Not verified"}>
						<Button
							onClick={() => {
								verifyEmail(enqueueSnackbar);
							}}
							sx={{
								display: "flex",
								width: engineer?.isEmailVerified ? "53px" : "110px",
								height: engineer?.isEmailVerified ? "60px" : "53px",
								color: "#05D9D7",
								bgcolor: "#1D5352",
								border: "1px solid #05D9D7",
								cursor: "pointer",
								borderRadius: engineer?.isEmailVerified ? "50%" : "5px"
							}}
						>
							{engineer?.isEmailVerified ? (
								<Check />
							) : (
								<Typography fontSize={14}>Verify</Typography>
							)}
						</Button>
					</Tooltip>
				</Box>
				<Box
					sx={{
						display: "flex",
						alignItems: "flex-end",
						width: "100%",
						gap: 3
					}}
				>
					<TitleInput
						type="number"
						required={"Mobile Number is required"}
						name="mobileNumber"
						label="Mobile Number"
						defaultValue={engineer?.mobileNumber}
					/>
					<Tooltip title={engineer?.isEmailVerified ? "Verified" : "Not verified"}>
						<Button
							onClick={() => {
								engineer?.isMobileVerified ? "" : setOpen(true);
							}}
							sx={{
								display: "flex",
								width: engineer?.isMobileVerified ? "53px" : "110px",
								height: engineer?.isEmailVerified ? "60px" : "53px",
								color: "#05D9D7",
								bgcolor: "#1D5352",
								border: "1px solid #05D9D7",
								cursor: "pointer",
								borderRadius: engineer?.isMobileVerified ? "50%" : "5px"
							}}
						>
							{engineer?.isMobileVerified ? (
								<Check />
							) : (
								<Typography fontSize={14}>Verify</Typography>
							)}
						</Button>
					</Tooltip>
				</Box>
				<TitleInput
					type="text"
					required={"Address is required"}
					name="address"
					defaultValue={engineer?.address}
					label="Address"
				/>
			</Box>
			<MobileVerificationModal open={open} setOpen={setOpen} phone={engineer?.phone} userCreated={true} />
		</Box>
	);
};

EditProfile.propTypes = {};
