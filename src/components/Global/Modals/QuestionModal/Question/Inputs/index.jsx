import { useField } from "@formiz/core";
import { InputBase, Box, Typography, Select, MenuItem, Chip } from "@mui/material";
import React from "react";
import { interests } from "@data/interests";
import PropTypes from "prop-types";

export const TitleInput = (props) => {
	const { value, setValue } = useField(props);
	var { type, name, label } = props;

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
				type={type}
				name={name}
				label={label}
				value={value}
				placeholder="Question Title Be Specific"
				onChange={(e) => setValue(e?.target?.value)}
			/>
		</Box>
	);
};

export const QuestionTag = (props) => {
	let { value, setValue } = useField(props);
	value = [...(value || [])];
	const handleRemove = (i) => {
		let updatedCat = value;
		updatedCat = updatedCat.filter((cat, idx) => idx !== i);
		setValue(updatedCat);
	};

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				gap: "3vh"
			}}
		>
			<Box
				sx={{
					display: "flex",
					gap: ["20px", "1vw"],
					overflowX: "scroll",
					width: "100%",
					mt: "20px"
				}}
			>
				{value.length === 0 && (
					<Typography
						sx={{
							fontSize: "12px",
							color: "grey",
							mt: "15px"
						}}
					>
						Tags
					</Typography>
				)}
				{value.map((v, i) => (
					<Chip
						key={i}
						label={v}
						onDelete={() => handleRemove(i)}
						sx={{
							backgroundColor: "#1D5352",
							color: "#05D9D7"
						}}
					/>
				))}
			</Box>
			<Select
				value={value[value?.length - 1] || "Tags"}
				label="Tags"
				placeholder="Tags"
				onChange={(e) => {
					setValue([...value, e.target.value]);
				}}
				sx={{
					color: "white",
					borderRadius: "5px!important",
					py: ["20px", "25px", "25px"],
					height: "15px",
					paddingY: "20px"
				}}
				disabled={value?.length === 3}
			>
				{interests.map((c, i) => (
					<MenuItem key={i} value={c}>
						{c}
					</MenuItem>
				))}
			</Select>
		</Box>
	);
};

TitleInput.propTypes = {
	type: PropTypes.any,
	required: PropTypes.any,
	name: PropTypes.any,
	label: PropTypes.any
};
