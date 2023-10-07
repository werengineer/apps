import Box from "@mui/material/Box";
import Image from "next/image";
import React from "react";
import Carousel from "react-material-ui-carousel";
import { PropTypes } from "prop-types";
import { FullScreenModal } from "@components/Global/Modals/ViewImageModal";

export const StoryCarousel = ({ data, setOpen, open }) => {
	const [imageUrl, setImageUrl] = React.useState("");
	return (
		<>
			<Carousel
				sx={{
					display:
						data?.files?.filter((f) => f?.name?.slice(-3) !== "pdf").length > 0
							? "flex"
							: "none",
					flexDirection: "column"
				}}
			>
				{data?.files
					?.filter((f) => f?.name?.slice(-3) !== "pdf")
					.map((e, i) => (
						<Box
							key={i}
							sx={{
								width: ["320px", "95%"],
								height: ["200px", "500px"],
								position: "relative",
								cursor: "pointer",
								ml: ["15px"]
							}}
							onClick={() => {
								setImageUrl(e?.link);
								setOpen(true);
							}}
						>
							<Image
								alt={e?.name}
								src={e?.link}
								style={{
									objectFit: "cover"
								}}
								fill
							/>
						</Box>
					))}
			</Carousel>
			<FullScreenModal open={open} setOpen={setOpen} imageUrl={imageUrl} />
		</>
	);
};

StoryCarousel.propTypes = {
	data: PropTypes.any,
	setImageUrl: PropTypes.any,
	ImageUrl: PropTypes.any,
	setOpen: PropTypes.any,
	open: PropTypes.any
};
