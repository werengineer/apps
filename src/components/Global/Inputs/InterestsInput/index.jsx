"use client";
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useField } from "@formiz/core";
import { Box, Chip, MenuItem, Select } from "@mui/material";
import { interests } from "@data/interests";

export const InterestsInput = (props) => {
	let { value, setValue } = useField(props);
	value = [...(value || [])];
	const handleRemove = (i) => {
		let updatedCat = value;
		updatedCat = updatedCat.filter((cat, idx) => idx !== i);
		setValue(updatedCat);
	};

	useEffect(() => {
		setValue(props?.defaultValue);
	}, []);
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
					width: "100%"
				}}
			>
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

InterestsInput.propTypes = {
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

// <Box alignSelf={'center'} sx={{ margin: '20px 0' }}>
//   <Stack direction="column">
//     <Stack direction="row" spacing={1.5} sx={{ mt: 2, mb: 1 }}>
//       {value?.map((c, i) => (
//         <CategoryBox key={i} direction="row">
//           <Typography fontSize={'15px'}>{c}</Typography>
//           <IconButton
//             sx={{ color: '#50D9D7', padding: '0 0 0 8px' }}
//             onClick={() => handleRemove(i)}>
//             <CloseIcon fontSize="small" />
//           </IconButton>
//         </CategoryBox>
//       ))}
//     </Stack>
//     <SignupField
//       // label="Categories"
//       disabled={value?.length >= 3}
//       onChange={(e) => {
//         setValue([...value, e.target.value]);
//       }}
//       select
//       InputProps={{
//         startAdornment: (
//           <InputAdornment position="start">
//             <SearchIcon />
//           </InputAdornment>
//         )
//       }}>
//       {interests.map((c, i) => (
//         <MenuItem key={i} value={c}>
//           {c}
//         </MenuItem>
//       ))}
//     </SignupField>
//   </Stack>
// </Box>
