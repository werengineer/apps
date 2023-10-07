"use client";
import dynamic from "next/dynamic";
import React from "react";
const Editor = dynamic(() => import("react-draft-wysiwyg").then((m) => m.Editor), {
	ssr: false
});
import { PropTypes } from "prop-types";

export function AddAnswerEditor({ editorState, onEditorStateChange }) {
	return (
		<Editor
			name="form"
			label="form"
			placeholder="Describe your answer"
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
					alt: {
						present: false,
						mandatory: false
					},
					defaultSize: {
						height: "auto",
						width: "auto"
					}
				}
			}}
		/>
	);
}
AddAnswerEditor.propTypes = {
	editorState: PropTypes.any,
	onEditorStateChange: PropTypes.any
};
