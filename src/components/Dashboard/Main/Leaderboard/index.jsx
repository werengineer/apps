"use client";
import { Box, ButtonGroup, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { AllOver } from "./AllOver";
import { LastWeek } from "./LastWeek";
import { ThisMonth } from "./ThisMonth";
import { fetchAllUser } from "@api/leaderboard";
import { calculateXp } from "@api/leaderboard";

export const Leaderboard = () => {
	const [leaderBoardTab, setLeaderBoardTab] = useState("All Over");
	const [legDate, setLegDate] = useState(new Date());
	console.log("legDate", legDate);
	
	useEffect(() => {
	  const fetchData = async () => {
		try {
			const xp = await calculateXp();
			console.log("xp", xp);
		} catch (error) {
			console.log(error);
		
		}};
		fetchData(); // Call the asynchronous function inside useEffect
	}, [])
	

	const handleClick = (e) => {
		setLeaderBoardTab(e.target.title);
	};

	return (
		<Box
			sx={{
				display: "flex",
				// justifyContent: 'center',
				alignItems: "center",
				flexDirection: "column",
				mt: 3,
				borderRight: ["none", "none", "1px solid grey"],
				paddingX: "10px",
				width: ["100%"],
				gap: "5vh",
				height: "87vh"
			}}
		>
			<ButtonGroup variant="" aria-label="outlined primary button group">
				<Button
					sx={{
						backgroundColor: leaderBoardTab === "Last Week" ? "#1D5352" : "#333333",
						color: "white",
						borderTopLeftRadius: "15px",
						borderBottomLeftRadius: "15px",
						width: ["auto", "12vw"],
						":hover": {
							backgroundColor: leaderBoardTab === "Last Week" ? "#1D5352" : "#333333"
						}
					}}
					title="Last Week"
					onClick={handleClick}
				>
					Last Week
				</Button>

				{/* <Button
					sx={{
						backgroundColor: leaderBoardTab === "This Month" ? "#1D5352" : "#333333",
						width: ["auto", "12vw"],
						":hover": {
							backgroundColor: leaderBoardTab === "This Month" ? "#1D5352" : "#333333"
						}
					}}
					title="This Month"
					onClick={handleClick}
				>
					This Month
				</Button> */}

				<Button
					sx={{
						backgroundColor: leaderBoardTab === "All Over" ? "#1D5352" : "#333333",
						color: "white",
						borderTopRightRadius: "15px",
						borderBottomRightRadius: "15px",
						width: ["auto", "12vw"],
						":hover": {
							backgroundColor: leaderBoardTab === "All Over" ? "#1D5352" : "#333333"
						}
					}}
					title="All Over"
					onClick={handleClick}
				>
					All Over
				</Button>
			</ButtonGroup>

			<Box width={"100%"}>
				{leaderBoardTab === "All Over" && <AllOver />}
				{leaderBoardTab === "Last Week" && <LastWeek legDate={legDate}/>}
				{/* {leaderBoardTab === "This Month" && <ThisMonth />} */}
			</Box>
		</Box>
	);
};
