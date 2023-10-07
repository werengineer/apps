import { Close } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { useRouter } from "next/navigation";
import PropTypes from "prop-types";
import React from "react";

export const LoginModal = ({ open, setModalState }) => {
	const router = useRouter();
	const handleClose = () => setModalState(false);
	return (
		<Modal open={open} onClose={handleClose}>
			<Fade in={open}>
				<Box
					width={"100vw"}
					height={"100vh"}
					margin="auto"
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						backgroundColor: "rgba(0, 0, 0, 0.85)",
						backdropFilter: ["blur(5px)", "none"]
					}}
				>
					<Box
						sx={{
							width: ["85vw", "35vw"],
							height: ["60vh", "50vh"],
							paddingY: ["20px", "20px"],
							margin: "auto",
							border: "1px solid #05D9D7",
							display: "flex",
							justifyContent: "space-evenly",

							borderRadius: "5px",
							flexDirection: "column",
							alignItems: "center",
							position: "relative",
							backgroundColor: "#212121"
						}}
					>
						<Button
							sx={{
								position: "absolute",
								top: "0px",
								right: "0px",
								borderRadius: "50px",
								height: "60px"
							}}
							onClick={() => setModalState(false)}
						>
							<Close />
						</Button>
						<Image width={150} height={150} src={"/images/OOPS.svg"} alt={"oop"} />
						<Typography
							sx={{
								fontSize: ["22px", "26px"],
								color: "#05D9D7",
								fontWeight: "600"
							}}
						>
							Oops!
						</Typography>
						<Typography fontSize={["14px", "18px"]} textAlign={"center"} paddingX="15px">
							Log in before reacting, to ensure that you have an account to react.
						</Typography>
						<Box display={"flex"} justifyContent={"space-between"} width={["70vw", "25vw"]}>
							<Button
								sx={{
									color: "white",
									border: "1px solid transparent",
									paddingX: ["20px", "40px"],
									borderRadius: "50px",
									":hover": {
										borderColor: "white"
									}
								}}
								onClick={() => router.push("/signin")}
							>
								Signin
							</Button>
							<Button
								sx={{
									paddingX: ["20px", "40px"],
									borderRadius: "50px",
									color: "white",
									border: "1px solid white",
									bgcolor: "transparent",
									":hover": {
										color: "black",
										bgcolor: "white"
									}
								}}
								onClick={() => router.push("/signup")}
							>
								Signup
							</Button>
						</Box>
					</Box>
				</Box>
			</Fade>
		</Modal>
	);
};

LoginModal.propTypes = {
	open: PropTypes.any,
	setModalState: PropTypes.any
};
