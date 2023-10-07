import axios from "axios";
import { getEngineer } from "@cookies";
import {
	API_URL,
	NEXT_PUBLIC_CLOUDINARY_API_KEY,
	NEXT_PUBLIC_CLOUD_BUCKET,
	NEXT_PUBLIC_UPLOAD_PRESET
} from "@constants";

const engineer = getEngineer();

export const handleImage = async (files, i) => {
	const response = await axios.post(
		`https://api.cloudinary.com/v1_1/${NEXT_PUBLIC_CLOUD_BUCKET}/image/upload`,
		{
			file: files[i].image,
			api_key: NEXT_PUBLIC_CLOUDINARY_API_KEY,
			upload_preset: NEXT_PUBLIC_UPLOAD_PRESET
		}
	);
	return response.data.secure_url;
};

export const sumbitCmt = async (data, storyId) => {
	const comment = await axios.post(`${API_URL}/comments/create/${storyId}`, data, {
		headers: {
			EngineerID: engineer._id
		}
	});
	return comment.data;
};

export const Like = (data) => {
	const res = axios.put(
		`${API_URL}/answers/upvote/${data._id}`,
		{},
		{
			headers: { EngineerID: `${engineer?._id}` }
		}
	);
	return res;
};

export const fetchData1 = async (id) => {
	const res = await axios.get(`${API_URL}/comments/get/${id}`);
	return res;
};
