"use client";
import { getEngineer } from "@cookies";
import {
	API_URL,
	NEXT_PUBLIC_CLOUDINARY_API_KEY,
	NEXT_PUBLIC_CLOUD_BUCKET,
	NEXT_PUBLIC_UPLOAD_PRESET
} from "@constants";
import axios from "axios";
import PropTypes from "prop-types";
import React, { createContext, useState } from "react";
import { deleteCookie, setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { firebaseApp, firebaseAuth } from "@fb";
import {
	RecaptchaVerifier,
	sendEmailVerification,
	sendPasswordResetEmail,
	getAuth,
	signInWithPhoneNumber
} from "firebase/auth";
import { useEffect } from "react";
import { firebaseErrors } from "@fb/errors";
export const SettingsContext = createContext("");

const SettingState = (props) => {
	const [loading, setLoading] = useState(false);
	const [dataChanged, setDataChanged] = useState(false);
	const [verifiedEmail, setVerifiedEmail] = useState(false);
	const [data, setData] = useState({});
	const [ImageUrl, setImageUrl] = useState("");
	const engineer = getEngineer();

	const handleSubmit = async (enqueueSnackbar, uploadFile) => {
		setLoading(true);
		var newData;
		var flag = engineer?.username !== data.username;
		console.log(engineer?.username, data.username);

		if (flag) {
			//Check whether new username exists or not
			try {
				const res = await axios.get(`${API_URL}/engineer/checkUsername/${data?.username}`);
				console.log(res.data.status === false);

				if (res.data.status === false) {
					enqueueSnackbar(`${data?.username} already exists`, { variant: "warning" });
					if (ImageUrl) {
						setData({ ...data, file: uploadFile });
					}
				} else {
					console.log("here");
				}
			} catch (error) {
				enqueueSnackbar(error.message || "Unknown error occurred", {
					variant: "error"
				});
			}
		}
		try {
			if (uploadFile) {
				const updateUser = await axios.post(
					`${API_URL}/engineer/update/profile`,
					{ ...data, file: uploadFile },
					{
						headers: {
							EngineerID: engineer?._id
						}
					}
				);
				setCookie("engineer", JSON.stringify(updateUser.data));
			} else {
				const updateUser = await axios.post(`${API_URL}/engineer/update/profile`, data, {
					headers: {
						EngineerID: engineer?._id
					}
				});
				setCookie("engineer", JSON.stringify(updateUser.data));
			}
			enqueueSnackbar("Profile Updated Successfully", {
				variant: "success"
			});

			setLoading(false);
		} catch (error) {
			enqueueSnackbar(error.message || "Unknown error occurred", {
				variant: "error"
			});
		} finally {
			setLoading(false);
		}
		if (flag) {
			setData((data) => {
				return { ...data, username: engineer?.username };
			});
		}
	};

	const verifyEmail = async (enqueueSnackbar) => {
		if (verifiedEmail) {
			return;
		}
		const user = firebaseAuth?.currentUser;

		if (engineer?.isEmailVerified) {
			return;
		}

		if(!user){
			enqueueSnackbar("Please try again after some time");
		}

		try {
			await sendEmailVerification(user);
			enqueueSnackbar(`Verification link sent on ${user.email}`, "success");
			await user.reload();
			// setVerifiedEmail(!verifiedEmail);
		} catch (error) {
			enqueueSnackbar(firebaseErrors["auth/too-many-requests"], { variant: "warning" });
		}
	};

	const sendPassLink = async (enqueueSnackbar) => {
		const user = firebaseAuth.currentUser;
		await sendPasswordResetEmail(firebaseAuth, engineer?.email);
		enqueueSnackbar(`Password reset link sent on ${user?.email}`, {
			variant: "success"
		});
	};

	const uploadID = async (img) => {
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
				console.log("Some Error Occurred");
				return;
			}
		} catch (error) {
			console.log(error);
		}
	};

	const updateEmailStatus = async () => {
		try {
			const res = await axios.put(
				`${API_URL}/engineer/verify/email`,
				{},
				{
					headers: {
						EngineerID: engineer._id
					}
				}
			);
			setCookie("engineer", res.data.updatedEngineer);
			return;
		} catch (error) {
			console.log(error);
			throw error;
		}
	};

	const getBase64 = (file) => {
		// eslint-disable-next-line no-undef
		return new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = () => resolve(reader.result);
			reader.onerror = (error) => reject(error);
		});
	};

	useEffect(() => {
		setVerifiedEmail(firebaseAuth?.currentUser?.emailVerified);
	}, [firebaseAuth?.currentUser]);

	return (
		<SettingsContext.Provider
			value={{
				handleSubmit,
				loading,
				setLoading,
				data,
				setData,
				dataChanged,
				setDataChanged,
				getBase64,
				uploadID,
				setImageUrl,
				verifyEmail,
				verifiedEmail,
				sendPassLink,
				updateEmailStatus
			}}
		>
			{props.children}
		</SettingsContext.Provider>
	);
};

SettingState.propTypes = {
	children: PropTypes.any
};

export default SettingState;
