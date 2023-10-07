"use client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import { getEngineer } from "@cookies";
import { AnsweredBy, Data1, Upvote } from "../Functions";
import { AnswerHeader } from "./AnswerHeader";
import { AnswerFooter } from "./AnswerFooter";
import { AnswerAttachments } from "./AnswerAttachments";
import { AnswerImages } from "./AnswerImages";
import { PropTypes } from "prop-types";
import { useSetRecoilState } from "recoil";
import { loginModalState } from "@atom";

export const Answer = ({ questionId, id, main }) => {
	const [data, setData] = useState();
	const [answeredBy, setAnsweredBy] = useState();
	const [engineer, setEngineer] = useState();
	const [upvoted, setUpvoted] = useState(false);
	const [upvoteCounter, setUpvoteCounter] = useState();
	const [visible, setVisible] = useState(false);
	const setLoginModal = useSetRecoilState(loginModalState);

	console.log(data);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data1 = await Data1(id);
				setData(data1);

				setUpvoteCounter(data1?.upvotes?.length);

				const answeredBy = await AnsweredBy(data1);
				setAnsweredBy(answeredBy.data);

				const engineer = await getEngineer();
				console.log(engineer._id);
				setEngineer(engineer);
				setUpvoted(data1.upvotes?.includes(engineer?._id) ? true : false);
			} catch (error) {
				console.log("QuestionPage/Answer 40", error);
			}
		};
		fetchData();
	}, []);

	useEffect(() => {
		const answer = document.getElementById(`answer-${id}`);
		answer.innerHTML = data?.answer;

		console.log(data?.files);

		for (let i = 0; i < data?.files.length; i++) {
			console.log(data?.files[i].link);
			if (data?.files[i]?.link.slice(-3) === "pdf") {
				setVisible(true);
				break;
			}
		}
	}, [data]);

	const handleUpvote = async () => {

		if(!engineer){
			setLoginModal(true);
			return;
		}

		setUpvoted(!upvoted);
		upvoted === false ? setUpvoteCounter(upvoteCounter + 1) : setUpvoteCounter(upvoteCounter - 1);

		try {
			if (engineer) {
				await Upvote(data, engineer);
				return;
			}
		} catch (error) {
			setUpvoted(!!upvoted);
			upvoted === false
				? setUpvoteCounter(upvoteCounter - 1)
				: setUpvoteCounter(upvoteCounter + 1);
			console.log(error);
		}
	};

	return (
		<Box
			id={`${data?._id}`}
			sx={{
				display: "flex",
				flexDirection: "column",
				gap: "2vh",
				borderLeft: main ? "2px solid #05D9D7" : "0px",
				paddingLeft: main ? "20px" : "0px",
				paddingY: "10px",
				background:
					main && "linear-gradient(137.67deg, rgba(29, 83, 82, 0) 41.25%, #1D5352 98.2%)",
				borderRadius: "0px",
				width: ["90vw", "90vw", "65vw"]
			}}
		>
			<AnswerHeader questionId={questionId} answeredBy={answeredBy} data={data} />

			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					gap: ["0.5vh", "2vh"]
				}}
			>
				<Typography id={`answer-${id}`} fontSize={["12px", "14px", "16px"]}></Typography>
				<Box
					sx={{
						width: "100%",
						display: "flex",
						flexDirection: "column",
						gap: "2vh"
					}}
				>
					<AnswerImages data={data} />
					<AnswerAttachments visible={visible} data={data} />
				</Box>
				<AnswerFooter
					upvoted={upvoted}
					handleUpvote={handleUpvote}
					upvoteCounter={upvoteCounter}
				/>
			</Box>
		</Box>
	);
};

Answer.propTypes = {
	questionId: PropTypes.any,
	id: PropTypes.any,
	main: PropTypes.any
};
