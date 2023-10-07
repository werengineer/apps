"use client";
import PropTypes from "prop-types";
import React, { createContext, useState } from "react";

export const SignupContext = createContext("");

export const SignupState = (props) => {
	const [google, setGoogle] = useState(false);

	const updateGoogle = (info) => {
		setGoogle(info);
	};

	return (
		<SignupContext.Provider value={{ google, updateGoogle }}>
			{props.children}
		</SignupContext.Provider>
	);
};

SignupState.propTypes = {
	children: PropTypes.any
};
