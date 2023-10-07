import axios from "axios";
import { getEngineer } from "@cookies";
import { API_URL } from "@constants";
import { getReaction } from "@api";

const engineer = getEngineer();

export const Reaction = async({ id }) => {
	try {
		if (engineer) {
			const reaction = await getReaction(id);
			if (reaction.data.message) {
				return -1;
			}
			return reaction?.data?.id;
		} else {
			return false;
		}
	} catch (error) {
		console.log(error);
		throw error;
	}
};

export const deleteQuestion = async (id) => {
	try {
		await axios.delete(`${API_URL}/question/delete/${id}`, {
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
