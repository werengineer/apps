import { signupEngineer } from "@api";
import { completeAchievement } from "@api/achievement";
import {
	NEXT_PUBLIC_CLOUDINARY_API_KEY,
	NEXT_PUBLIC_CLOUD_BUCKET,
	NEXT_PUBLIC_UPLOAD_PRESET
} from "@constants";
import { setEngineer } from "@cookies";
import { firebaseApp, firebaseAuth } from "@fb";
import { firebaseErrors } from "@fb/errors";
import { achievementID } from "@lib/achievementID";
import axios from "axios";
import { setCookie } from "cookies-next";
import {
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	getAuth,
	signInWithPopup
} from "firebase/auth";

export const prevStep = (form) => {
	form.prevStep();
};

export const googleSignup = async (enqueueSnackbar, form, updateGoogle) => {
	const provider = new GoogleAuthProvider();
	const firebaseAuth = getAuth(firebaseApp);
	try {
		const { user } = await signInWithPopup(firebaseAuth, provider);
		const { providerData, metadata } = user;
		const date1 = new Date(metadata.lastSignInTime);
		const date2 = new Date(metadata.creationTime);
		const DTime = date2.getTime() - date1.getTime();

		// To calculate the no. of days between two dates
		const DDays = DTime / (1000 * 3600 * 24);
		if (DDays < 10) {
			const { displayName, email } = providerData[0];
			form.setFieldsValues({
				name: displayName,
				email
			});
			updateGoogle(true);
			form.nextStep();
		} else {
			enqueueSnackbar("You already have an account with us. Please login.", {
				variant: "error"
			});
		}
	} catch (error) {
		console.log(error);
		enqueueSnackbar(
			firebaseErrors[error.code] || error?.response?.data?.message || "Unknown error occured.",
			{ variant: "error" }
		);
	}
};

export const submitForm = async (form, enqueueSnackbar, setLoading, google, router, skip) => {
	const { email, password } = form.flatValues;
	setLoading(true);
	if ((form.flatValues.file !== null && form.flatValues.file !== "") || skip) {
		if (google === true) {
			console.log("google");
			const data = skip ? "" : await getBase64(form.flatValues.file);
			const uploadFile = skip ? "" : await uploadID(data);
			try {
				const res = await signupEngineer(
					{ ...form.flatValues, google, isMobileVerified: true, isEmailVerified: true },
					uploadFile
				);
				// setCookie("engineer", JSON.stringify(res.data));
				setEngineer(res.data);
				setLoading(false);

				await completeAchievement({
					id: achievementID.verifyNumber,
					enqueueSnackbar: enqueueSnackbar,
					engineerId: res.data._id
				});

				await completeAchievement({
					id: achievementID.verifyEmail,
					enqueueSnackbar: enqueueSnackbar,
					engineerId: res.data._id
				});
				router.push("/signup/success");
			} catch (error) {
				console.log(error);
				enqueueSnackbar(error?.response?.data?.message || firebaseErrors[error?.code], {
					variant: "error"
				});
				setLoading(false);
			}
		} else {
			console.log("normal");
			try {
				const user = await createUserWithEmailAndPassword(firebaseAuth, email, password);
				console.log(user);

				if (user) {
					const data = skip ? "" : await getBase64(form.flatValues.file);
					const uploadFile = skip ? "" : await uploadID(data);

					console.log(uploadFile);
					const res = await signupEngineer(
						{ ...form.flatValues, isMobileVerified: true },
						uploadFile
					);

					console.log(res);

					completeAchievement({
						id: achievementID.verifyNumber,
						enqueueSnackbar: enqueueSnackbar,
						engineerId: res.data._id
					})
						.then(() => {
							console.log("Successful");
							router.push("/signup/success");
							// setCookie("engineer", JSON.stringify({...res.data, isMobileVerified: true}));
							setEngineer(res.data);
						})
						.catch((error) => enqueueSnackbar(error.message))
						.finally(() => setLoading(false));
				}
			} catch (error) {
				console.log(error);
				enqueueSnackbar(error?.response?.data.message || firebaseErrors[error.code], {
					variant: "error"
				});
				setLoading(false);
			}
		}
	} else {
		enqueueSnackbar("Please upload the required document.", {
			variant: "error"
		});
		setLoading(false);
	}
};

export const uploadID = async (img) => {
	try {
		const res = await axios.post(
			`https://api.cloudinary.com/v1_1/${NEXT_PUBLIC_CLOUD_BUCKET}/image/upload`,
			{
				file: img,
				upload_preset: `${NEXT_PUBLIC_UPLOAD_PRESET}`,
				api_key: `${NEXT_PUBLIC_CLOUDINARY_API_KEY}`
			}
		);
		if (res) {
			//Returns URL Of That ID Card Accessible To Anyone
			return res.data.secure_url;
		} else {
			console.log("Some Error Occured");
			return;
		}
	} catch (error) {
		console.log(error);
	}
};

export const getBase64 = (file) => {
	// eslint-disable-next-line no-undef
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => resolve(reader.result);
		reader.onerror = (error) => reject(error);
	});
};
