"use client";
import { LoadingButton } from "@mui/lab";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import React, { useContext } from "react";

export const Posts = () => {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				gap: "10px",
				my: "10px",
				px: "20px",
				mt: "30px"
			}}
		>
			we can put here normal questions and ans
		</Box>
	);
};
