import { atom } from "recoil";

export const sidebarOpenState = atom({
	key: "sidebarOpenState",
	default: false
});

export const sidebarState = atom({
	key: "sidebarState",
	default: "Dashboard"
});

export const searchModalState = atom({
	key: "searchModalState",
	default: false
});

export const dashboardState = atom({
	key: "dashboardState",
	default: "Landing"
});

export const questionModalState = atom({
	key: "questionModalState",
	default: false
});

export const storyModalState = atom({
	key: "storyModalState",
	default: false
});

export const listModalState = atom({
	key: "listModalState",
	default: false
});

export const removeListModalState = atom({
	key: "removeListModalState",
	default: false
});

export const loginModalState = atom({
	key: "loginModalState",
	default: false
});

export const mobileDrawerState = atom({
	key: "mobileDrawerState",
	default: false
});

export const userModal = atom({
	key: "userModal",
	default: false
});

export const contentModalState = atom({
	key: "contentModalState",
	default: false
});

export const incompletePuzzleState = atom({
	key: "incompletePuzzleState",
	default: false
});

export const otpModal = atom({
	key: "otpModal",
	default: false
});