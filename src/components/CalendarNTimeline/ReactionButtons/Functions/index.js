import { API_URL } from "@constants";
import axios from "axios";

export const ReactionsCounts = async (date, monthId) => {
	try {
		const res = await axios.get(
			`${API_URL}/calendar/event/getReaction?date=${date}&monthId=${monthId}`
		);
		return res.data;
	} catch (error) {
		console.log(error);
		throw error;
	}
};
