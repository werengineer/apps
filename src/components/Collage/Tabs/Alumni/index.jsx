import React, { useContext } from "react";
import { Avatar, Box, Button, CircularProgress, Typography } from "@mui/material";

export const Alumni = () => {
	const data = [
		{
			name: "vedant",
			avatar: "HK",
			post: "Software Engineer"
		},
		{
			name: "vedant",
			avatar: "HK",
			post: "Software Engineer"
		},
		{
			name: "vedant",
			avatar: "HK",
			post: "Software Engineer"
		},
		{
			name: "vedant",
			avatar: "HK",
			post: "Software Engineer"
		},
		{
			name: "vedant",
			avatar: "HK",
			post: "Software Engineer"
		}
	];
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				gap: "10px",
				my: "10px",
				px: "20px",
				mt: "30px"
			}}
		>
			<Box display={"flex"} gap={3}>
				<Box
					sx={{
						display: "flex",
						width: "25%",
						flexDirection: "column",
						alignItems: "center",
						gap: 3,
						px: 5,
						borderRadius: 2,
						backgroundColor: "#212121",
						py: 3,
						border: "1px solid #1D5352"
					}}
				>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							gap: 3
						}}
					>
						<Avatar
							sx={{
								display: "flex",
								width: "100px",
								height: "100px"
							}}
						>
							HK
						</Avatar>
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								flexDirection: "column"
							}}
						>
							<Typography fontSize={20}>Vedant Bhavsar</Typography>
							<Typography color={"gray"} fontSize={15}>
								SoftWare Engineer
							</Typography>
						</Box>
					</Box>
					<Button
						sx={{
							width: "10vw",
							borderRadius: 5,
							display: "flex",
							backgroundColor: "white",
							color: "black",
							"&:hover": {
								color: "white",
								border: "1px solid white"
							}
						}}
					>
						Follow
					</Button>
				</Box>
				<Box
					sx={{
						display: "flex",
						width: "25%",
						flexDirection: "column",
						alignItems: "center",
						gap: 3,
						px: 5,
						borderRadius: 2,
						backgroundColor: "#212121",
						py: 3,
						border: "1px solid #1D5352"
					}}
				>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							gap: 3
						}}
					>
						<Avatar
							sx={{
								display: "flex",
								width: "100px",
								height: "100px"
							}}
						>
							HK
						</Avatar>
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								flexDirection: "column"
							}}
						>
							<Typography fontSize={20}>Vedant Bhavsar</Typography>
							<Typography color={"gray"} fontSize={15}>
								SoftWare Engineer
							</Typography>
						</Box>
					</Box>
					<Button
						sx={{
							width: "10vw",
							borderRadius: 5,
							display: "flex",
							backgroundColor: "white",
							color: "black",
							"&:hover": {
								color: "white",
								border: "1px solid white"
							}
						}}
					>
						Follow
					</Button>
				</Box>
			</Box>
		</Box>
	);
};
