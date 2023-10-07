"use client";
import { CloseSharp } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";
import { PropTypes } from "prop-types";

export function MCarousel({ removeFile, files }) {
	return (
		<Box
			sx={{
				display: ["flex", "none"],
				// pl: "9vw",
				mb: "5vh"
			}}
		>
			<Carousel
				sx={{
					width: "100%"
				}}
				navButtonsAlwaysInvisible
				swipe
				animation="slide"
			>
				{files.map((f, i) => (
					<Box
						key={i}
						sx={{
							backgroundColor: "rgba(0, 0, 0, 0.15)",
							borderRadius: "5px",
							px: "10px",
							py: "5px",
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
							width: "100%"
						}}
					>
						<Typography
							sx={{
								fontSize: "12px",
								width: "80%",
							}}
							noWrap
						>
							{/* {f.name} */}
							HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH
						</Typography>

						<Button
							sx={{
								borderRadius: "30px",
								p: 0,
								":hover": {
									backgroundColor: "transparent"
								}
							}}
							onClick={() => removeFile(f?.name)}
						>
							<CloseSharp
								sx={{
									color: "rgba()",
									width: "15px",
									height: "15px"
								}}
							/>
						</Button>
					</Box>
				))}
			</Carousel>
		</Box>
	);
}

MCarousel.propTypes = {
	removeFile: PropTypes.any,
	files: PropTypes.any
};
