import {
	Box,
	Avatar,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography
} from "@mui/material";
import Image from "next/image";
import React from "react";
import { useState, useEffect } from "react";
import { fetchAllUser } from "@api/leaderboard";
import { getEngineer } from "@cookies";



export const AllOver = () => {
	const [users, setUsers] = useState([]);
	const engineer = getEngineer();

	useEffect(() => {
		const fetchData = async () => {
		  try {
			const fetchedUsers = await fetchAllUser();
			// Sort users based on rank in ascending order
			const sortedUsers = fetchedUsers.sort((a, b) => a.rank - b.rank);
			setUsers(sortedUsers);
		  } catch (error) {
			console.error('Error fetching users:', error);
		  }
		};
	
		fetchData();
	  }, []);

	  console.log("users", users);

	return (
		<TableContainer component={Box} sx={{ overflowY: 'auto', maxHeight: '75vh' }}>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell
							align="left"
							sx={{
								border: "0px"
							}}
						>
							Rank
						</TableCell>
						<TableCell
							//   align="center"
							sx={{
								"&:last-child td, &:last-child th": {
									border: "0px",
									margin: "0px"
								}
							}}
						>
							User
						</TableCell>
						<TableCell
							align="right"
							sx={{
								border: "0px"
							}}
						>
							<Box
								sx={{
									display: "flex",
									justifyContent: "flex-end",
									alignItems: "center",
									gap: "1vw"
								}}
							>
								<Image width={30} height={30} src={"/icons/Axe.svg"} alt={"axe img"} />
								<Typography>Total TPs</Typography>
							</Box>
						</TableCell>
					</TableRow>
				</TableHead>

				<TableBody sx={{}}>
				{users.map((user, index) => (
					<TableRow
						sx={{
							backgroundColor: engineer._id === user._id? "#1D5352":"none",
							border: "0",
							height: "10px"
						}}
						key={user._id}
					>
						<TableCell
							align="left"
							sx={{
								border: "0"
							}}
						>
							{user.rank}
						</TableCell>

						<TableCell
							align="center"
							sx={{
								display: "flex",
								justifyContent: "flex-start",
								alignItems: "center",
								gap: "1vw",
								border: "0",
								//bgcolor: 'red',
								width: ["auto", "20vw"]
								//   mx: 'auto',
								//   ml: [0, 35]
							}}
						>
							<Avatar>{user.avatar}</Avatar>
							<Typography>{user.name}</Typography>
						</TableCell>
						<TableCell
							align="right"
							sx={{
								border: "0"
							}}
						>
							{user.xp}
						</TableCell>
					</TableRow>
					))}
					
				</TableBody>
			</Table>
		</TableContainer>
	);
};