import {
	NEXT_PUBLIC_AUTH_DOMAIN,
	NEXT_PUBLIC_FIREBASE_API_KEY,
	NEXT_PUBLIC_MESSAGING_APP_ID,
	NEXT_PUBLIC_MESSAGING_MEASUREMENT_ID,
	NEXT_PUBLIC_MESSAGING_SENDER_ID,
	NEXT_PUBLIC_PROJECT_ID,
	NEXT_PUBLIC_STORAGE_BUCKET
} from "@constants";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: NEXT_PUBLIC_FIREBASE_API_KEY,
	authDomain: NEXT_PUBLIC_AUTH_DOMAIN,
	projectId: NEXT_PUBLIC_PROJECT_ID,
	storageBucket: NEXT_PUBLIC_STORAGE_BUCKET,
	messagingSenderId: NEXT_PUBLIC_MESSAGING_SENDER_ID,
	appId: NEXT_PUBLIC_MESSAGING_APP_ID,
	measurementId: NEXT_PUBLIC_MESSAGING_MEASUREMENT_ID
};

export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
