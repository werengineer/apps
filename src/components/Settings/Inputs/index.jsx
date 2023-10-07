import { useField } from "@formiz/core";
import { InputBase, Box, Typography } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";

export const TitleInput = (props) => {
	const { value, setValue } = useField(props);
	var { type, name, label, defaultValue } = props;

	return (
		<Box
			sx={{
				width: "100%",
				display: "flex",
				flexDirection: "column",
				gap: "8px"
			}}
		>
			<Typography
				sx={{
					color: "grey",
					fontSize: "13px"
				}}
			>
				{label}
			</Typography>
			<InputBase
				sx={{
					border: "1px solid grey",
					borderRadius: "5px",
					py: "10px",
					px: "10px"
				}}
				disabled={name === "email" || name === "mobileNumber"}
				type={type}
				name={name}
				label={label}
				value={value || defaultValue}
				onChange={(e) => setValue(e?.target?.value)}
			/>
		</Box>
	);
};

TitleInput.propTypes = {
	type: PropTypes.any,
	required: PropTypes.any,
	name: PropTypes.any,
	label: PropTypes.any,
	defaultValue: PropTypes.any
};
