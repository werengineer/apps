import { PuzzleContext } from "@context/puzzle";
import { Lock } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { useContext } from "react";

export const Row1 = () => {
	const puzzleContext = useContext(PuzzleContext);
	const { content, handlePuzzleClick, opacityIndex } = puzzleContext;

	return (
		<Box display={"flex"} position={"relative"} width={"100%"} height={"25%"}>
			<Box display={"flex"} position={"absolute"} zIndex={1} width={"30.3%"} height={"120.4%"}>
				{content[0]?.status === "Done" ? (
					<Image
						loading="eager"
						src={"/puzzles/desktop/completed/1.svg"}
						alt="puzzle p00"
						fill
					/>
				) : content[0]?.status === "In Progress" ? (
					<Image loading="eager" src={"/puzzles/desktop/current/1.svg"} alt="puzzle p00" fill />
				) : (
					<Image loading="eager" src={"/puzzles/desktop/locked/1.svg"} alt="puzzle p00" fill />
				)}

				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						width: "85%",
						height: "85%"
					}}
				>
					<Button
						onClick={() => handlePuzzleClick({ i: 0 })}
						disableRipple
						sx={{
							display:
								opacityIndex + 1 === 1 ||
								content[0]?.status === "Done" ||
								content[0]?.status === "In Progress"
									? "flex"
									: "none",
							opacity: content[0]?.status === "Locked" ? 0.5 : 1,
							flexDirection: "column",
							":hover": {
								backgroundColor: "transparent"
							}
						}}
					>
						<Typography fontSize={20}>{content[0]?.name}</Typography>
						<Typography
							color={content[0]?.status === "Locked" ? "#1D5352" : "#50D9D7"}
							fontSize={11}
							sx={{
								display: content[0]?.status === "Locked" ? "none" : "flex"
							}}
						>
							{content[0]?.status}
						</Typography>
						<Lock
							sx={{
								display: content[0]?.status === "Locked" ? "flex" : "none",
								// position: 'absolute',
								// top: '40%',
								// left: '40%',
								fontSize: "30px"
							}}
						/>
					</Button>
				</Box>
			</Box>

			<Box
				left={"25%"}
				zIndex={1}
				display={"flex"}
				position={"relative"}
				width={"25%"}
				height={"100%"}
			>
				{content[1]?.status === "Done" ? (
					<Image loading="eager" src={"/puzzles/desktop/completed/2.svg"} alt="puzzle p" fill />
				) : content[1]?.status === "In Progress" ? (
					<Image loading="eager" src={"/puzzles/desktop/current/2.svg"} alt="puzzle p" fill />
				) : (
					<Image loading="eager" src={"/puzzles/desktop/locked/2.svg"} alt="puzzle p" fill />
				)}

				<Button
					onClick={() => handlePuzzleClick({ i: 1 })} // disableRipple
					disableRipple
					sx={{
						display:
							opacityIndex + 1 === 2 ||
							content[1]?.status === "Done" ||
							content[1]?.status === "In Progress"
								? "flex"
								: "none",
						opacity: content[1]?.status === "Locked" ? 0.5 : 1,
						justifyContent: "center",
						alignItems: "center",
						flexDirection: "column",
						width: "100%",
						":hover": {
							backgroundColor: "transparent"
						}
					}}
				>
					<Typography fontSize={20}>{content[1]?.name}</Typography>
					<Typography
						color={content[1]?.status === "Locked" ? "#1D5352" : "#50D9D7"}
						fontSize={11}
						sx={{
							display: content[1]?.status === "Locked" ? "none" : "flex"
						}}
					>
						{content[1]?.status}
					</Typography>
					<Lock
						sx={{
							display: content[1]?.status === "Locked" ? "flex" : "none",
							// position: 'absolute',
							// top: '40%',
							// left: '40%',
							fontSize: "30px"
						}}
					/>
				</Button>
			</Box>

			<Box display={"flex"} left={"20%"} position={"relative"} width={"34.8%"} height={"120%"}>
				{content[2]?.status === "Done" ? (
					<Image loading="eager" src={"/puzzles/desktop/completed/3.svg"} alt="puzzle p" fill />
				) : content[2]?.status === "In Progress" ? (
					<Image loading="eager" src={"/puzzles/desktop/current/3.svg"} alt="puzzle p" fill />
				) : (
					<Image loading="eager" src={"/puzzles/desktop/locked/3.svg"} alt="puzzle p" fill />
				)}
				<Button
					onClick={() => handlePuzzleClick({ i: 2 })}
					disableRipple
					// display={'flex'}
					flexDirection={"column"}
					zIndex={1}
					alignItems={"center"}
					justifyContent={"center"}
					width={"100%"}
					sx={{
						display:
							opacityIndex + 1 === 3 ||
							content[2]?.status === "Done" ||
							content[2]?.status === "In Progress"
								? "flex"
								: "none",
						opacity: content[2]?.status === "Locked" ? 0.5 : 1,
						justifyContent: "center",
						alignItems: "center",
						flexDirection: "column",
						width: "100%",
						height: "85%",
						":hover": {
							backgroundColor: "transparent"
						}
					}}
				>
					<Typography fontSize={20}>{content[2]?.name}</Typography>
					<Typography
						color={content[2]?.status === "Locked" ? "#1D5352" : "#50D9D7"}
						fontSize={11}
						sx={{
							display: content[2]?.status === "Locked" ? "none" : "flex"
						}}
					>
						{content[2]?.status}
					</Typography>
					<Lock
						sx={{
							display: content[2]?.status === "Locked" ? "flex" : "none",
							// position: 'absolute',
							// top: '40%',
							// left: '40%',
							fontSize: "30px"
						}}
					/>
				</Button>
			</Box>

			<Box display={"flex"} position={"absolute"} right={"1px"} width={"25.3%"} height={"100%"}>
				{content[3]?.status === "Done" ? (
					<Image loading="eager" src={"/puzzles/desktop/completed/4.svg"} alt="puzzle p" fill />
				) : content[3]?.status === "In Progress" ? (
					<Image loading="eager" src={"/puzzles/desktop/current/4.svg"} alt="puzzle p" fill />
				) : (
					<Image loading="eager" src={"/puzzles/desktop/locked/4.svg"} alt="puzzle p" fill />
				)}

				<Button
					onClick={() => handlePuzzleClick({ i: 3 })}
					disableRipple
					// display={'flex'}
					flexDirection={"column"}
					zIndex={1}
					alignItems={"center"}
					justifycontent={"center"}
					width={"100%"}
					sx={{
						display:
							opacityIndex + 1 === 4 ||
							content[3]?.status === "Done" ||
							content[3]?.status === "In Progress"
								? "flex"
								: "none",
						opacity: content[3]?.status === "Locked" ? 0.5 : 1,
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
					<Typography fontSize={20}>{content[3]?.name}</Typography>
					<Typography
						color={content[3]?.status === "Locked" ? "#1D5352" : "#50D9D7"}
						fontSize={11}
						sx={{
							display: content[3]?.status === "Locked" ? "none" : "flex"
						}}
					>
						{content[3]?.status}
					</Typography>
					<Lock
						sx={{
							display: content[3]?.status === "Locked" ? "flex" : "none",
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
