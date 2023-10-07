"use client";
import { CloseSharp } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";
import { PropTypes } from "prop-types";

export function FCarousel({ files, removeFile }) {
	return (
		<Box
			sx={{
				display: "flex"
			}}
		>
			<Carousel
				sx={{
					width: ["80vw", "30vw"]
				}}
				animation="slide"
			>
				{files.map((f, i) => (
					<Box
						width={["100%", "75%"]}
						display={"flex"}
						justifyContent={"space-between"}
						alignItems={"center"}
						bgcolor={"rgba(0, 0, 0, 0.12)"}
						paddingX={"10px"}
						borderRadius={"10px"}
						key={i}
						height={"5vh"}
						sx={{
							marginLeft: ["0px", "55px"]
						}}
					>
						<Typography
							sx={{
								fontSize: "12px",
								width: "70%"
							}}
							noWrap
						>
							{/* {f?.name?.slice(0, 15)}...{f?.name?.slice(-8)} */}
							{f?.name}
						</Typography>
						<Button
							sx={{
								borderRadius: "30px",
								width: "20px",
								":hover": {
									backgroundColor: "transparent"
								}
							}}
							onClick={() => removeFile(f?.name)}
						>
							<CloseSharp
								sx={{
									color: "rgba()",
									width: "20px",
									height: "20px"
								}}
							/>
						</Button>
					</Box>
				))}
			</Carousel>
		</Box>
	);
}

FCarousel.propTypes = {
	files: PropTypes.any,
	removeFile: PropTypes.any
};
