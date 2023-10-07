"use client";
import { Box, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import React, { useContext, useState } from "react";
import { useRef } from "react";
import { IncompleteBlock } from "./IncompleteBlock";
import PropTypes from "prop-types";
import { DesktopPuzzle } from "./DesktopPuzzle";
import { BlockModal } from "@components/Global/Modals/BlockModal";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import { MobilePuzzle } from "./MobilePuzzle";
import { PuzzleContext } from "@context/puzzle";

export const Puzzle = () => {
	const puzzleContext = useContext(PuzzleContext);
	const { block, content, setContent } = puzzleContext;
	const [open1, setOpen1] = useState(false);
	const [index, setIndex] = useState(null);
	const [currentSlide, setCurrentSlide] = useState(0);
	const carouselRef = useRef(null);

	if (content?.length !== 16) {
		return <IncompleteBlock />;
	}

	const handlePuzzleClick = (i) => {
		setIndex(i);
		setOpen1(true);
	};

	return (
		<Box width={"100%"} height={["100%", "100%"]} overflow={"scroll"}>
			<DesktopPuzzle content={content} handlePuzzleClick={handlePuzzleClick} />
			<BlockModal
				open={open1}
				setOpen={setOpen1}
				content={content}
				setContent={setContent}
				index={index}
			/>

			<Box
				display={["flex", "none"]}
				flexDirection={"column"}
				overflowX={"hidden"}
				gap={3}
				sx={
					{
						// backgroundColor: 'red'
					}
				}
			>
				<Box position={"relative"} height={180} width={"100%"}>
					<Image alt={"puggleG.png"} src={"/puzzleG.png"} fill />
				</Box>
				<Typography display={"flex"} textAlign={"center"} color={"#979797"} fontSize={14}>
					Starting to learn web development can be like completing a puzzle, with each piece
					representing a step deeper into the field.
				</Typography>
				<Box display={"flex"} flexDirection={"column"} gap={1}>
					<Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
						<IconButton
							disabled={currentSlide === 0 ? true : false}
							onClick={() => {
								setCurrentSlide(currentSlide - 1);
								carouselRef.current.previous();
							}}
						>
							<ArrowBackIosNew />
						</IconButton>
						<Typography color={"#50D9D7"} fontWeight={500}>
							Puzzle {currentSlide + 1}
						</Typography>
						<IconButton
							disabled={currentSlide === 3 ? true : false}
							onClick={() => {
								setCurrentSlide(currentSlide + 1);
								carouselRef.current.next();
							}}
						>
							<ArrowForwardIos />
						</IconButton>
					</Box>
					<Box display={"flex"} height={350}>
						<MobilePuzzle
							carouselRef={carouselRef}
						/>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

Puzzle.propTypes = {
	block: PropTypes.any
};
