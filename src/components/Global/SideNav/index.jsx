"use client";
import { ArrowDropDown } from "@mui/icons-material";
import { Box, Button, Link, Menu, MenuItem, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { useCoinsStore } from "@store";
import { getSubscription } from "@hooks/getSubscription";
import { nFormatter } from "@hooks/nFormatter";

export const SideNav = () => {
	const [option, setOption] = useState();
	const pathName = usePathname();
	const router = useRouter();
	const coins = useCoinsStore((state) => state.coins);

	return (
		<Box
			display={["none", "flex"]}
			flexDirection={"column"}
			justifyContent={"center"}
			alignItems={"center"}
			gap={"3vh"}
			// bgcolor={"#212121"}
			width={"23vw"}
			p={1}
			height={"94vh"}
			maxHeight={"100vh"}
			overflow={"none"}
			ml={"0.45vw"}
		>
			{pathName === "/settings" ? (
				<>
					<Box
						width={"75%"}
						display={"flex"}
						flexDirection={"column"}
						gap={"20px"}
						justifyContent={"center"}
						alignItems="center"
						p={5}
						height={"230px"}
						bgcolor={"grey"}
						borderRadius={"15px"}
					>
						<Image src={"/icons/Tools.svg"} alt={"axe img"} width={80} height={80} />

						<Typography>{nFormatter(coins, 0)} WAE Coins</Typography>
						{/* <Typography>{coinValue?.coins} WAE Coins</Typography> */}
					</Box>
					<Box
						display={"flex"}
						flexDirection={"column"}
						p={4}
						justifyContent={"center"}
						gap={"20px"}
						alignItems="center"
						width={"75%"}
						height={"230px"}
						bgcolor={"grey"}
						borderRadius={"15px"}
					>
						<Image src={"/icons/Gold_Tools.svg"} alt={"axe img"} width={80} height={80} />
						<Typography
							sx={{
								textAlign: "center"
							}}
						>
							Gold Coins <br />
							Launcing Soon
						</Typography>
					</Box>
				</>
			) : (
				<>
					<Box
						width={"90%"}
						height={"270px"}
						borderRadius={"15px"}
						sx={{
							fontSize: "30px",
							color: "#272727",
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
							gap: "10px",
							backgroundColor: "#F7EF8A",
							padding: 3
						}}
					>
						{/* {!subed ? (
							<>
								<Typography textAlign="center">
									Subscribe to Early Bird Subscription! and start you journey of becoming a
									successful engineer!
								</Typography>
								<Button
									sx={{
										border: "1px solid #F7EF8A",
										borderRadius: "30px",
										paddingX: "20px",
										display: ["none", "block"],
										color: "#272727",
										":hover": {
											background:
												"linear-gradient(181deg, #F7EF8A 0%, #EDC967 37.50%, #D2AC47 78.65%, #AE8625 100%)",
											boxShadow: "0px 4px 66.95999908447266px 0px #867004",
											color: "#272727"
										}
									}}
									onClick={() => router.push("/subscriptions")}
								>
									Try Premium
								</Button>
							</>
						) : ( */}
						<>
							<Typography textAlign="center">More Things are coming up!</Typography>
							<Typography textAlign="center">Stay tuned!</Typography>
							<Typography textAlign="center">
								Enjoy our latest feature with exclusive discount only for you!
							</Typography>
							<Button
								sx={{
									border: "1px solid #F7EF8A",
									borderRadius: "30px",
									paddingX: "20px",
									display: ["none", "block"],
									color: "#272727",
									":hover": {
										background:
											"linear-gradient(181deg, #F7EF8A 0%, #EDC967 37.50%, #D2AC47 78.65%, #AE8625 100%)",
										boxShadow: "0px 4px 66.95999908447266px 0px #867004",
										color: "#272727"
									}
								}}
								onClick={() => router.push("/ghostwriting")}
							>
								GhostWriting
							</Button>
						</>
						{/* )} */}
					</Box>
					<Box
						width={"90%"}
						height={"200px"}
						bgcolor={"grey"}
						borderRadius={"15px"}
						sx={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							flexDirection: "column",
							gap: "20px"
						}}
					>
						<Image src={"/achievements/Tools.svg"} width={80} height={80} />
						<Typography
							sx={{
								fontSize: "20px"
							}}
						>
							{nFormatter(coins, 0)} WAE Coins
							{/* <Typography>{coinValue?.coins} WAE Coins</Typography> */}
						</Typography>
					</Box>
				</>
			)}
			{/* <Box display={"flex"} gap={"15px"}>
				<Link
					// sx={{
					// 	textDecoration: "0px",
					// 	color: "grey",
					// 	fontSize: 13
					// }}
					style={{
						textDecoration: 'none',
						color: 'grey',
						fontSize: 13,
					  }}
					to={"/about"}
				>
					About
				</Link>

				<Link
					sx={{
						textDecoration: "0px",
						color: "grey",
						fontSize: 13
					}}
					to={"/advertising"}
				>
					Advertising
				</Link>
				<Link
					sx={{
						textDecoration: "0px",
						color: "grey",
						fontSize: 13
					}}
					to={"/help"}
				>
					Help Center
				</Link>
			</Box> */}
			<Box gap={"15px"}>
				<Button
					sx={{
						textDecoration: "0px",
						display: "flex",
						color: "grey",
						fontWeight: "400",
						padding: "0",
						fontSize: 13,
						zIndex: 999,
						borderRadius: "30px",
						":hover": {
							backgroundColor: "transparent"
						}
					}}
					onClick={() => (option === "p&t" ? setOption() : setOption("p&t"))}
				>
					Privacy &amp; Terms
					<ArrowDropDown
						sx={{
							transform: option === "p&t" ? "rotate(180deg)" : ""
						}}
					/>
				</Button>
				<Menu
					open={option === "p&t"}
					onClose={() => setOption()}
					sx={{
						marginLeft: "-4.5vw",
						marginTop: "-2vw"
					}}
					PaperProps={{
						sx: {
							backgroundColor: "rgba(0, 0, 0, 0.8)",
							borderRadius: "10px",
							border: "1px solid #05D9D7"
						}
					}}
					anchorOrigin={{
						vertical: "bottom",
						horizontal: "right"
					}}
					transformOrigin={{
						vertical: "top",
						horizontal: "right"
					}}
				>
					<MenuItem
						onClick={() => router.push("/privacy")}
						sx={{
							backgroundColor: "transparent",
							borderRadius: "30px",
							fontSize: "13px",
							":hover": {
								backgroundColor: "transparent"
							}
						}}
					>
						Privacy Policy
					</MenuItem>
					<MenuItem
						onClick={() => router.push("/terms")}
						sx={{
							backgroundColor: "transparent",
							borderRadius: "30px",
							fontSize: "13px",
							":hover": {
								backgroundColor: "transparent"
							}
						}}
					>
						Terms and Conditions
					</MenuItem>
					<MenuItem
						onClick={() => router.push("/user-agreement")}
						sx={{
							backgroundColor: "transparent",
							borderRadius: "30px",
							fontSize: "13px",
							":hover": {
								backgroundColor: "transparent"
							}
						}}
					>
						User Agreement
					</MenuItem>
					<MenuItem
						onClick={() => router.push("/cookie-policy")}
						sx={{
							backgroundColor: "transparent",
							borderRadius: "30px",
							fontSize: "13px",
							":hover": {
								backgroundColor: "transparent"
							}
						}}
					>
						Cookie Policy
					</MenuItem>
					<MenuItem
						onClick={() => router.push("/copyright")}
						sx={{
							backgroundColor: "transparent",
							borderRadius: "30px",
							fontSize: "13px",
							":hover": {
								backgroundColor: "transparent"
							}
						}}
					>
						Copyright Policy
					</MenuItem>
				</Menu>
				{/* <Button
					sx={{
						textDecoration: "0px",
						display: "flex",
						color: "grey",
						fontWeight: "400",
						padding: "0",
						fontSize: 13,
						":hover": {
							backgroundColor: "transparent"
						}
					}}
					onClick={() => (option === "bc" ? setOption() : setOption("bc"))}
				>
					Business Center
					<ArrowDropDown />
				</Button> */}
				{/* <Menu
					open={option === "bc"}
					onClose={() => setOption()}
					sx={{
						marginLeft: "-2vw",
						marginTop: "-8vh"
					}}
					PaperProps={{
						sx: {
							backgroundColor: "rgba(0, 0, 0, 0.8)",
							borderRadius: "10px",
							border: "1px solid #05D9D7",
							width: "11vw"
						}
					}}
					anchorOrigin={{
						vertical: "bottom",
						horizontal: "right"
					}}
					transformOrigin={{
						vertical: "top",
						horizontal: "right"
					}}
				>
					<MenuItem
						sx={{
							display: "flex",
							flexDirection: "column",
							alignItems: "flex-start",
							fontSize: "13px",
							borderRadius: "30px",
							":hover": {
								backgroundColor: "transparent"
							}
						}}
					>
						Create College Page
						<Typography fontSize={"9px"}>Register your college with us</Typography>
					</MenuItem>
					<MenuItem
						sx={{
							display: "flex",
							flexDirection: "column",
							alignItems: "flex-start",
							fontSize: "13px",
							borderRadius: "30px",
							":hover": {
								backgroundColor: "transparent"
							}
						}}
					>
						Create Company Page
						<Typography fontSize={"9px"}>Register your college with us</Typography>
					</MenuItem>
				</Menu> */}
			</Box>
			<Box>
				<Typography
					sx={{
						color: "grey",
						fontSize: 13
					}}
				>
					© 2023 Sumus Engineer Pvt Ltd. All rights reserved.
				</Typography>
				<Typography
					sx={{
						color: "grey",
						fontSize: 13,
						textAlign: "center",
						top: 10
					}}
				>
					Version V0.2
				</Typography>
			</Box>
		</Box>
	);
};
