"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useRecoilState } from "recoil";

import { Avatar, Box, Button, Modal, Typography } from "@mui/material";
import Link from "next/link";
import { EmojiEvents, Logout, Settings } from "@mui/icons-material";
import { userModal } from "@atom";
import { getEngineer,logoutUser } from "@cookies";
import { signOut } from "firebase/auth";
import { firebaseAuth } from "@fb";

export const ProfileMenu = () => {
	const router = useRouter();
	const engineer = getEngineer();
	const [open, setOpen] = useRecoilState(userModal);
	
	const logout = () => {
		logoutUser()
		sessionStorage.clear();
		signOut(firebaseAuth);
		router.push("/signin");
	};

	return (
		<Modal open={open} onClose={() => setOpen(false)}>
			<Box
				sx={{
					position: "absolute",
					backgroundColor: "rgba(0, 0, 0, 0.5)",
					width: "300px",
					minHeight: "250px",
					right: "30px",
					top: "70px",
					border: "1px solid #05D9D7",
					borderRadius: 4,
					py: "20px",
					backdropFilter: "blur(5px)",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "space-between"
				}}
			>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						gap: "10px",
						alignItems: "center",
						cursor: "pointer"
					}}
					onClick={() => {
						setOpen(false);
						router.push("/profile");
					}}
				>
					<Avatar
						src={engineer?.avatar}
						sx={{
							width: "70px",
							height: "70px",
							border: "1px solid #05D9D7"
						}}
					/>
					<Typography>{engineer?.name}</Typography>
				</Box>

				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "flex-start",
						gap: "10px",
						mt: "15px"
					}}
				>
					<Button
						sx={{
							display: "flex",
							gap: "10px",
							color: "#05D9D7",
							borderRadius: "20px",
							px: 2,
							py: 1
						}}
						onClick={() => {
							router.push("/settings");
							setOpen(false);
						}}
					>
						<Settings />
						<Typography>Manage Settings</Typography>
					</Button>
					<Button
						sx={{
							display: "flex",
							gap: "10px",
							color: "rgba(255, 102, 102, 1)",
							borderRadius: "20px",
							px: 2,
							py: 1
						}}
						onClick={() => {
							logout();
							setOpen(false);
						}}
					>
						<Logout />
						<Typography>Log Out</Typography>
					</Button>
				</Box>
			</Box>
		</Modal>
	);
};
