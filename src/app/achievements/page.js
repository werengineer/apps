"use client";
import { Achievements } from "@components/Achievements";
import { AchievementState } from "@context/achievements";
import Box from "@mui/material/Box";
import { useAchievementStore } from "@store";
import React, { useEffect } from "react";

const AchievemtsPage = () => {
	return (
		<>
			<Box
				display={"flex"}
				sx={{
					mt: [8, 10],
					ml: ["auto", 9],
					maxWidth: "100vw",
					display: "flex",
					overflowY: "hidden"
				}}
			>
				<Box
					sx={{
						width: ["100%", "95%", "75%"],
						px: [2, 0, 0]
					}}
				>
					<AchievementState>
						<Achievements />
					</AchievementState>
				</Box>
			</Box>
		</>
	);
};

export default AchievemtsPage;
