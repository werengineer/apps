import { API_URL } from "@constants";
import axios from "axios";

export const getEvents = async (id) => {
	try {
		const data = await axios.get(`${API_URL}/calendar/event/month/${id}`);
		return data;
	} catch (error) {
		// throw error;
		console.log(error);
	}
};

export const reactEvent = async (id, reactionId, monthId, date) => {
	try {
		const data = {
			id: id,
			reactionId: reactionId,
			monthId: monthId,
			date: date
		};

		const result = await axios.post(`${API_URL}/calendar/event/react`, data);
		return result;
	} catch (error) {
		console.log(error);
		// throw error;
	}
};
export const getDay = async (date) => {
	try {
		const data = await axios.get(
			`${API_URL}/calendar/event/day?date=${date.$D}&monthId=${date.$M}`
		);
		return data.data;
	} catch (error) {
		console.log(error);
		throw error;
	}
};

export const getReactions = async (date, monthId) => {
	try {
		if (date && monthId) {
			const data = await axios.get(
				`${API_URL}/calendar/event/getReaction?date=${date}&?monthId=${monthId}`
			);

			return data;
		}
	} catch (error) {
		// throw error;
		console.log(error);
	}
};

export const getUserReactions = async (id) => {
	try {
		// /event/getUserReactions/:id
		if (id) {
			const data = await axios.get(`${API_URL}/calendar/event/getUserReactions/${id}`);
			const reactionByMonth = [[], [], [], [], [], [], [], [], [], [], [], []];
			for (var i = 0; i <= 11; i++) {
				data.data.map((reaction) => {
					reaction.monthId === i &&
						reactionByMonth[i].push({ date: reaction.date, reactionId: reaction.reactionId });
				});
			}

			return reactionByMonth;
		}
	} catch (error) {
		// throw error;
		console.log(error);
	}
};

export const getReactionId = async (date, monthId, userId) => {
	try {
		const reactionId = await axios.get(
			`${API_URL}/calendar/event/getUserReaction?${date}&monthId=${monthId}&userId=${userId}`
		);
		return reactionId;
	} catch (error) {
		// throw error;
		console.log(error);
	}
};
