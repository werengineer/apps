"use client";

import React from "react";
import { EmailState } from "@context/email";
import { useSearchParams } from "next/navigation";
import { ResetPassword, Verification } from "@components/Email";

const EmailPage = () => {
	const searchParams = useSearchParams();

	const mode = searchParams.get("mode");

	return (
		<EmailState>
			{mode === "verifyEmail" && <Verification />}
			{mode === "resetPassword" && <ResetPassword />}
		</EmailState>
	);
};

export default EmailPage;
