import React, { useContext } from "react";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import PropTypes from "prop-types";
import { PuzzleContext } from "@context/puzzle";

export const Row3 = () => {
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
				{content[8]?.status === "Done" ? (
					<Image src={"/puzzles/mobile/completed/1.svg"} alt="puzzle p00" fill />
				) : content[8]?.status === "In Progress" ? (
					<Image src={"/puzzles/mobile/current/1.svg"} alt="puzzle p00" fill />
				) : (
					<Image src={"/puzzles/mobile/Locked/1.svg"} alt="puzzle p00" fill />
				)}
				<Button
					onClick={() => handlePuzzleClick({ i: 8 })}
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
						{content[8]?.name}
					</Typography>
					<Typography
						sx={{
							fontSize: "12px",
							color: "#05D9D7"
						}}
					>
						{content[8]?.status}
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
				{content[9]?.status === "Done" ? (
					<Image src={"/puzzles/mobile/completed/2.svg"} alt="puzzle p00" fill />
				) : content[9]?.status === "In Progress" ? (
					<Image src={"/puzzles/mobile/current/2.svg"} alt="puzzle p00" fill />
				) : (
					<Image src={"/puzzles/mobile/Locked/2.svg"} alt="puzzle p00" fill />
				)}
				<Button
					onClick={() => handlePuzzleClick({ i: 9 })}
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
						{content[9]?.name}
					</Typography>
					<Typography
						sx={{
							fontSize: "12px",
							color: "#05D9D7"
						}}
					>
						{content[9]?.status}
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
				{content[10]?.status === "Done" ? (
					<Image src={"/puzzles/mobile/completed/3.svg"} alt="puzzle p00" fill />
				) : content[10]?.status === "In Progress" ? (
					<Image src={"/puzzles/mobile/current/3.svg"} alt="puzzle p00" fill />
				) : (
					<Image src={"/puzzles/mobile/Locked/3.svg"} alt="puzzle p00" fill />
				)}
				<Button
					onClick={() => handlePuzzleClick({ i: 10 })}
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
						{content[10]?.name}
					</Typography>
					<Typography
						sx={{
							fontSize: "12px",
							color: "#05D9D7"
						}}
					>
						{content[10]?.status}
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
				{content[11]?.status === "Done" ? (
					<Image src={"/puzzles/mobile/completed/4.svg"} alt="puzzle p00" fill />
				) : content[11]?.status === "In Progress" ? (
					<Image src={"/puzzles/mobile/current/4.svg"} alt="puzzle p00" fill />
				) : (
					<Image src={"/puzzles/mobile/Locked/4.svg"} alt="puzzle p00" fill />
				)}
				<Button
					onClick={() => handlePuzzleClick({ i: 11 })}
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
						{content[11]?.name}
					</Typography>
					<Typography
						sx={{
							fontSize: "12px",
							color: "#05D9D7"
						}}
					>
						{content[11]?.status}
					</Typography>
				</Button>
			</Box>
		</Box>
	);
};

Row3.propTypes = {
	content: PropTypes.any,
	handlePuzzleClick: PropTypes.any
};
