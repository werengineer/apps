import { API_URL } from "@constants";
import axios from "axios";


export const searchAll = async (q) => {
	try {
		const search = await axios.get(`${API_URL}/search?q=${q}`);
		return search.data;
	} catch (error) {
		console.log(error);
		throw error;
	}
};