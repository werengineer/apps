"use client";
import { Box, CircularProgress, Typography } from "@mui/material";
import React from "react";
import { Story } from "./Story";
import { LoadingButton } from "@mui/lab";
import { PropTypes } from "prop-types";
import Link from "next/link";
import { styled } from '@mui/system';


const StyledLink = styled('a')({
    textDecoration: 'underline',
    textDecorationColor: '#1D5352',
    marginLeft: '5px',
    color: '#16e9d1',
    fontSize: '20px',
    '&:hover': {
        color: '#FF4500', // Change this to the desired hover color
        textDecoration: 'none', // Remove underline on hover if desired
    },
});

export const StoriesMain = ({ stories, fetchStories, completed, loading }) => {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				gap: ["3vh", "5vh"],
				borderRight: ["0px", "0px", "1px solid grey"],
				height: "87vh",
				overflowY: "scroll",
				overflowX: "hidden",
				px: 3
			}}
		>
			{stories?.map((data, i) => {
				return <Story data={data} key={i} />;
			})}

			{loading && (
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
			)}
			{completed && (
				<Typography
				sx={{
					textAlign: 'center',
					color: '#ffffff',
				}}
			>
				That was all, check out 
				<StyledLink href="/questions">
				 Questions
				</StyledLink>
			</Typography>
				// <Typography
				// 	sx={{
				// 		textAlign: "center",
				// 		color: "#fff"
				// 	}}
				// >
				// 	That was all, check out
				// 	<Link
				// 		style={{
				// 			textDecorationLine: "underline",
				// 			textDecorationColor: "#1D5352",
				// 			marginLeft: "5px",
				// 			color: "#0000EE",
				// 			fontSize: "20px"
				// 		}}
				// 		href={"/questions"}
				// 	>
				// 		Questions
				// 	</Link>
				// </Typography>
			)}

			<LoadingButton
				sx={{
					color: "grey",
					border: "1px solid grey",
					mb: 2,
					width: "150px",
					mx: "auto",
					borderRadius: "30px",
					display: completed || stories?.length === 0 ? "none" : "flex"
				}}
				onClick={() => fetchStories()}
			>
				Load More
			</LoadingButton>
		</Box>
	);
};

StoriesMain.propTypes = {
	stories: PropTypes.any,
	fetchStories: PropTypes.any,
	completed: PropTypes.any,
	loading: PropTypes.any
};
