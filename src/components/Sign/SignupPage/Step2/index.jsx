import { FormizStep } from "@formiz/core";
import { Avatar, Box, Stack, Typography } from "@mui/material";
import React from "react";
import { TextInput } from "@components/Global";
import { isMaxNumber, isMinNumber } from "@formiz/validations";
import { validateMobNum, validateUsername } from "@api";
import PropTypes from "prop-types";
import { MobileVerificationModal } from "@components/Settings/EditProfile/MobileVerificationModal";

export const Step2 = ({ form }) => {
	


	return (
		<>
			<FormizStep
				as={Box}
				sx={{
					width: "100%",
					display: "flex",
					flexDirection: "column",
					gap: 4,
					justifyContent: "center",
					alignItems: "center"
				}}
				component="form"
				noValidate="false"
				label="Step 2"
				name="step2"
			>
				<Stack
					color="#ffffff"
					// alignSelf={'start'}
					direction={["row"]}
					gap={"15px"}
					alignItems={"center"}
				>
					<Avatar sx={{ width: [30, 56], height: [30, 56] }}>
						{form.flatValues?.name?.slice(0, 1)}
					</Avatar>
					<Stack direction={"column"} spacing={0}>
						<Typography
							sx={{ fontSize: ["15px", "22px"], lineHeight: "24px", fontWeight: "400" }}
						>
							{form.flatValues.name}
						</Typography>
						<Typography sx={{ fontSize: ["10px", "15px"] }}>
							{form.flatValues.email}
						</Typography>
					</Stack>
				</Stack>
				<TextInput
					validations={[
						{
							rule: (value) => !value?.includes(" "),
							message: "Username must not contain any space."
						}
					]}
					asyncValidations={[
						{
							rule: async (value) => {
								const isAlreadyUsed = await validateUsername(value);
								return isAlreadyUsed;
							},
							message: "Username already used, please select another one."
						}
					]}
					type="text"
					required="Username is required"
					name="username"
					label="Username"
				/>
				<TextInput
					validations={[
						{
							rule: isMinNumber(999999999),
							message: "Mobile number must be 10 digits."
						},
						{
							rule: isMaxNumber(9999999999),
							message: "Mobile number must be 10 digits."
						}
					]}
					asyncValidations={[
						{
							rule: async (value) => {
								const isAlreadyUsed = await validateMobNum(value);
								return isAlreadyUsed;
							},
							message: "Mobile Number already used, please select another one."
						}
					]}
					required="Mobile number is required"
					type="number"
					name="mobile"
					label="Mobile number"
				/>
				{/*  */}
			</FormizStep>
		</>
	);
};

Step2.propTypes = {
	form: PropTypes.any
};