import { API_URL } from "@constants";
import axios from "axios";
import { setCookie } from "cookies-next";

export const verifyMobile = async (id) => {
	console.log(id);
	try {
		const res = await axios.put(
			`${API_URL}/engineer/verify/phone`,
			{},
			{
				headers: {
					EngineerID: id
				}
			}
		);
		// setCookie("engineer", JSON.stringify(res.data.updatedEngineer));
		sessionStorage.setItem("engineer", JSON.stringify(res.data.updatedEngineer));
		return;
	} catch (error) {
		console.log(error);
		throw error;
	}
};

export const fetchEngineer = async (id) => {
	try {
		const res = await axios.get(`${API_URL}/engineer/get?id=${id}`);
		return res.data;
	} catch (error) {
		console.log(error);
		throw error;
	}
};
