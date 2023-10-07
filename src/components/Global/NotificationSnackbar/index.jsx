"use client";
import { Close } from "@mui/icons-material";
import { Avatar, Box, Button, Snackbar, Typography } from "@mui/material";
import { useNotificationStore } from "@store";
import PropTypes from "prop-types";
import React, { useEffect } from "react";

export const NotificationSnackbar = ({ title, message }) => {
	const setOpen = useNotificationStore((state) => state?.setNotificationSnackbar);
	const open = useNotificationStore((state) => state?.open);
	const handleClose = () => setOpen();

	return (
		<Snackbar
			open={open}
			autoHideDuration={6000}
			anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
			onClose={handleClose}
		>
			<Box
				display={"flex"}
				position={["absolute", "static"]}
				top={["","-700px"]}
				bottom={["20px",""]}
				flexDirection={"column"}
				border={"1px solid #1D5352"}
				borderRadius={"10px"}
				width={"100%"}
				height={["60px", "auto"]}
				justifyContent={"space-between"}
				gap={"1vh"}
				bgcolor="#212121"
				sx={{
					paddingX: ["5vw", "1.2vw"],
					paddingY: ["auto", "2vh"],
					boxShadow: "3px 3px 15px 3px rgba(0,0,0,0.2)"
				}}
			>
				<Box display={"flex"} alignItems={"center"} gap={"1.5vw"}>
					{/* <Avatar>LK</Avatar> */}
					<Box display={"flex"} flexDirection={"column"} gap={["3px", "5px"]} paddingX={"5px"}>
						<Typography
							width={"300px"}
							whiteSpace={"nowrap"}
							overflow="hidden"
							textOverflow={"ellipsis"}
							fontSize={"20px"}
							fontWeight={500}
						>
							{title}
						</Typography>
						<Typography
							sx={{
								display: ["none", "flex"]
							}}
							width={["270px", "300px"]}
							whiteSpace={"nowrap"}
							overflow="hidden"
							textOverflow={"ellipsis"}
						>
							{message}
						</Typography>
					</Box>
					<Box>
						<Button onClick={handleClose} sx={{ p: 2, borderRadius: 50, display: "flex" }}>
							<Close />
						</Button>
					</Box>
				</Box>
				{/* <Button onClick={handleClose}>Close</Button> */}
			</Box>
		</Snackbar>
	);
};

NotificationSnackbar.propTypes = {
	open: PropTypes.any,
	setOpen: PropTypes.any,
	title: PropTypes.any,
	message: PropTypes.any
};
