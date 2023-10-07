import { API_URL } from "@constants";
import axios from "axios";

export const follow = async({ profileId, engineerID }) => {
	try {
		const res = await axios.put(
			`${API_URL}/engineer/follow?id=${profileId}`,
			{},
			{
				headers: {
					"EngineerID": engineerID
				}
			}
		);
		return res.data;
	} catch (error) {
		console.log(error);
		throw error;
	}
};