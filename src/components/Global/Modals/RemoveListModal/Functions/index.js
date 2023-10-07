/* eslint-disable no-useless-catch */
import axios from "axios";
import { getEngineer } from "@cookies";
import { API_URL } from "@constants";

const engineer = getEngineer();

export const List = async (question, questionId, storyId) => {
	try {
		const lists = await axios.get(`${API_URL}/list/get`, {
			headers: {
				EngineerID: engineer?._id
			}
		});
		const updatedLists = question
			? lists.data.filter((list) => list.questions.includes(questionId))
			: lists.data.filter((list) => list.stories.includes(storyId));
		return updatedLists;
	} catch (error) {
		throw error;
	}
};

export const SremovedFromList = async (storyId, listId, engineerId) => {
	// Q Stands For Question
	try {
		const res = await axios.put(
			`${API_URL}/list/removeStoryFromList/${storyId}`,
			{},
			{
				headers: {
					EngineerID: engineerId,
					ListID: listId
				}
			}
		);
	} catch (error) {
		throw error;
	}
};

export const QremovedFromList = async (questionId, listId, engineerId) => {
	// Q Stands For Question
	try {
		const res = await axios.put(
			`${API_URL}/list/removeFromList/${questionId}`,
			{},
			{
				headers: {
					EngineerID: engineerId,
					ListID: listId
				}
			}
		);
	} catch (error) {
		throw error;
	}
};
