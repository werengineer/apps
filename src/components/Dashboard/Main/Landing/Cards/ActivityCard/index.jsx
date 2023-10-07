"use client";
import { Achievements } from "@components/Achievements";
import { ComingSoon } from "@components/Global";
import { AchievementContext, AchievementState } from "@context/achievements";
import { EmojiEvents } from "@mui/icons-material";
import { Box, Button, Card, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";

export const ActivityCard = () => {
	const achievementContext = useContext(AchievementContext);
	const { activities } = achievementContext;
	const router = useRouter();

	return (
		<Box
			width={["92%", "50%"]}
			border={"1px solid #1D5352"}
			borderRadius={"10px"}
			paddingX={["4vw", "1.5vw"]}
			display={"flex"}
			flexDirection={"column"}
			paddingTop={"2vh"}
			height={["280px", "325px", "300px"]}
			paddingBottom={"0vh"}
			gap={"2vh"}
			sx={{
				boxShadow: "1px 3px 10px 0px rgba(0,0,0,0.75)"
			}}
		>
			<Box
				display={"flex"}
				justifyContent={"space-between"}
				flexDirection={"column"}
				alignItems={"center"}
				height={"100%"}
			>
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						width: "100%"
					}}
				>
					<Typography fontSize={"20px"}>Your Activity</Typography>

					<Button
						sx={{
							fontSize: "12px",
							textDecoration: "underline",
							textDecorationColor: "#1D5352",
							color: "#1D5352",
							":hover": {
								textDecoration: "underline",
								backgroundColor: "transparent"
							}
						}}
						disableRipple
						onClick={() => router.push("/achievements")}
					>
						All Activities
					</Button>
				</Box>
				<Box
					display={"flex"}
					alignItems={"flex-start"}
					gap={2}
					marginTop={5}
					marginBottom={[2, 0, 0]}
					width={"100%"}
					height={"100%"}
					sx={{
						overflowY: "scroll"
					}}
					flexDirection={"column"}
				>
					{/* <ComingSoon small={true} /> */}
					{/* <Achievements /> */}
					{activities?.slice(0, 4)?.map((ach) => {
						return (
							<Box
								key={ach._id}
								sx={{
									display: "flex",
									justifyContent: "space-between",
									alignItems: "center",
									gap: "10px"
								}}
							>
								<EmojiEvents
									sx={{
										color: "#05D9D7",
										backgroundColor: "#1D5352",
										p: "5px",
										borderRadius: "30px",
										fontSize: "30px"
									}}
								/>
								<Typography>
									{ach.name}, +{ach.coins} coins
								</Typography>
							</Box>
						);
					})}
				</Box>
			</Box>
		</Box>
	);
};
