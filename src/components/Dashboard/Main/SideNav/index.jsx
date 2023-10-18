import { ArrowDropDown } from "@mui/icons-material";
import { Box, Button, Link, Menu, MenuItem, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

const Index = () => {
	const [option, setOption] = useState();
	const router = useRouter();

	// const setCoins = useCoinsStore((state) => state.setCoins);

	// useEffect(() => {
	// 	console.log("wdbchjdsbcsdcksd c", 123);
	// 	const fetchEngineer = async () => {
	// 		if(sessionStorage.getItem('engineer')){
	// 		const res = await axios.get(`${API_URL}/engineer/get?id=${engineer._id}`);
	// 		setCoins(res.data?.coins);
	// 		}
	// 	};
	// 	fetchEngineer();
	// }, []);

	return (
		<Box
			display={["none", "flex"]}
			flexDirection={"column"}
			justifyContent={"center"}
			alignItems={"center"}
			gap={"3vh"}
			width={"23vw"}
			maxHeight={"89vh"}
			overflow={"none"}
			ml={"0.45vw"}>
			{router.pathname === "/settings" ? (
				<>
					<Box
						width={"75%"}
						display={"flex"}
						flexDirection={"column"}
						justifyContent={"space-between"}
						alignItems="center"
						p={5}
						height={"230px"}
						bgcolor={"grey"}
						borderRadius={"15px"}>
						<Image src={"/icons/Tools.svg"} alt={"axe img"} width={80} height={80} />
						<Typography>0 WAE Coins</Typography>
					</Box>
					<Box
						display={"flex"}
						flexDirection={"column"}
						p={4}
						justifyContent={"space-between"}
						alignItems="center"
						width={"75%"}
						height={"230px"}
						bgcolor={"grey"}
						borderRadius={"15px"}>
						<Image src={"/icons/Gold_Tools.svg"} alt={"axe img"} width={80} height={80} />
						<Typography>0 WAE Gold Coins</Typography>
						<Button sx={{ textDecoration: "underline", color: "#50D9D7", fontSize: "12px" }}>
              Gain Gold Coins
						</Button>
					</Box>
				</>
			) : (
				<>
					<Box width={"90%"} height={"270px"} bgcolor={"grey"} borderRadius={"15px"}></Box>
					<Box width={"90%"} height={"200px"} bgcolor={"grey"} borderRadius={"15px"}></Box>
				</>
			)}
			<Box display={"flex"} gap={"15px"}>
				<Link
					sx={{
						textDecoration: "0px",
						color: "grey",
						fontSize: 13
					}}
					to={"/about"}>
          About
				</Link>

				<Link
					sx={{
						textDecoration: "0px",
						color: "grey",
						fontSize: 13
					}}
					to={"/advertising"}>
          Advertising
				</Link>
				<Link
					sx={{
						textDecoration: "0px",
						color: "grey",
						fontSize: 13
					}}
					to={"/help"}>
          Help Center
				</Link>
			</Box>
			<Box display={"flex"} gap={"15px"}>
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
					onClick={() => (option === "p&t" ? setOption() : setOption("p&t"))}>
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
						marginLeft: "-6vw",
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
					}}>
					<MenuItem
						sx={{
							backgroundColor: "transparent",
							borderRadius: "30px",
							fontSize: "13px",
							":hover": {
								backgroundColor: "transparent"
							}
						}}>
            Privacy Policy
					</MenuItem>
					<MenuItem
						sx={{
							backgroundColor: "transparent",
							borderRadius: "30px",
							fontSize: "13px",
							":hover": {
								backgroundColor: "transparent"
							}
						}}>
            User Agreement
					</MenuItem>
					<MenuItem
						sx={{
							backgroundColor: "transparent",
							borderRadius: "30px",
							fontSize: "13px",
							":hover": {
								backgroundColor: "transparent"
							}
						}}>
            Cookie Policy
					</MenuItem>
					<MenuItem
						sx={{
							backgroundColor: "transparent",
							borderRadius: "30px",
							fontSize: "13px",
							":hover": {
								backgroundColor: "transparent"
							}
						}}>
            Copyright Policy
					</MenuItem>
				</Menu>
				{/* <Button
          sx={{
            textDecoration: '0px',
            display: 'flex',
            color: 'grey',
            fontWeight: '400',
            padding: '0',
            fontSize: 13,
            ':hover': {
              backgroundColor: 'transparent'
            }
          }}
          onClick={() => (option === 'bc' ? setOption() : setOption('bc'))}>
          Business Center
          <ArrowDropDown />
        </Button> */}
				<Menu
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
					}}>
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
						}}>
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
						}}>
            Create Company Page
						<Typography fontSize={"9px"}>Register your college with us</Typography>
					</MenuItem>
				</Menu>
			</Box>
		</Box>
	);
};

export default Index;
