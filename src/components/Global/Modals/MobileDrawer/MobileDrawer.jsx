import { Box, Drawer, IconButton, List, ListItem, Typography } from "@mui/material";
import React from "react";
import { useRecoilState } from "recoil";
import { Logo } from "../../Logo";
import {
	Bookmark,
	// eslint-disable-next-line no-unused-vars
	CalendarMonth,
	Close,
	Dashboard,
	Logout,
	QuestionAnswer,
	Settings,
	WebStories
} from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { removeCookies } from "cookies-next";
import { signOut } from "firebase/auth";
import RouteIcon from "@mui/icons-material/Route";
import { mobileDrawerState } from "@atom";
import { firebaseAuth } from "@fb";

const MobileDrawer = () => {
	const [open, setOpen] = useRecoilState(mobileDrawerState);
	const router = useRouter();

	const logout = () => {
		removeCookies("engineer");
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
						<ListItem
							sx={{
								display: "flex",
								gap: "3vw",
								color: "#05D9D7"
							}}
							onClick={() => {
								setOpen(false);
								router.push("/");
							}}
						>
							<Dashboard />
							<Typography>Dashboard</Typography>
						</ListItem>

						<ListItem
							sx={{
								display: "flex",
								gap: "3vw",
								color: "#05D9D7"
							}}
							onClick={() => {
								setOpen(false);
								router.push("/questions");
							}}
						>
							<QuestionAnswer />
							<Typography>QnA</Typography>
						</ListItem>

						<ListItem
							sx={{
								display: "flex",
								gap: "3vw",
								color: "#05D9D7"
							}}
							onClick={() => {
								setOpen(false);
								router.push("/stories");
							}}
						>
							<WebStories />
							<Typography>Stories</Typography>
						</ListItem>
						<ListItem
							sx={{
								display: "flex",
								gap: "3vw",
								color: "#05D9D7"
							}}
							onClick={() => {
								setOpen(false);
								router.push("/clusters");
							}}
						>
							<RouteIcon />
							<Typography>Clusters</Typography>
						</ListItem>
						<ListItem
							sx={{
								display: "flex",
								gap: "3vw",
								color: "#05D9D7"
							}}
							onClick={() => {
								setOpen(false);
								router.push("/list");
							}}
						>
							<Bookmark />
							<Typography>Lists</Typography>
						</ListItem>
						{/* <ListItem
              sx={{
                display: 'flex',
                gap: '3vw',
                color: '#05D9D7'
              }}
              onClick={() => {
                setOpen(false);
                router.push('/notifications');
              }}>
              <NotificationsIcon />
              <Typography>Notifications</Typography>
            </ListItem> */}
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

export default MobileDrawer;
