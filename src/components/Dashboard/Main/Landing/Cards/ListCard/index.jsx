"use client"
import { getEngineer } from "@cookies";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Lock, Topic } from "@mui/icons-material";
import { ListModal } from "@components/Global";

export const ListCard = ({ list, loading }) => {
	const [open, setOpen] = useState(false);
	const engineer = getEngineer();
	// const [list, setList] = useState([]);
	// const [loading, setLoading] = useState(false);
	const router = useRouter();

	return (
		<Box width={["92%", "50%"]}>
			<ListModal
				open={open}
				setOpen={setOpen}
				questionId={undefined}
				question={undefined}
				storyId={undefined}
			/>
			<Box
				border={"1px solid #1D5352"}
				borderRadius={"10px"}
				paddingX={["4vw", "1.5vw"]}
				display={"flex"}
				height={["290px", "325px", "300px"]}
				flexDirection={"column"}
				paddingY={"2vh"}
				paddingBottom={"4vh"}
				gap={"2vh"}
				sx={{
					boxShadow: "1px 3px 10px 0px rgba(0,0,0,0.75)"
				}}
			>
				<Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
					<Typography
						fontSize={"20px"}
						sx={{
							display: engineer ? "flex" : "none"
						}}
					>
						Your Lists
					</Typography>
					<Box display={["none", "flex"]}>
						<Link
							style={{
								display: engineer ? "flex" : "none",
								textDecorationLine: "none",
								fontSize: "13px",
								color: "#05D9D7",
								cursor: "pointer"
							}}
							href={"/list"}
						>
							All Lists
						</Link>
					</Box>
				</Box>
				<Box
					display={"flex"}
					flexDirection={"column"}
					gap={"1.5vh"}
					height={"100%"}
					width={"100%"}
				>
					<Box
						display={loading ? "flex" : "none"}
						justifyContent={"center"}
						height={"100%"}
						alignItems={"center"}
						color={"#1D5352"}
					>
						<CircularProgress color="inherit" />
					</Box>
					{!engineer && (
						<Box
							display={loading ? "none" : "flex"}
							flexDirection={"column"}
							justifyContent={"center"}
							gap={"2vh"}
							height={"100%"}
							alignItems={"center"}
						>
							<Typography color={"grey"}>Not yet Login!</Typography>
							<Link
								style={{
									// margin: 'auto',
									color: "#05D9D7",
									textDecorationColor: "#05D9D7",
									fontSize: "18px",
									cursor: "pointer"
								}}
								href={"/signin"}
							>
								Login Here
							</Link>
						</Box>
					)}
					{list?.length === 0 ? (
						<Box
							display={loading ? "none" : "flex"}
							flexDirection={"column"}
							justifyContent={"center"}
							gap={"2vh"}
							height={"100%"}
							alignItems={"center"}
						>
							<Typography color={"grey"}>You don&apos;t have any lists yet!</Typography>
							<Button
								style={{
									// margin: 'auto',
									color: (
										engineer.isEmailVerified && engineer.isMobileVerified ? false : true
									)
										? "gray"
										: "#05D9D7",
									fontSize: "18px",
									cursor: "pointer",
									gap: 3
								}}
								disabled={
									engineer.isEmailVerified && engineer.isMobileVerified ? false : true
								}
								onClick={() => setOpen(true)}
							>
								<Lock
									sx={{
										display: (
											engineer.isEmailVerified && engineer.isMobileVerified
												? true
												: false
										)
											? "none"
											: "flex"
									}}
								/>{" "}
								Make Your Lists
							</Button>
						</Box>
					) : (
						Array(list)?.slice(0, 3).map((data, i) => {
							return (
								<Box
									display={loading ? "none" : ["flex", "flex"]}
									alignItems={"center"}
									gap={2}
									px={2}
									py={1}
									key={i}
									border={"1px solid #1D5352"}
									borderRadius={2}
									sx={{
										cursor: "pointer",
										transition: ".3s ease-in",
										"&:hover": {
											backgroundColor: "rgba(0,0,0,0.3)"
										}
									}}
									onClick={() => router.push(`/list/${data?._id}`)}
								>
									<Box
										padding={1}
										my={"auto"}
										sx={{
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											borderRadius: "50%",
											backgroundColor: "#253030"
										}}
									>
										<Topic
											sx={{
												fontSize: 30,
												color: "#1D5352"
											}}
										/>
										<Box></Box>
									</Box>
									<Typography fontSize={16}>{data?.title}</Typography>
								</Box>
							);
						})
					)}
				</Box>
			</Box>
		</Box>
	);
};

ListCard.propTypes = {
	list: PropTypes.any,
	loading: PropTypes.any
};
