import { PuzzleContext } from "@context/puzzle";
import { Lock } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { useContext } from "react";

export const Row4 = () => {
	const puzzleContext = useContext(PuzzleContext);
	const { content, handlePuzzleClick, opacityIndex } = puzzleContext;

	return (
		<Box display={"flex"} position={"relative"} width={"100%"} height={"25%"}>
			<Box
				display={"flex"}
				position={"absolute"}
				top={"-2.5%"}
				zIndex={1}
				width={"25%"}
				height={"100%"}
			>
				{content[12]?.status === "Done" ? (
					<Image loading="eager"src={"/puzzles/desktop/completed/13.svg"} alt="puzzle p00" fill />
				) : content[12]?.status === "In Progress" ? (
					<Image loading="eager"src={"/puzzles/desktop/current/13.svg"} alt="puzzle p00" fill />
				) : (
					<Image loading="eager"src={"/puzzles/desktop/locked/13.svg"} alt="puzzle p00" fill />
				)}
				<Button
					disabled={content[12]?.status === "Locked"}
					onClick={() => handlePuzzleClick({ i: 12 })}
					disableRipple
					// display={'flex'}
					flexDirection={"column"}
					zIndex={1}
					alignItems={"center"}
					justifyContent={"center"}
					width={"100%"}
					sx={{
						display:
							opacityIndex + 1 === 13 ||
							content[12]?.status === "Done" ||
							content[12]?.status === "In Progress"
								? "flex"
								: "none",
						opacity: content[12]?.status === "Locked" ? 0.5 : 1,
						justifyContent: "center",
						alignItems: "center",
						flexDirection: "column",
						width: "100%",
						height: "100%",
						":hover": {
							backgroundColor: "transparent"
						}
					}}
				>
					<Typography fontSize={20}>{content[12]?.name}</Typography>
					<Typography
						color={content[12]?.status === "Locked" ? "#1D5352" : "#50D9D7"}
						fontSize={11}
						sx={{
							display: content[12]?.status === "Locked" ? "none" : "flex"
						}}
					>
						{content[12]?.status}
					</Typography>
					<Lock
						sx={{
							display: content[12]?.status === "Locked" ? "flex" : "none",
							// position: 'absolute',
							// top: '40%',
							// left: '40%',
							fontSize: "30px"
						}}
					/>
				</Button>
			</Box>

			<Box
				left={"21%"}
				marginTop={"-5%"}
				marginLeft={"-.5%"}
				zIndex={1}
				display={"flex"}
				position={"relative"}
				width={"34%"}
				height={"116.4%"}
			>
				{content[13]?.status === "Done" ? (
					<Image loading="eager"src={"/puzzles/desktop/completed/14.svg"} alt="puzzle p" fill />
				) : content[13]?.status === "In Progress" ? (
					<Image loading="eager"src={"/puzzles/desktop/current/14.svg"} alt="puzzle p" fill />
				) : (
					<Image loading="eager"src={"/puzzles/desktop/locked/14.svg"} alt="puzzle p" fill />
				)}
				<Button
					onClick={() => handlePuzzleClick({ i: 13 })}
					disableRipple
					// display={'flex'}
					flexDirection={"column"}
					zIndex={1}
					alignItems={"center"}
					justifyContent={"center"}
					width={"100%"}
					sx={{
						display:
							opacityIndex + 1 === 14 ||
							content[13]?.status === "Done" ||
							content[13]?.status === "In Progress"
								? "flex"
								: "none",
						opacity: content[13]?.status === "Locked" ? 0.5 : 1,
						justifyContent: "center",
						alignItems: "center",
						flexDirection: "column",
						width: "100%",
						height: "115%",
						":hover": {
							backgroundColor: "transparent"
						}
					}}
				>
					<Typography fontSize={20}>{content[13]?.name}</Typography>
					<Typography
						color={content[13]?.status === "Locked" ? "#1D5352" : "#50D9D7"}
						fontSize={11}
						sx={{
							display: content[13]?.status === "Locked" ? "none" : "flex"
						}}
					>
						{content[13]?.status}
					</Typography>
					<Lock
						sx={{
							display: content[13]?.status === "Locked" ? "flex" : "none",
							// position: 'absolute',
							// top: '40%',
							// left: '40%',
							fontSize: "30px"
						}}
					/>
				</Button>
			</Box>

			<Box
				display={"flex"}
				left={"16.3%"}
				top={"-4%"}
				position={"relative"}
				width={"25%"}
				height={"100%"}
			>
				{content[14]?.status === "Done" ? (
					<Image loading="eager"src={"/puzzles/desktop/completed/15.svg"} alt="puzzle p" fill />
				) : content[14]?.status === "In Progress" ? (
					<Image loading="eager"src={"/puzzles/desktop/current/15.svg"} alt="puzzle p" fill />
				) : (
					<Image loading="eager"src={"/puzzles/desktop/locked/15.svg"} alt="puzzle p" fill />
				)}
				<Button
					onClick={() => handlePuzzleClick({ i: 14 })}
					disableRipple
					// display={'flex'}
					flexDirection={"column"}
					zIndex={1}
					alignItems={"center"}
					justifyContent={"center"}
					width={"100%"}
					sx={{
						display:
							opacityIndex + 1 === 15 ||
							content[14]?.status === "Done" ||
							content[14]?.status === "In Progress"
								? "flex"
								: "none",
						opacity: content[14]?.status === "Locked" ? 0.5 : 1,
						justifyContent: "center",
						alignItems: "center",
						flexDirection: "column",
						width: "100%",
						height: "100%",
						":hover": {
							backgroundColor: "transparent"
						}
					}}
				>
					<Typography fontSize={20}>{content[14]?.name}</Typography>
					<Typography
						color={content[14]?.status === "Locked" ? "#1D5352" : "#50D9D7"}
						fontSize={11}
						sx={{
							display: content[14]?.status === "Locked" ? "none" : "flex"
						}}
					>
						{content[14]?.status}
					</Typography>
					<Lock
						sx={{
							display: content[14]?.status === "Locked" ? "flex" : "none",
							// position: 'absolute',
							// top: '40%',
							// left: '40%',
							fontSize: "30px"
						}}
					/>
				</Button>
			</Box>

			<Box
				display={"flex"}
				marginTop={"-5%"}
				position={"absolute"}
				right={"0%"}
				width={"30%"}
				height={"114%"}
			>
				{content[15]?.status === "Done" ? (
					<Image loading="eager"src={"/puzzles/desktop/completed/16.svg"} alt="puzzle p" fill />
				) : content[15]?.status === "In Progress" ? (
					<Image loading="eager"src={"/puzzles/desktop/current/16.svg"} alt="puzzle p" fill />
				) : (
					<Image loading="eager"src={"/puzzles/desktop/locked/16.svg"} alt="puzzle p" fill />
				)}
				<Button
					onClick={() => handlePuzzleClick({ i: 15 })}
					disableRipple
					display={"flex"}
					flexDirection={"column"}
					zIndex={1}
					alignItems={"center"}
					justifyContent={"center"}
					width={"100%"}
					sx={{
						display:
							opacityIndex + 1 === 16 ||
							content[15]?.status === "Done" ||
							content[15]?.status === "In Progress"
								? "flex"
								: "none",
						opacity: content[15]?.status === "Locked" ? 0.5 : 1,
						justifyContent: "center",
						alignItems: "center",
						flexDirection: "column",
						width: "120%",
						ml: 5.5,
						height: "120%",
						":hover": {
							backgroundColor: "transparent"
						}
					}}
				>
					<Typography fontSize={20}>{content[15]?.name}</Typography>
					<Typography
						color={content[15]?.status === "Locked" ? "#1D5352" : "#50D9D7"}
						fontSize={11}
						sx={{
							display: content[15]?.status === "Locked" ? "none" : "flex"
						}}
					>
						{content[15]?.status}
					</Typography>
					<Lock
						sx={{
							display: content[15]?.status === "Locked" ? "flex" : "none",
							// position: 'absolute',
							// top: '40%',
							// left: '40%',
							fontSize: "30px"
						}}
					/>
				</Button>
			</Box>
		</Box>
	);
};