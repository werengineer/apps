import { API_URL } from "@constants";
import { ServerError } from "@lib";
import axios from "axios";

export const fetchPuzzle = async ({ blockID }) => {
	var block = {};
	try {
		const res = await axios.get(`${API_URL}/block/getBlock/${blockID}`);
		block = res.data;
		return block;
	} catch (error) {
		throw new ServerError("Server Error");
	}
};

export const fetchMeta = async ({ blogs }) => {
	var arr = [];
	try {
		const promises = blogs?.map((link) => {
			return axios.get(`${API_URL}/tools/metadata?url=${link}`);
		});
		if (promises) {
			// eslint-disable-next-line no-undef
			const results = await Promise.all(promises);
			const metadata = results.map((result) => result.data);
			arr = metadata;
		}
		return arr;
	} catch (error) {
		throw new ServerError("Server Error");
	}
};
