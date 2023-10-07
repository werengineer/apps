import { SignupContext } from "@context/signup";
import { FormizStep } from "@formiz/core";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useSnackbar } from "notistack";
import React, { useContext } from "react";
import { googleSignup } from "../Functions";
import Image from "next/image";
import { TextInput } from "@components/Global";
import { isEmail, isPattern } from "@formiz/validations";
import { validateEmail } from "@api";
import PropTypes from "prop-types";

export const Step1 = ({ form }) => {
	const context = useContext(SignupContext);
	const { google, updateGoogle } = context;
	const { enqueueSnackbar } = useSnackbar();

	return (
		<>
			<FormizStep
				as={Box}
				sx={{
					width: "100%",
					display: "flex",
					flexDirection: "column",
					gap: 2,
					justifyContent: "center",
					alignItems: "center"
				}}
				component="form"
				noValidate="false"
				label="Step 1"
				name="step1"
			>
				<Stack
					mb={3}
					alignSelf={"start"}
					marginX="auto"
					alignItems={"center"}
					spacing={1}
					direction={"row"}
					display={["flex", "none"]}
				>
					<Button
						sx={{
							borderRadius: "50px",
							height: "50px",
							display: "flex",
							gap: "20px",
							paddingX: "20px"
						}}
						onClick={() => googleSignup(enqueueSnackbar, form, updateGoogle)}
					>
						<Image width={25} alt="google" height={25} src={"/icons/Google.png"} />
						<Typography
							sx={{ fontSize: "20px", lineHeight: "35px", fontWeight: "500", color: "#fff" }}
						>
							Google
						</Typography>
					</Button>
				</Stack>
				<TextInput
					type="text"
					required={"Name is required"}
					name="name"
					label="Name"
					disable={google}
				/>
				<TextInput
					validations={[
						{
							rule: isEmail(),
							message: "This is not a valid email"
						}
					]}
					asyncValidations={[
						{
							rule: async (value) => {
								const isAlreadyUsed = await validateEmail(value);
								return isAlreadyUsed;
							},
							message: "Email already used, please select another one."
						}
					]}
					type="email"
					required={"Email is required"}
					name="email"
					label="Email"
					disable={google}
				/>
				<TextInput
					form={form}
					validations={
						!google && [
							{
								rule: isPattern("^(?=(.*[!@#$%^&*()-__+.]){1,})"),
								message: "Must contain atleast 1 special character"
							},
							{
								rule: isPattern("^(?=(.*[0-9]){1,})"),
								message: "Must contain atleast 1 number."
							},
							{
								rule: isPattern("^(?=(.*[A-Z]){1,})"),
								message: "Must contain atleast 1 uppercase."
							},
							{
								rule: isPattern("^(?=(.*[a-z]){2,}).{8,}$"),
								message:
									"Password must be 8 characters long and must contain atleast 2 lowercase."
							}
						]
					}
					required={!google && "Password is required"}
					type="password"
					name="password"
					label="Password"
					disable={google}
				/>
				<TextInput
					required={!google && true}
					form={form}
					type="password"
					name="confirmPassword"
					label="Confirm Password"
					disable={google}
					validations={
						!google && [
							{
								rule: (value) => form.values.password === value,
								deps: [form.values.password],
								message: "Passwords do not match"
							}
						]
					}
				/>
			</FormizStep>
		</>
	);
};

Step1.propTypes = {
	form: PropTypes.any
};
