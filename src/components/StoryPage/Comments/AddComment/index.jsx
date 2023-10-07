import { Attachment, CloseSharp } from "@mui/icons-material";
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Avatar,
	Box,
	Button,
	Typography
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { getEngineer } from "@cookies";
import { EditorState, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import dynamic from "next/dynamic";
import { LoadingButton } from "@mui/lab";
import draftToHtml from "draftjs-to-html";
import Carousel from "react-material-ui-carousel";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useSnackbar } from "notistack";
import { fetchCommentsByEngineer, submitComment1 } from "../../Functions";
import { PropTypes } from "prop-types";
import {
	NEXT_PUBLIC_CLOUDINARY_API_KEY,
	NEXT_PUBLIC_CLOUD_BUCKET,
	NEXT_PUBLIC_UPLOAD_PRESET
} from "@constants";
import { useSetRecoilState } from "recoil";
import { loginModalState } from "@atom";
import { FCarousel } from "@components/QuestionPage/Answers/AddAnswer/AddAnswerAccordion/FCarousel";
import { completeAchievement } from "@api/achievement";
import { achievementID } from "@lib/achievementID";
const Editor = dynamic(() => import("react-draft-wysiwyg").then((m) => m.Editor), {
	ssr: false
});

export const AddComment = ({ storyId, setComments, comments }) => {
	const [editorState, setEditorState] = useState(EditorState.createEmpty());
	const [files, setFiles] = useState([]);
	const [links, setLinks] = useState([]);
	const [loading, setLoading] = useState(false);
	const setLoginModal = useSetRecoilState(loginModalState);
	const { enqueueSnackbar } = useSnackbar();
	const engineer = getEngineer();

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
				files.includes(image) ? "" : setFiles((files) => [...files, image]);
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
			const response = await axios
				.post(`https://api.cloudinary.com/v1_1/${NEXT_PUBLIC_CLOUD_BUCKET}/image/upload`, {
					file: files[i].image,
					api_key: NEXT_PUBLIC_CLOUDINARY_API_KEY,
					upload_preset: NEXT_PUBLIC_UPLOAD_PRESET
				})
				.then((res) => {
					links.push({ name: files[i].name, link: res.data.secure_url });
				})
				.catch((err) => {
					console.log(err);
				});
			console.log(links);
			return links;
		}
	};

	const submitComment = async (links) => {
		if (!engineer) {
			setLoginModal(true);
			return;
		}
		const data = {
			comment: draftToHtml(convertToRaw(editorState.getCurrentContent())),
			files: links
		};
		try {
			const story = await submitComment1(storyId, engineer, data);
			const comments = await fetchCommentsByEngineer(engineer, enqueueSnackbar);
			if (comments.length === 1) {
				completeAchievement({
					id: achievementID.firstComment,
					enqueueSnackbar: enqueueSnackbar
				}).catch((error) =>
					enqueueSnackbar(error.message || "Server error", { variant: "error" })
				);
			}
			return story.data;
		} catch (error) {
			console.log(error);
		}
	};

	const handleSubmit = async (e) => {
		setLoading(true);
		e.preventDefault();

		if (!engineer) {
			setLoginModal(true);
			return;
		}
		try {
			const link = await uploadImages();
			const data = await submitComment(link);
			const cmt = comments.concat(data.commentSaved._id);
			setComments(cmt);
			enqueueSnackbar("Comment Added Successfully");
			setEditorState("");
		} catch (error) {
			enqueueSnackbar(error || "Something Went Wrong");
		}
		setLoading(false);
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

			document.querySelectorAll(".public-DraftEditor-content");

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

			document.querySelector(".wrapperClassName");
		}
	});

	return (
		<Box
			id="addcomment"
			sx={{
				display: "flex",
				flexDirection: "column",
				paddingRight: "30px",
				gap: ["20px", "25px", "30px"],
				px: ["5vw", "5vw", "0"]
			}}
		>
			<Box
				sx={{
					display: engineer ? "none" : "flex",
					color: "#1D5352"
				}}
			>
				<Typography>Let the world hear you!</Typography>
			</Box>
			<Box
				sx={{
					display: engineer ? "flex" : "none",
					alignItems: "center",
					gap: 2
				}}
			>
				<Avatar src={engineer?.avatar} />
				<Typography
					sx={{
						fontSize: ["13px", "14px", "15px"]
					}}
				>
					{engineer?.name}
				</Typography>
			</Box>
			<Accordion
				sx={{
					boxShadow: "none",
					width: ["100%"]
				}}
			>
				<AccordionSummary
					expandIcon={<KeyboardArrowDownIcon sx={{ color: "grey" }} />}
					sx={{
						color: "grey"
					}}
				>
					<Typography>Share Your Thoughts |</Typography>
				</AccordionSummary>

				<AccordionDetails>
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
							flexDirection: "column"
						}}
					>
						<Editor
							name="form"
							label="form"
							placeholder="Type here..."
							editorState={editorState}
							toolbarClassName="toolbarAnswerClassName"
							wrapperClassName="wrapperAnswerClassName"
							editorClassName="editorAnswerClassName"
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

						<Box
							sx={{
								display: "flex",
								flexDirection: ["column", "row"],
								width: "100%",
								gap: "2vh",
								alignItems: "center"
							}}
						>
							<FCarousel files={files} removeFile={removeFile} />
							<Box
								sx={{
									display: "flex",
									flexDirection: ["row"],
									width: "100%",
									justifyContent: ["space-between", "end"],
									alignItems: "center",
									gap: "20px"
								}}
							>
								<Box>
									<label
										style={{
											borderRadius: "30px",
											color: "grey",
											transform: "rotate(-90deg)",
											cursor: "pointer"
										}}
										htmlFor="files"
									>
										<Attachment />
									</label>
									<Box>
										<input
											type={"file"}
											multiple
											onChange={addFile}
											id="files"
											style={{
												display: "none"
											}}
										/>
									</Box>
								</Box>
								<LoadingButton
									sx={{
										paddingX: "25px",
										borderRadius: "30px",
										border: "1px solid grey",
										color: "grey",
										":hover": {
											backgroundColor: "grey",
											color: "#212121"
										}
									}}
									onClick={handleSubmit}
									loading={loading}
								>
									Commment
								</LoadingButton>
							</Box>
						</Box>
					</Box>
				</AccordionDetails>
			</Accordion>
		</Box>
	);
};

AddComment.propTypes = {
	storyId: PropTypes.any,
	setComments: PropTypes.any,
	comments: PropTypes.any
};
