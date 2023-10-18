"use client";
import { TextInput } from "@components/Global/Inputs/Text";
import { SignupContext } from "@context/signup";
import { Formiz, useForm } from "@formiz/core";
import { isEmail } from "@formiz/validations";
import { LoadingButton } from "@mui/lab";
import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSnackbar } from "notistack";
import React, { useContext, useEffect, useState } from "react";
import { googleSignin, signinNormal } from "./Functions";

export const SignInPage = () => {

	
	useEffect(() => {
		const token = sessionStorage.getItem('engineer');
		
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
	const router = useRouter();
	const { enqueueSnackbar } = useSnackbar();
	const [loading, setLoading] = useState(false);
	const context = useContext(SignupContext);
	const { updateGoogle } = context;

	return (
		<>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					gap: ["10vh", "0px"],
					height: ["85vh"]
				}}
			>
				<Formiz
					connect={form}
					onSubmit={(e) => {
						e.preventDefault();
						signinNormal(enqueueSnackbar, form, setLoading, router);
					}}
				>
					<Box
						sx={{
							display: "flex",
							height: "90vh",
							flexDirection: ["column", "row"],
							justifyContent: "center",
							alignItems: "center",
							gap: ["10%", "0px"]
						}}
					>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								width: ["100%", "40%"],
								flex: [0.3, 1],
								gap: 4
							}}
						>
							<Typography
								sx={{
									color: "#50D9D7",
									fontSize: ["30px", "50px"],
									lineHeight: "54.15px",
									fontWeight: "600",
									textAlign: "center"
								}}
							>
								Welcome back!
							</Typography>
							<Typography variant="p" sx={{ color: "white", fontSize: ["20px", "30px"] }}>
								Login to your account
							</Typography>
							<Box display={["none", "flex"]}>
								<Image
									alt="dev"
									width={300}
									height={300}
									src={"/images/signup/login.svg"}
								/>
							</Box>
						</Box>

						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								flex: 1,
								gap: 6,
								width: "100vw"
							}}
							component="form"
							noValidate
							onSubmit={(e) => {
								e.preventDefault();
								signinNormal(enqueueSnackbar, form, setLoading, router);
							}}
						>
							<TextInput
								validations={[
									{
										rule: isEmail(),
										message: "This is not a valid email"
									}
								]}
								type="email"
								required={"Email is required"}
								name="email"
								label="Email"
							/>
							<TextInput
								form={form}
								required={"Password is required"}
								type="password"
								name="password"
								label="Password"
							/>
							<Stack alignItems={"center"} spacing={1} direction={"row"}>
								<Box
									width={["100vw", "100%"]}
									display="flex"
									justifyContent="space-between"
									paddingX={"10vw"}
									alignItems={"center"}
									gap={["vw", "10vw"]}
								>
									<Button
										sx={{
											borderRadius: "50px",
											// height: "60px",
											display: "flex",
											gap: "20px",
											paddingX: "20px"
										}}
										onClick={() =>
											googleSignin(enqueueSnackbar, form, updateGoogle, router)
										}
									>
										<Image
											width={20}
											height={20}
											src={"/icons/Google.png"}
											alt={"Google img"}
										/>
										<Typography
											sx={{
												// fontSize: "20px",
												lineHeight: "35px",
												fontWeight: "500",
												color: "#fff"
											}}
										>
											Google
										</Typography>
									</Button>
									<LoadingButton
										loading={loading}
										sx={{
											padding: "10px",
											border: "1px solid white",
											borderRadius: "50px",
											color: "white",
											paddingRight: ["20px", "30px"],
											paddingLeft: ["20px", "30px"],
											fontWeight: 700,
											"&:hover": {
												backgroundColor: "white",
												color: "black"
											},
											alignSelf: "flex-end"
										}}
										type="submit"
									>
										Login
									</LoadingButton>
								</Box>
							</Stack>
						</Box>
					</Box>
				</Formiz>
			</Box>
		</>
	);
};
