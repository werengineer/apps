"use client";
import { useField } from "@formiz/core";
import { FormControl, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import React, { useState } from "react";
import PropTypes from "prop-types";

export const DropdownInput = (props) => {
	const { errorMessage,  isValid, isPristine, isSubmitted, setValue, value } =
		useField(props);
	const { label, name, array, defaultValue } = props;
	const [isFocused, setIsFocused] = useState(false);
	const showError = !isValid && !isFocused && (!isPristine || isSubmitted);

	return (
		<>
			<FormControl sx={{ width: "100%" }}>
				<InputLabel id={name}>{label}</InputLabel>
				<Select
					labelId={name}
					id={name}
					error={showError}
					name={name}
					value={value || defaultValue}
					label={label}
					onChange={(e) => setValue(e.target.value)}
				>
					{array.map((a, index) => (
						<MenuItem key={index} value={a == "null" ? "" : a}>
							{a == "null" ? "Select Option" : a}
						</MenuItem>
					))}
					{/* <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem> */}
				</Select>
			</FormControl>
			{showError && (
				<Typography
					sx={{
						color: "red",
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

DropdownInput.propTypes = {
	label: PropTypes.any,
	name: PropTypes.any,
	type: PropTypes.any,
	placeholder: PropTypes.any,
	value: PropTypes.any,
	required: PropTypes.any,
	disable: PropTypes.any,
	form: PropTypes.any,
	array: PropTypes.any,
	defaultValue: PropTypes.any
};
