"use client";
import { loginModalState } from "@atom";
import { QuestionsMain } from "@components/Questions";
import { API_URL } from "@constants";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { useQuestionStore } from "@store";

export default function QuestionPage() {

	const [open, setOpen] = useRecoilState(loginModalState);
	const [skip, setSkip] = useState(0);
	const [limit, setLimit] = useState(10);
	const [completed, setCompleted] = useState(false);
	const [loading1, setLoading1] = useState(true);
	const [loading, setLoading] = useState(false);
	const [firstLoad, setFirstLoad] = useState(false);
	const setQuestions = useQuestionStore((state) => state?.setQuestions);
	const questions = useQuestionStore((state) => state?.questions);


	const fetchQuestions = async () => {
		let data = questions;
		setLoading(true);
		try {
			const questionsData = await axios.get(
				`${API_URL}/question/get?skip=${skip}&limit=${limit}`
			);
			if (questionsData.data.length < 10) {
				setCompleted(true);
			}
			data = questions.concat(questionsData.data);
			setSkip(skip + 10);
			
			setQuestions(data);
		} catch (error) {
			console.log("questions getServerSideProps", error);
		} finally {
			setLoading(false);
			setLoading1(false);
		}
	};

	useEffect(() => {
		setFirstLoad(true);
		fetchQuestions();
		setFirstLoad(false);
	}, []);

	return (
		<>
			<Box
				display={"flex"}
				sx={{
					mt: [8, 9],
					ml: ["auto", 8],
					maxWidth: "100vw",
					display: "flex",
					overflowY: "hidden"
				}}
			>
				{loading1 ? (
					<Box
						sx={{
							display: "flex",
							width: ["100%", "100%", "75%"],
							height: ["90vh", "87vh"],
							justifyContent: "center",
							alignItems: "center",
							color: "#1D5352"
						}}
					>
						<CircularProgress color="inherit" />
					</Box>
				) : (
					<Box
						sx={{
							width: ["100%", "100%", "75%"],
							pl: [0, 0, 0],
							pr: [0, 0, 0]
						}}
					>
					
						<QuestionsMain
							questions={questions}
							fetchQuestions={fetchQuestions}
							completed={completed}
							loading={loading}
						/>
					</Box>
				)}
			</Box>
		</>
	);
}
