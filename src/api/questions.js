import {
	NEXT_PUBLIC_UPLOAD_PRESET,
	NEXT_PUBLIC_CLOUDINARY_API_KEY,
	NEXT_PUBLIC_CLOUD_BUCKET,
	API_URL
} from "@constants";
import { getEngineer } from "@cookies";
import axios from "axios";

const engineer = getEngineer();

export const getQuestions = async () => {
	try {
		const questions = await axios.get(`${API_URL}/question/get`);
		return questions.data;
	} catch (error) {
		console.log(error);
		throw error;
	}
};

export const uploadImages = async (files, links) => {
	try {
		for (var i = 0; i < files.length; i++) {
			await axios
				.post(`https://api.cloudinary.com/v1_1/${NEXT_PUBLIC_CLOUD_BUCKET}/image/upload`, {
					file: files[i].image,
					api_key: NEXT_PUBLIC_CLOUDINARY_API_KEY,
					upload_preset: NEXT_PUBLIC_UPLOAD_PRESET
				})
				.then((response) =>
					links.push({ name: files[i].name, link: response.data.secure_url })
				);
		}
		return links;
	} catch (error) {
		console.log(error);
		throw error;
	}
};

export const submitQuestion = async (form, links, description, engineerId) => {
	const data = {
		...form.flatValues,
		description: description,
		files: links
	};

	try {
		await axios.post(`${API_URL}/question/create`, data, {
			headers: {
				EngineerID: engineerId
			}
		});
	} catch (error) {
		console.log(error);
		throw error;
	}
};
export const createQuestion = (e, files, links, form, description, engineerId, enqueueSnackbar) => {
	e.preventDefault();
	try {
		uploadImages(files, links)
			.then((links) =>
				submitQuestion(form, links, description, engineerId).then(() =>
					enqueueSnackbar("Question Added Successfully", { variant: "success" })
				)
			)
			.catch((error) => {
				enqueueSnackbar(error || "Unknown Error Occurred", { variant: "error" });
			});
	} catch (error) {
		console.log(error);
		enqueueSnackbar(error || "Unknown Error Occurred", { variant: "error" });
	}
};

export const fetchReaction = async (questionId, engineerId, enqueueSnackbar) => {
	try {
		const reaction = await axios.get(`${API_URL}/question/reacted/${questionId}`, {
			headers: {
				EngineerID: engineerId
			}
		});

		return reaction?.data?.message;
	} catch (error) {
		enqueueSnackbar(error || "Unknown Error Occurred", { variant: "error" });
		console.log(error);
		throw error;
	}
};

export const putReaction = async ({ reactionID, questionID }) => {
	try {
		await axios.put(
			`${API_URL}/question/react/${questionID}`,
			{
				id: reactionID
			},
			{
				headers: {
					EngineerID: engineer?._id
				}
			}
		);
	} catch (error) {
		console.log(error);
		throw error;
	}
};

export const getReaction = async (id) => {
	const reactions = await axios.get(`${API_URL}/question/reacted/${id}`, {
		headers: {
			EngineerID: engineer?._id
		}
	});
	return reactions;
};
