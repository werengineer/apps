import { Logo } from "@components/Global";
import { getEngineer, logoutUser } from "@cookies";
import { firebaseAuth } from "@fb";
import { Book, Dashboard, DateRange, FormatBold, Logout, Timeline } from "@mui/icons-material";
import {
	AppBar,
	Avatar,
	Box,
	Button,
	IconButton,
	ListItem,
	Menu,
	MenuItem,
	Toolbar,
	Tooltip,
	Typography
} from "@mui/material";
// import { removeCookies } from "cookies-next";
import { signOut } from "firebase/auth";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";




export const Navbar = () => {
	const router = useRouter();
	const engineer = getEngineer();
	const pathName = usePathname();
	const params = useSearchParams();
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [subscriptions, setSubscriptions] = React.useState(false);
	const open = Boolean(anchorEl);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
	const logout = () => {
	
		// removeCookies("engineer");
		logoutUser();
		 signOut(firebaseAuth);
		 sessionStorage.clear();
		router.push("/signin");
	};
	useEffect(() => {
		if (pathName === "/subscriptions") {
			setSubscriptions(true);
		} else {
			setSubscriptions(false);
		}
	}, [pathName]);

	return (
		<Box
			sx={{
				background: "transparent",
				paddingX: ["15px", "0px"],
				height: "13.0vh",
				position: pathName === "/signup" && "fixed",
				width: "100%"
			}}
		>
			<AppBar
				elevation={0}
				sx={{
					background: "transparent",
					color: "white",
					paddingTop: "5px",
					paddingBottom: "5px",
					display: "flex"
				}}
				position="static"
			>
				<Toolbar
					sx={{
						display: "flex",
						paddingTop: "10px",
						paddingBottom: "10px",
						width: "100%",
						justifyContent: ["space-between", "space-between"]
					}}
				>
					<Logo />
					{subscriptions && (
						<Box
							sx={{
								display: subscriptions ? "flex" : "none",
								gap: ["10px", "25px"],
								justifyContent: "center",
								alignItems: "center"
							}}
						>
							<Button
								sx={{
									fontSize: "15px",
									fontWeight: "400",
									paddingX: "20px",
									color: "#F7EF8A",
									":hover": {
										textDecoration: "underline"
									}
								}}
								variant="text"
								onClick={() => router.push("/")}
							>
								Go Home
							</Button>
						</Box>
					)}
					<Box
						sx={{
							display: subscriptions ? "none" : "flex",
							gap: ["10px", "25px"],
							justifyContent: "center",
							alignItems: "center"
						}}
					>
						<IconButton
							onClick={() => window.open("https://blog.weareengineer.com", "_blank")}
						>
							<Book
								sx={{
									color: "#EDEBEB"
								}}
							/>
						</IconButton>

						<IconButton
							onClick={() => {
								params.get("tab") === "timeline"
									? router.push("/calendar?tab=cal")
									: router.push("/calendar?tab=timeline");
							}}
						>
							{params.get("tab") === "cal" ? (
								<DateRange sx={{ color: "grey" }} />
							) : (
								<Timeline sx={{ color: "grey" }} />
							)}
						</IconButton>
						{!engineer ? (
							<>
								{pathName === "/signin" ? (
									<Box sx={{
										display: "flex",
										alignItems: "center",
										gap: "2vw"
									}}
									>
										<Button
											onClick={() => router.push("/questions")}
											sx={{
												fontSize: "15px",
												color: "#ffffff",
												border: "1px solid #ffffff",
												"&:hover": {
													backgroundColor: "#ffffff",
													color: "black"
												},
												fontWeight: 700,
												paddingX: ["0px", "30px"],
												borderRadius: "25px"
											}}
										>
											<Typography fontSize={["12px", "15px"]}>Explore Questions</Typography>
										</Button>
										<Button
											onClick={() => router.push("/stories")}
											sx={{
												fontSize: "15px",
												color: "#ffffff",
												border: "1px solid #ffffff",
												"&:hover": {
													backgroundColor: "#ffffff",
													color: "black"
												},
												fontWeight: 700,
												paddingX: ["0px", "30px"],
												borderRadius: "25px"
											}}
										>
											<Typography fontSize={["12px", "15px"]}>Explore Stories</Typography>
										</Button>
										<Button
											onClick={() => router.push("/signup")}
											sx={{
												fontSize: "15px",
												color: "#ffffff",
												border: "1px solid #ffffff",
												"&:hover": {
													backgroundColor: "#ffffff",
													color: "black"
												},
												fontWeight: 700,
												paddingX: ["0px", "30px"],
												borderRadius: "25px"
											}}
										>
											<Typography fontSize={["12px", "15px"]}>SignUp</Typography>
										</Button>
									</Box>
								) : pathName === "/signup" ? (
									<Box
										sx={{
											display: "flex",
											alignItems: "center",
											gap: "2vw"
										}}
									>
										<Button
											onClick={() => router.push("/questions")}
											sx={{
												fontSize: "15px",
												color: "#ffffff",
												border: "1px solid #ffffff",
												"&:hover": {
													backgroundColor: "#ffffff",
													color: "black"
												},
												fontWeight: 700,
												paddingX: ["0px", "30px"],
												borderRadius: "25px"
											}}
										>
											<Typography fontSize={["12px", "15px"]}>Explore Questions</Typography>
										</Button>
										<Button
											onClick={() => router.push("/stories")}
											sx={{
												fontSize: "15px",
												color: "#ffffff",
												border: "1px solid #ffffff",
												"&:hover": {
													backgroundColor: "#ffffff",
													color: "black"
												},
												fontWeight: 700,
												paddingX: ["0px", "30px"],
												borderRadius: "25px"
											}}
										>
											<Typography fontSize={["12px", "15px"]}>Explore Stories</Typography>
										</Button>
										<Button
											onClick={() => router.push("/signin")}
											sx={{
												fontSize: "15px",
												color: "#ffffff",
												border: "1px solid #ffffff",
												"&:hover": {
													backgroundColor: "#ffffff",
													color: "black"
												},
												fontWeight: 700,
												paddingX: ["0px", "30px"],
												borderRadius: "25px"
											}}
										>
											<Typography fontSize={["12px", "15px"]}>LogIn</Typography>
										</Button>
									</Box>
								) : (
									<>
										<Button
											onClick={() => router.push("/signup")}
											sx={{
												width: ["80px", "100px"],
												fontSize: "15px",
												color: "#ffffff",
												"&:hover": {
													backgroundColor: "#ffffff",
													border: "1px solid #fff",
													color: "black"
												},
												fontWeight: 700,
												display: ["none", "flex"],
												border: "1px solid white",
												borderRadius: "50px",
											}}
										>
											<Typography>SignUp</Typography>

										</Button>
										<Button
											onClick={() => router.push("/signin")}
											sx={{
												width: ["80px", "100px"],
												fontSize: "15px",
												color: "#ffffff",
												"&:hover": {
													backgroundColor: "#ffffff",
													border: "1px solid #fff",
													color: "black"
												},
												fontWeight: 700,
												display: ["none", "flex"],
												border: "1px solid white",
												borderRadius: "50px",
											}}
										>
											<Typography>LogIn</Typography>
										</Button>
									</>
								)}
							</>
						) : (
							<>
								<Tooltip title="My Account">
									<IconButton
										onClick={handleClick}
										size="small"
										sx={{ ml: 0 }}
										display={["none", "none"]}
										aria-controls={open ? "account-menu" : undefined}
										aria-haspopup="true"
										aria-expanded={open ? "true" : undefined}
									>
										<Avatar src={engineer?.avatar} sx={{ width: 32, height: 32 }}>
											{engineer?.name?.length > 0 ? engineer?.name[0] : ""}
										</Avatar>
									</IconButton>
								</Tooltip>

								<Menu
									anchorEl={anchorEl}
									id="account-menu"
									open={open}
									onClose={handleClose}
									onClick={handleClose}
									transformOrigin={{ horizontal: "right", vertical: "top" }}
									anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
								>
									<MenuItem onClick={() => router.push("/dashboard")}>
										<ListItem>
											<Dashboard fontSize="small" />
										</ListItem>
										Dashboard
									</MenuItem>
									<MenuItem sx={{ justifyContent: "flex-start" }} onClick={() => logout()}>
										<ListItem>
											<Logout sx={{ mr: 2 }} fontSize="small" />
										Logout
										</ListItem>
									</MenuItem>
								</Menu>
							</>
						)}
					</Box>
				</Toolbar>
			</AppBar>
		</Box>
	);
};
