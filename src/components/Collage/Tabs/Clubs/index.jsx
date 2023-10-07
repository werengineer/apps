import { Avatar, Box, Button, Typography } from "@mui/material";
import React, { useContext } from "react";

export const Clubs = () => {
	return (
		<Box
			display={"flex"}
			width={"100%"}
			justifyContent={"space-evenly"}
			alignItems={"flex-end"}
			my={3}
			px={5}
			gap={"5vw"}
		>
			<Box>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						gap: 4
					}}
				>
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center"
						}}
					>
						<Box
							sx={{
								display: "flex",
								gap: 2
							}}
						>
							<Avatar>HK</Avatar>
							<Box>
								<Typography>WAE - Collage Clubs</Typography>
								<Typography fontSize={12}>500 members</Typography>
							</Box>
						</Box>
						<Button
							sx={{
								width: "10vw",
								// py: 0,
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
							Apply
						</Button>
					</Box>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							gap: 1
						}}
					>
						<Typography fontSize={21}>About Club</Typography>
						<Typography fontSize={16} ml={3}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste saepe iusto quis
							esse! Accusantium, earum quia possimus explicabo quisquam dolore eligendi ipsum
							voluptatibus soluta accusamus ex libero asperiores perferendis commodi!
							Provident, accusantium suscipit. Nesciunt mollitia, quisquam ipsum error culpa
							laborum soluta at asperiores accusamus neque perspiciatis suscipit harum
							consequatur doloribus. ...
						</Typography>
					</Box>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							gap: 1
						}}
					>
						<Typography fontSize={21}>Co-Ordinators</Typography>
						<Box
							sx={{
								display: "flex",
								gap: 5,
								ml: 3
							}}
						>
							<Box
								sx={{
									display: "flex",
									gap: 2,
									alignItems: "center"
								}}
							>
								<Avatar>KH</Avatar>
								<Box
									sx={{
										display: "flex",
										flexDirection: "column"
									}}
								>
									<Typography fontSize={18}>Vedant Bhavsar</Typography>
									<Typography fontSize={12}>Computer Engineer</Typography>
								</Box>
							</Box>
							<Box
								sx={{
									display: "flex",
									gap: 2,
									alignItems: "center"
								}}
							>
								<Avatar>KH</Avatar>
								<Box
									sx={{
										display: "flex",
										flexDirection: "column"
									}}
								>
									<Typography fontSize={18}>Vedant Bhavsar</Typography>
									<Typography fontSize={12}>Computer Engineer</Typography>
								</Box>
							</Box>
						</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};
