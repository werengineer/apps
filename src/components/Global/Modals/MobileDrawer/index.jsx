import { Box, Drawer, IconButton, List, ListItem, Typography } from "@mui/material";
import React from "react";
import { useRecoilState } from "recoil";
import { loginModalState, mobileDrawerState } from "@atom";
import { Logo } from "../../Logo";
import {
	Bookmark,
	// eslint-disable-next-line no-unused-vars
	CalendarMonth,
	Close,
	Dashboard,
	EmojiEvents,
	Logout,
	QuestionAnswer,
	Settings,
	WebStories
} from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { deleteCookie, removeCookies } from "cookies-next";
import { signOut } from "firebase/auth";
import RouteIcon from "@mui/icons-material/Route";
import { firebaseAuth } from "@fb";
import { getEngineer } from "@cookies";
import { NAVIGATIONS } from "@data";

export const MobileDrawer = () => {
	const [open, setOpen] = useRecoilState(mobileDrawerState);
	const [loginModal, setLoginModal] = useRecoilState(loginModalState);
	const engineer = getEngineer();
	const router = useRouter();

	const logout = () => {
		deleteCookie("engineer");
		signOut(firebaseAuth);
		router.push("/signin");
	};

	return (
		<Drawer
			open={open}
			anchor="left"
			onClose={() => setOpen(false)}
			sx={{
				width: "100vw"
			}}
			PaperProps={{
				sx: {
					width: "100vw",
					backgroundColor: "rgba(0, 0, 0, 0.8)",
					backdropFilter: "blur(10px)"
				}
			}}
		>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					height: "100vh",
					justifyContent: "space-between",
					pl: 2.5,
					px: 2.5,
					mt: 2,
					pb: 5
				}}
			>
				<Box display={"flex"} flexDirection={"column"} gap={4} sx={{ cursor: "pointer" }}>
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between"
						}}
					>
						<Logo />
						<IconButton
							sx={{
								color: "#05D9D7"
							}}
							onClick={() => setOpen(false)}
						>
							<Close />
						</IconButton>
					</Box>

					<List
						sx={{
							display: "flex",
							flexDirection: "column",
							gap: "3vh"
						}}
					>
						{NAVIGATIONS.map((n, i) => (
							<ListItem
								key={i}
								sx={{
									display: "flex",
									gap: "3vw",
									color: "#05D9D7"
								}}
								onClick={() => {
									if (engineer) {
										router.push(n.link);
										setOpen(false);
									} else {
										setLoginModal(true);
									}
								}}
							>
								<n.icon />
								<Typography>{n.title}</Typography>
							</ListItem>
						))}
					</List>
				</Box>

				<List
					sx={{
						display: "flex",
						flexDirection: "column",
						gap: "3vh",
						cursor: "pointer"
					}}
					onClick={() => {
						setOpen(false);
						router.push("/settings");
					}}
				>
					<ListItem
						sx={{
							display: "flex",
							gap: "3vw",
							color: "#05D9D7"
						}}
					>
						<Settings />
						<Typography>Settings</Typography>
					</ListItem>

					<ListItem
						sx={{
							display: "flex",
							gap: "3vw",
							color: "red"
						}}
						onClick={() => logout()}
					>
						<Logout />
						<Typography>Logout</Typography>
					</ListItem>
				</List>
			</Box>
		</Drawer>
	);
};
