"use client";
import { fetchLists } from "@api/list";
import React, { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import PropTypes from "prop-types";
import { useSnackbar } from "notistack";
import axios from "axios";
import { API_URL } from "@constants";
import { getEngineer } from "@cookies";
import { useListStore } from "@store/listsStore";

export const ListContext = createContext();

export const ListState = ({ children }) => {
	const setLists = useListStore((state) => state.setLists);
	const lists = useListStore((state) => state.lists);
	const removeList = useListStore((state) => state.removeList);
	const engineer = getEngineer();
	const [loading, setLoading] = useState(true);
	const { enqueueSnackbar } = useSnackbar();

	useEffect(() => {
		const bringLists = async () => {
			try {
				const res = await fetchLists();
				setLists(res);
				console.log(lists);
				console.log("Lists fetched");
			} catch (error) {
				//Handle Error Here
			} finally {
				setLoading(false);
			}
		};
		bringLists();
	}, []);

	const deleteList = async ({ id }) => {
		removeList({ id });
		try {
			const res = await axios.delete(`${API_URL}/list/delete/${id}`, {
				headers: {
					EngineerID: engineer?._id
				}
			});

			enqueueSnackbar("List deleted", { variant: "Error" });
		} catch (error) {
			enqueueSnackbar(error || "Cannot delete the list", { variant: "warning" });
		}
	};

	return (
		<ListContext.Provider
			value={{
				lists,
				deleteList,
				loading
			}}
		>
			{children}
		</ListContext.Provider>
	);
};

ListState.propTypes = {
	children: PropTypes.any
};
