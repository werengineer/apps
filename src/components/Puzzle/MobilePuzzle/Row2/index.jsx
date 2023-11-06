import React, { useContext } from "react";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import PropTypes from "prop-types";
import { PuzzleContext } from "@context/puzzle";

export const Row2 = () => {
	const puzzleContext = useContext(PuzzleContext);
	const { content, handlePuzzleClick, opacityIndex } = puzzleContext;
	return (
		<Box
			// display={'flex'}
			position={"relative"}
			display={"flex"}
			width={"100%"}
			height={350}
		>
			<Box display={"flex"} position={"absolute"} width={"60%"} height={"60%"}>
				{content[4]?.status === "Done" ? (
					<Image src={"/puzzles/mobile/completed/1.svg"} alt="puzzle p00" fill />
				) : content[4]?.status === "In Progress" ? (
					<Image src={"/puzzles/mobile/current/1.svg"} alt="puzzle p00" fill />
				) : (
					<Image src={"/puzzles/mobile/locked/1.svg"} alt="puzzle p00" fill />
				)}
				<Button
					onClick={() => handlePuzzleClick({ i: 4 })}
					disableRipple
					sx={{
						display: "flex",
						width: "90%",
						height: "90%",
						flexDirection: "column",
						":hover": {
							backgroundColor: "transparent"
						}
					}}
				>
					<Typography
						sx={{
							fontSize: "20px"
						}}
					>
						{content[4]?.name}
					</Typography>
					<Typography
						sx={{
							fontSize: "12px",
							color: "#05D9D7"
						}}
					>
						{content[4]?.status}
					</Typography>
				</Button>
			</Box>
			<Box
				display={"flex"}
				position={"absolute"}
				width={"50%"}
				right={2}
				height={"50%"}
				justifyContent={"flex-end"}
			>
				{content[5]?.status === "Done" ? (
					<Image src={"/puzzles/mobile/completed/2.svg"} alt="puzzle p00" fill />
				) : content[5]?.status === "In Progress" ? (
					<Image src={"/puzzles/mobile/current/2.svg"} alt="puzzle p00" fill />
				) : (
					<Image src={"/puzzles/mobile/locked/2.svg"} alt="puzzle p00" fill />
				)}
				<Button
					onClick={() => handlePuzzleClick({ i: 5 })}
					disableRipple
					sx={{
						display: "flex",
						width: "100%",
						height: "100%",
						flexDirection: "column",
						":hover": {
							backgroundColor: "transparent"
						}
					}}
				>
					<Typography
						sx={{
							fontSize: "20px"
						}}
					>
						{content[5]?.name}
					</Typography>
					<Typography
						sx={{
							fontSize: "12px",
							color: "#05D9D7"
						}}
					>
						{content[5]?.status}
					</Typography>
				</Button>
			</Box>

			<Box
				display={"flex"}
				position={"absolute"}
				width={"50%"}
				height={"50%"}
				bottom={1}
				justifyContent={"flex-end"}
			>
				{/* <Image src={'/puzzles/mobile/completed/3.svg'} fill alt={'puzzle1'} /> */}
				{content[6]?.status === "Done" ? (
					<Image src={"/puzzles/mobile/completed/3.svg"} alt="puzzle p00" fill />
				) : content[6]?.status === "In Progress" ? (
					<Image src={"/puzzles/mobile/current/3.svg"} alt="puzzle p00" fill />
				) : (
					<Image src={"/puzzles/mobile/locked/3.svg"} alt="puzzle p00" fill />
				)}
				<Button
					onClick={() => handlePuzzleClick({ i: 6 })}
					disableRipple
					sx={{
						display: "flex",
						width: "100%",
						height: "100%",
						flexDirection: "column",
						":hover": {
							backgroundColor: "transparent"
						}
					}}
				>
					<Typography
						sx={{
							fontSize: "20px"
						}}
					>
						{content[6]?.name}
					</Typography>
					<Typography
						sx={{
							fontSize: "12px",
							color: "#05D9D7"
						}}
					>
						{content[6]?.status}
					</Typography>
				</Button>
			</Box>
			<Box
				display={"flex"}
				position={"absolute"}
				width={"60%"}
				right={0}
				bottom={-2}
				height={"60%"}
				justifyContent={"flex-end"}
			>
				{/* <Image src={'/puzzles/mobile/completed/4.svg'} fill alt={'puzzle1'} /> */}
				{content[7]?.status === "Done" ? (
					<Image src={"/puzzles/mobile/completed/4.svg"} alt="puzzle p00" fill />
				) : content[7]?.status === "In Progress" ? (
					<Image src={"/puzzles/mobile/current/4.svg"} alt="puzzle p00" fill />
				) : (
					<Image src={"/puzzles/mobile/locked/4.svg"} alt="puzzle p00" fill />
				)}
				<Button
					onClick={() => handlePuzzleClick({ i: 7 })}
					disableRipple
					sx={{
						display: "flex",
						width: "88%",
						mt: "10%",
						height: "90%",
						flexDirection: "column",
						":hover": {
							backgroundColor: "transparent"
						}
					}}
				>
					<Typography
						sx={{
							fontSize: "20px"
						}}
					>
						{content[7]?.name}
					</Typography>
					<Typography
						sx={{
							fontSize: "12px",
							color: "#05D9D7"
						}}
					>
						{content[7]?.status}
					</Typography>
				</Button>
			</Box>
		</Box>
	);
};
Row2.propTypes = {
	content: PropTypes.any,
	handlePuzzleClick: PropTypes.any
};
