import { Question } from "@components/Questions/Question";
import { OneListContext } from "@context/oneList";
import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import { useContext } from "react";

export const Questions = () => {
	const oneListContext = useContext(OneListContext);
	const { questions, filter } = oneListContext;

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				overflowX: "hidden"
			}}
		>
			<Box
				sx={{
					display:
						questions.length > 0 && (filter === "Q&A" || filter === "Both") ? "flex" : "none",
					alignItems: "center",
					gap: "1vw",
					mt: 2
				}}
			>
				<Divider
					sx={{
						width: "5%",
						backgroundColor: "#1D5352"
					}}
				/>
				<Typography
					sx={{
						color: "#1D5352"
					}}
				>
					Questions
				</Typography>
				<Divider
					sx={{
						width: ["70%", "80%", "83%"],
						backgroundColor: "#1D5352"
					}}
				/>
			</Box>
			{(filter === "Q&A" || filter === "Both") &&
				questions.map((q, i) => <Question key={i} data={q} />)}
		</Box>
	);
};
