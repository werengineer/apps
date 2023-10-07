import axios from "axios";
import draftToHtml from "draftjs-to-html";
import { convertToRaw } from "draft-js";
import {
	API_URL,
	NEXT_PUBLIC_CLOUDINARY_API_KEY,
	NEXT_PUBLIC_CLOUD_BUCKET,
	NEXT_PUBLIC_UPLOAD_PRESET
} from "@constants";
import { getEngineer } from "@cookies";

const engineer = getEngineer();

export const submitQuestion = async (links, form, editorState, enqueueSnackbar) => {
	const data = {
		...form.flatValues,
		description: draftToHtml(convertToRaw(editorState.getCurrentContent())),
		files: links
	};
	try {
		const question = await axios.post(`${API_URL}/question/create`, data, {
			headers: {
				EngineerID: engineer?._id
			}
		});
		return question.data;
	} catch (error) {
		enqueueSnackbar(error.message || "Unknown Error Occurred", { variant: "error" });
	}
};

export const fetchEngineerQuestions = async (enqueueSnackbar) => {
	try {
		const res = await axios.get(`${API_URL}/question/get?engineer=${engineer?._id}`);
		return res.data;
	} catch (error) {
		enqueueSnackbar(error.message || "Server Error Occurred", { variant: "error" });
	}
};

export const uploadImages = async (links, files, enqueueSnackbar) => {
	console.log(files[0]);
	try {
		for (var i = 0; i < files.length; i++) {
			const response = await axios.post(
				`https://api.cloudinary.com/v1_1/${NEXT_PUBLIC_CLOUD_BUCKET}/image/upload`,
				{
					file: files[i].image,
					api_key: NEXT_PUBLIC_CLOUDINARY_API_KEY,
					upload_preset: NEXT_PUBLIC_UPLOAD_PRESET
				}
			);
			console.log(response);
			links.push({ name: files[i].name, link: response.data.secure_url });
			// return links;
		}
	} catch (error) {
		console.log(error);
		enqueueSnackbar(error?.response?.data?.message || "Try Again Later", { variant: "error" });
	}
	return links;
};
