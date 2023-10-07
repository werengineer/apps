"use client";
import { Box, Modal, Fade, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import dynamic from "next/dynamic";
import { Formiz, useForm } from "@formiz/core";
import { Attachment, OpenInFullSharp } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { useSnackbar } from "notistack";
import { fetchEngineerStories, submitStory, uploadImages } from "./Functions";
const Editor = dynamic(() => import("react-draft-wysiwyg").then((m) => m.Editor), {
	ssr: true
});
import { useRecoilState } from "recoil";
import { storyModalState } from "@atom";
import { StoryTag, TitleInput } from "./Story/Inputs";
import { useRouter } from "next/navigation";
import { StoryHeader } from "./Story/StoryHeader";
import { StoryCarousel } from "./Story/StoryCarousel";
import { useStoryStore } from "store/storiesStore";
import { completeAchievement } from "@api/achievement";
import { achievementID } from "@lib/achievementID";

export const StoryModal = () => {
	const [open, setOpen] = useRecoilState(storyModalState);
	const [editorState, setEditorState] = useState(EditorState.createEmpty());

	const [loading, setLoading] = useState(false);
	const [files, setFiles] = useState([]);
	const [links, setLinks] = useState([]);
	const [twoSec, setTwoSec] = useState(1);
	const addStory = useStoryStore((state) => state.addStories);

	const form = useForm();
	const { enqueueSnackbar } = useSnackbar();
	const router = useRouter();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		try {
			const link = await uploadImages(links, files, enqueueSnackbar);
			setLinks(link);
			try {
				const story = await submitStory(links, form, editorState);
				enqueueSnackbar("Story Added Successfully", { variant: "success" });
				setEditorState(EditorState.createEmpty());
				setFiles([]);
				setOpen(false);
				addStory({ data: story });
				const stories = await fetchEngineerStories(enqueueSnackbar);
				console.log(stories);
				if (stories.length === 1) {
					completeAchievement({
						id: achievementID.firstStory,
						enqueueSnackbar: enqueueSnackbar
					}).catch((error) =>
						enqueueSnackbar(error.message || "Server error occured", { variant: "error" })
					);
				}

				router.push(`/stories/${story?._id}`);
			} catch (error) {
				enqueueSnackbar(error.message || "Something went wrong! Try Again Later", {
					variant: "error"
				});
			}
		} catch (error) {
			enqueueSnackbar(error.message || "Try Again Later", { variant: "error" });
		} finally {
			setLoading(false);
		}
	};

	const addImage = (e) => {
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
		const updatedFiles = files.filter((f) => f.name !== name);
		setFiles(updatedFiles);
	};

	const onEditorStateChange = (e) => {
		setEditorState(e);
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

			// eslint-disable-next-line no-unused-vars
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
		}
	}, [twoSec]);

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
					<StoryHeader setOpen={setOpen} loading={loading} handleSubmit={handleSubmit} />
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
									onChange={addImage}
								/>
							</Box>
							<Box>
								<StoryTag name="tag" />
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
										mt: "20px"
									}}
								>
									Description
								</Typography>

								<Editor
									name="form"
									label="form"
									placeholder="Describe your story"
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
											inputAccept: "image/gif,image/jpeg,image/jpg,image/png,image/svg",
											alt: { present: false, mandatory: false },
											defaultSize: {
												height: "auto",
												width: "auto"
											}
										}
									}}
								/>
							</Box>

							<Box
								sx={{
									display: "flex",
									flexDirection: "row",
									justifyContent: "space-between"
								}}
							>
								<StoryCarousel files={files} removeFile={removeFile} />
								<LoadingButton
									loading={loading}
									sx={{
										display: ["none", "none", "flex"],
										border: "1px solid #05D9D7",
										px: "20px",
										borderRadius: "30px"
									}}
									onClick={handleSubmit}
								>
									Post Story
								</LoadingButton>
							</Box>
						</Box>
					</Formiz>
				</Box>
			</Fade>
		</Modal>
	);
};
