import Box from "@mui/material/Box";
import Image from "next/image";
import React, { useState } from "react";
import Carousel from "react-material-ui-carousel";
import { PropTypes } from "prop-types";
import { FullScreenModal } from "@components/Global/Modals/ViewImageModal";

export const QuestionCarousel = ({ data }) => {
	const [open, setOpen] = useState(false);
	console.log(data?.files);

	return (
		<Carousel
			sx={{
				display:
					data?.files?.filter((f) => f?.name?.slice(-3) !== "pdf").length > 0
						? 
						"flex"
						: 
						"none",
				flexDirection: "column"
			}}
		>
			{data?.files
				?.filter((f) => f?.name?.slice(-3) !== "pdf")
				.map((e, i) => (
					<div key={i}>
						<Box
							sx={{
								width: ["320px", "1000px"],
								height: ["200px", "500px"],
								position: "relative",
								cursor: "pointer",
								ml: ["15px"]
							}}
							onClick={() => {
								setOpen(true);
							}}
						>
							<Image
								alt={e?.name || "imag"}
								src={e?.link}
								style={{
									objectFit: "cover"
								}}
								fill
							/>
						</Box>
						<FullScreenModal open={open} setOpen={setOpen} imageUrl={e?.link} />
					</div>
				))}
		</Carousel>
	);
};

QuestionCarousel.propTypes = {
	data: PropTypes.any,
	setImageUrl: PropTypes.any,
	setOpen2: PropTypes.any
};
