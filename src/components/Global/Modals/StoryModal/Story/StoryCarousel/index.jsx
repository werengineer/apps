import { Close } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";
import { PropTypes } from "prop-types";

export const StoryCarousel = ({ files, removeFile }) => {
	return (
		<Carousel
			sx={{
				width: "300px",
				display: "flex",
				justifyContent: "center",
				alignItems: "center"
			}}
			indicators={false}
		>
			{files.map((f, i) => (
				<Box
					key={i}
					sx={{
						display: "flex",
						alignItems: "center",
						width: "250px",
						ml: ["50px", "25px"]
					}}
				>
					<Typography width={["150px", "175px"]} noWrap>
						{f?.name}
					</Typography>
					<IconButton onClick={() => removeFile(f?.name)}>
						<Close />
					</IconButton>
				</Box>
			))}
		</Carousel>
	);
};

StoryCarousel.propTypes = {
	files: PropTypes.array,
	removeFile: PropTypes.func
};
