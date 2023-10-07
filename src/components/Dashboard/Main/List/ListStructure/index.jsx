import { Box, Chip } from "@mui/material";
import React from "react";
import Questions from "../../Questions/Questions";
import Stories from "../../Stories";


const Index = () => {
	return (
		<Box
			mt={1.5}
			display={"flex"}
			flexDirection={"column"}
			gap={"5vh"}
		>
			<Box
				display={"flex"}
				flexDirection={"row"}
				gap={"1vw"}
			>
				<Chip
					label='Q & A'
					onClick={() => alert("Chip clicked")}
					sx={{
						paddingX: "10px",
						fontWeight: 600
					}}
				/>

				<Chip
					label='Stories'
					onClick={() => alert("Chip clicked")}
					sx={{
						paddingX: "10px",
						fontWeight: 600
					}}
				/>

				<Chip
					label='Thoughts'
					onClick={() => alert("Chip clicked")}
					sx={{
						paddingX: "10px",
						fontWeight: 600
					}}
				/>
			</Box>

			<Box
				display={"flex"}
				flexDirection={"column"}
				gap={"4vh"}
			>
				<Questions />
				<Stories />
			</Box>
		</Box>
	);
};

export default Index;
