"use client";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import React, { useContext, useEffect } from "react";
import { TopSectionSelf } from "../TopSectionSelf";
import { TopSection } from "../TopSection";
import { Wallet } from "../Tabs/Wallet";
import { TabButtons } from "../Tabs/TabButtons";
import { Progress } from "../Tabs/Progress";
import { Questions } from "../Tabs/Questions";
import { Stories } from "../Tabs/Stories";
import { ProfileContext } from "@context/profile";
import { FollowerModal } from "../FollowerModal";

export const ProfileMain = () => {
	const profileContext = useContext(ProfileContext);
	const { self, tab, screenLoading } = profileContext;
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				borderRight: ["none", "1px solid grey"]
			}}
		>
			{screenLoading ? (
				<Box
					sx={{
						display: "flex",
						width: "100%",
						height: ["90vh", "87vh"],
						justifyContent: "center",
						alignItems: "center",
						color: "#1D5352"
					}}
				>
					<CircularProgress color="inherit" />
				</Box>
			) : (
				<>
					{self ? <TopSectionSelf /> : <TopSection />}
					<TabButtons />
					{tab === "wallet" && <Wallet />}
					{tab === "progress" && <Progress />}
					{tab === "questions" && <Questions />}
					{tab === "stories" && <Stories />}
					<FollowerModal />
				</>
			)}
		</Box>
	);
};
