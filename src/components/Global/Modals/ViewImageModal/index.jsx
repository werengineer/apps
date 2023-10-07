"use client";
import React, { useState } from "react";
import { Modal, Box, IconButton, Skeleton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { PropTypes } from "prop-types";

export function FullScreenModal({ open, setOpen, imageUrl }) {
	const [loading, setLoading] = useState(false);
	const ImageLoader = () => {
		return (
			<Box
				sx={{
					width: "100%",
					height: "100%"
				}}
				display={loading ? "flex" : "none"}
			>
				<Skeleton
					sx={{
						width: "50vw",
						height: "100vh"
					}}
				/>
			</Box>
		);
	};

	return (
		<Modal
			open={open}
			onClose={() => setOpen(false)}
			sx={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				backgroundColor: "rgba(0, 0, 0, 0.8)",
				backdropFilter: "blur(10px)"
			}}
			aria-labelledby="full-screen-modal"
			aria-describedby="modal-for-displaying-image-in-full-screen"
		>
			<Box
				sx={{
					boxShadow: 5,
					padding: 2,
					backgroundColor: "#202324",
					maxWidth: "90vw",
					height: "90vh",
					overflow: "scroll",
					// opacity:'1!important',
					"&:focus": {
						outline: "none"
					}
				}}
			>
				<Box
					position={"absolute"}
					top={10}
					right={10}
					mb={3}
					display={"flex"}
					justifyContent={"flex-end"}
				>
					<IconButton onClick={() => setOpen(false)}>
						<CloseIcon />
					</IconButton>
				</Box>
				{loading ? (
					<ImageLoader />
				) : (
					<Box
						component={"img"}
						alt={imageUrl}
						src={imageUrl}
						sx={{
							height: "100%",
							width: "100%",
							objectFit: "cover"
						}}
						onLoad={() => {
							setLoading(false);
							console.log(loading);
						}}
					/>
				)}
			</Box>
		</Modal>
	);
}

FullScreenModal.propTypes = {
	open: PropTypes.any,
	setOpen: PropTypes.any,
	imageUrl: PropTypes.any
};
