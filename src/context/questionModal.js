"use client";
import PropTypes from "prop-types";
import React, { createContext, useState } from "react";

export const QuestionModalContext = createContext();

export const QuestionModalStates = (props) => {
	const [loading, setLoading] = useState(false);
	const [files, setFiles] = useState([]);
	const [links, setLinks] = useState([]);

	return (
		<QuestionModalContext.Provider
			value={{ loading, setLoading, files, setFiles, links, setLinks }}
		>
			{props.children}
		</QuestionModalContext.Provider>
	);
};

QuestionModalStates.propTypes = {
	children: PropTypes.any
};
