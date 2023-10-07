/* eslint-disable no-unused-vars */
import { API_URL } from "@constants";
import { ListModalContext } from "@context/listModal";
import { getEngineer } from "@cookies";
import axios from "axios";

const engineer = getEngineer();

export const fetchListsSever = async (questionId, question, storyId) => {
	try {
		if (engineer) {
			const lists = await axios.get(`${API_URL}/list/get`, {
				headers: {
					EngineerID: engineer._id
				}
			});
			// const updatedLists = (await question)
			// 	? lists.data.filter((list) => !list.questions.includes(questionId))
			// 	: lists.data.filter((list) => !list.stories.includes(storyId));
			return lists.data;
		}
	} catch (error) {
		// console.log(error);
		// throw error;
	}
};

export const QaddToList = async (questionId, listId, engineerId) => {
	// Q Stands For Question
	try {
		const res = await axios.put(
			`${API_URL}/list/addToList/${questionId}`,
			{},
			{
				headers: {
					EngineerID: engineerId,
					ListID: listId
				}
			}
		);
	} catch (error) {
		console.log(error);
		throw error;
	}
};

export const SaddToList = async (storyId, listId, engineerId) => {
	// S Stands For Story
	try {
		const res = await axios.put(
			`${API_URL}/list/addStoryToList/${storyId}`,
			{},
			{
				headers: {
					EngineerID: engineerId,
					ListID: listId
				}
			}
		);
	} catch (error) {
		console.log(error);
		throw error;
	}
};

export const createList = async (form) => {
	try {
		const res = await axios.post(`${API_URL}/list/create`, form.flatValues, {
			headers: {
				EngineerID: engineer._id
			}
		});
		return res?.data;
	} catch (error) {
		console.log(error);
		throw error;
	}
};

export const fetchAllListByEngineer = async (enqueueSnackbar) => {
	try {
		const res = await axios.get(`${API_URL}/list/get`, {
			headers: {
				EngineerID: engineer?._id
			}
		});
		console.log(res);
		return res.data;
	} catch (error) {
		enqueueSnackbar(error.message || "Server error", { variant: "error" });
	}
};
