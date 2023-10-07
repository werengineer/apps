import { createContext, useState } from "react";
import PropTypes from "prop-types";
import {
	applyActionCode,
	confirmPasswordReset,
	sendPasswordResetEmail,
	signInWithEmailAndPassword,
	verifyPasswordResetCode
} from "firebase/auth";
import { firebaseAuth } from "@fb";
import { useSearchParams } from "next/navigation";
import React from "react";
import { useEffect } from "react";
import { getEngineer } from "@cookies";
import axios from "axios";
import { API_URL } from "@constants";
import { useForm } from "@formiz/core";
import { useRouter } from "next/navigation";
import { completeAchievement } from "@api/achievement";
import { achievementID } from "@lib/achievementID";
import { useSnackbar } from "notistack";
import { setCookie } from "cookies-next";

export const EmailContext = createContext();

export const EmailState = ({ children }) => {
	const [state, setState] = useState({ loading: false, success: false, error: false });
	const searchParams = useSearchParams();
	const form = useForm();
	const engineer = getEngineer();
	const router = useRouter();

	const resetPassword = async (enqueueSnackbar) => {
		setState((state) => ({ ...state, loading: true }));
		const oobCode = searchParams?.get("oobCode");
		if (!oobCode) {
			setState((state) => ({ ...state, error: true, loading: false }));
			return;
		}
		try {
			const veri = await verifyPasswordResetCode(firebaseAuth, oobCode);
			try {
				const res = await confirmPasswordReset(
					firebaseAuth,
					oobCode,
					form?.flatValues?.password
				);
				const res1 = await axios.put(
					`${API_URL}/engineer/reset/pass`,
					{ newpass: form?.flatValues?.password },
					{
						headers: {
							EngineerID: engineer?._id
						}
					}
				);
				const user = await signInWithEmailAndPassword(
					firebaseAuth,
					form?.flatValues?.email,
					form?.flatValues?.password
				);
				router.replace("/settings");
				enqueueSnackbar("Password reset successfully", { variant: "success" });
				setState((state) => ({ ...state, error: true, loading: false }));
				return;
			} catch (error) {
				enqueueSnackbar("Cannot reset password", { variant: "error" });
				setState((state) => ({ ...state, error: true, loading: false }));
			}
		} catch (error) {
			enqueueSnackbar("Password reset link expired, please try again", { variant: "error" });
			setState((state) => ({ ...state, error: true, loading: false }));
		} finally {
			setState((state) => ({ ...state, loading: false }));
		}
	};

	const handleReset = (enqueueSnackbar) => {
		resetPassword(enqueueSnackbar);
	};

	// useEffect(() => {
	const handleVerifyEmail = (enqueueSnackbar) => {
		setState((state) => ({ ...state, loading: true }));
		const oobCode = searchParams?.get("oobCode");
		console.log(oobCode);
		if (!oobCode) {
			setState((state) => ({ ...state, error: true, loading: false }));
			return;
		}
		applyActionCode(firebaseAuth, oobCode)
			.then(() => {
				setState((state) => ({ ...state, success: true }));
				const res = axios
					.put(
						`${API_URL}/engineer/verify/email`,
						{},
						{
							headers: {
								EngineerID: engineer?._id
							}
						}
					)
					.then((data) => {
						setCookie("engineer", JSON.stringify(data?.data?.updatedEngineer));
						completeAchievement({
							id: achievementID.verifyEmail,
							enqueueSnackbar: enqueueSnackbar,
							engineerId: data?.data?.updatedEngineer._id
						}).catch((error) => enqueueSnackbar(error.message));
					});
			})
			.catch((error) => {
				enqueueSnackbar("Link expired, try again", { variant: "warning" });
				setState((state) => ({ ...state, error: true, loading: false }));
			})
			.finally(() => setState((state) => ({ ...state, loading: false })));
	};

	return (
		<EmailContext.Provider
			value={{
				state,
				resetPassword,
				form,
				handleReset,
				handleVerifyEmail
			}}
		>
			{children}
		</EmailContext.Provider>
	);
};

EmailState.propTypes = {
	children: PropTypes.any
};
