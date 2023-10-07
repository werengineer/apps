import { Done, EmojiEvents } from "@mui/icons-material";
import { Box, Card, LinearProgress, Typography } from "@mui/material";
import Image from "next/image";
import React, { useContext } from "react";
import PropTypes from "prop-types";
import { AchievementContext } from "@context/achievements";

export const Achievement = ({ data, type }) => {
	const achievementContext = useContext(AchievementContext);
	const { dailyStatus, nextCoins } = achievementContext;

	return (
		<Card
			sx={{
				p: ["10px", "10px", "15px"],
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				borderRadius: "15px",
				border: type === "completed" ? "1px solid grey" : "1px solid #1D5352",
				cursor: "pointer",
				":hover": {
					boxShadow: "5px 7px 5px 4px rgba(0,0,0,0.18)"
				}
			}}
		>
			<Box
				sx={{
					display: "flex",
					justifyContent: "start",
					alignItems: "center",
					gap: "20px",
					flex: 1
				}}
			>
				<EmojiEvents
					sx={{
						color: type === "completed" ? "grey" : "#05D9D7"
					}}
				/>
				<Typography
					sx={{
						fontSize: ["13px", "15px", "15px"]
					}}
				>
					{data?.name}
				</Typography>
			</Box>
			<Box
				sx={{
					display: [
						"none",
						type === "daily" ? "flex" : "none",
						type === "daily" ? "flex" : "none"
					],
					flex: 1
				}}
			>
				<LinearProgress
					value={dailyStatus[data?.tag] || 0}
					variant="determinate"
					sx={{
						color: "#05D9D7",
						backgroundColor: "#1D5352",
						width: "100%",
						borderRadius: "10px",
						height: "10px"
					}}
				/>
			</Box>

			<Box
				sx={{
					display: "flex",
					justifyContent: "end",
					alignItems: "center",
					gap: "10px",
					flex: [0.2, 0.5, 1]
				}}
			>
				<Image src={"/achievements/Tools.svg"} style={{display: dailyStatus[data?.tag] === 100 && type === "daily" ? "none" : "flex"}} width={30} height={30} />
				<Done 
					sx={{
						display: dailyStatus[data?.tag] === 100 && type === "daily" ? "flex" : "none",
						width: "30px",
						height: "30px",
						bgcolor: "#1D5352",
						color: "#05D9D7",
						borderRadius: "30px",
						p: "5px"
					}}
				/>
				<Typography
					sx={{
						fontSize: ["13px", "15px", "15px"],
						visibility: dailyStatus[data?.tag] === 100 && type === "daily" ? "hidden" : "visible"
					}}
				>
					{type === "daily" ? nextCoins[data?.tag] || data?.coins : data?.coins}
				</Typography>
			</Box>
		</Card>
	);
};

Achievement.propTypes = {
	data: PropTypes.any,
	type: PropTypes.stirng
};
