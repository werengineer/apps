"use client";
import { GhostWriting } from "@components/GhostWriting";
import { API_URL } from "@constants";
import { getEngineer } from "@cookies";
import Box from "@mui/material/Box";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function GhostWritingPage() {
	const engineer = getEngineer();
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		const fetchData = async () => {
			try {
				const response = await axios.get(
					`${API_URL}/ghostwriting/getAllResponses/${engineer.username}`
				);
				setData(response.data);
				setLoading(false);
				console.log(response.data);
			} catch (error) {
				console.log(error);
				setLoading(false);
			}
		};
		fetchData();
	}, []);
	return (
		<Box
			display={"flex"}
			sx={{
				mt: [8, 9],
				ml: ["auto", 10],
				maxWidth: "100vw",
				display: "flex",
				overflowY: "hidden"
			}}
		>
			<Box
				sx={{
					width: ["100%", "100%", "75%"],
					height: ["92vh", "89vh"],
					overflowY: "scroll",
					px: [2, 0],
					borderRight: ["none", "1px solid gray"]
				}}
			>
				<GhostWriting data={data} loading={loading} />
			</Box>
		</Box>
	);
}
