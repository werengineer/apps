"use client";
import { API_URL } from "@constants";
import { getEngineer } from "@cookies";
import { Box, Button, LinearProgress, Tooltip, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

export const DailyAchievementHistory = ({legDate}) => {
	const [last7days, setLast7Days] = useState([]);
	const [last7DaysHistory, setLast7DaysHistory] = useState([]);
	const [rewards, setRewards] = useState([]);
	let date = legDate?.getDate();
	const engineer = getEngineer();
	const factor = {
		create_question: 150,
		create_story: 150,
		answer_question: 120,
		comment_story: 120,
		react_question: 75,
		react_story: 75,
		complete_puzzle: 160,
		complete_block: 70,
		complete_cluster: 80
	};

	useEffect(() => {
		function formatDate(date) {
			const year = date.getFullYear();
			const month = String(date.getMonth() + 1).padStart(2, "0");
			const day = String(date.getDate()).padStart(2, "0");
			return `${year}-${month}-${day}`;
		}

		function getLast7Days() {
			const today = legDate;
			const last7Days = [];

			for (let i = 0; i < 7; i++) {
				const day = new Date(today);
				day.setDate(today.getDate() - i);
				last7Days.unshift(formatDate(day));
			}

			return last7Days;
		}

		const last7DaysArray = getLast7Days();
		setLast7Days(last7DaysArray);
	}, [legDate]);

	useEffect(() => {
		const fetchHistory = () => {
			const promises = last7days.map((l) =>
				axios.get(`${API_URL}/achievement/get/daily?date=${l}`, {
					headers: { EngineerID: engineer?._id }
				})
			);
			Promise.all(promises)
				.then((responses) => {
					// Extract the 'data' property from each response
					const allData = responses.map((response) => response.data);
					// allData?.map((data) => setDailyAchievement((dailyData) => [...dailyData, data]));
					console.log("all data",allData);
					setLast7DaysHistory(allData);
				})
				.catch((error) => {
					console.error("Error fetching data:", error);
				});
		};
		fetchHistory();
	}, [last7days]);

	useEffect(() => {
		const map = last7DaysHistory.map((data) => data.dailyAchievements);
		let rewards = [];
		map.map((obj) => {
			let currentDaysRewards = 0;
			console.log(obj);
			const keys = Object.keys(obj);

			keys.map((key) => {
				currentDaysRewards = currentDaysRewards + (factor[key] * obj[key]) / 100;
			});
			let rewardsInPercentage =
				(currentDaysRewards * 100) / (engineer?.subscription?.enrolled ? 1200 : 1000);
			rewards.push(rewardsInPercentage);
		});
		setRewards(rewards);
		console.log("rewards",rewards);
	}, [last7DaysHistory]);

	return (
		<Box
			sx={{
				width: "100%",
				px: ["0px", "20px"],
			}}
		>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					width: "100%",
					gap: 1.5
				}}
			>
				{rewards?.map((r, i) => (
					<Box
						key={i}
						sx={{
							display: "flex",
							gap: [6],
							px: [2],
							textAlign: "center",
						}}
					>
						<Typography sx={{ fontSize: "12px" }}>
							{last7days[i].split("-")[2]}
						</Typography>
						<Tooltip
							title={`Around ${Math.ceil(
								(r / 100) * (engineer?.subscription?.enrolled ? 1200 : 1000)
							)} Coins collected`}
						>
							<LinearProgress
								value={Math.ceil(r === 0 ? 1 : r)}
								variant="determinate"
								sx={{
									color: "#05D9D7",
									backgroundColor: "#1D5352",
									width: ["70%", "100%"],
									borderRadius: "10px",
									height: "12px"
								}}
							/>
						</Tooltip>
					</Box>
				))}
			</Box>
		</Box>
	);
};

DailyAchievementHistory.propTypes = {
	legDate: PropTypes.any
};