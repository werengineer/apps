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

export const submitStory = async (links, form, editorState) => {
	const data = {
		...form.flatValues,
		description: draftToHtml(convertToRaw(editorState.getCurrentContent())),
		files: links
	};
	// eslint-disable-next-line no-useless-catch
	try {
		const question = await axios.post(`${API_URL}/story/create`, data, {
			headers: {
				EngineerID: engineer._id
			}
		});
		return question.data;
	} catch (error) {
		throw error;
	}
};

export const fetchEngineerStories = async (enqueueSnackbar) => {
	try {
		const res = await axios.get(`${API_URL}/story/get?engineer=${engineer?._id}`);
		return res.data;
	} catch (error) {
		enqueueSnackbar(error.message || "Server error", { variant: "error" });
	}
};

export const uploadImages = async (links, files, enqueueSnackbar) => {
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
			links.push({ name: files[i].name, link: response.data.secure_url });
		}
	} catch (error) {
		console.log(error);
		enqueueSnackbar(error || "Try Again Later", { variant: "error" });
	}
	return links;
};
