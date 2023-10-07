import { PuzzleContext } from "@context/puzzle";
import { Lock } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { useContext } from "react";

export const Row3 = () => {
	const puzzleContext = useContext(PuzzleContext);
	const { content, handlePuzzleClick, opacityIndex } = puzzleContext;

	return (
		<Box display={"flex"} position={"relative"} width={"100%"} height={"25%"}>
			<Box
				display={"flex"}
				marginTop={"-4%"}
				left={"-.3%"}
				position={"absolute"}
				zIndex={1}
				width={"30.3%"}
				height={"134%"}
			>
				{content[8]?.status === "Done" ? (
					<Image loading="eager"src={"/puzzles/desktop/completed/9.svg"} alt="puzzle p" fill />
				) : content[8]?.status === "In Progress" ? (
					<Image loading="eager"src={"/puzzles/desktop/current/9.svg"} alt="puzzle p" fill />
				) : (
					<Image loading="eager"src={"/puzzles/desktop/locked/9.svg"} alt="puzzle p" fill />
				)}
				<Button
					onClick={() => handlePuzzleClick({ i: 8 })}
					disableRipple
					// display={'flex'}
					flexDirection={"column"}
					zIndex={1}
					alignItems={"center"}
					justifyContent={"center"}
					width={"100%"}
					sx={{
						display:
							opacityIndex + 1 === 9 ||
							content[8]?.status === "Done" ||
							content[8]?.status === "In Progress"
								? "flex"
								: "none",
						opacity: content[8]?.status === "Locked" ? 0.5 : 1,
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
					<Typography fontSize={20}>{content[8]?.name}</Typography>
					<Typography
						color={content[8]?.status === "Locked" ? "#1D5352" : "#50D9D7"}
						fontSize={11}
						sx={{
							display: content[8]?.status === "Locked" ? "none" : "flex"
						}}
					>
						{content[8]?.status}
					</Typography>
					<Lock
						sx={{
							display: content[8]?.status === "Locked" ? "flex" : "none",
							// position: 'absolute',
							// top: '40%',
							// left: '40%',
							fontSize: "30px"
						}}
					/>
				</Button>
			</Box>

			<Box
				left={"25%"}
				zIndex={1}
				marginTop={-0.2}
				display={"flex"}
				position={"relative"}
				width={"25%"}
				height={"100%"}
			>
				{content[9]?.status === "Done" ? (
					<Image loading="eager"src={"/puzzles/desktop/completed/10.svg"} alt="puzzle p" fill />
				) : content[9]?.status === "In Progress" ? (
					<Image loading="eager"src={"/puzzles/desktop/current/10.svg"} alt="puzzle p" fill />
				) : (
					<Image loading="eager"src={"/puzzles/desktop/locked/10.svg"} alt="puzzle p" fill />
				)}
				<Button
					onClick={() => handlePuzzleClick({ i: 9 })}
					disableRipple
					// display={'flex'}
					flexDirection={"column"}
					zIndex={1}
					alignItems={"center"}
					justifyContent={"center"}
					width={"100%"}
					sx={{
						display:
							opacityIndex + 1 === 10 ||
							content[9]?.status === "Done" ||
							content[9]?.status === "In Progress"
								? "flex"
								: "none",
						opacity: content[9]?.status === "Locked" ? 0.5 : 1,
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
					<Typography fontSize={20}>{content[9]?.name}</Typography>
					<Typography
						color={content[9]?.status === "Locked" ? "#1D5352" : "#50D9D7"}
						fontSize={11}
						sx={{
							display: content[9]?.status === "Locked" ? "none" : "flex"
						}}
					>
						{content[9]?.status}
					</Typography>
					<Lock
						sx={{
							display: content[9]?.status === "Locked" ? "flex" : "none",
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
				marginTop={"-4.3%"}
				position={"relative"}
				width={"34.8%"}
				height={"133%"}
			>
				{content[10]?.status === "Done" ? (
					<Image loading="eager"src={"/puzzles/desktop/completed/11.svg"} alt="puzzle p" fill />
				) : content[10]?.status === "In Progress" ? (
					<Image loading="eager"src={"/puzzles/desktop/current/11.svg"} alt="puzzle p" fill />
				) : (
					<Image loading="eager"src={"/puzzles/desktop/locked/11.svg"} alt="puzzle p" fill />
				)}
				<Button
					onClick={() => handlePuzzleClick({ i: 10 })}
					disableRipple
					flexDirection={"column"}
					zIndex={1}
					alignItems={"center"}
					justifyContent={"center"}
					width={"100%"}
					sx={{
						display:
							opacityIndex + 1 === 11 ||
							content[10]?.status === "Done" ||
							content[10]?.status === "In Progress"
								? "flex"
								: "none",
						opacity: content[10]?.status === "Locked" ? 0.5 : 1,
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
					<Typography fontSize={20}>{content[10]?.name}</Typography>
					<Typography
						color={content[10]?.status === "Locked" ? "#1D5352" : "#50D9D7"}
						fontSize={11}
						sx={{
							display: content[10]?.status === "Locked" ? "none" : "flex"
						}}
					>
						{content[10]?.status}
					</Typography>
					<Lock
						sx={{
							display: content[10]?.status === "Locked" ? "flex" : "none",
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
				right={"0%"}
				marginTop={"-.6%"}
				width={"25.3%"}
				height={"100%"}
			>
				{content[11]?.status === "Done" ? (
					<Image loading="eager"src={"/puzzles/desktop/completed/12.svg"} alt="puzzle p" fill />
				) : content[11]?.status === "In Progress" ? (
					<Image loading="eager"src={"/puzzles/desktop/current/12.svg"} alt="puzzle p" fill />
				) : (
					<Image loading="eager"src={"/puzzles/desktop/locked/12.svg"} alt="puzzle p" fill />
				)}
				<Button
					onClick={() => handlePuzzleClick({ i: 11 })}
					disableRipple
					// display={'flex'}
					flexDirection={"column"}
					zIndex={1}
					alignItems={"center"}
					justifyContent={"center"}
					width={"100%"}
					sx={{
						display:
							opacityIndex + 1 === 12 ||
							content[11]?.status === "Done" ||
							content[11]?.status === "In Progress"
								? "flex"
								: "none",
						opacity: content[11]?.status === "Locked" ? 0.5 : 1,
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
					<Typography fontSize={20}>{content[11]?.name}</Typography>
					<Typography
						color={content[11]?.status === "Locked" ? "#1D5352" : "#50D9D7"}
						fontSize={11}
						sx={{
							display: content[11]?.status === "Locked" ? "none" : "flex"
						}}
					>
						{content[11]?.status}
					</Typography>
					<Lock
						sx={{
							display: content[11]?.status === "Locked" ? "flex" : "none",
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
