import { firebaseApp } from "@fb";
import { useEffect } from "react";
import { useNotificationStore } from "@store";
import { getMessaging, isSupported, onMessage } from "firebase/messaging";

export const useNotificationHandler = () => {
	useEffect(() => {
		async function some() {
			try {
				const isSupportedBrowser = await isSupported();
				if (isSupportedBrowser) {
					onMessage(getMessaging(firebaseApp), (notification) => {
						if (notification?.title && notification?.body) {
							const setOpen = useNotificationStore(
								(state) => state?.setNotificationSnackbar
							);
							const setNotification = useNotificationStore(
								(state) => state?.setNotificationData
							);
							setOpen();
							setNotification({
								data: { title: notification.title, message: notification.body }
							});
						}
						return null;
					});
				}
				
			} catch (err) {
				return null;
			}
		}
		some();
		return () => null;
	}, []);
};
