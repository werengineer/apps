import { Avatar, Box, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

export const BlogsCard = () => {
	return (
		<Box
			width={["92%", "50%"]}
			border={"1px solid #1D5352"}
			borderRadius={"10px"}
			paddingX={["4vw", "2vw"]}
			height={["410px", "410px", "290px"]}
			display={"flex"}
			flexDirection={"column"}
			paddingY={"2vh"}
			paddingBottom={"4vh"}
			gap={"2vh"}
			sx={{
				boxShadow: "1px 3px 10px 0px rgba(0,0,0,0.75)"
			}}
		>
			<Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
				<Typography fontSize={"20px"}>Latest Blogs</Typography>
				<Box display={["none", "flex"]}>
					<Link
						style={{
							textDecorationLine: "none",
							fontSize: "13px",
							color: "#05D9D7",
							cursor: "pointer"
						}}
						href={"https://blog.weareengineer.com/"}
						target={"_blank"}
					>
						View Blog
					</Link>
				</Box>
			</Box>
			<Box display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
				<Box display={"flex"} alignItems={"center"} gap={"20px"}>
					<Avatar
						sx={{
							fontSize: "12px",
							borderRadius: "5px",
							height: "50px",
							width: "50px"
						}}
					>
						MC
					</Avatar>
					<Box>
						<Typography fontSize={14}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, officia.
						</Typography>
						<Typography color={"grey"} fontSize={"12px"} mt={"2.5px"}>
							Today
						</Typography>
					</Box>
				</Box>
			</Box>
			<Box display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
				<Box display={"flex"} alignItems={"center"} gap={"20px"}>
					<Avatar
						sx={{
							fontSize: "12px",
							borderRadius: "5px",
							height: "50px",
							width: "50px"
						}}
					>
						MC
					</Avatar>
					<Box>
						<Typography fontSize={14}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, officia.
						</Typography>
						<Typography color={"grey"} fontSize={"12px"} mt={"2.5px"}>
							Today
						</Typography>
					</Box>
				</Box>
			</Box>
			<Box display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
				<Box display={"flex"} alignItems={"center"} gap={"20px"}>
					<Avatar
						sx={{
							fontSize: "12px",
							borderRadius: "5px",
							height: "50px",
							width: "50px"
						}}
					>
						MC
					</Avatar>
					<Box>
						<Typography fontSize={14}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, officia.
						</Typography>
						<Typography color={"grey"} fontSize={"12px"} mt={"2.5px"}>
							Today
						</Typography>
					</Box>
				</Box>
			</Box>
			<Box display={["flex", "none"]} justifyContent={"center"}>
				<Link
					style={{
						fontSize: "17px",
						color: "#05D9D7",
						cursor: "pointer"
					}}
				>
					View Blog
				</Link>
			</Box>
		</Box>
	);
};
