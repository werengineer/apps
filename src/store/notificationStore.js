import { create } from "zustand";

const notificationStore = (set) => ({
	notification: {
		title: "",
		message: ""
	},
	open: false,
	setNotificationSnackbar: () =>
		set((store) => ({
			open: !store.open
		})),
	setNotificationData: ({ data }) =>
		set(() => ({ notification: { title: data.title, message: data.message }, open: true }))
});

export const useNotificationStore = create(notificationStore);
