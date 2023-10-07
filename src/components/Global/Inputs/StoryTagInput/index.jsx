import { Chip, MenuItem, Select, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useField } from "@formiz/core";
import React from "react";
import { questionTags } from "@data/interests";

export const StoryTagInput = (props) => {
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
				width: ["100%", "95%", "91%"],
				ml: [0, "4%", "2.1%"],
				display: "flex",
				flexDirection: "column",
				gap: "2vh",
				mt: ["5px", "10px", "15px"],
				mb: "5px"
			}}
		>
			<Box
				sx={{
					display: "flex",
					gap: "10px",
					overflowX: "scroll"
				}}
			>
				{value.length === 0 && <Typography>Tags</Typography>}
				{value.map((v, i) => (
					// <Box
					//     sx={{
					//         backgroundColor: '#1D5352',
					//         px: '5px',
					//         py: '3px',
					//         borderRadius: '10px',

					//     }}
					// >
					//     <Typography
					//         sx={{
					//             maxWidth: '250px'
					//         }}
					//     >
					//         {v}
					//     </Typography>
					// </Box>
					<Chip
						key={i}
						label={v}
						sx={{
							backgroundColor: "#1D5253",
							color: "#05D9D7"
						}}
						onDelete={() => handleRemove(i)}
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
					borderRadius: ["30px", "20px", "5px"],
					py: ["20px", "25px", "25px"],
					height: "15px",
					paddingY: "20px"
				}}
				disabled={value?.length === 3}
			>
				{questionTags.map((c, i) => (
					<MenuItem key={i} value={c}>
						{c}
					</MenuItem>
				))}
			</Select>
		</Box>
	);
};
