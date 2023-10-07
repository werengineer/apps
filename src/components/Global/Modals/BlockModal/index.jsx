"use client";
import { PuzzleContext } from "@context/puzzle";
import { Box, Fade, Modal } from "@mui/material";
import React, { useContext, useState } from "react";
import { BMTopSection } from "./BMTopSection";
import { CarouselNTask } from "./CarouselNTask";
import { TaskModal } from "../TaskModal";

export const BlockModal = () => {
	const [taskData, setTaskData] = useState();

	const puzzleContext = useContext(PuzzleContext);
	const { open1, setOpen1, open, setContent, content, index, toggleBlockModal, blockModalData } =
		puzzleContext;

	return (
		<>
			<Modal
				open={open}
				onClose={toggleBlockModal}
				sx={{
					height: "100vh",
					width: "100vw !important ",
					display: ["flex", "flex", "flex"],
					backdropFilter: "blur(20px)"
				}}
			>
				<Fade in={open}>
					<Box
						display={"flex"}
						flexDirection={"column"}
						px={[1, 4]}
						py={2}
						pr={[1, "50px"]}
						gap={2}
						width={"100vw!important"}
						sx={{
							overflowY: "scroll"
						}}
					>
						<BMTopSection blockModalData={blockModalData} />

						<CarouselNTask
							blockModalData={blockModalData}
							setOpen1={setOpen1}
							setTaskData={setTaskData}
						/>
					</Box>
				</Fade>
			</Modal>
			<TaskModal
				open={open1}
				setOpen={setOpen1}
				data={taskData}
				setData={setTaskData}
				content={content}
				setContent={setContent}
				index={index}
			/>
		</>
	);
};
