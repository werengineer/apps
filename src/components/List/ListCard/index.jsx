import React, { useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import TopicIcon from "@mui/icons-material/Topic";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import Link from "next/link";
import PropTypes from "prop-types";
import ListMenu from "./ListMenu";

export const ListCard = ({ data }) => {
	const [anchorEl, setAnchorEl] = useState();
	
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	console.log(data);
	// window.location.reload();
	return (
		<Box
			border={"1px solid #1D5352"}
			sx={{
				display: "flex",
				px: [1, 2],
				py: [1.5, 2],
				width: "100%",
				alignItems: "start",
				justifyContent: "space-between",
				borderRadius: 3,
				transition: ".2s ease-in-out",
				"&:hover": {
					overflow: "hidden",
					backgroundColor: "#232323"
					//   boxShadow: "2px 4px 15px black",
				}
			}}
		>
			<Box display={"flex"} gap={2} maxWidth={"80%"}>
				<Box
					padding={2}
					my={"auto"}
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						borderRadius: "50%",
						backgroundColor: "#253030"
					}}
				>
					<TopicIcon
						sx={{
							fontSize: 35,
							color: "#1D5352"
						}}
					/>
				</Box>
				<Box display={"flex"} flexDirection={"column"} gap={"15px"}>
					<Link href={`/list/${data?._id}`}>
						<Box display={"flex"} gap={[2, 3]} alignItems={"center"}>
							<Typography
								fontSize={["18px", "", "25px"]}
								noWrap
								// width={"50%"}
								sx={{
									wordBreak: "keep-all"
								}}
							>
								{data?.title}
							</Typography>
							<Box display={"flex"} gap={[1, 2]}>
								<Typography fontSize={["8px", "13px"]} color={"#1D5352"}>
									{data?.questions?.length === 0 ? "No" : data?.questions?.length} Question
									{data?.questions?.length <= 1 ? "" : "s"}
								</Typography>
								<Typography fontSize={["8px", "13px"]} color={"#1D5352"}>
									{data?.stories?.length === 0 ? "No" : data?.stories?.length}{" "}
									{data?.stories?.length <= 1 ? "Story" : "Stories"}
								</Typography>
							</Box>
						</Box>
						<Typography
							fontSize={["11px", "12px", "14px"]}
							mt={1}
							width={"45vw"}
							maxHeight={"5vh"}
							overflow={"hidden"}
							sx={{
								overflowX: "hidden",
								overflowY: "hidden"
							}}
						>
							{data?.description}
						</Typography>
					</Link>
					<Box
						display={"flex"}
						alignItems={"center"}
						gap={"10px"}
						maxWidth={["45vw"]}
						sx={{
							overflowX: "scroll"
						}}
					>
						{data?.tag?.map((t, k) => (
							<Box
								borderRadius={"20px"}
								display={"flex"}
								padding={"2px"}
								paddingX={"20px"}
								width={"auto"}
								justifyContent={"center"}
								sx={{
									backgroundColor: "#253030"
								}}
								key={k}
							>
								<Typography
									sx={{
										margin: "auto",
										color: "#50D9D7",
										fontSize: ["10px", "10px", "12px"]
									}}
								>
									{t}
								</Typography>
							</Box>
						))}
					</Box>
				</Box>
			</Box>
			<IconButton onClick={handleClick}>
				<MoreVertRoundedIcon />
			</IconButton>
			<ListMenu anchorEl={anchorEl} handleClose={handleClose} id={data?._id} />
		</Box>
	);
};

ListCard.propTypes = {
	data: PropTypes.any
};
