import { PuzzleContext } from "@context/puzzle";
import { getEngineer } from "@cookies";
import { Box, Fade, Modal } from "@mui/material";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import React, { useContext, useState } from "react";
import TopSection from "./TopSection";
import { VideoCarousel } from "./VideoCarousel";
import { Blogs } from "./Blogs";

export const TaskModal = () => {
	const puzzleContext = useContext(PuzzleContext);
	const { open1, taskData, toggleTaskModal } = puzzleContext;

	return (
		<Modal
			open={open1}
			onClose={toggleTaskModal}
			sx={{
				// height: '100vh',
				width: "100vw !important ",
				display: ["flex"],
				backgroundColor: "rgba(0, 0, 0, 0.5)",
				backdropFilter: "blur(20px)"
			}}
		>
			<Fade in={open1}>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						gap: "15px",
						width: "100%",
						px: "20px",
						pt: "10px",
						overflowY: "scroll"
					}}
				>
					<TopSection />

					<Box
						sx={{
							display: "flex",
							gap: "25px",
							mb: "30px",
							flexDirection: ["column", "row"]
						}}
					>
						<VideoCarousel />
						<Blogs />
					</Box>
				</Box>
			</Fade>
		</Modal>
	);
};
