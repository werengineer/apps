import axios from "axios";
import { getEngineer } from "@cookies";
import { API_URL } from "@constants";

const engineer = getEngineer();

export const Like = async ({ reactionID, storyID }) => {
	try {
		await axios.put(
			`${API_URL}/story/react/${storyID}`,
			{
				id: reactionID
			},
			{
				headers: {
					EngineerID: engineer?._id
				}
			}
		);
	} catch (error) {
		console.log(error);
	}
};

export const Reaction = async (story, data) => {
	try {
		if (engineer) {
			if (story) {
				const reaction = await axios.get(`${API_URL}/story/reacted/${story._id}`, {
					headers: {
						EngineerID: engineer?._id
					}
				});
				console.log(reaction.data);
				return reaction?.data?.id || -1;
			} else if (data) {
				const reaction = await axios.get(`${API_URL}/story/reacted/${story._id}`, {
					headers: {
						EngineerID: engineer?._id
					}
				});
				console.log(reaction.data);
				return reaction?.data?.id || -1;
			}
		} else {
			return false;
		}
	} catch (error) {
		console.log("Question 59", error);
	}
};

export const submitComment1 = async (storyId, engineer, data) => {
	try {
		const res = await axios.post(`${API_URL}/comments/create/${storyId}`, data, {
			headers: {
				EngineerID: engineer._id
			}
		});
		return res;
	} catch (error) {
		console.log(error);
		throw error;
	}
};

export const fetchCommentsByEngineer = async (engineer, enqueuSnackbar) => {
	try {
		const res = await axios.get(`${API_URL}/story/get/comment?engineer=${engineer?._id}`);
		return res.data;
	} catch (error) {
		enqueuSnackbar(error?.message || "Server error", { variant: "error" });
	}
};
