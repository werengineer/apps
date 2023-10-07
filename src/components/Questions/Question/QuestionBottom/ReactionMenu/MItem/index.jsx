import { IconButton, Tooltip } from "@mui/material";
import Image from "next/image";
import React from "react";
import { PropTypes } from "prop-types";

export const MItem = ({ title, rID, img, handleReact }) => {
	return (
		<IconButton onClick={() => handleReact({ rID: rID })}>
			<Tooltip title={title} arrow placement="top">
				<Image src={img} width={25} height={25} />
			</Tooltip>
		</IconButton>
	);
};

MItem.propTypes = {
	title: PropTypes.any,
	img: PropTypes.any,
	rID: PropTypes.any,
	handleReact: PropTypes.any
};
