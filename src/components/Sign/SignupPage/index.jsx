"use client";
import { SignupContext } from "@context/signup";
import { Formiz, useForm } from "@formiz/core";
import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import { googleSignup, prevStep, submitForm } from "./Functions";
import Image from "next/image";
import { Steps } from "./Steps";
import { Step1 } from "./Step1";
import { Step2 } from "./Step2";
import { Step3 } from "./Step3";
import { Step4 } from "./Step4";
import { Check, NavigateBefore, NavigateNext } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { useSetRecoilState } from "recoil";
import { otpModal } from "@atom";
import { MobileVerificationModal } from "@components/Settings/EditProfile/MobileVerificationModal";
import { getCookie } from "cookies-next";

export const SignUpPage = () => {
	
	useEffect(() => {
		const token = getCookie('userKey');
		
		if (token !== undefined) {
			try {
			  const parsedData = JSON.parse(token);
			  if (parsedData?._id) {
				router.push('/');
			  }
			} catch (error) {
			  console.error("Error parsing JSON:", error);
			}
		  }
		  
	}, [])
	const form = useForm();
	const context = React.useContext(SignupContext);
	const { enqueueSnackbar } = useSnackbar();
	const [loading, setLoading] = useState(false);
	const router = useRouter();
	const [skip, setSkip] = useState(false);
	const { google, updateGoogle } = context;
	const [otp, setOtp] = useState(false);
	const [open, setOpen] = useState(false);
	console.log(form);

	return (
		<Box sx={{ width: "100vw", height: ["87vh", "100vh", "97vh"], mt: ["13vh", "3vh"] }}>
			<Box
				sx={{
					display: ["flex", "flex", "none"],
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					textAlign: "center",
					fontWeight: "600",
					fontSize: "25px",
					lineHeight: "30px",
					textTransform: "capitalize",
					color: "#50D9D7",
					gap: ["15px"]
					// marginTop: "14%"
				}}
			>
				<Box>
					Welcome to
					<br />
					We Are Engineer!
				</Box>
				<Typography fontSize="14px" textAlign="center" color="#FFFFFF">
					Register your account
				</Typography>
			</Box>
			<Formiz
				connect={form}
				onSubmit={() => submitForm(form, enqueueSnackbar, setLoading, google, router, skip)}
			>
				<Box
					sx={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "center",
						alignItems: "center",
						marginTop: [0]
					}}
				>
					<Box
						sx={{
							display: ["none", "none", "flex"],
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
							width: "40%",
							flex: 1,
							gap: 4
						}}
					>
						<Typography
							sx={{
								color: "#50D9D7",
								fontSize: "50px",
								lineHeight: "54.15px",
								fontWeight: "600",
								textAlign: "center"
							}}
						>
							Welcome To
							<br />
							We Are Engineer!
						</Typography>
						<Typography variant="p" sx={{ color: "white", fontSize: "30px" }}>
							Register your account
						</Typography>
						<Image alt="dev" width={300} height={300} src={"/images/signup/login.svg"} />
					</Box>

					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
							flex: 1,
							gap: "30px",
							mt: 5,
							mb: 5
						}}
						component="form"
						noValidate
						onSubmit={form.submitStep}
					>
						<Steps form={form} />
						<Step1 form={form} />
						<Step2 form={form} />
						<Step3 form={form} />
						<Step4 form={form} />
						<Stack
							display={["none", "flex"]}
							width="70%"
							alignSelf={"end"}
							justifyContent="space-between"
							mr={12}
							alignItems={"center"}
							spacing={5}
							direction={"row"}
						>
							{!form.isFirstStep ? (
								<>
									<IconButton
										onClick={() => prevStep(form)}
										size="large"
										sx={{
											border: "1px solid #fff",
											"&:hover": {
												backgroundColor: "white",
												color: "black"
											}
										}}
									>
										<NavigateBefore fontSize="30px" />
									</IconButton>
								</>
							) : (
								<Button
									sx={{
										borderRadius: "50px",
										height: "60px",
										display: "flex",
										gap: "20px",
										paddingX: "20px"
									}}
									onClick={() => googleSignup(enqueueSnackbar, form, updateGoogle)}
								>
									<Image
										width={30}
										height={30}
										src={"/icons/Google.png"}
										alt={"Google img"}
									/>
									<Typography
										sx={{
											fontSize: "25px",
											lineHeight: "35px",
											fontWeight: "500",
											color: "#fff"
										}}
									>
										Google
									</Typography>
								</Button>
							)}
							{loading ? (
								<LoadingButton
									loading
									disabled
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
										alignSelf: "flex-end"
									}}
								>
									Almost Done
								</LoadingButton>
							) : (
								<>
									{form.isLastStep && (
										<Button
											type="submit"
											sx={{
												padding: "10px",
												borderRadius: "50px",
												color: "#50d9d7",
												paddingRight: "30px",
												paddingLeft: "30px",
												fontWeight: 700,
												"&:hover": {
													textDecoration: "underline",
													color: "#50d9d7"
												},
												alignSelf: "flex-end",
												ml: 5,
												mr: -5
											}}
											onClick={() => setSkip(true)}
										>
											Skip
										</Button>
									)}
									<Button
										disabled={!form.isStepValid}
										sx={{
											padding: "10px",
											border: "1px solid white",
											borderRadius: "50px",
											color: "white",
											paddingRight: "30px",
											paddingLeft: "30px",
											fontWeight: 700,
											display:
												form?.steps[1]?.isCurrent === true && otp === false
													? "flex"
													: "none",
											"&:hover": {
												backgroundColor: "white",
												color: "black"
											},
											alignSelf: "flex-end",
											mt: -5
										}}
										onClick={(e) => {e.preventDefault(); setOpen(true);}}
										// endIcon={!form.isLastStep ? <NavigateNext /> : <Check />}
									>
										{/* {form.isLastStep ? "Almost Done" : "Next"} */}
										Send OTP
									</Button>
									<Button
										type="submit"
										disabled={!form.isStepValid}
										sx={{
											padding: "10px",
											border: "1px solid white",
											borderRadius: "50px",
											color: "white",
											paddingRight: "30px",
											paddingLeft: "30px",
											fontWeight: 700,
											display: (
												form?.currentStep?.index === 1
													? otp === true
														? true
														: false
													: true
											)
												? "flex"
												: "none",
											"&:hover": {
												backgroundColor: "white",
												color: "black"
											},
											alignSelf: "flex-end",
											mt: -5
										}}
										endIcon={!form.isLastStep ? <NavigateNext /> : <Check />}
									>
										{form.isLastStep ? "Almost Done" : "Next"}
									</Button>
								</>
							)}
						</Stack>
						<Box
							sx={{
								display: ["flex", "none"],
								justifyContent: "space-between",
								alignItems: "center",
								width: "100%",
								px: "15px"
							}}
						>
							{form.isLastStep && (
								<Button
									type="submit"
									sx={{
										padding: "10px",
										borderRadius: "50px",
										color: "#50d9d7",
										paddingRight: "30px",
										paddingLeft: "30px",
										fontWeight: 700,
										"&:hover": {
											textDecoration: "underline",
											color: "#50d9d7"
										},
										alignSelf: "flex-end"
									}}
									onClick={() => setSkip(true)}
								>
									Skip
								</Button>
							)}
							<Button
								disabled={!form.isStepValid}
								sx={{
									padding: "10px",
									border: "1px solid white",
									borderRadius: "50px",
									color: "white",
									paddingRight: "30px",
									paddingLeft: "30px",
									fontWeight: 700,
									display:
										form?.steps[1]?.isCurrent === true && otp === false
											? "flex"
											: "none",
									"&:hover": {
										backgroundColor: "white",
										color: "black"
									},
									alignSelf: "flex-end",
								}}
								onClick={(e) => {e.preventDefault(); setOpen(true);}}
							>
								Send OTP
							</Button>
							
							
							<Button
								type="submit"
								disabled={!form.isStepValid}
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
									display: (
										form?.currentStep?.index === 1 ? (otp === true ? true : false) : true
									)
										? "flex"
										: "none"
								}}
								endIcon={!form.isLastStep ? <NavigateNext /> : <Check />}
							>
								<Typography>{form.isLastStep ? "Almost Done" : "Next"}</Typography>
							</Button>
						</Box>
					</Box>
				</Box>
			</Formiz>
			<MobileVerificationModal open={open} setOpen={setOpen} phone={form?.fields?.mobile?.value} setOtpStatus={setOtp} userCreated={false}/>
		</Box>
	);
};
