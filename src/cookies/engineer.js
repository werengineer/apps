import { getCookie, setCookie, deleteCookie } from "cookies-next";

export const getUser = () => {
	const providerData =
		getCookie("providerData") === undefined ? [false] : JSON.parse(getCookie("providerData"));
	return providerData;
};

export const getEngineer = () => {
<<<<<<< HEAD
	const engineerData = getCookie("engineer") !== undefined ? JSON.parse(getCookie("engineer")) : false;
	return engineerData
=======
	const engineerData =
		getCookie("engineer") !== undefined ? JSON.parse(getCookie("engineer")) : false;
	return engineerData;
>>>>>>> 59ea66a84ae886b05dc3923999276ad80938383e
};

export const setEngineer = (engineerData) => {
	const data = JSON.stringify(engineerData);
	setCookie("engineer", data);
	return;
};

export const logoutUser = () => {
	// removeCookies("engineer");
	deleteCookie("engineer");
	return;
};
