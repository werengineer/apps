import {
	Chip,
	MenuItem,
	Stack,
	TextField,
	Typography
} from "@mui/material";
import { Box } from "@mui/system";
import { useField } from "@formiz/core";
import { styled } from "@mui/material/styles";
import { listTags } from "@data/interests";
import React from "react";

const SignupField = styled(TextField)`
	margin: 0px 1.2vw;
	width: 98%;
	margin-bottom: 1.5vh;
	border: "1px solid grey";
	& :before {
		border: "1px solid grey !important";
	}
	& .MuiInputBase-input {
		// padding: 10px;
	}
	& .MuiInputBase-root {
		border-radius: 8px;
		border: 1px solid #111827;
		color: #ffffff;
		font-size: 16px;
		font-weight: 500;
		box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
		& :disabled {
			text-fill-color: #101828;
			color: #101828;
			cursor: not-allowed;
		}
	}
`;

export const ListTagInput = (props) => {
	let { value, setValue } = useField(props);
	value = [...(value || [])];

	const handleRemove = (i) => {
		let updatedCat = value;
		updatedCat = updatedCat.filter((cat, idx) => idx !== i);
		setValue(updatedCat);
	};
	return (
		<Box alignSelf={"center"} sx={{ margin: "10px 10px 0 0px", width: "100%", mt: "30px" }}>
			{/* <ProjectLabel>Select three categories for your project</ProjectLabel> */}
			<Stack direction="column" spacing={1}>
				<Box
					pl={"14px"}
					mb={"5px"}
					display={"flex"}
					flexDirection={"row"}
					gap={"15px"}
					width={"100%"}
					sx={{
						overflowX: "scroll"
					}}
				>
					{value.map((v, i) => (
						<Chip
							key={i}
							label={v}
							sx={{
								backgroundColor: "#1D5352",
								color: "#05D9D7"
							}}
							onDelete={() => handleRemove(i)}
						/>
					))}
				</Box>
				<Box sx={{}}>
					<SignupField
						// label="Categories"
						placeholder="Tags"
						disabled={value?.length >= 3}
						onChange={(e) => {
							setValue([...value, e.target.value]);
						}}
						select
						InputProps={{
							startAdornment: (
								<Typography
									sx={{
										color: value.length === 0 ? "grey" : "white",
										display: value.length === 0 ? "flex" : "none"
									}}
								>
									Tags
								</Typography>
							)
						}}
					>
						{listTags.map((c, i) => (
							<MenuItem key={i} value={c}>
								{c}
							</MenuItem>
						))}
					</SignupField>
				</Box>
			</Stack>
		</Box>
	);
};
