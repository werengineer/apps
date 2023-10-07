"use client";
import PropTypes from "prop-types";
import React, { createContext, useState } from "react";

export const ListModalContext = createContext();

export const ListModalStates = (props) => {
	const [lists, setLists] = useState([]);
	const [addLists, setAddLists] = useState([]);
	const [loading, setLoading] = useState(false);
	const [loading1, setLoading1] = useState(true);
	const [error, setError] = useState();
	const [newList, setNewList] = useState(false);

	return (
		<ListModalContext.Provider
			value={{
				loading,
				setLoading,
				setLoading1,
				loading1,
				lists,
				setLists,
				addLists,
				setAddLists,
				error,
				setError,
				newList,
				setNewList
			}}
		>
			{props.children}
		</ListModalContext.Provider>
	);
};

ListModalStates.propTypes = {
	children: PropTypes.any
};
