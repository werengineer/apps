"use client";
import { Box, Link, Typography, Button } from "@mui/material";
import React, { useEffect } from "react";
import { MainDashboard } from "./Landing";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { getEngineer } from "@cookies";
import { useCoinsStore } from "@store";
import axios from "axios";
import { API_URL } from "@constants";

export const DashboardMain = () => {
	const router = useRouter();
	const engineer = getEngineer();
	const setCoins = useCoinsStore((state) => state.setCoins);

	useEffect(() => {
		const fetchEngineer = async () => {
			if(sessionStorage.getItem('engineer')){
			const res = await axios.get(`${API_URL}/engineer/get?id=${engineer._id}`);
			setCoins(res.data?.coins);
			}
		};
		fetchEngineer();
	}, []);

	return (
		<Box display={"flex"} gap={"1vw"} flexDirection={"column"} height={["92vh", "88vh"]}>
			<Box
				height={["100%", "100%"]}
				display={"flex"}
				flexDirection={"column"}
				gap={"3vh"}
				sx={{
					overflowY: "scroll",
					borderRight: ["none", "1px solid grey"]
				}}
			>
				{engineer ? (
					<MainDashboard />
				) : (
					<Box
						display={"flex"}
						flexDirection={"column"}
						justifyContent={"center"}
						alignItems={"center"}
						overflowY={"scroll"}
						gap={2}
						height={["92vh", "100%"]}
					>
						<Box>
							<Box display={["none", "flex"]} justifyContent={"center"}>
								<Image src={"/images/login.png"} width={280} height={250} />
							</Box>
							<Box display={["flex", "none"]} justifyContent={"center"}>
								<Image src={"/images/login.png"} width={240} height={210} />
							</Box>
						</Box>
						<Typography fontSize={20}>
							Join, connect, explore.{" "}
							<Link
								onClick={() => {
									router.push("/signin");
								}}
								sx={{
									color: "#50D9D7",
									textDecorationColor: "#50D9D7",
									cursor: "pointer"
								}}
							>
								Login
							</Link>{" "}
							now !
						</Typography>
						<Box display={"flex"} flexDirection={["column", "row"]} gap={2}>
							<Button
								sx={{
									paddingX: ["15px", "40px"],
									borderRadius: "30px",
									paddingY: "10px",
									px: 30,
									border: "1px solid white",
									transition: "0.2s ease-in",
									":hover": {
										border: "1px solid white",
										backgroundColor: "white",
										color: "black"
									}
								}}
								onClick={() => router.push("/questions")}
							>
								Explore Questions
							</Button>
							<Button
								sx={{
									paddingX: ["15px", "40px"],
									borderRadius: "30px",
									paddingY: "10px",
									px: 30,
									border: "1px solid white",
									transition: "0.2s ease-in",
									":hover": {
										border: "1px solid white",
										backgroundColor: "white",
										color: "black"
									}
								}}
								onClick={() => router.push("/stories")}
							>
								Explore Stories
							</Button>
						</Box>
					</Box>
				)}
				{/* {sidebar === "Dashboard" ? (
					(dashboard === "Leaderboard" && <Leaderboard />) ||
					(dashboard !== "Leaderboard" && <MainDashboard />)
				) : (
					<></>
				)} */}
			</Box>
		</Box>
	);
};
