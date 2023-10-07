/* eslint-disable no-useless-catch */
import axios from "axios";
import { getEngineer } from "@cookies";
import { API_URL } from "@constants";

const engineer = getEngineer();
export const fetchEngineer1 = async (data) => {
	try {
		const res = await axios.get(`${API_URL}/engineer/get?id=${data?.engineer}`);
		return res;
	} catch (error) {
		throw error;
	}
};

export const Reaction = async ({ id }) => {
	try {
		if (engineer) {
			const reaction = await axios.get(`${API_URL}/question/reacted/${id}`, {
				headers: {
					EngineerID: engineer?._id
				}
			});
			if (reaction.data.message) {
				return -1;
			}
			return reaction?.data?.id;
		} else {
			return false;
		}
	} catch (error) {
		console.log("Question 59", error);
	}
};

export const Like = async ({ reactionID, questionID }) => {
	try {
		await axios.put(
			`${API_URL}/question/react/${questionID}`,
			{
				id: reactionID
			},
			{
				headers: {
					EngineerID: engineer?._id
				}
			}
		);
		return;
	} catch (error) {
		throw error;
	}
};
