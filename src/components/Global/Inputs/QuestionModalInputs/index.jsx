import { useField } from "@formiz/core";
import { InputBase } from "@mui/material";
import React from "react";

export const QuestionTitle = (props) => {
	let { value, setValue, isValid, errorMessage } = useField(props);

	return (
		<InputBase
			name='title'
			label='Title'
			type='text'
			value={value}
			onChange={(e) => setValue(e.target.value)}
			sx={{
				border: "1px solid grey",
				borderRadius: "30px",
				px: "15px",
				width: "100%",
				color: "white",
				py: "3px"
			}}

			placeholder='Question Title Be Specific'
		/>
	);
};