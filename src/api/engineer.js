import { API_URL } from "@constants";
import { getEngineer } from "@cookies";
import axios from "axios";

const eng = getEngineer();

export const signupEngineer = async (data, file) => {
	try {
		const signup = await axios.post(`${API_URL}/engineer/signup`, {
			...data,
			uploadedFile: file
		});
		return signup;
	} catch (error) {
		console.log(error);
		throw error;
	}
};
export const completeSignup = async (data) => {
	try {
		const signup = await axios.post(
			`${API_URL}/engineer/completeSignup`,
			{
				...data
			},
			{
				headers: {
					engineerID: data?.id
				}
			}
		);
		return signup.data;
	} catch (error) {
		console.log(error);
		throw error;
	}
};

export const signinEngineer = async (data) => {
	try {
		const signin = await axios.post(`${API_URL}/engineer/signin`, data);
		return signin;
	} catch (error) {
		console.log(error);
		throw error;
	}
};

export const validateEmail = async (email) => {
	try {
		const emailV = await axios.get(`${API_URL}/engineer/checkEmail/${email}`);
		return emailV.data.status;
	} catch (error) {
		console.log(error);
		throw error;
	}
};

export const validateUsername = async (username) => {
	try {
		const usernameV = await axios.get(`${API_URL}/engineer/checkUsername/${username}`);
		return usernameV.data.status;
	} catch (error) {
		console.log(error);
		throw error;
	}
};

export const validateMobNum = async (number) => {
	try {
		const numberV = await axios.get(`${API_URL}/engineer/checkMobNum/${number}`);
		return numberV.data.status;
	} catch (error) {
		console.log(error);
		throw error;
	}
};

export const getGeneralEngineer = async ({ id, username, email }) => {
	try {
		var engineer;
		if (id) {
			engineer = await axios.get(`${API_URL}/engineer/get?id=${id}`);
		} else if (username) {
			engineer = await axios.get(`${API_URL}/engineer/get?username=${username}`);
		} else if (email) {
			engineer = await axios.get(`${API_URL}/engineer/get?email=${username}`);
		} else {
			await axios.get(`${API_URL}/engineer/get`);
		}
		sessionStorage.setItem("userKey", JSON.stringify(engineer?.data));
		return engineer?.data;
	} catch (error) {
		console.log(error);
		throw error;
	}
};

export const getDevices = async (id) => {
	try {
		const devices = await axios.get(`${API_URL}/engineer/devices/${id}`);
		return devices.data;
	} catch (error) {
		console.log(error);
		throw error;
	}
};

export const addDevice = async (data) => {
	try {
		const devices = await axios.post(`${API_URL}/engineer/devices/add`, data, {
			headers: {
				EngineerID: eng._id
			}
		});
		return devices.data;
	} catch (error) {
		console.log(error);
		throw error;
	}
};

export const removeDevice = async (index) => {
	try {
		const devices = await axios.get(`${API_URL}/engineer/devices/remove/${eng._id}/${index}`);
		return devices.data;
	} catch (error) {
		console.log(error);
		throw error;
	}
};
