/* eslint-disable no-useless-catch */
import { API_URL } from "@constants";
import { getEngineer } from "@cookies";
import axios from "axios";

export const submitQuestion1 = async (engineer, questionId, data) => {
	try {
		const response = await axios.post(`${API_URL}/answers/create/${questionId}`, data, {
			headers: {
				EngineerID: engineer._id
			}
		});
		return response.data;
	} catch (error) {
		throw error;
	}
};

export const fetchAnswersByEngineer = async (engineer, enqueueSnackbar) => {
	try {
		const res = await axios.get(`${API_URL}/question/get/answer?engineer=${engineer?._id}`);
		console.log(res);
		return res.data;
	} catch (error) {
		enqueueSnackbar(error.message || "Server error", { variant: "error" });
	}
};

export const Data1 = async (id) => {
	try {
		const response = await axios.get(`${API_URL}/answers/get/${id}`);
		return response.data;
	} catch (error) {
		throw error;
	}
};

export const AnsweredBy = async (data1) => {
	try {
		const res = await axios.get(`${API_URL}/engineer/get?id=${data1.engineer}`);
		return res;
	} catch (error) {
		throw error;
	}
};

export const Upvote = async (data, engineer) => {
	try {
		await axios.put(
			`${API_URL}/answers/upvote/${data._id}`,
			{},
			{ headers: { EngineerID: `${engineer?._id}` } }
		);
	} catch (error) {
		throw error;
	}
};
