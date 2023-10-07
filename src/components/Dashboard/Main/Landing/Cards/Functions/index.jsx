import { API_URL, NEXT_PUBLIC_GUMROAD_ACCESS_TOKEN, NEXT_PUBLIC_GUMROAD_LINK } from "@constants";
import { getEngineer } from "@cookies";
import axios from "axios";

const engineer = getEngineer();

export const getProducts = async () => {
	try {
		const res = await axios.get(`${NEXT_PUBLIC_GUMROAD_LINK}/products`, {
			headers: {
				Authorization: `Bearer ${NEXT_PUBLIC_GUMROAD_ACCESS_TOKEN}`
			}
		});
		const products = res.data.products;
		// console.log(products);
		return products;
	} catch (error) {
		// throw error;
		console.log(error);
	}
};

export const getLists = async () => {
	if (engineer) {
		const res = await axios.get(`${API_URL}/list/get`, {
			headers: {
				EngineerID: engineer._id
			}
		});

		const list = res.data;
		return list;
	}

	// console.log(error);
};
