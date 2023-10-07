"use client";
import { API_URL } from "@constants";
import axios from "axios";
import { usePathname } from "next/navigation";
import PropTypes from "prop-types";
import React, { createContext, useEffect, useState } from "react";

export const SetQuestionContext = createContext();

export const SetQuestionStates = (props) => {
	const [question, setQuestion] = useState({});
	const [id, setId] = useState("");

	useEffect(() => {
		const fetchQuestion = async () => {
			const res = await axios.get(`${API_URL}/question/get?id=${id}`);
			setQuestion(res.data);
		};
		fetchQuestion();
	}, []);

	return (
		<SetQuestionContext.Provider value={{ question, setId }}>
			{props.children}
		</SetQuestionContext.Provider>
	);
};

SetQuestionStates.propTypes = {
	children: PropTypes.any
};
