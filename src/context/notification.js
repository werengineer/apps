"use client";
import PropTypes from "prop-types";
import React, { createContext, useState } from "react";

export const NotificationContext = createContext("");

export const NotificationState = (props) => {
	const [token, setToken] = useState("");
	const [notification, setNotification] = useState(false);

	const updateToken = (token) => {
		setToken(token);
	};

	const updateNotification = (bool) => {
		setNotification(bool);
	};

	return (
		<NotificationContext.Provider
			value={{ token, updateToken, notification, updateNotification }}
		>
			{props.children}
		</NotificationContext.Provider>
	);
};

NotificationState.propTypes = {
	children: PropTypes.any
};
