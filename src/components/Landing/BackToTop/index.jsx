"use client";
import { Box, Fab } from "@mui/material";
import { ArrowDropUp } from "@mui/icons-material";
import React, { useEffect, useState } from "react";

export const BackToTop = () => {
	const [isVisible, setIsVisible] = useState(false);

	const toggleVisibility = () => {
		if (window.pageYOffset > 300) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	};

	useEffect(() => {
		window.addEventListener("scroll", toggleVisibility);
	}, []);

	return (
		<Box
			onClick={scrollToTop}
			sx={{ position: "fixed", bottom: 30, right: 30, cursor: "pointer", zIndex: 999 }}
		>
			{isVisible && (
				<Fab
					sx={{
						backgroundColor: "#50D9D7",
						color: "#000000",
						"&:hover": {
							backgroundColor: "#50D9D7",
							color: "black"
						}
					}}
					aria-label="arrow-up"
				>
					<ArrowDropUp sx={{ fontSize: "30px" }} />
				</Fab>
			)}
		</Box>
	);
};
