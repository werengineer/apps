"use client";
import { Box, Button, Divider, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { AddAnswer } from "./AddAnswer";
import { Answer } from "./Answer";
import { PropTypes } from "prop-types";

export const Answers = ({ questionId, answers, setAnswers }) => {
	const [end, setEnd] = useState(10);

	useEffect(() => {}, [answers]);

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				gap: "2vh"
			}}
		>
			<AddAnswer questionId={questionId} setAnswers={setAnswers} answers={answers} />
			<Divider
				sx={{
					backgroundColor: "#1D5352",
					// ml: [1, 1, 0],
					width: "100%",
					mt: [2, 2, 4]
				}}
			/>
			<Typography
				sx={{
					px: [2.5, 2.5, "0"],
					mt: 1
				}}
			>
				{answers?.length} Answers
			</Typography>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					gap: "5vh",
					mt: 2
					// px: [2.5, 2.5, "0"]
				}}
			>
				{answers?.slice(0, end).map((a, i) => (
					<Answer questionId={questionId} key={1} id={a} main={i === 0 ? true : false} />
				))}
			</Box>

			<Button
				sx={{
					color: "grey",
					border: "1px solid grey",
					mb: 2,
					width: "200px",
					mx: "auto",
					borderRadius: "30px",
					display: answers?.length - 1 <= end ? "none" : "flex"
				}}
				onClick={() => {
					setEnd(end + 10);
				}}
			>
				Load More Answers
			</Button>
		</Box>
	);
};
Answers.propTypes = {
	questionId: PropTypes.any,
	answers: PropTypes.any,
	setAnswers: PropTypes.any
};
