import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import PropTypes from "prop-types";
import React from "react";

export const BenefitCard = ({ image, text }) => {
	return (
		<Stack direction={"column"} alignItems={"center"} justifyContent={"center"}>
			<Image width={100} height={100} src={image} />
			<Typography textAlign={"center"} mt={4}>
				{text}
			</Typography>
		</Stack>
	);
};

BenefitCard.propTypes = {
	image: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired
};
