"use client";
import { useField } from "@formiz/core";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
	FormControl,
	IconButton,
	InputAdornment,
	InputBase,
	InputLabel,
	OutlinedInput,
	TextField,
	Typography
} from "@mui/material";
import React, { useState } from "react";
import { PropTypes } from "prop-types";

export const TextInput = (props) => {
	const { errorMessage, isValid, isPristine, isSubmitted, setValue, value } = useField(props);
	var { label, type, required, name, disable, placeholder } = props;
	const [isFocused, setIsFocused] = useState(false);
	const showError = !isValid && !isFocused && (!isPristine || isSubmitted);
	const [showPassword, setShowPassword] = useState(false);

	return (
		<>
			{type === "password" ? (
				<FormControl
					sx={{ color: "white", width: ["85%", "75%"] }}
					error={showError}
					variant="outlined"
				>
					<InputLabel htmlFor={name}>
						{label} {required && "*"}
					</InputLabel>
					<OutlinedInput
						disabled={disable}
						id={name}
						name={name}
						type={showPassword ? "text" : "password"}
						value={value}
						onChange={(e) => setValue(e.target.value)}
						onFocus={() => setIsFocused(true)}
						onBlur={() => setIsFocused(false)}
						endAdornment={
							<InputAdornment position="end">
								<IconButton
									aria-label="toggle password visibility"
									onClick={() => setShowPassword(!showPassword)}
									edge="end"
								>
									{showPassword ? <VisibilityOff /> : <Visibility />}
								</IconButton>
							</InputAdornment>
						}
						label={`${label} ${required && "*"}`}
					/>
				</FormControl>
			) : name === "title" || name === "description" ? (
				<InputBase
					type={type == "password" ? (showPassword ? "text" : type) : type}
					disabled={disable}
					name={name}
					id={name}
					label={`${label}*`}
					color="primary"
					sx={{
						color: "white",
						width: ["85%", "56vw"],
						borderRadius: "5px",
						paddingY: "10px",
						paddingX: "18px",
						border: "1px solid grey"
					}}
					error={showError}
					placeholder={`${placeholder}`}
					value={value}
					onChange={(e) => {
						console.log(value);
						setValue(e.target.value);
					}}
					onFocus={() => setIsFocused(true)}
					onBlur={() => setIsFocused(false)}
				/>
			) : name === "Desc" ? (
				<InputBase
					type={type == "password" ? (showPassword ? "text" : type) : type}
					disabled={disable}
					name={name}
					id={name}
					label={`${label}*`}
					color="primary"
					rows={7}
					sx={{
						color: "white",
						width: ["85%", "56vw"],
						borderRadius: "5px",
						paddingY: "15px",
						paddingX: "20px",
						border: "1px solid grey"
					}}
					error={showError}
					placeholder={`${placeholder}`}
					value={value}
					onChange={(e) => setValue(e.target.value)}
					onFocus={() => setIsFocused(true)}
					onBlur={() => setIsFocused(false)}
					multiline
				/>
			) : name === "editorInput" ? (
				<InputBase
					name={name}
					id={name}
					label={`${label}*`}
					color="primary"
					sx={{
						color: "white",
						width: ["85%", "56vw"],
						borderRadius: "5px",
						paddingY: "10px",
						paddingX: "18px",
						border: "1px solid grey"
					}}
					error={showError}
					placeholder={"Question title be specific"}
					value={value}
					onChange={(e) => setValue(e.target.value)}
					onFocus={() => setIsFocused(true)}
					onBlur={() => setIsFocused(false)}
				/>
			) : (
				<TextField
					type={type == "password" ? (showPassword ? "text" : type) : type}
					disabled={disable}
					name={name}
					id={name}
					label={`${label} ${required && "*"}`}
					color="primary"
					sx={{ color: "white", width: ["85%", "75%"] }}
					error={showError}
					value={value}
					onChange={(e) => setValue(e.target.value)}
					onFocus={() => setIsFocused(true)}
					onBlur={() => setIsFocused(false)}
				/>
			)}
			{showError && (
				<Typography
					sx={{
						color: "#FF4747",
						alignSelf: "start",
						mt: -1,
						ml: 13,
						mr: 13,
						whiteSpace: "pre-line"
					}}
				>
					{errorMessage}
				</Typography>
			)}
		</>
	);
};

TextInput.propTypes = {
	label: PropTypes.any,
	name: PropTypes.any,
	type: PropTypes.any,
	placeholder: PropTypes.any,
	value: PropTypes.any,
	required: PropTypes.any,
	disable: PropTypes.any
};
