import { NEXT_PUBLIC_NOTIFICATION_KEY } from "@constants";
import { firebaseApp } from "@fb";
import "firebase/messaging";
import { deleteToken, getMessaging, getToken, isSupported } from "firebase/messaging";

export const useNotificationToken = () => {
	const getTokenn = async () => {
		try {
			const isSupportedBrowser = await isSupported();
			if (isSupportedBrowser) {
				return getToken(getMessaging(firebaseApp), { vapidKey: NEXT_PUBLIC_NOTIFICATION_KEY })
					.then((token) => ({ token, error: null }))
					.catch((error) => ({ error: error.message, token: null }));
			} else {
				return null;
			}
		} catch (error) {
			return { error: error.message, token: null };
		}
	};

	const deleteTokenn = async () => {
		try {
			const isSupportedBrowser = await isSupported();
			if (isSupportedBrowser) {
				return deleteToken(getMessaging(firebaseApp), {
					vapidKey: NEXT_PUBLIC_NOTIFICATION_KEY
				})
					.then(() => ({
						error: null
					}))
					.catch((error) => ({ error: error.message }));
			} else {
				return null;
			}
		} catch (error) {
			return { error: error.message };
		}
	};

	return { getTokenn, deleteTokenn };
};
