import { API_URL } from "@constants";
import axios from "axios";

export const getStories = async () => {
	try {
		const stories = await axios.get(`${API_URL}/story/get`);
		console.log(stories.data);
		return stories.data;
	} catch (error) {
		// throw error
		console.log(error);
	}
};

export const createStory = async (id, title, tag, description) => {
	const storyData = {
		title,
		tag,
		description
	};
	if (id) {
		try {
			const res = axios
				.post(
					`${API_URL}/story/create`,
					{
						storyData
					},
					{
						headers: {
							EngineerID: id
						}
					}
				)
				.catch((error) => {
					console.log(error);
				});
			console.log(res);
			return res;
		} catch (error) {
			// throw error
			console.log(error);
		}
	}
};

export const likeStory = (EnId, Id) => {
	//ID is Refer to story Id
	if (Id) {
		try {
			const res = axios
				.post(`${API_URL}/story/like/${Id}`, {
					headers: {
						EngineerID: EnId
					}
				})
				.catch((error) => {
					console.log(error);
				});
			console.log(res);
		} catch (error) {
			// throw error
			console.log(error);
		}
	}
};
