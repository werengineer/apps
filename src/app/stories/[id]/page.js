"use client";
import { StoryPageMain } from "@components";
import { API_URL } from "@constants";
import { Box, CircularProgress } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function StoryPage() {
	const [story, setStory] = useState({});
	const [loading, setLoading] = useState(true);
	var pathname = usePathname();
	pathname = pathname.split("/");

	useEffect(() => {
		const fetchstory = async () => {
			const res = await axios.get(`${API_URL}/story/get?id=${pathname[2]}`);
			console.log(res);
			setStory(res.data);
			setLoading(false);
		};
		fetchstory();
	}, []);

	return (
		<>
			<Box
				display={"flex"}
				sx={{
					mt: 10,
					ml: ["auto", 10],
					maxWidth: "100vw",
					display: "flex",
					overflowY: "hidden"
				}}
			>
				<Box
					sx={{
						display: "flex",
						width: ["100%", "100%", "75%"]
					}}
				>
					{loading ? (
						<Box
							sx={{
								display: "flex",
								width: "100%",
								height: ["90vh", "87vh"],
								justifyContent: "center",
								alignItems: "center",
								color: "#1D5352"
							}}
						>
							<CircularProgress color="inherit" />
						</Box>
					) : (
						<StoryPageMain story={story} />
					)}
				</Box>
			</Box>
		</>
	);
}
