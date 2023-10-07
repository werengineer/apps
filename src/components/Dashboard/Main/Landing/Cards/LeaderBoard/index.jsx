import { dashboardState } from "@atom";
import { Avatar, Box, Button, LinearProgress, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";
import { useRecoilState } from "recoil";

export const LeaderBoardCard = () => {
	const router = useRouter();
	const [dashboard, setDashobard] = useRecoilState(dashboardState);
	return (
		<Box
			width={["90%", "97.5%"]}
			border={"1px solid #1D5452"}
			paddingX={["4vw", "2vw"]}
			borderRadius={"10px"}
			display={"none  "}
			flexDirection={"column"}
			gap={"15px"}
			paddingY={"2vh"}
			paddingBottom={"4vh"}
			sx={{
				boxShadow: "1px 3px 10px 0px rgba(0,0,0,0.75)"
			}}
		>
			<Box display={"flex"} flexDirection={"column"} gap={"10px"}>
				<Typography>You have 500AP required more +500TPs for level up</Typography>
				<LinearProgress
					value={50}
					variant={"determinate"}
					sx={{
						height: "3vh",
						borderRadius: "20px"
					}}
				/>
				<Box display={"flex"} justifyContent={"space-between"} paddingX={"13px"} color={"grey"}>
					<Typography fontSize={"14px"}>Level 1</Typography>
					<Typography fontSize={"14px"}>Level 2</Typography>
				</Box>
			</Box>

			<Box display={"flex"} flexDirection={"column"} justifyContent={"center"} gap={"20px"}>
				<Typography>Your Rank</Typography>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column"
					}}
				>
					<Box
						sx={{
							backgroundColor: "#333333",
							borderTopLeftRadius: "10px",
							borderTopRightRadius: "10px",
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
							paddingX: "20px",
							paddingY: "10px"
						}}
					>
						<Box display={"flex"} alignItems={"center"} gap={"15px"}>
							<Avatar>AK</Avatar>
							<Typography>Ajinkya Kahane</Typography>
						</Box>
						<Typography>123456</Typography>
						<Typography>+465</Typography>
					</Box>
					<Box
						sx={{
							backgroundColor: "#1D5352",
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
							paddingX: "20px",
							paddingY: "10px"
						}}
					>
						<Box display={"flex"} alignItems={"center"} gap={"15px"}>
							<Avatar>AK</Avatar>
							<Typography>Ajinkya Kahane</Typography>
						</Box>
						<Typography>123456</Typography>
						<Typography>+465</Typography>
					</Box>
					<Box
						sx={{
							backgroundColor: "#333333",
							borderBottomLeftRadius: "10px",
							borderBottomRightRadius: "10px",
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
							paddingX: "20px",
							paddingY: "10px"
						}}
					>
						<Box display={"flex"} alignItems={"center"} gap={"15px"}>
							<Avatar>AK</Avatar>
							<Typography>Ajinkya Kahane</Typography>
						</Box>
						<Typography>123456</Typography>
						<Typography>+465</Typography>
					</Box>
				</Box>
				<Button
					sx={{
						width: ["50vw", "20vw"],
						margin: "auto",
						backgroundColor: "#05D9D7",
						borderRadius: "30px",
						color: "black",
						border: "1px solid #05D9D7",
						":hover": {
							backgroundColor: "transparent",
							color: "#05D9D7"
						}
					}}
					onClick={() => {
						setDashobard("Landing");
						router.push("/dashboard/leaderboard");
					}}
				>
					Leaderboard
				</Button>
			</Box>
		</Box>
	);
};
