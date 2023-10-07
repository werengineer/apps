import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import React from "react";

export const AboutUs = () => {
	return (
		<Box
			id={"aboutus"}
			width={"100vw"}
			display={"flex"}
			flexDirection={"column"}
			justifyContent={"center"}
			alignItems={"center"}
			gap={"8vh"}
			marginY={"10vh"}
		>
			<Typography fontSize={["30px", "35px", "40px"]} color={"#05D9D7"}>
				Who Are We?
			</Typography>
			<Box
				display={"flex"}
				flexDirection={"column"}
				justifyConten={"center"}
				alignItems={"center"}
				gap={"5vh"}
			>
				<Box
					display={"flex"}
					flexDirection={"row"}
					gap={"3vw"}
					paddingRight={["8vw", "0vw"]}
					paddingLeft={["8vw", "0vw"]}
				>
					<Box display={["none", "flex"]}>
						<Image width={80} height={80} src={"/images/AboutUs/1.png"} alt={"1"} />
					</Box>
					<Box display={["flex", "none"]} alignItems={"flex-start"}>
						<Image width={40} height={40} src={"/images/AboutUs/1.png"} alt={"1"} />
					</Box>
					<Box
						display={"flex"}
						flexDirection={"column"}
						justifyContent={"center"}
						gap={["1.5vh", "1vh", "1.5vh"]}
						width={["80vw", "60vw", "33vw"]}
					>
						<Typography color={"#05D9D7"} fontSize={["18px", "20px"]}>
							Education And Training Platform For Engineers
						</Typography>
						<Typography fontSize={["15px", "18px"]}>
							Upgrade your skills and knowledge to industry level
						</Typography>
					</Box>
				</Box>

				<Box
					display={"flex"}
					flexDirection={"row"}
					gap={"3vw"}
					paddingRight={["4vw", "0vw"]}
					paddingLeft={["4vw", "0vw"]}
				>
					<Box display={["none", "flex"]}>
						<Image width={80} height={80} src={"/images/AboutUs/2.png"} alt={"2"} />
					</Box>
					<Box display={["flex", "none"]} alignItems={"flex-start"}>
						<Image width={40} height={40} src={"/images/AboutUs/2.png"} alt={"2"} />
					</Box>
					<Box
						display={"flex"}
						flexDirection={"column"}
						justifyContent={"center"}
						gap={["1.5vh", "1vh", "1.5vh"]}
						width={["80vw", "60vw", "33vw"]}
					>
						<Typography color={"#05D9D7"} fontSize={["18px", "20px"]}>
							Career-Oriented Goal
						</Typography>
						<Typography fontSize={["15px", "18px"]}>
							Providing the knowledge and expertise for a successful career in engineering{" "}
						</Typography>
					</Box>
				</Box>

				<Box
					display={"flex"}
					flexDirection={"row"}
					gap={"3vw"}
					paddingRight={["4vw", "0vw"]}
					paddingLeft={["4vw", "0vw"]}
				>
					<Box display={["none", "flex"]}>
						<Image width={80} height={80} src={"/images/AboutUs/3.png"} alt={"3"} />
					</Box>
					<Box display={["flex", "none"]} alignItems={"flex-start"}>
						<Image width={40} height={40} src={"/images/AboutUs/3.png"} alt={"3"} />
					</Box>
					<Box
						display={"flex"}
						flexDirection={"column"}
						justifyContent={"center"}
						gap={["1.5vh", "1vh", "1.5vh"]}
						width={["80vw", "60vw", "33vw"]}
					>
						<Typography color={"#05D9D7"} fontSize={["18px", "20px"]}>
							Addressing the issue of graduate unemployment
						</Typography>
						<Typography fontSize={["15px", "18px"]}>
							Helping new graduates find employment in their field
						</Typography>
					</Box>
				</Box>

				<Box
					display={"flex"}
					flexDirection={"row"}
					gap={"3vw"}
					paddingRight={["4vw", "0vw"]}
					paddingLeft={["4vw", "0vw"]}
				>
					<Box display={["none", "flex"]}>
						<Image width={80} height={80} src={"/images/AboutUs/4.png"} alt={"4"} />
					</Box>
					<Box display={["flex", "none"]} alignItems={"flex-start"}>
						<Image width={40} height={40} src={"/images/AboutUs/4.png"} alt={"4"} />
					</Box>
					<Box
						display={"flex"}
						flexDirection={"column"}
						justifyContent={"center"}
						gap={["1.5vh", "1vh", "1.5vh"]}
						width={["80vw", "60vw", "33vw"]}
					>
						<Typography color={"#05D9D7"} fontSize={["18px", "20px"]}>
							Focused on helping engineers in tier 1, 2 and 3 cities
						</Typography>
						<Typography fontSize={["15px", "18px"]}>
							Addressing the skills gap and empowering local engineers
						</Typography>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};
