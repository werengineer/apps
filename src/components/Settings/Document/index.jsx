"use client";
import { Button, Box, Typography } from "@mui/material";
import Image from "next/image";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { DragNDrop } from "../../Global/Inputs/DragNDrop";
import BrushIcon from "@mui/icons-material/Brush";
import DocumentModal from "./DocumentModal";

export const Document = ({ form, engineer }) => {
	const [open, setOpen] = useState(false);
	
	return (
		<Box
			// marginX={['3%', '10px']}
			display={"flex"}
			justifyContent={"space-between"}
			border="2px solid rgba(29, 83, 82, 1)"
			borderRadius="12px"
			width={["100%", "97%"]}
			padding={"20px"}
			flexDirection="column"
			height="100%"
			gap={2}
			boxShadow={"0px 4px 15px rgba(0, 0, 0, 0.25)"}
		>
			<Box display={"flex"} gap={1} alignItems={"center"} justifyContent={"start"}>
				<Typography fontSize={"20px"}>Document Verification</Typography>
				{/* <Typography color={"lightgreen"} fontWeight={500} fontSize={12.5}>
					*verified
				</Typography> */}
				<Typography color={"yellow"} fontWeight={500} fontSize={12.5}>
					*verification under process
				</Typography>
			</Box>
			<Box
				sx={{
					display: "flex",
					position: "relative",
					width: ["100%", "50%"]
				}}
			>
				<Box
					component={"img"}
					alt={engineer?.file}
					src={engineer?.file}
					sx={{
						height: "100%",
						width: "100%",
						objectFit: "cover"
					}}
					onLoad={(e) => {
						// setLoading(false);
						console.log(e);
					}}
				/>
				<Button
					sx={{
						display: "flex",
						position: "absolute",
						gap: 1,
						right: "5px",
						bottom: "5px",
						backgroundColor: "#242424",
						"&:hover": {
							backgroundColor: "#212121"
						}
					}}
					onClick={() => setOpen(true)}
				>
					<BrushIcon />
					<Typography>Edit</Typography>
				</Button>
			</Box>
			<DocumentModal form={form} open={open} setOpen={setOpen} />
		</Box>
	);
};

Document.propTypes = {
	engineer: PropTypes.any,
	form: PropTypes.any
};
