"use client";
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import Box from "@mui/material/Box";
import React, { useEffect, useState } from "react";
import { getEngineer } from "@cookies";
import { EditorState, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import axios from "axios";
import { AddAnswerHeader } from "./AddAnswerHeader";
import { AddAnswerAccordion } from "./AddAnswerAccordion";
import {
	NEXT_PUBLIC_CLOUDINARY_API_KEY,
	NEXT_PUBLIC_CLOUD_BUCKET,
	NEXT_PUBLIC_UPLOAD_PRESET
} from "@constants";
import { fetchAnswersByEngineer, submitQuestion1 } from "../Functions";
import { PropTypes } from "prop-types";
import { useSetRecoilState } from "recoil";
import { loginModalState } from "@atom";
import { useSnackbar } from "notistack";
import { completeAchievement } from "@api/achievement";
import { achievementID } from "@lib/achievementID";

export const AddAnswer = ({ questionId, setAnswers, answers }) => {
	const [engineer, setEngineer] = useState();
	const [editorState, setEditorState] = useState(EditorState.createEmpty());
	const [files, setFiles] = useState([]);
	const [links, setLinks] = useState([]);
	const [loading, setLoading] = useState(false);
	const [twoSec, setTwoSec] = useState(1);
	const setLoginModal = useSetRecoilState(loginModalState);
	const { enqueueSnackbar } = useSnackbar();

	useEffect(() => {
		const fetchEngineer = async () => {
			const engineer = await getEngineer();
			setEngineer(engineer);
			
		};

		fetchEngineer();
	}, []);

	const onEditorStateChange = (e) => {
		setEditorState(e);
	};

	const addFile = (e) => {
		console.log(e.target.files.length);

		for (let i = 0; i < e.target.files.length; i++) {
			var image = { name: "", image: "" };
			const reader = new FileReader();
			image.name = e.target.files[i].name;
			console.log(e.target.files[i].name);

			reader.readAsDataURL(e.target.files[i]);

			reader.onload = (readerEvent) => {
				image.image = "";
				image.image = readerEvent.currentTarget.result;
				files.includes(image) ? pass : setFiles((files) => [...files, image]);
			};
		}

		console.log(files);
	};

	const removeFile = (name) => {
		const updatedFiles = files.filter((f) => f.name !== name);
		setFiles(updatedFiles);
	};

	const uploadImages = async () => {
		for (var i = 0; i < files.length; i++) {
			try {
				const response = await axios.post(
					`https://api.cloudinary.com/v1_1/${NEXT_PUBLIC_CLOUD_BUCKET}/image/upload`,
					{
						file: files[i].image,
						api_key: NEXT_PUBLIC_CLOUDINARY_API_KEY,
						upload_preset: NEXT_PUBLIC_UPLOAD_PRESET
					}
				);
				links.push({ name: files[i].name, link: response.data.secure_url });
			} catch (error) {
				console.log(error);
			}
		}
		return links;
	};

	const submitQuestion = async (links) => {
		const data = {
			answer: draftToHtml(convertToRaw(editorState.getCurrentContent())),
			files: links
		};

		try {
			const question = await submitQuestion1(engineer, questionId, data);
			return question;
		} catch (error) {
			console.log(error);
		}
	};

	const handleSubmit = async (e) => {
		if (!engineer) {
			setLoginModal(true);
			return;
		}
		setLoading(true);
		e.preventDefault();
		try {
			const links = await uploadImages();
			const data = await submitQuestion(links);
			const answers = await fetchAnswersByEngineer(engineer, enqueueSnackbar);
			console.log(answers);
			if (answers.length === 1) {
				completeAchievement({
					id: achievementID.firstAnswer,
					enqueueSnackbar: enqueueSnackbar
				}).catch((error) =>
					enqueueSnackbar(error.message || "Server error", { variant: "error" })
				);
			}
			const ans = answers.concat(data.answerSaved._id);
			setAnswers(ans);
		} catch (error) {
			alert(error);
			setLoading(false);
		}
		setLoading(false);
		// router.reload();
	};

	setTimeout(() => {
		setTwoSec(twoSec + 1);
	}, 1000);

	useEffect(() => {
		if (typeof window !== "undefined") {
			const buttons = document.querySelectorAll(".rdw-option-wrapper");
			buttons.forEach((button) => {
				if (button.title === "Image") {
					button.firstElementChild.src = "/images/Icons/Image.png";
					button.classList.add("btn");
				}
				if (button.title === "Bold") {
					button.firstElementChild.src = "/images/Icons/Bold.png";
					button.classList.add("btn");
				}
				if (button.title === "Italic") {
					button.firstElementChild.src = "/images/Icons/Italic.png";
					button.classList.add("btn");
				}
				if (button.innerHTML === "Code") {
					button.innerHTML = "";
					button.innerHTML = "<img src='/images/Icons/Code.png'/>";
					button.classList.add("btn");
				}
				if (button.innerHTML === "Emoji") {
					button.innerHTML = "";
					button.innerHTML = "<img src='/images/Icons/Code.png'/>";
					button.classList.add("btn");
				}
				if (button.innerHTML === "Blockquote") {
					button.innerHTML = "";
					button.innerHTML = "<img src='/images/Icons/Quote.png'/>";
					button.classList.add("btn");
				}
			});

			const textBoxDiv = document.querySelectorAll(".public-DraftEditor-content");

			const emoji = buttons.item(5);
			if (emoji) {
				emoji.firstElementChild.src = "/images/Icons/Emoji.png";
				emoji.classList.add("btn");
			}

			const normal = buttons.item(2);
			if (normal) {
				normal.innerHTML = "<p style='color:grey; font-weight: 700; margin: auto'>N</p>";
				normal.classList.add("btn");
			}

			const editor = document.querySelector(".wrapperClassName");
		}
	}, [twoSec]);

	return (
		<Box
			id="addanswer"
			sx={{
				display: "flex",
				flexDirection: "column",
				paddingRight: "30px",
				gap: "3vh",
				pl: ["0"]
			}}
		>
			<AddAnswerHeader engineer={engineer} />

			<AddAnswerAccordion
				editorState={editorState}
				onEditorStateChange={onEditorStateChange}
				files={files}
				removeFile={removeFile}
				addFile={addFile}
				handleSubmit={handleSubmit}
				loading={loading}
			/>
		</Box>
	);
};

AddAnswer.propTypes = {
	questionId: PropTypes.any,
	setAnswers: PropTypes.any,
	answers: PropTypes.any
};
