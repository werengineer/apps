import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { getEngineer } from "../../../../../utils/getUserInfo";
import Question from "../../Questions/Question/Question";
import { LoadingButton } from "@mui/lab";
import { API_URL } from "@constants";

const Index = () => {
	const [questions, setQuestions] = useState([]);
	const [skip, setSkip] = useState(0);
	const [loading, setLoading] = useState(false);
	const [completed, setCompleted] = useState(false);
	const engineer = getEngineer();

	const fetchQuestions = async () => {
		setLoading(true);
		var data = questions;
		if (engineer) {
			try {
				const questionsData = await axios.get(
					`${API_URL}/question/get?engineer=${engineer?._id}&skip=${skip}&limit=10`,
					{
						headers: {
							"EngineerID": engineer?._id
						}
					}
				);
				// console.log(questionsData.data);
				// data.concat(questionsData.data);
				if(questionsData?.data?.length < 10){
					setCompleted(true);
				}

				data = questions.concat(questionsData.data);
				setQuestions(data);
				console.log(questions);
				setSkip(skip+10);
			} catch (error) {
				console.log(error);
			} finally {
				setLoading(false);
			}
		}
	};

	useEffect(() => {
		setLoading(true);
		fetchQuestions();
		setLoading(false);
	}, []);

	return (
		<Box
			sx={{
				display: "flex",
				gap: "4vh",
				flexDirection: "column"
			}}
		>
			{questions?.map((q, i) => <Question data={q} key={i} />)}
			<LoadingButton
				onClick={fetchQuestions}
				loading={loading}
				sx={{
					display: completed ? "none" : "flex",
					width: "150px",
					border: "1px solid grey",
					color: "grey",
					borderRadius: "30px",
					mb: "20px",
					mx: "auto"
				}}
			>
                Load More
			</LoadingButton>
		</Box>
	);
};

export default Index;