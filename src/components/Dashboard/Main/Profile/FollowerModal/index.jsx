import { Box, Button, Fade, Modal } from "@mui/material";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Followings from "./Followings/Followings";
import Followers from "./Followers/Followers";
import PropTypes from "prop-types";
const Index = ({
	open,
	setOpen,
	modalSection,
	setModalSection,
	followers,
	followings,
	setFollowers,
	setFollowings
}) => {
	// useEffect(() => {
	// }, [])

	return (
		<Modal
			open={open}
			onClose={() => setOpen(!open)}
			sx={{
				height: "100vh",
				width: "100vw",
				backgroundColor: "rgba(0, 0, 0, 0.8)",
				display: "flex",
				justifyContent: "center",
				alignItems: "center"
			}}
		>
			<Fade in={open}>
				<Box
					sx={{
						width: "60vw",
						height: "70vh",
						backgroundColor: "#212121",
						border: "1px solid #05D9D7",
						borderRadius: "10px",
						px: 3,
						py: 2,
						display: "flex",
						flexDirection: "column",
						gap: "4vh"
					}}
				>
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-evenly",
							mt: "1vh"
						}}
					>
						<Button
							sx={{
								backgroundColor: "transparent",
								borderRadius: "0px",
								borderBottom:
									modalSection === "Followings"
										? "2px solid #05D9D7"
										: "2px solid transparent",
								":hover": {
									backgroundColor: "transparent"
								}
							}}
							onClick={() => setModalSection("Followings")}
						>
							Followings
						</Button>

						<Button
							sx={{
								backgroundColor: "transparent",
								borderRadius: "0px",
								borderBottom:
									modalSection === "Followers"
										? "2px solid #05D9D7"
										: "2px solid transparent",
								":hover": {
									backgroundColor: "transparent"
								}
							}}
							onClick={() => setModalSection("Followers")}
						>
							Followers
						</Button>
					</Box>
					<Box>
						{modalSection === "Followers" ? (
							<Followers
								followers={followers}
								setFollowers={setFollowers}
								followings={followings}
								setFollowings={setFollowings}
							/>
						) : (
							<Followings
								followers={followers}
								setFollowers={setFollowers}
								followings={followings}
								setFollowings={setFollowings}
							/>
						)}
					</Box>
				</Box>
			</Fade>
		</Modal>
	);
};

export default Index;

Index.propTypes = {
	open: PropTypes.bool,
	setOpen: PropTypes.func,
	modalSection: PropTypes.any,
	setModalSection: PropTypes.any,
	followers: PropTypes.array,
	followings: PropTypes.array,
	setFollowers: PropTypes.func,
	setFollowings: PropTypes.func
};
