"use client";
import {
	Avatar,
	Box,
	Button,
	CircularProgress,
	CssBaseline,
	Fab,
	Grow,
	IconButton,
	InputBase,
	List,
	ListItem,
	Modal,
	Toolbar,
	Tooltip,
	Typography
} from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import { useSnackbar } from "notistack";
import React, { useContext, useState } from "react";
import { useRecoilState } from "recoil";
import { AppBar, Drawer, DrawerHeader } from "./CustomStyled";
import {
	DateRange,
	CalendarMonth,
	ChevronRight,
	ChevronLeft,
	Menu,
	Save,
	Close,
	Add,
	WebStories,
	QuestionMark,
	SearchOutlined,
	Lock,
	Timeline
} from "@mui/icons-material";
import { ProfileMenu } from "../ProfileMenu";
import { SidebarButton } from "../SidebarButton";
import { Logo, NotificationSnackbar } from "@components/Global";
import DashboardIcon from "@mui/icons-material/";
import {
	loginModalState,
	mobileDrawerState,
	questionModalState,
	searchModalState,
	sidebarOpenState,
	sidebarState,
	storyModalState,
	userModal
} from "@atom";
import { NotificationContext } from "@context/notification";
import { SettingsContext } from "@context/settings";
import { getEngineer } from "@cookies";
import { pages } from "@data/pages";
import { MobileDrawer } from "@components/Global/Modals/MobileDrawer";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useEffect } from "react";
import { convertSentenceCase, useNotificationHandler } from "@hooks";
import { AcceptNotificationModal } from "@components/Global/Modals/AcceptNotificationModal";
import { Notifications } from "@mui/icons-material";
import { getMessaging, isSupported, onMessage } from "firebase/messaging";
import { firebaseApp } from "@fb";
import { useNotificationStore } from "@store";
import { NAVIGATIONS } from "@data";
import { getSubscription } from "@hooks/getSubscription";
import { useTheme } from "@mui/material/styles";

export const TopBar = () => {
	const { enqueueSnackbar } = useSnackbar();
	const { handleSubmit, loading, dataChanged } = useContext(SettingsContext);
	const theme = useTheme();
	const [open, setOpen] = useRecoilState(sidebarOpenState);
	console.log(open, sidebarOpenState, 123);
	const [openUserModal, setOpenUserModal] = useRecoilState(userModal);
	const [menuOpen, setMenuOpen] = useState(false);
	const [mobileDrawer, setMobileDrawer] = useRecoilState(mobileDrawerState);
	const [questionModal, setQuestionModal] = useRecoilState(questionModalState);
	const [storyModal, setStoryModal] = useRecoilState(storyModalState);
	const [loginModal, setLoginModal] = useRecoilState(loginModalState);
	const [searchModal, setSearchModal] = useRecoilState(searchModalState);
	const router = useRouter();
	// // const { subscription } = getSubscription();
	// const [subed, setSubed] = useState();
	// const getSub = async () => {
	// 	setSubed(await subscription());
	// };
	// getSub();
	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};
	const pathName = usePathname();
	const engineer = getEngineer();
	const [searchValue, setSearchValue] = useState("");
	const otherPages = [
		"clusters",
		"list",
		"profile",
		"stories",
		"questions",
		"dashboard",
		"email",
		"achievements",
		"notifications",
		"search",
		"ghostwriting"
	];
	const pageName = pathName.split("/")[1];
	const [drawerTab, setDrawerTab] = useRecoilState(sidebarState);

	const filterOne = otherPages.filter((e) => e === pathName.split("/")[1]);
	// useEffect(() => {
	// 	const tab = convertSentenceCase(filterOne[0]);
	// 	setDrawerTab(tab);
	// }, []);

	// useEffect(() => {
	// 	if (pathName === "/") {
	// 		return;
	// 	}
	// 	setDrawerTab(pathName.split("/")[1][0].toUpperCase() + pathName.split("/")[1].slice(1));
	// }, [pathName]);
	// const notification = useNotificationStore((state) => state?.notification);
	// const setNotiOpen = useNotificationStore((state) => state?.setNotificationSnackbar);
	// const setNotification = useNotificationStore((state) => state?.setNotificationData);
	// const getNotii = async () => {
	// 	const isSupportedBrowser = await isSupported();
	// 	if (isSupportedBrowser) {
	// 		onMessage(getMessaging(firebaseApp), (payload) => {
	// 			setNotiOpen();
	// 			const data = { title: payload.notification.title, message: payload.notification.body };
	// 			setNotification({ data });
	// 			var audio = document.getElementById("notiSound");
	// 			audio.play();
	// 		});
	// 	}
	// };
	// getNotii();

	const goToSearch = (q) => {
		if (q.keyCode === 13) {
			router.push(`/search?q=${q.target.value}`);
		}
	};
	return (
		<Box
			sx={{
				display: pages.includes(pathName) || otherPages.includes(pageName) ? "flex" : "none",
				backgroundColor: "#212121"
			}}
		>
			{/* <AcceptNotificationModal /> */}
			<CssBaseline />
			{/* <NotificationSnackbar title={notification?.title} message={notification?.message} /> */}
			<audio id="notiSound">
				<source src="/sounds/notification.wav" type="audio/wav" />
				Your browser does not support the audio element.
			</audio>
			<AppBar
				position="fixed"
				open={open}
				sx={{
					display: "flex",
					backgroundColor: "#121212"
				}}
				elevation={0}
			>
				<Toolbar
					sx={{
						display: mobileDrawer ? "none" : "flex",
						justifyContent: "space-between",
						alignItems: "center"
					}}
				>
					<Box display={["none", "flex"]} justifyContent={"center"} alignItems={"center"}>
						<IconButton
							color="inherit"
							aria-label="open drawer"
							onClick={() => handleDrawerOpen()}
							edge="start"
							sx={{
								borderRadius: 10,
								marginRight: 3,
								...(open && { visibility: "hidden" })
							}}
						>
							<Menu />
						</IconButton>

						<Typography>
							{drawerTab?.toUpperCase()[0]}
							{drawerTab?.slice(1)}
						</Typography>
					</Box>
					{pathName === "/profile" ? (
						<IconButton
							sx={{
								display: ["flex", "none"],
								p: 1
							}}
							onClick={() => router.push("/")}
						>
							<ArrowBackIcon />
						</IconButton>
					) : (
						<Box display={["flex", "none"]} justifyContent={"start"} alignItems={"center"}>
							<IconButton
								aria-label="open drawer"
								edge="start"
								sx={{
									borderRadius: 0,
									display: ["flex", "none", "none"],
									...(open && { visibility: "hidden" })
								}}
								onClick={() => setMobileDrawer(true)}
							>
								<Menu
									sx={{
										color: "grey"
									}}
								/>
							</IconButton>
							<IconButton
								sx={{
									display: ["flex", "none"],
									p: 0
								}}
								onClick={() => router.push("/profile")}
							>
								<Avatar
									src={engineer?.avatar}
									sx={{
										width: "35px",
										height: "35px",
										border: "2px solid #1D5352"
									}}
								/>
							</IconButton>
						</Box>
					)}
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							gap: ["3vw", "2vw"]
						}}
					>
						{/* <InputBase
							sx={{
								display: ["flex", "flex", "none"],
								border: "1.55px solid #1C5352",
								paddingX: "20px",
								backgroundColor: "#3C3B41",
								width: "27vw",
								height: "40px",
								borderRadius: "30px",
								color: "#05D9D7"
							}}
							startAdornment={<SearchOutlined sx={{ marginRight: "1vw" }} />}
							value={searchValue}
							onChange={(e) => setSearchValue(e.target.value)}
							onKeyDown={(e) => goToSearch(e.target.value)}
							onKeyDownCapture={(e) => goToSearch(e)}
							placeholder={"Search"}
						/> */}
						<IconButton
							onClick={() => setSearchModal(true)}
							sx={{
								display: ["flex", "none", "none"],
								color: "grey"
							}}
						>
							<SearchOutlined />
						</IconButton>
						<InputBase
							sx={{
								display: ["none", "flex", "flex"],
								border: "1.55px solid #1C5352",
								paddingX: "20px",
								backgroundColor: "#3C3B41",
								width: "27vw",
								height: "40px",
								borderRadius: "30px",
								color: "#05D9D7"
							}}
							startAdornment={<SearchOutlined sx={{ marginRight: "1vw" }} />}
							value={searchValue}
							onChange={(e) => setSearchValue(e.target.value)}
							onKeyDown={(e) => goToSearch(e.target.value)}
							onKeyDownCapture={(e) => goToSearch(e)}
							placeholder={"Search"}
						/>
						{/* {!subed ? (
							<Button
								sx={{
									border: "1px solid #F7EF8A",
									borderRadius: "30px",
									paddingX: "20px",
									display: ["none", "block"],
									color: "#F7EF8A",
									":hover": {
										background:
											"linear-gradient(181deg, #F7EF8A 0%, #EDC967 37.50%, #D2AC47 78.65%, #AE8625 100%)",
										boxShadow: "0px 4px 66.95999908447266px 0px #867004",
										color: "#fff"
									}
								}}
								onClick={() => router.push("/subscriptions")}
							>
								Try Premium
							</Button>
						) : (
							<></>
						)} */}
						{/* <IconButton
							onClick={() => router.push("/calendar")}
							sx={{
								display: ["none", "flex"],
								color: "grey"
							}}
						>
							<Timeline />
						</IconButton> */}
						{/* <IconButton
							onClick={() => router.push("/notifications")}
							sx={{
								display: ["none", "flex"],
								color: "grey"
							}}
						>
							<Notifications />
						</IconButton> */}

						{/* <IconButton
							onClick={() => router.push("/calendar")}
							sx={{
								display: ["flex", "none"],
								color: "grey"
							}}
						>
							<Timeline />
						</IconButton> */}
						{/* <IconButton
							onClick={() => router.push("/notifications")}
							sx={{
								display: ["flex", "none"],
								color: "grey"
							}}
						>
							<Notifications />
						</IconButton> */}

						{engineer ? (
							<Box position={"relative"} display={["none", "flex", "flex"]}>
								<IconButton onClick={() => setOpenUserModal(true)}>
									<Avatar src={engineer?.avatar} />
								</IconButton>
								<ProfileMenu />
							</Box>
						) : (
							<>
								<Button
									sx={{
										border: "1px solid white",
										borderRadius: "30px",
										paddingX: "20px",
										":hover": {
											backgroundColor: "white",
											color: "rgba(0, 0, 0, 1)"
										}
									}}
									onClick={() => router.push("/signup")}
								>
									Sign up
								</Button>

								<Button
									sx={{
										color: "white",
										borderRadius: "30px",
										paddingX: "20px",
										border: "1px solid transparent",
										":hover": {
											border: "1px solid white"
										}
									}}
									onClick={() => router.push("/signin")}
								>
									Login
								</Button>
							</>
						)}
					</Box>
				</Toolbar>
			</AppBar>

			<Drawer
				variant="permanent"
				open={open}
				sx={{
					display: ["none", "flex"],
					backgroundColor: "rgba( 0, 0, 0, 0.45)"
				}}
			>
				<DrawerHeader sx={{ pt: 4 }}>
					<Logo />
					<IconButton
						onClick={handleDrawerClose}
						sx={{
							visibility: open ? "" : "hidden",
							mt: -4
						}}
					>
						{theme.direction === "rtl" ? <ChevronRight /> : <ChevronLeft />}
					</IconButton>
				</DrawerHeader>
				{/* <Divider /> */}
				<List
					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-between",
						height: "100%",
						paddingBottom: "3vh",
						marginTop: "0vh",
						gap: "5vh"
					}}
				>
					<Box
						sx={{
							marginTop: "4vh",
							display: "flex",
							flexDirection: "column",
							gap: ".5vh"
						}}
					>
						{NAVIGATIONS.map((n, i) => (
							<SidebarButton
								key={i}
								Icon={<n.icon />}
								title={n.title}
								drawerTab={drawerTab}
								handleListItemClick={() => {
									if (engineer) {
										router.push(n.link);
										setDrawerTab(n.title);
										setOpen(false);
									} else {
										setLoginModal(true);
									}
								}}
								open={open}
							/>
						))}
					</Box>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							gap: "1vh",
							alignItems: "center"
						}}
					>
						<ListItem
							disablePadding
							sx={{
								display: "relative",
								p: open ? 1 : 0,
								width: !open ? "50px" : "150px",
								// height: '50px',
								margin: "auto"
								// backgroundColor: 'white',
								// borderRadius: '40px'
							}}
						>
							{drawerTab === "Create Post" && (
								<Box
									sx={
										{
											// boxShadow: open
											//   ? '0px 0px 100px 50px rgba(5,217,215,0.94)'
											//   : '0px 0px 50px 20px rgba(5,217,215,0.94)',
											// width: '40px',
											// position: 'absolute',
											// left: !open ? '20%' : '25%',
											// top: '40%',
											// zIndex: -1
										}
									}
								></Box>
							)}
							{pathName === "/settings" && (
								<Box
									display={"flex"}
									justifyContent={"center"}
									alignItems={"center"}
									gap={"10px"}
								>
									<Fab
										disabled={!dataChanged} //Condition not working
										sx={{
											width: open ? "150px" : "50px",
											borderRadius: 6,
											height: "50px",
											gap: 1
										}}
										onClick={() => handleSubmit(enqueueSnackbar)}
									>
										{loading ? (
											<CircularProgress color={"inherit"} size={25} />
										) : (
											<Save
												sx={{
													width: "25px",
													height: "25px"
												}}
											/>
										)}
										<Typography
											color={"black"}
											fontWeight={500}
											sx={{
												display: open ? "flex" : "none"
											}}
										>
											{loading ? "Saving" : "Save"}
										</Typography>
									</Fab>
								</Box>
							)}

							{pathName !== "/settings" && (
								<Box
									display={"flex"}
									justifyContent={"center"}
									alignItems={"center"}
									gap={"10px"}
								>
									<Fab
										disabled={
											engineer.isEmailVerified && engineer.isMobileVerified
												? false
												: true
										}
										onClick={() => {
											setMenuOpen(true);
											setTimeout(() => {
												setMenuOpen(false);
											}, 3000);
										}}
										sx={{
											width: open ? "150px" : "50px",
											borderRadius: 6,
											height: "50px"
										}}
									>
										{/* {!(engineer.isEmailVerified && engineer.isMobileVerified) ? (
											<Lock />
										) : menuOpen ? (
											<Close />
										) : (
											<Add />
										)} */}
										{engineer?.isEmailVerified && engineer?.isMobileVerified ? (
											<Add />
										) : (
											<Lock />
										)}
										<Typography
											color={"black"}
											fontWeight={500}
											sx={{
												display: open ? "flex" : "none",
												gap: 2
											}}
										>
											{engineer?.isEmailVerified && engineer?.isMobileVerified
												? "Create"
												: "Locked"}
										</Typography>
									</Fab>
								</Box>
							)}
						</ListItem>

						<Modal open={menuOpen} onClose={() => setMenuOpen(false)}>
							<Box position={"absolute"}>
								<Grow
									in={menuOpen}
									style={{
										transitionDelay: "50ms"
									}}
								>
									<Tooltip title="Story">
										<Fab
											sx={{
												position: "fixed",
												bottom: "30px",
												left: open ? "220px" : "85px",
												backgroundColor: "white"
											}}
											onClick={() => {
												engineer ? setStoryModal(true) : setLoginModal(true);
												setMenuOpen(false);
											}}
										>
											<WebStories
												sx={{
													color: "#212121"
												}}
											/>
										</Fab>
									</Tooltip>
								</Grow>

								<Grow in={menuOpen}>
									<Tooltip title="Questions">
										<Fab
											sx={{
												position: "fixed",
												bottom: "100px",
												left: open ? "180px" : "30px",
												backgroundColor: "white"
											}}
											onClick={() => {
												engineer ? setQuestionModal(true) : setLoginModal(true);
												setMenuOpen(false);
											}}
										>
											<QuestionMark
												sx={{
													color: "#212121"
												}}
											/>
										</Fab>
									</Tooltip>
								</Grow>
							</Box>
						</Modal>
					</Box>
				</List>
			</Drawer>
			<MobileDrawer />
		</Box>
	);
};
