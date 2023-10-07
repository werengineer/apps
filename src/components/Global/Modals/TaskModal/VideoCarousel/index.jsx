import { PuzzleContext } from "@context/puzzle";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import React, { useContext } from "react";
import Carousel from "react-material-ui-carousel";

export const VideoCarousel = () => {
	const puzzleContext = useContext(PuzzleContext);
	const { open1, taskData, toggleTaskModal } = puzzleContext;
	return (
		<Box
			sx={{
				dislay: taskData?.ytUrl?.length > 0 ? "flex" : "none",
				width: ["100%", "50%"],
				borderRadius: "10px",
				overflow: "hidden"
			}}
		>
			<Carousel
				sx={{
					flex: 1,
					width: "100%",
					height: ["190px", "400px"]
				}}
				autoPlay={false}
				animation="slide"
			>
				{taskData?.ytUrl?.map((link, i) => (
					<div key={i}>
						<Box
							sx={{
								display: ["none", "flex"],
								width: "100%",
								height: "400px"
							}}
						>
							<iframe
								style={{
									objecFit: "cover",
									objectPosition: "center center",
									width: "100%",
									height: "100%"
								}}
								src={`https://www.youtube.com/embed/${link.split("/")[3]}`}
								title="YouTube video player"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								allowfullscreen
							></iframe>
						</Box>

						<Box
							sx={{
								display: ["flex", "none"],
								width: "100%",
								height: "300px"
							}}
						>
							<iframe
								style={{
									objecFit: "cover",
									objectPosition: "center center",
									width: "100%",
									height: "100%"
								}}
								src={`https://www.youtube.com/embed/${link.split("/")[3]}`}
								title="YouTube video player"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								allowfullscreen
							></iframe>
						</Box>
					</div>
				))}
			</Carousel>
		</Box>
	);
};

VideoCarousel.propTypes = {
	taskData: PropTypes.any
};
