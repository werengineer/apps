import { API_URL } from "@constants";
import { getEngineer } from "@cookies";
import axios from "axios";

const engineer = getEngineer();

export const getProducts = async () => {
	try {
		const res = await axios.get(`${API_URL}/marketplace/get`);
		return res.data;
	} catch (error) {
		console.log(error);
		throw error;
	}
};
