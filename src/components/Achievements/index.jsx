import { EmojiEvents } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Achievement } from "./Achievement";
import { AchievementContext } from "@context/achievements";
import { DailyAchievementHistory } from "./DailyAchievementHistory";

export const Achievements = () => {
	const achievementContext = useContext(AchievementContext);
	const { basicCompleted, basicIncomplete, dailyCompleted, dailyIncomplete } = achievementContext;

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				gap: "20px",
				mb: "20px"
			}}
		>
			{/* <Box
				sx={{
					display: "flex",
					flexDirection: "column",
					gap: "15px",
					px: ["0px", "20px"]
				}}
			>
				<Typography
					sx={{
						p: ["10px", "10px", "15px"],
						fontSize: ["13px", "15px", "15px"]
					}}
				>
					Last 7 Days
				</Typography>
				<DailyAchievementHistory />
			</Box> */}
			<Box
				id="basic-incomplete"
				sx={{
					display: basicIncomplete.length !== 0 ? "flex" : "none",
					flexDirection: "column",
					gap: "15px",
					px: ["0px", "20px"]
				}}
			>
				<Typography
					sx={{
						p: ["10px", "10px", "15px"],
						fontSize: ["13px", "15px", "15px"]
					}}
				>
					Basic Achievements
				</Typography>
				{basicIncomplete
					.filter((ac) => ac.type === "basic")
					?.map((d) => {
						return <Achievement key={d?._id} data={d} />;
					})}
			</Box>

			<Box
				id="daily-incomplete"
				sx={{
					display: dailyIncomplete.length !== 0 ? "flex" : "none",
					flexDirection: "column",
					gap: "15px",
					px: ["0px", "20px"]
				}}
			>
				<Typography
					sx={{
						p: ["10px", "10px", "15px"],
						fontSize: ["13px", "15px", "15px"]
					}}
				>
					Daily Achievements
				</Typography>
				{dailyIncomplete?.map((d) => {
					return <Achievement key={d?._id} data={d} type={"daily"} />;
				})}
			</Box>

			<Box
				id="completed"
				sx={{
					display: basicCompleted?.concat(dailyCompleted).length !== 0 ? "flex" : "none",
					flexDirection: "column",
					gap: "15px",
					px: ["0px", "20px"]
				}}
			>
				<Typography
					sx={{
						p: ["10px", "10px", "15px"],
						fontSize: ["13px", "15px", "15px"]
					}}
				>
					Completed
				</Typography>
				{basicCompleted?.concat(dailyCompleted)?.map((d) => {
					return <Achievement key={d?._id} data={d} type={"completed"} />;
				})}
			</Box>
		</Box>
	);
};
