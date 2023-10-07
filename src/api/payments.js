import { API_URL } from "@constants";
import { getEngineer } from "@cookies";
import { ServerError } from "@lib";
import axios from "axios";

const engineer = getEngineer();

export const confirmPayment = async (data) => {
	try {
		const res = await axios.post(`${API_URL}/payments/confirmPayment`, data);
		return res.data;
	} catch (error) {
		console.log(error);
		throw error;
	}
};

export const confirmGhostPayment = async (data) => {
	try {
		const res = await axios.post(`${API_URL}/payments/ghostwriting/confirmPayment`, data);
		return res.data;
	} catch (error) {
		console.log(error);
		throw error;
	}
};

export const checkGhostPayment = async (id) => {
	try {
		const res = await axios.get(`${API_URL}/payments/ghostwriting/checkPayment/${id}`);
		return res.data;
	} catch (error) {
		console.log(error);
		throw error;
	}
};
