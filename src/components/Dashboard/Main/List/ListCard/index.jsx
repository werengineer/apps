import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import TopicIcon from "@mui/icons-material/Topic";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import Link from "next/link";
import PropTypes from "prop-types";

const Index = ({ data }) => {
	console.log(data);

	return (
		<Box
			border={"1px solid #1D5352"}
			sx={{
				display: "flex",
				px: [1, 2],
				py: [1.5, 2],
				width: "97%",
				alignItems: "start",
				justifyContent: "space-between",
				borderRadius: 3,
				transition: ".2s ease-in-out",
				"&:hover": {
					overflow: "hidden",
					backgroundColor: "#121212"
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
						<Typography
							fontSize={["18px", "", "25px"]}
							noWrap
							width={"50%"}
							sx={{
								wordBreak: "keep-all"
							}}
						>
							{data?.title}
						</Typography>
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
			<IconButton>
				<MoreVertRoundedIcon />
			</IconButton>
		</Box>
	);
};

export default Index;

Index.propTypes = {
	data: PropTypes.any
};
