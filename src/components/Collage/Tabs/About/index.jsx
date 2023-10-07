"use client";
import { Box, Button, Divider, Typography } from "@mui/material";
import React, { useContext } from "react";
import { useRouter } from "next/navigation";

export const About = () => {
	const router = useRouter();
	const data = [
		{
			id: 1
		},
		{
			id: 1
		},
		{
			id: 1
		},
		{
			id: 1
		},
		{
			id: 1
		}
	];

	return (
		<Box display={"flex"} flexDirection={"column"} px={[2, 5]} width={"100%"} gap={3} marginY={5}>
			{data.map((data, i) => {
				return (
					<Box key={i}>
						<Typography fontSize={24} fontWeight={500}>
							OverView
						</Typography>
						<Typography ml={2} fontSize={15} color={"gray"}>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, nesciunt
							dignissimos illo neque, laudantium id sapiente dolor consequatur rerum facilis
							ipsam et, minus dicta soluta.
						</Typography>
					</Box>
				);
			})}
		</Box>
	);
};
