import { API_URL } from "@constants";
import { getEngineer } from "@cookies";
import { ServerError } from "@lib";
import axios from "axios";

const engineer = getEngineer();

export const fetchAchievements = async ({ type }) => {
	let res;
	try {
		if (type === "all") {
			res = await axios.get(`${API_URL}/achievement/get`);
		} else {
			res = await axios.get(`${API_URL}/achievement/get?type=${type}`);
		}
		return res.data;
	} catch (error) {
		throw new ServerError("Cannot fetch achievements");
	}
};

export const completeAchievement = async ({ id, enqueueSnackbar, engineerId }) => {
	let res;
	try {
		res = await axios.put(
			`${API_URL}/achievement/complete/${id}`,
			{},
			{
				headers: {
					EngineerID: engineerId ? engineerId : engineer?._id
				}
			}
		);
		enqueueSnackbar(res.data?.message, { variant: "success" });
		return;
	} catch (error) {
		throw new ServerError("Internal Server Error");
	}
};
