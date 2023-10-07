import { API_URL } from "@constants";
import axios from "axios";

export const Events = async (date) => {
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

export const EventDay = async (date) => {
	try {
		const data = await axios.get(`${API_URL}/calendar/event/month/${date.$M}`);
		return data.data;
	} catch (error) {
		console.log(error);
		throw error;
	}
};
