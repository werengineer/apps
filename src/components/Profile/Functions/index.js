import { API_URL } from "@constants";
import { EngineerError } from "@lib";
import axios from "axios";

export const fetchEngineer = async({ id }) => {

	try {
		const res = await axios.get(
			`${API_URL}/engineer/get?id=${id}`
		);
		return res.data;
	} catch (error) {
		throw EngineerError("Engineer Error");
	}
};