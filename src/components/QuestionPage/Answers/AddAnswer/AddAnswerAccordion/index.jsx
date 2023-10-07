"use client";
import { Attachment, KeyboardArrowDown } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material";
import React from "react";
import { AddAnswerEditor } from "./AddAnswerEditor";
import { MCarousel } from "./MCarousel.jsx";
import { FCarousel } from "./FCarousel";
import { PropTypes } from "prop-types";


export function AddAnswerAccordion({
	editorState,
	onEditorStateChange,
	removeFile,
	addFile,
	handleSubmit,
	loading,
	files
}) {
	return (
		<Accordion
			sx={{
				boxShadow: "none",
				width: ["88vw", "90vw", "100%"]
			}}
		>
			<AccordionSummary
				expandIcon={
					<KeyboardArrowDown
						sx={{
							color: "grey"
						}}
					/>
				}
				sx={{
					color: "grey"
				}}
			>
				<Typography>Answer |</Typography>
			</AccordionSummary>
			<AccordionDetails>
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
						flexDirection: "column"
					}}
				>
					<AddAnswerEditor
						editorState={editorState}
						onEditorStateChange={onEditorStateChange}
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
									},
								}}
								onClick={handleSubmit}
								loading={loading}
							>
								Post Answer
							</LoadingButton>
						</Box>
					</Box>
				</Box>
			</AccordionDetails>
		</Accordion>
	);
}

AddAnswerAccordion.propTypes = {
	editorState: PropTypes.any,
	onEditorStateChange: PropTypes.any,
	removeFile: PropTypes.any,
	addFile: PropTypes.any,
	handleSubmit: PropTypes.any,
	loading: PropTypes.any,
	files: PropTypes.any
};
