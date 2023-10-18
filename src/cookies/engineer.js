import { getCookie, setCookie, deleteCookie } from "cookies-next";

export const getUser = () => {
	const providerData =
		getCookie("providerData") === undefined ? [false] : JSON.parse(getCookie("providerData"));
	return providerData;
};

export const getEngineer = () => {
	// const engineerData = getCookie("engineer") !== undefined ? JSON.parse(getCookie("engineer")) : false;
	const engineerData = sessionStorage.getItem("engineer") !== null ? JSON.parse(sessionStorage.getItem("engineer")) : false;
	return engineerData;
};

export const setEngineer = (engineerData) => {
	const data = JSON.stringify(engineerData);
	sessionStorage.setItem("engineer", data);
	// setCookie("engineer", data);
	return;
};


export const logoutUser = () => {
	// removeCookies("engineer");
	deleteCookie("engineer")
	return;
};
