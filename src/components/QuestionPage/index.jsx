"use client";
import { Box, Divider } from "@mui/material";
import React, { useState } from "react";
import { Question } from "./Question";
import { Answers } from "./Answers";
import { PropTypes } from "prop-types";

export const QuestionMain = ({ data }) => {
	const [answers, setAnswers] = useState(data?.answers?.reverse());

	return (
		<Box
			sx={{
				width: ["100%", "100%", "71vw"],
				display: "flex",
				flexDirection: "column",
				gap: "3vh",
				px: 3,
				height: "100%",
				overflowY: "scroll",
				overflowX: "hidden",
				justifyContent: "center",
				mx: "auto",
				borderRight: ["0px", "0px", "1px solid grey"],
				mb: 2
			}}
		>
			<Question data={data} />
			<Divider
				sx={{
					bgcolor: "#1D5352",
					ml: [2, 2, 0]
				}}
			/>
			<Answers questionId={data?._id} answers={answers} setAnswers={setAnswers} />
		</Box>
	);
};

QuestionMain.propTypes = {
	data: PropTypes.any
};
