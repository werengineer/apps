import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { getEngineer } from "../../../../../utils/getUserInfo";
import Story from "../../Stories/Story";
import { LoadingButton } from "@mui/lab";
import { API_URL } from "@constants";


const Index = () => {

	const [stories, setStories] = useState([]);
	const [skip, setSkip] = useState(0);
	const [loading, setLoading] = useState(false);
	const [completed, setCompleted] = useState(false);
	const engineer = getEngineer();


	const fetchStories = async () => {
		setLoading(true);
		var data = stories;

		if (engineer) {
			try {
				const storiesData = await axios.get(
					`${API_URL}/story/get?engineer=${engineer?._id}&skip=${skip}&limit=10`,
				);

				if (storiesData.data?.length < 10) {
					setCompleted(true);
				}

				data = stories.concat(storiesData.data);
				setStories(data);
				console.log(stories);
			} catch (error) {
				console.log(error);
			} finally {
				setLoading(false);
			}
		}
	};

	useEffect(() => {
		fetchStories();
	}, []);

	return (
		<Box
			sx={{
				display: "flex",
				gap: "4vh",
				flexDirection: "column"
			}}
		>
			{stories?.map((s, i) => <Story story={s} key={i} />)}

			<LoadingButton
				onClick={fetchStories}
				loading={loading}
				sx={{
					display: completed ? "none" : "flex",
					width: "150px",
					border: "1px solid grey",
					color: "grey",
					borderRadius: "30px",
					mb: "20px",
					mx: "auto"
				}}
			>
                Load More
			</LoadingButton>
		</Box>
	);
};

export default Index;