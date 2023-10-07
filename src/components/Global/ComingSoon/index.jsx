import { Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import PropTypes from "prop-types";

export const ComingSoon = ({ text, small }) => {
	return (
		<>
			{small ? (
				<Image src="/images/coming-soon-small.svg" alt="coming soon" width={170} height={100} />
			) : (
				<Image src="/images/coming-soon.png" alt="coming soon" width={170} height={200} />
			)}

			{!text ? (
				<></>
			) : (
				<Typography
					sx={{
						color: "#fff",
						fontSize: "20px",
						textAlign: "center"
					}}
				>
					Exciting things are on the horizon! Our new features is coming soon. In the meantime.
				</Typography>
			)}
		</>
	);
};

ComingSoon.propTypes = {
	text: PropTypes.string,
	small: PropTypes.bool
};
