import { PuzzleContext } from "@context/puzzle";
import { Close } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import { useContext } from "react";

export const BMTopSection = () => {
	const puzzleContext = useContext(PuzzleContext);
	const { blockModalData, toggleBlockModal } = puzzleContext;

	return (
		<>
			<Box
				sx={{
					display: "flex",
					flexDirection: "row-reverse"
				}}
			>
				<IconButton onClick={toggleBlockModal}>
					<Close
						sx={{
							color: "#05D9D7"
						}}
					/>
				</IconButton>
			</Box>
			<Box display={"flex"} justifyContent={"space-between"}>
				<Typography fontWeight={800} fontSize={30}>
					{blockModalData?.name}
				</Typography>
			</Box>

			<Typography color={"#B3B3B3"} fontSize={15}>
				{blockModalData?.description}
			</Typography>
		</>
	);
};
