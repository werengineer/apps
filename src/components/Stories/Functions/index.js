import axios from "axios";
import { getEngineer } from "@cookies";
import { API_URL } from "@constants";

const engineer = getEngineer();

export const Like = async ({ reactionID, storyID }) => {
	try {
		const reaction = await axios.put(
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

		console.log(reaction);
	} catch (error) {
		console.log(error);
	}
};

export const Reaction = async ({ id }) => {
	try {
		if (engineer) {
			const reaction = await axios.get(`${API_URL}/story/reacted/${id}`, {
				headers: {
					EngineerID: engineer?._id
				}
			});
			console.log(reaction.data);
			// return reaction?.data?.id || -1;
			if (reaction.data.message) {
				return -1;
			}
			return reaction?.data?.id;
		} else {
			return -1;
		}
	} catch (error) {
		console.log("Story 59", error);
	}
};

export const deleteStory = async (id) => {
	try {
		await axios.delete(`${API_URL}/story/delete/${id}`, {
			headers: {
				EngineerID: engineer?._id
			}
		});
		return;
	} catch (error) {
		console.log(error);
		throw error;
	}
};
