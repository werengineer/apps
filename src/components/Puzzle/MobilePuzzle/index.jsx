import Box from "@mui/material/Box";
import React, { useContext } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PropTypes from "prop-types";
import { Row1 } from "./Row1";
import { Row2 } from "./Row2";
import { Row3 } from "./Row3";
import { Row4 } from "./Row4";
import { PuzzleContext } from "@context/puzzle";

export const MobilePuzzle = ({ carouselRef }) => {
	const puzzleContext = useContext(PuzzleContext);
	const { content, handlePuzzleClick, opacityIndex } = puzzleContext;
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 1
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 1
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 1
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1
		}
	};
	return (
		<Box display={"flex"} position={"relative"} height={350} width={350}>
			<Carousel responsive={responsive} ref={carouselRef} arrows={false} swipeable={false}>
				{/* Row 1 */}
				<Row1 />

				{/* Row 2 */}
				<Row2 />

				{/* Row 3 */}
				<Row3 />

				{/* Row 4 */}
				<Row4 />
			</Carousel>
		</Box>
	);
};

MobilePuzzle.propTypes = {
	content: PropTypes.any,
	handlePuzzleClick: PropTypes.any,
	carouselRef: PropTypes.any
};
