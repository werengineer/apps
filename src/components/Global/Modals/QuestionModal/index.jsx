"use client";
import React, { useState, useEffect, useContext } from "react";
import { Box, Modal, Fade, Typography } from "@mui/material";
import { Attachment } from "@mui/icons-material";

import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import dynamic from "next/dynamic";
import { Formiz, useForm } from "@formiz/core";
import { useRecoilState } from "recoil";
// import { questionModalState } from "@atom/index";
import { LoadingButton } from "@mui/lab";
import { useSnackbar } from "notistack";
import { fetchEngineerQuestions, submitQuestion, uploadImages } from "./Functions";
const Editor = dynamic(() => import("react-draft-wysiwyg").then((m) => m.Editor), {
	ssr: true
});
import { TitleInput, QuestionTag } from "./Question/Inputs";
import { useRouter } from "next/navigation";
import { QuestionHeader } from "./Question/QuestionHeader";
import { QuestionCarousel } from "./Question/QuestionCarousel";
import { QuestionModalContext } from "@context/questionModal";
import { questionModalState } from "@atom";
import { useQuestionStore } from "store/questionsStore";
import { completeAchievement } from "@api/achievement";
import { achievementID } from "@lib/achievementID";

export const QuestionModal = () => {
	const [open, setOpen] = useRecoilState(questionModalState);
	const [editorState, setEditorState] = useState(EditorState.createEmpty());
	const { enqueueSnackbar } = useSnackbar();
	const form = useForm();
	const router = useRouter();
	const { loading, setLoading, files, setFiles, links, setLinks } =
		useContext(QuestionModalContext);
	const addQuestion = useQuestionStore((state) => state.addQuestion);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		try {
			const link = await uploadImages(links, files, enqueueSnackbar);
			setLinks(link);
			try {
				const que = await submitQuestion(links, form, editorState, enqueueSnackbar);
				enqueueSnackbar("Question Added Successfully", { variant: "success" });
				setEditorState(EditorState.createEmpty());
				setFiles([]);
				setOpen(false);
				console.log(que);
				// addQuestion({ data: que });
				const questions = await fetchEngineerQuestions(enqueueSnackbar);
				console.log(questions);
				if (questions.length === 1) {
					completeAchievement({
						id: achievementID.firstQuestion,
						enqueueSnackbar: enqueueSnackbar
					}).catch((error) =>
						enqueueSnackbar(error.message || "Server error occured", { variant: "error" })
					);
				}
				// router.push(`/questions/${que?._id}`);
			} catch (error) {
				console.log(error);
			}
		} catch (error) {
			enqueueSnackbar(error.message || "Unknown error occurred", { variant: "error" });
		} finally {
			setLoading(false);
		}
	};

	const addImage1 = (e) => {
		for (let i = 0; i < e.target.files.length; i++) {
			var image = { name: "", image: "" };
			const reader = new FileReader();
			image.name = e.target.files[i].name;
			reader.readAsDataURL(e.target.files[i]);
			reader.onload = (readerEvent) => {
				image.image = "";
				image.image = readerEvent.currentTarget.result;
				// eslint-disable-next-line no-undef
				files.includes(image) ? pass : setFiles((files) => [...files, image]);
			};
		}
	};

	const removeFile = (name) => {
		const updatedFiles = files?.filter((f) => f.name !== name);
		setFiles(updatedFiles);
	};

	const onEditorStateChange = (e) => {
		setEditorState(e);
	};

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
		}
	});

	return (
		<Modal
			open={open}
			sx={{
				width: "100vw",
				height: "100vh",
				backgroundColor: "rgba(0, 0, 0, 0.8)",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				overflowY: "scroll"
			}}
		>
			<Fade in={open}>
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						flexDirection: ["row-reverse", "row"]
					}}
				>
					<Box
						sx={{
							width: ["100vw", "70vw", "50vw"],
							height: ["100vh", "55vh", "90vh"],
							border: ["0px", "1px solid #05D9D7"],
							borderRadius: ["0px", "10px"],
							px: "30px",
							py: "30px",
							display: "flex",
							flexDirection: "column",
							gap: "3vh",
							backgroundColor: "#212121",
							overflowY: "scroll"
						}}
					>
						<QuestionHeader loading={loading} handleSubmit={handleSubmit} setOpen={setOpen} />
						<Formiz connect={form} onValidSubmit={handleSubmit}>
							<Box
								sx={{
									display: "flex",
									flexDirection: "column"
								}}
							>
								<Box
									sx={{
										display: "flex",
										alignItems: "center",
										gap: "20px"
									}}
								>
									<TitleInput
										type="text"
										required={"Question is required"}
										name="title"
										label="Title"
									/>

									<label
										htmlFor="files"
										style={{
											margin: "auto",
											marginTop: "40px",
											cursor: "pointer"
										}}
									>
										<Attachment
											sx={{
												color: "grey"
											}}
										/>
									</label>

									<input
										id="files"
										type="file"
										style={{
											display: "none"
										}}
										onChange={addImage1}
									/>
								</Box>
								<Box>
									<QuestionTag name="tag" />
								</Box>

								<Box
									sx={{
										position: "relative"
									}}
								>
									<Typography
										sx={{
											fontSize: "12px",
											color: "grey",
											mt: "15px"
										}}
									>
										Description
									</Typography>
									<Editor
										name="form"
										label="form"
										placeholder="Describe your question"
										editorState={editorState}
										toolbarClassName="toolbarClassName"
										wrapperClassName="wrapperClassName"
										editorClassName="editorClassName"
										onEditorStateChange={onEditorStateChange}
										toolbar={{
											options: ["inline", "blockType", "emoji"],
											inline: {
												options: ["italic", "bold"],
												italic: {
													className: "icon-style"
												}
											},
											blockType: {
												inDropdown: false,
												options: ["Normal", "Blockquote", "Code"],
												Normal: {
													className: undefined
												}
											},
											image: {
												className: undefined,
												component: undefined,
												popupClassName: undefined,
												uploadCallback: undefined,
												previewImage: false,
												inputAccept:
													"image/gif,image/jpeg,image/jpg,image/png,image/svg",
												alt: { present: false, mandatory: false },
												defaultSize: {
													height: "auto",
													width: "auto"
												}
											}
										}}
									/>
								</Box>
								<QuestionCarousel files={files} removeFile={removeFile} />
								<LoadingButton
									loading={loading}
									sx={{
										display: ["none", "none", "flex"],
										border: "1px solid #05D9D7",
										width: 180,
										px: "20px",
										alignSelf: "flex-end",
										borderRadius: "30px"
										// color: "#05D9D7"
									}}
									onClick={handleSubmit}
								>
									Post Question
								</LoadingButton>
							</Box>
						</Formiz>
					</Box>
				</Box>
			</Fade>
		</Modal>
	);
};
