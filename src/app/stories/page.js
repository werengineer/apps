"use client";
import { loginModalState } from "@atom";
import { StoriesMain } from "@components/Stories";
import { API_URL } from "@constants";
import { Box, CircularProgress } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { useStoryStore } from "@store";

export default function StoriesPage() {
	const [open, setOpen] = useRecoilState(loginModalState);
	const [skip, setSkip] = useState(0);
	const [limit, setLimit] = useState(10);
	const [completed, setCompleted] = useState(false);
	const [loading, setLoading] = useState(false);
	const [loading1, setLoading1] = useState(true);
	const [firstLoad, setFirstLoad] = useState(false);
	const setStories = useStoryStore((state) => state?.setStories);
	const stories = useStoryStore((state) => state?.stories);

	const fetchStories = async () => {
		var data;

		try {
			setLoading(true);
			const storiesData = await axios.get(`${API_URL}/story/get?skip=${skip}&limit=${limit}`);
			if (storiesData.data.length < 10) {
				setCompleted(true);
			}
			data = storiesData.data;
			setStories(data);
			setSkip(skip + 10);
		} catch (error) {
			console.log("List getServerSideProps 45", error);
		} finally {
			setLoading(false);
			setLoading1(false);
		}
	};

	useEffect(() => {
		setFirstLoad(true);
		fetchStories();
		setFirstLoad(false);
	}, []);

	return (
		<>
			<Box
				display={"flex"}
				sx={{
					mt: 10,
					ml: ["auto", 7],
					maxWidth: "100vw",
					display: "flex",
					overflowY: "hidden"
				}}
			>
				<Box
					sx={{
						width: ["100%", "100%", "75%"]
					}}
				>
					{loading1 ? (
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
						<StoriesMain
							stories={stories}
							fetchStories={fetchStories}
							completed={completed}
							loading={loading}
							firstLoad={firstLoad}
						/>
					)}
				</Box>
			</Box>
		</>
	);
}
