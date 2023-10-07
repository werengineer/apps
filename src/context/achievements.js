"use client";

import React, { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useSnackbar } from "notistack";
import { fetchAchievements } from "@api/achievement";
import { getEngineer } from "@cookies";
import axios from "axios";
import { API_URL } from "@constants";

export const AchievementContext = createContext();

export const AchievementState = ({ children }) => {
	const [allAchievements, setAllAchievements] = useState([]);
	const [dailyCompleted, setDailyCompleted] = useState([]);
	const [dailyIncomplete, setDailyIncomplete] = useState([]);
	const [basicCompleted, setBasicCompleted] = useState([]);
	const [basicIncomplete, setBasicIncomplete] = useState([]);
	const [activities, setActivities] = useState([]);
	const [dailyStatus, setDailyStatus] = useState({});
	const [nextCoins, setNextCoins] = useState({});
	const engineer = getEngineer();

	const { enqueueSnackbar } = useSnackbar();

	useEffect(() => {
		const fetchAllAchievements = async () => {
			try {
				const resBasic = await fetchAchievements({ type: "basic" });
				const resDaily = await fetchAchievements({ type: "daily" });
				resBasic.map((a) => {
					if (a?.engineer?.includes(engineer?._id)) {
						setBasicCompleted((basicCompleted) => [...basicCompleted, a]);
					} else {
						setBasicIncomplete((basicIncomplete) => [...basicIncomplete, a]);
					}
				});

				// const

				resDaily.map((a) => {
					if (a?.engineer?.includes(engineer?._id)) {
						setDailyCompleted((dailyCompleted) => [...dailyCompleted, a]);
					} else {
						setDailyIncomplete((dailyIncomplete) => [...dailyIncomplete, a]);
					}
				});

				setAllAchievements(resBasic);
			} catch (error) {
				console.log(error);
				enqueueSnackbar("Cannot fetch achievements, please try again later!", {
					variant: "error"
				});
				return;
			}
		};

		fetchAllAchievements();
	}, []);

	useEffect(() => {
		const fetchDailyAchievements = async () => {
			try {
				const dailyStatusRes = await axios.get(`${API_URL}/achievement/get/daily`, {
					headers: {
						EngineerID: engineer?._id
					}
				});
				setDailyStatus(dailyStatusRes.data?.dailyAchievements);
				setNextCoins(dailyStatusRes.data?.nextCoins);
			} catch (error) {
				console.error(error);
			}
		};
		fetchDailyAchievements();
	}, []);

	useEffect(() => {
		setActivities(basicCompleted.reverse());
	}, [basicCompleted]);

	return (
		<AchievementContext.Provider
			value={{
				basicCompleted,
				basicIncomplete,
				dailyCompleted,
				dailyIncomplete,
				activities,
				dailyStatus,
				nextCoins
			}}
		>
			{children}
		</AchievementContext.Provider>
	);
};

AchievementState.propTypes = {
	children: PropTypes.any
};
