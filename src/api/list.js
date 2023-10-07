import { API_URL } from "@constants";
import { getEngineer } from "@cookies";
import { ServerError } from "@lib";
import axios from "axios";

const engineer = getEngineer();

export const fetchLists = async() => {
	try {
		const res = await axios.get(`${API_URL}/list/get`, {
			headers: {
				EngineerID: engineer?._id
			}
		});
		return res.data;
	} catch (error) {
		throw ServerError("Server Error");
	}
};