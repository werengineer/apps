import { incompletePuzzleState } from "@atom";
import { Close } from "@mui/icons-material";
import { Box, Button, IconButton, Modal, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { useRecoilState } from "recoil";

export function PuzzleIncompleteModal() {
	const [open, setOpen] = useRecoilState(incompletePuzzleState);
	const handleClose = () => setOpen(false);
	return (
		<Modal
			sx={{
				width: "100vw",
				height: "100vh",
				backgroundColor: "rgba(0, 0, 0, 0.8)",
				display: "flex",
				justifyContent: "center",
				alignItems: "center"
			}}
			open={open}
			onClose={handleClose}
		>
			<Box
				sx={{
					width: ["50vw"],
					height: ["70vh"],
					border: "1px solid #05D9D7",
					borderRadius: "20px",
					backgroundColor: "#212121",
					px: "10px",
					py: "20px",
					display: "flex",
					flexDirection: "column",
					// alignItems: "center",
					gap: "20px"
				}}
			>
				<Box
					sx={{
						display: "flex",
						flexDirection: "row-reverse"
					}}
				>
					<IconButton onClick={handleClose}>
						<Close
							sx={{
								color: "#05D9D7"
							}}
						/>
					</IconButton>
				</Box>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						gap: "15px",
						alignItems: "center"
					}}
				>
					<Box
						sx={{
							width: "300px",
							height: "300px",
							position: "relative"
						}}
					>
						<Image src={"/images/AboutUs/1.png"} fill />
					</Box>
					<Typography
						sx={{
							color: "#05D9D7",
							fontSize: "18px"
						}}
					>
						Please complete previous puzzle to unlock this one!
					</Typography>
					<Button
						sx={{
							color: "white",
							backgroundColor: "#1D5352",
							borderRadius: "20px",
							px: "20px",
							":hover": {
								color: "white",
								backgroundColor: "#1D5352"
							}
						}}
						onClick={handleClose}
					>
						Understood, I will do that
					</Button>
				</Box>
			</Box>
		</Modal>
	);
}
