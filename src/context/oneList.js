"use client";
import { createContext } from "react";
import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { API_URL } from "@constants";
import { useParams } from "next/navigation";
import { getEngineer } from "@cookies";

export const OneListContext = createContext();

export const OneListState = ({ children }) => {
	const [stories, setStories] = useState([]);
	const [questions, setQuestions] = useState([]);
	const [storiesId, setStoriesId] = useState([]);
	const [questionsId, setQuestionsId] = useState([]);
	const [loading, setLoading] = useState(true);
	const [filter, setFilter] = useState("Both");
	const [data, setData] = useState({});

	const params = useParams();
	const engineer = getEngineer();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await axios.get(`${API_URL}/list/get?id=${params.id}`, {
					headers: {
						EngineerID: engineer?._id
					}
				});
				console.log(res.data);
				setData(res.data);
				setStoriesId(res.data.stories);
				setQuestionsId(res.data.questions);
				setLoading(false);
			} catch (error) {
				// Throw Error
			}
		};

		if (data?.stories?.length && data?.questions?.length) {
			setLoading(false);
		}
		if (storiesId.length === 0 && questionsId.length === 0) {
			fetchData();
		}
	}, []);

	useEffect(() => {
		setLoading(true);
		const fetchS = async () => {
			const promisesQ = questionsId.map(async (id) => {
				try {
					const response = await axios.get(`${API_URL}/question/get?id=${id}`);
					return response.data;
				} catch (error) {
					console.log(`Error fetching question with ID ${id}:`, error);
					return null;
				}
			});

			const responsesQ = await Promise.all(promisesQ);
			const fetchedQuestions = responsesQ.filter((question) => question !== null);
			console.log(fetchedQuestions);
			setQuestions(fetchedQuestions);
			setLoading(false);
		};
		if (questionsId.length > 0) {
			fetchS();
		}
	}, [questionsId]);

	useEffect(() => {
		setLoading(true);
		const fetchS = async () => {
			const promises = storiesId.map(async (id) => {
				try {
					const response = await axios.get(`${API_URL}/story/get?id=${id}`);
					return response.data;
				} catch (error) {
					console.log(`Error fetching story with ID ${id}:`, error);
					return null;
				}
			});

			const responses = await Promise.all(promises);
			const fetchedStories = responses.filter((story) => story !== null);
			console.log(fetchedStories);
			setStories(fetchedStories);
			setLoading(false);
		};
		setLoading(false);
		if (storiesId.length > 0) {
			fetchS();
		}
	}, [storiesId]);

	const addFilter = ({ fil }) => {
		setFilter(fil);
		console.log(filter);
	};

	return (
		<OneListContext.Provider
			value={{
				stories,
				questions,
				storiesId,
				loading,
				questionsId,
				addFilter,
				setFilter,
				filter
			}}
		>
			{children}
		</OneListContext.Provider>
	);
};

OneListState.propTypes = {
	children: PropTypes.any
};
