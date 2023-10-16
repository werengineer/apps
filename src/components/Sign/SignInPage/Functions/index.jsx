import { signinEngineer } from "@api";
import { setEngineer } from "@cookies";
import { firebaseApp } from "@fb";
import { firebaseErrors } from "@fb/errors";
import { setCookie } from "cookies-next";
import { GoogleAuthProvider, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";


export const googleSignin = async (enqueueSnackbar, form, updateGoogle, router) => {
	const provider = new GoogleAuthProvider();
	const firebaseAuth = getAuth(firebaseApp);
	try {
		const { user } = await signInWithPopup(firebaseAuth, provider);
		const { providerData } = user;
		updateGoogle(true);
		const res = await signinEngineer({ email: providerData[0].email, google: true });
		// setCookie("engineer", JSON.stringify(res.data));
		setEngineer(res.data);
		enqueueSnackbar("You have been logged in successfully.", { variant: "success" });
		router.push("/");
	} catch (error) {
		console.log(error);
		enqueueSnackbar(
			firebaseErrors[error.code] || error?.response?.data?.message || "Unknown error occured.",
			{ variant: "error" }
		);
	}
};

export const signinNormal = async (enqueueSnackbar, form, setLoading, router) => {
	const { email, password } = form.flatValues;
	const firebaseAuth = getAuth(firebaseApp);

	setLoading(true);
	try {
		const res = await signinEngineer({ email, password });
		await signInWithEmailAndPassword(firebaseAuth, email, password);
		// setCookie("engineer", JSON.stringify(res.data));
		setEngineer(res.data);
		enqueueSnackbar("You have been logged in successfully.", { variant: "success" });
		router.push("/");
	} catch (err) {
		console.log(err);
		enqueueSnackbar(err?.response?.data?.message || "Unknown error occured.", {
			variant: "error"
		});
	}
	setLoading(false);
};
