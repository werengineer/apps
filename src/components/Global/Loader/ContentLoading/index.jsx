import { Box, CircularProgress, Skeleton } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";

export const ContentLoading = ({ width, height }) => {
	return (
		<Box
			sx={{
				display: "flex",
				width: width,
				height: height,
				justifyContent: "center",
				alignItems: "center"
			}}
		>
			<Skeleton variant="rounded" width={210 || width} height={210 || height} />
		</Box>
	);
};

ContentLoading.propTypes = {
	width: PropTypes.any,
	height: PropTypes.any
};
