import { API_URL } from "@constants";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import PropTypes from "prop-types";
import React, { useContext, useEffect, useState } from "react";
import { SingleBlockCard } from "./SingleBlockCard";
import { PuzzleContext } from "@context/puzzle";

export const Blogs = () => {
	const puzzleContext = useContext(PuzzleContext);
	const { open1, taskData, toggleTaskModal } = puzzleContext;
	const [mainBlogs, setMainBlogs] = useState();
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchMetaData = async () => {
			
			setLoading(true);

			try {
				const promises = taskData?.blogs?.map((link) => {
					return axios.get(`${API_URL}/functions/metadata?url=${link}`);
				});
				if (promises) {
					const results = await Promise.all(promises);
					const metadata = results.map((result) => result.data);
					setMainBlogs(metadata);
					console.log(metadata);
				}
			} catch (error) {
				console.log(error);
			} finally {
				setLoading(false);
			}
		};

		fetchMetaData();
	}, []);

	return (
		<Box
			sx={{
				display: taskData?.blogs?.length > 0 ? "flex" : "none",
				flexDirection: "column",
				gap: "30px",
				width: ["100%", "50%"],
				height: "400px",
				overflowY: "scroll",
				px: ["0px", "10px"]
			}}
		>
			{loading && (
				<Box
					sx={{
						m: "auto"
					}}
				>
					<CircularProgress />
				</Box>
			)}
			{!loading &&
				mainBlogs?.map((content, index) => (
					<SingleBlockCard key={index} link={taskData?.blogs[index]} content={content} />
				))}
		</Box>
	);
};
