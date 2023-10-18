import { Close } from "@mui/icons-material";
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	IconButton,
	Snackbar,
	Box,
	Typography
} from "@mui/material";
import { getCookie, setCookie } from "cookies-next";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export const CookiePopup = () => {
	const [open, setOpen] = useState();

	useEffect(() => {
		const cookie = getCookie("wae-cookie");
		console.log(typeof cookie);
		if (cookie === true) {
			setOpen(false);
			return;
		}
		setTimeout(() => {
			setOpen(true);
		}, 10000);
	}, []);

	const setWAECookie = () => {
		// setCookie("wae-cookie", true);
		sessionStorage.setItem("wae-cookie", true);
		setOpen(false);
	};

	return (
		<Snackbar open={open}>
			<Box
				sx={{
					backgroundColor: "#212121",
					width: ["80vw", "30vw"],
					display: "flex",
					mx: "auto",
					flexDirection: "column",
					gap: "15px",
					borderRadius: "10px",
					px: "15px",
					py: "15px",
					border: "1px solid #05D9D7"
				}}
			>
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center"
					}}
				>
					<Typography
						sx={{
							fontSize: "18px",
							color: "#05D9D7"
						}}
					>
						Cookie notice!
					</Typography>

					<IconButton onClick={() => setOpen(false)}>
						<Close
							sx={{
								color: "#05D9D7"
							}}
						/>
					</IconButton>
				</Box>

				<Typography
					sx={{
						color: "grey"
					}}
				>
					This website uses cookies to ensure you get the best experience on our website. By
					continuing to browse, you consent to our use of cookies. For more information, please
					read our Privacy Policy.
				</Typography>
				<Box
					sx={{
						display: "flex",
						flexDirection: "row-reverse"
					}}
				>
					<Button
						sx={{
							borderRadius: "20px",
							border: "1px solid grey",
							fontWeight: 400,
							px: "20px",
							fontSize: "14px",
							color: "grey",
							":hover": {
								backgroundColor: "grey",
								color: "white"
							}
						}}
						onClick={setWAECookie}
					>
						Accept
					</Button>
				</Box>
			</Box>
		</Snackbar>
	);
};

// <Dialog
// 	open={true}
// 	sx={{
// 		backgroundColor: "transparent",
// 		width: "100%"
// 	}}
// 	PaperProps={{
// 		sx: {
// 			backgroundColor: "rgba(0, 0, 0, 1)",
// 			border: "1px solid #05D9D7",
// 			borderRadius: "15px",
// 			bottom: "0%",
// 			display: "flex",
// 			flexDirection: "column",
// 			gap: "20px"
// 		}
// 	}}
// >
// 	<DialogTitle
// 		sx={{
// 			display: "flex",
// 			justifyContent: "space-between",
// 			alignItems: "center"
// 		}}
// 	>
// 		<Typography
// 			sx={{
// 				fontSize: "18px",
// 				color: "#05D9D7"
// 			}}
// 		>
// 			Cookie Notice!
// 		</Typography>
// 		<IconButton>
// 			<Close
// 				sx={{
// 					color: "#05D9D7"
// 				}}
// 			/>
// 		</IconButton>
// 	</DialogTitle>
// 	<DialogContent
// 		sx={{
// 			display: "flex",
// 			flexDirection: "column",
// 			gap: "20px"
// 		}}
// 	>
// 		<DialogContentText>
// 			This website uses cookies to ensure you get the best experience on our website. By
// 			continuing to browse, you consent to our use of cookies. For more information, please
// 			read our Privacy Policy.
// 		</DialogContentText>
// 		<DialogActions>
// 			<Button
// 				sx={{
// 					borderRadius: "20px",
// 					border: "1px solid grey",
// 					fontWeight: 400,
// 					px: "20px",
// 					fontSize: "14px",
// 					color: "grey",
// 					":hover": {
// 						backgroundColor: "grey",
// 						color: "white"
// 					}
// 				}}
// 				onClick={setWAECookie}
// 			>
// 				Accept
// 			</Button>
// 		</DialogActions>
// 	</DialogContent>
// </Dialog>
