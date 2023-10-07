import { PuzzleContext } from "@context/puzzle";
import { Lock } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { useContext } from "react";

export const Row2 = () => {
	const puzzleContext = useContext(PuzzleContext);
	const { content, handlePuzzleClick, opacityIndex } = puzzleContext;

	return (
		<Box display={"flex"} position={"relative"} width={"100%"} height={"25%"}>
			<Box display={"flex"} position={"absolute"} zIndex={1} width={"25%"} height={"100.3%"}>
				{content[4]?.status === "Done" ? (
					<Image loading="eager"src={"/puzzles/desktop/completed/5.svg"} alt="puzzle p" fill />
				) : content[4]?.status === "In Progress" ? (
					<Image loading="eager"src={"/puzzles/desktop/current/5.svg"} alt="puzzle p" fill />
				) : (
					<Image loading="eager"src={"/puzzles/desktop/locked/5.svg"} alt="puzzle p" fill />
				)}
				<Button
					onClick={() => handlePuzzleClick({ i: 4 })}
					disableRipple
					// display={'flex'}
					flexDirection={"column"}
					zIndex={1}
					alignItems={"center"}
					justifyContent={"center"}
					width={"100%"}
					sx={{
						display:
							opacityIndex + 1 === 5 ||
							content[4]?.status === "Done" ||
							content[4]?.status === "In Progress"
								? "flex"
								: "none",
						opacity: content[4]?.status === "Locked" ? 0.5 : 1,
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
					<Typography fontSize={20}>{content[4]?.name}</Typography>
					<Typography
						color={content[4]?.status === "Locked" ? "#1D5352" : "#50D9D7"}
						fontSize={11}
						sx={{
							display: content[4]?.status === "Locked" ? "none" : "flex"
						}}
					>
						{content[4]?.status}
					</Typography>
					<Lock
						sx={{
							display: content[4]?.status === "Locked" ? "flex" : "none",
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
				left={"20%"}
				marginTop={"-4.1%"}
				position={"relative"}
				width={"34.8%"}
				height={"134%"}
			>
				{content[5]?.status === "Done" ? (
					<Image loading="eager"src={"/puzzles/desktop/completed/6.svg"} alt="puzzle p" fill />
				) : content[5]?.status === "In Progress" ? (
					<Image loading="eager"src={"/puzzles/desktop/current/6.svg"} alt="puzzle p" fill />
				) : (
					<Image loading="eager"src={"/puzzles/desktop/locked/6.svg"} alt="puzzle p" fill />
				)}
				<Button
					onClick={() => handlePuzzleClick({ i: 5 })}
					disableRipple
					// display={'flex'}
					flexDirection={"column"}
					zIndex={1}
					alignItems={"center"}
					justifyContent={"center"}
					width={"100%"}
					sx={{
						display:
							opacityIndex + 1 === 6 ||
							content[5]?.status === "Done" ||
							content[5]?.status === "In Progress"
								? "flex"
								: "none",
						opacity: content[5]?.status === "Locked" ? 0.5 : 1,
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
					<Typography fontSize={20}>{content[5]?.name}</Typography>
					<Typography
						color={content[5]?.status === "Locked" ? "#1D5352" : "#50D9D7"}
						fontSize={11}
						sx={{
							display: content[5]?.status === "Locked" ? "none" : "flex"
						}}
					>
						{content[5]?.status}
					</Typography>
					<Lock
						sx={{
							display: content[5]?.status === "Locked" ? "flex" : "none",
							// position: 'absolute',
							// top: '40%',
							// left: '40%',
							fontSize: "30px"
						}}
					/>
				</Button>
			</Box>

			<Box
				left={"15%"}
				zIndex={1}
				display={"flex"}
				position={"relative"}
				width={"25%"}
				height={"100%"}
			>
				{content[6]?.status === "Done" ? (
					<Image loading="eager"src={"/puzzles/desktop/completed/7.svg"} alt="puzzle p" fill />
				) : content[6]?.status === "In Progress" ? (
					<Image loading="eager"src={"/puzzles/desktop/current/7.svg"} alt="puzzle p" fill />
				) : (
					<Image loading="eager"src={"/puzzles/desktop/locked/7.svg"} alt="puzzle p" fill />
				)}
				<Button
					onClick={() => handlePuzzleClick({ i: 6 })}
					disableRipple
					// display={'flex'}
					flexDirection={"column"}
					zIndex={1}
					alignItems={"center"}
					justifyContent={"center"}
					width={"100%"}
					sx={{
						display:
							opacityIndex + 1 === 7 ||
							content[6]?.status === "Done" ||
							content[6]?.status === "In Progress"
								? "flex"
								: "none",
						opacity: content[6]?.status === "Locked" ? 0.5 : 1,
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
					<Typography fontSize={20}>{content[6]?.name}</Typography>
					<Typography
						color={content[6]?.status === "Locked" ? "#1D5352" : "#50D9D7"}
						fontSize={11}
						sx={{
							display: content[6]?.status === "Locked" ? "none" : "flex"
						}}
					>
						{content[6]?.status}
					</Typography>
					<Lock
						sx={{
							display: content[6]?.status === "Locked" ? "flex" : "none",
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
				position={"absolute"}
				marginTop={"-4%"}
				right={"-.3%"}
				width={"30.5%"}
				height={"132%"}
			>
				{content[7]?.status === "Done" ? (
					<Image loading="eager"src={"/puzzles/desktop/completed/8.svg"} alt="puzzle p" fill />
				) : content[7]?.status === "In Progress" ? (
					<Image loading="eager"src={"/puzzles/desktop/current/8.svg"} alt="puzzle p" fill />
				) : (
					<Image loading="eager"src={"/puzzles/desktop/locked/8.svg"} alt="puzzle p" fill />
				)}
				<Button
					onClick={() => handlePuzzleClick({ i: 7 })}
					disableRipple
					// display={'flex'}
					flexDirection={"column"}
					zIndex={1}
					alignItems={"center"}
					justifyContent={"center"}
					width={"100%"}
					sx={{
						display:
							opacityIndex + 1 === 8 ||
							content[7]?.status === "Done" ||
							content[7]?.status === "In Progress"
								? "flex"
								: "none",
						opacity: content[7]?.status === "Locked" ? 0.5 : 1,
						justifyContent: "center",
						alignItems: "center",
						flexDirection: "column",
						width: "100%",
						ml: 5.5,
						height: "100%",
						":hover": {
							backgroundColor: "transparent"
						}
					}}
				>
					<Typography fontSize={20}>{content[7]?.name}</Typography>
					<Typography
						color={content[7]?.status === "Locked" ? "#1D5352" : "#50D9D7"}
						fontSize={11}
						sx={{
							display: content[7]?.status === "Locked" ? "none" : "flex"
						}}
					>
						{content[7]?.status}
					</Typography>
					<Lock
						sx={{
							display: content[7]?.status === "Locked" ? "flex" : "none",
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
