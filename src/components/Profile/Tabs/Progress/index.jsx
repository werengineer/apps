"use client";
import { AchievementContext } from "@context/achievements";
import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import React, { useContext } from "react";
import { Achievement } from "./Achievement";
import { useRouter } from "next/navigation";
import { DailyAchievementHistory } from "./DailyAchievementHistory";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import dayjs from "dayjs";
import { useState } from "react";

export const Progress = () => {
	const achievementContext = useContext(AchievementContext);


	const basicCompleted = null;
	const router = useRouter();
	const [date, setDate] = useState(new Date());

	return (
		<Box display={"flex"} flexDirection={"column"} px={[2, 5]} width={"100%"} gap={3} marginY={5}>
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<Grid
					container
					sx={{
						flexDirection: ["column", "row"],
					}}
				>
					<Grid
						item
						xs={12}
						md={6}
					>
						<DemoContainer components={["DateCalendar"]}>
							<DemoItem>
								<DateCalendar defaultValue={dayjs(Date.now())} onChange={(date) => setDate(new Date(date.$d))}/>
							</DemoItem>
						</DemoContainer>
					</Grid>
					<Grid
						item
						xs={12}
						md={6}
						sx={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<DailyAchievementHistory
							legDate={date}
						/>
					</Grid>
				</Grid>
			</LocalizationProvider>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					gap: 1.5
				}}
			>
				{/* <Typography fontSize={20}>Completed Achievements</Typography> */}
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						gap: 1,
						width: "100%",
						justifyContent: "center"
					}}
				>
					{/* {basicCompleted
						.slice(0, 4)
						.filter((ac) => ac.type === "basic")
						?.map((d) => {
							return <Achievement key={d?._id} data={d} type={"completed"} />;
						})} */}
				</Box>
				<Box
					sx={{
						display: "flex",
						width: "100%",
						alignItems: "center",
						justifyContent: "center",
						flexDirection: "column"
					}}
				>
					<Button
						sx={{
							display: "flex",
							width: ["50vw", "15vw"],
							height: "6vh",
							justifySelf: "center",
							backgroundColor: "#50D9D7",
							borderRadius: 10,
							color: "black",
							"&:hover": {
								color: "#50D9D7",
								border: "1px solid #50D9D7"
							}
						}}
						onClick={() => router.push("/achievements")}
					>
						View More
					</Button>
				</Box>
			</Box>
		</Box>
	);
};
