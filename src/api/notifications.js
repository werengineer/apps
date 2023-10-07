import { API_URL } from "@constants";
import { getEngineer } from "@cookies";
import { ServerError } from "@lib";
import axios from "axios";

const engineer = getEngineer();

export const getNotifications = async () => {
	try {
		const data = await axios.get(`${API_URL}/notifications/${engineer._id}`);
		return data.data;
	} catch (error) {
		console.log(error);
		throw error;
	}
};

export const clearNotifications = async () => {
	try {
		const data = await axios.get(`${API_URL}/notifications/clearAll/${engineer._id}`);
		return data.data;
	} catch (error) {
		console.log(error);
		throw error;
	}
};
