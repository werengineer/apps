"use client";
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

import React, { useEffect, useState } from "react";


export const LastWeek = ({legDate}) => {

	return (
		<TableContainer sx={{}}>
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
					<TableRow
						sx={{
							backgroundColor: "#1D5352",
							border: "0",
							height: "10px"
						}}
					>
						<TableCell
							align="left"
							sx={{
								border: "0"
							}}
						>
							23475
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
							<Avatar>LK</Avatar>
							<Typography>Lokesh Kabra</Typography>
						</TableCell>
						<TableCell
							align="right"
							sx={{
								border: "0"
							}}
						>
							+450
						</TableCell>
					</TableRow>

					<TableRow
						sx={{
							border: "0"
						}}
					>
						<TableCell
							align="left"
							sx={{
								border: "0"
							}}
						>
							1
						</TableCell>

						<TableCell
							align="center"
							sx={{
								display: "flex",
								justifyContent: "flex-start",
								alignItems: "center",
								gap: "1vw",
								border: "0",
								width: ["auto", "20vw"]
								//   mx: 'auto',
								//   ml: [0, 35]
							}}
						>
							<Avatar>AB</Avatar>
							<Typography>Alec Benjamin</Typography>
						</TableCell>
						<TableCell
							align="right"
							sx={{
								border: "0"
							}}
						>
							+450
						</TableCell>
					</TableRow>

					<TableRow
						sx={{
							border: "0"
						}}
					>
						<TableCell
							align="left"
							sx={{
								border: "0"
							}}
						>
							2
						</TableCell>

						<TableCell
							align="center"
							sx={{
								display: "flex",
								justifyContent: "flex-start",
								alignItems: "center",
								width: ["auto", "20vw"],
								border: "0",
								gap: "1vw"
								//   mx: 'auto',
								//   ml: [0, 35]
							}}
						>
							<Avatar>TC</Avatar>
							<Typography>Tejas Chaudhari</Typography>
						</TableCell>
						<TableCell
							align="right"
							sx={{
								border: "0"
							}}
						>
							+450
						</TableCell>
					</TableRow>

					<TableRow
						sx={{
							border: "0"
						}}
					>
						<TableCell
							align="left"
							sx={{
								border: "0"
							}}
						>
							3
						</TableCell>

						<TableCell
							align="center"
							sx={{
								display: "flex",
								justifyContent: "flex-start",
								alignItems: "center",
								gap: "1vw",
								border: "0",
								width: ["auto", "20vw"]
								//   mx: 'auto',
								//   ml: [0, 35]
							}}
						>
							<Avatar>KS</Avatar>
							<Typography>Kshutrgunh Sinha</Typography>
						</TableCell>
						<TableCell
							align="right"
							sx={{
								border: "0"
							}}
						>
							+450
						</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</TableContainer>
	);
};