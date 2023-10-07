import { DragNDrop } from "@components/Global";
import { Close, TrainRounded } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { Box, IconButton, Typography, Modal, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import { PropTypes } from "prop-types";
import { MuiOtpInput } from "mui-one-time-password-input";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { firebaseAuth } from "@fb";
import { verifyMobile } from "../Functions";
import { getEngineer } from "@cookies";
import { useSnackbar } from "notistack";
import { completeAchievement } from "@api/achievement";
import { achievementID } from "@lib/achievementID";
import { useRecoilState } from "recoil";
import { otpModal } from "@atom";

export const MobileVerificationModal = ({ open, setOpen, phone, setOtpStatus, userCreated }) => {
	const [loading, setLoading] = useState(false);
	const [otp, setOtp] = useState("");
	const [sendOtp, setSendOtp] = useState(false);
	const [result, setResult] = useState({});
	const engineer = getEngineer();
	const { enqueueSnackbar } = useSnackbar();

	const verifyPhoneNumber = async ({notFirst = false}) => {
		setLoading(true);

		if(!notFirst){
			window.recaptchaVerifier = new RecaptchaVerifier(firebaseAuth, "recaptcha-container1", {
				size: "invisible",
				callback: (response) => {},
				"expired-callback": (error) => {
					enqueueSnackbar(error.message, {
						variant: "error"
					});
				}
			});
		}

		if(!window.recaptchaVerifier){
			window.recaptchaVerifier = new RecaptchaVerifier(firebaseAuth, "recaptcha-container1", {
				size: "invisible",
				callback: (response) => {},
				"expired-callback": (error) => {
					enqueueSnackbar(error.message, {
						variant: "error"
					});
				}
			});
		}

		const phoneNumber = `+91 ${phone || engineer.mobileNumber}`;
		const appVerifier = window.recaptchaVerifier;
		signInWithPhoneNumber(firebaseAuth, phoneNumber, appVerifier)
			.then((confirmationResult) => {
				enqueueSnackbar("Verification OTP Sent", {
					variant: "success"
				});
				window.confirmationResult = confirmationResult;
				setResult(confirmationResult);
				setLoading(false);
				setSendOtp(true);
			})
			.catch((error) => {
				enqueueSnackbar(error.message, {
					variant: "error"
				});
				setLoading(false);
			});
	};

	function handleVerify() {
		setLoading(true);
		result
			.confirm(otp)
			.then(async (result) => {
				if (result) {
					if (userCreated) {
						await verifyMobile(engineer._id);
					}
					setLoading(false);
					enqueueSnackbar("Phone Number Verified Successfully", {
						variant: "success"
					});
					if (!userCreated) {
						setOtpStatus(true);
					}
					setOpen(false);
				}
			})
			.catch((error) => {
				setOtp("");
				if (!userCreated) {
					setOtpStatus(true);
				}
				enqueueSnackbar("Incorrect OTP, Try Again!", {
					variant: "error"
				});
				setLoading(false);
			});
	}

	return (
		<Modal
			open={open}
			onClose={() => setOpen(false)}
			sx={{
				display: "flex",
				width: "100vw",
				height: "100vh",
				alignItems: "center",
				justifyContent: "center",
				backgroundColor: "rgba(0, 0, 0, 0.8)",
				backdropFilter: "blur(10px)"
			}}
			aria-labelledby="full-screen-modal"
			aria-describedby="modal-for-displaying-image-in-full-screen"
		>
			<Box
				sx={{
					boxShadow: 5,
					padding: 2,
					backgroundColor: "#202324",
					maxWidth: ["95vw", "50vw", "30vw"],
					position: "relative",
					height: "auto",
					borderRadius: "5px",
					overflow: "scroll",
					gap: 2,
					display: "flex",
					flexDirection: "column",
					// opacity:'1!important',
					"&:focus": {
						outline: "none"
					}
				}}
			>
				<Typography fontSize={18}>Verify Mobile Number</Typography>
				<Box></Box>
				<MuiOtpInput value={otp} onChange={(e) => setOtp(e)} length={6} />

				<Box
					sx={{
						display: "flex",
						height: "100%",
						width: "100%"
					}}
					id={"recaptcha-container1"}
				></Box>
				{!sendOtp ? (
					<LoadingButton
						// id="recaptcha-container"
						loading={loading}
						onClick={() => {
							verifyPhoneNumber({notFirst: false});
						}}
					>
						Get Otp
					</LoadingButton>
				) : (
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center"
						}}
					>
						<LoadingButton
							sx={{
								display: () =>
									setTimeout(() => (sendOtp === true ? true : false), 60000)
										? "flex"
										: "none"
							}}
							loading={loading}
							onClick={() => verifyPhoneNumber({notFirst: true})}
						>
							Resend
						</LoadingButton>
						<LoadingButton
							disabled={loading}
							onClick={() => {
								handleVerify();
							}}
						>
							Verify
						</LoadingButton>
					</Box>
				)}

				<Box
					position={"absolute"}
					top={10}
					right={10}
					mb={3}
					display={"flex"}
					justifyContent={"flex-end"}
				>
					<IconButton onClick={() => setOpen(false)}>
						<Close />
					</IconButton>
				</Box>
			</Box>
		</Modal>
	);
};

MobileVerificationModal.propTypes = {
	open: PropTypes.any,
	setOpen: PropTypes.any,
	phone: PropTypes.any,
	setOtpStatus: PropTypes.any,
	userCreated: PropTypes.any
};
