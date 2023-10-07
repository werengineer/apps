import { PuzzleContext } from "@context/puzzle";
import Box from "@mui/material/Box";
import React, { useContext } from "react";
import Carousel from "react-material-ui-carousel";


export const VideoCarousel = () => {
	const puzzleContext = useContext(PuzzleContext);
	const { blockModalData } = puzzleContext;

	return (
		<Box
			sx={{
				flex: [1],
				border: "1px solid grey",
				borderRadius: "10px",
				overflow: "hidden"
			}}
		>
			<Carousel
				sx={{
					width: "100%",
					height: ["190px", "400px"]
				}}
				autoPlay={false}
				animation="slide"
			>
				{blockModalData?.vidUrl?.map((link, i) => (
					<>
						<Box
							sx={{
								display: ["none", "flex"],
								width: "100%",
								height: "400px"
							}}
							key={i}
						>
							<iframe
								style={{
									objecFit: "cover",
									objectPosition: "center center",
									width: "100%",
									height: "100%"
								}}
								src={`https://www.youtube.com/embed/${link.split("/")[3]}`}
								title="YouTube blockModalData?.vidUrl player"
								frameBorder="0"
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
							key={i}
						>
							<iframe
								style={{
									objecFit: "cover",
									objectPosition: "center center",
									width: "100%",
									height: "100%"
								}}
								src={`https://www.youtube.com/embed/${link.split("/")[3]}`}
								title="YouTube blockModalData?.vidUrl player"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								allowfullscreen
							></iframe>
						</Box>
					</>
				))}
			</Carousel>
		</Box>
	);
};
