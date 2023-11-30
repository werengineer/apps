"use client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import { Question } from "./Question";
import { useRef } from "react";
import { LoadingButton } from "@mui/lab";
import { PropTypes } from "prop-types";
import Link from "next/link";
import { styled } from '@mui/system';


const StyledLink = styled('a')({
    textDecoration: 'underline',
    textDecorationColor: '#1D5352',
    marginLeft: '5px',
    color: '#0000EE',
    fontSize: '20px',
    '&:hover': {
        color: '#FF4500', // Change this to the desired hover color
        textDecoration: 'none', // Remove underline on hover if desired
    },
});

export const QuestionsMain = ({ questions, fetchQuestions, completed, loading }) => {
	const containerRef = useRef(null);
	return (
		<Box
			id="container"
			ref={containerRef}
			sx={{
				display: "flex",
				flexDirection: "column",
				gap: [5],
				borderRight: ["0px", "0px", "1px solid grey"],
				height: ["92vh", "89vh"],
				overflowY: "scroll",
				overflowX: "hidden",
				px: [3, 2],
				// pr: "30px"
				mx: ["auto"]
			}}
		>
			{questions?.map((q, i) => (
				<Question data={q} key={i} />
			))}
			{completed &&
			<Typography
			sx={{
				textAlign: 'center',
				color: '#ffffff',
			}}
		>
			That was all, check out 
			<StyledLink href="/stories">
			 Stories
			</StyledLink>
		</Typography>
				// <Typography
				// 	sx={{
				// 		textAlign: "center",
				// 		color: "#ffffff"
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
				// 		href={"/stories"}
				// 	>
				// 		Stories
				// 	</Link>
				// </Typography>
			}

			<LoadingButton
				loading={loading}
				sx={{
					color: "grey",
					border: "1px solid grey",
					mb: 2,
					width: "150px",
					mx: "auto",
					borderRadius: "30px",
					display: !completed ? "flex" : "none"
					// display: () === 0 ? 'none' : 'flex'
				}}
				onClick={() => fetchQuestions()}
			>
				Load More
			</LoadingButton>
		</Box>
	);
};

QuestionsMain.propTypes = {
	questions: PropTypes.any,
	fetchQuestions: PropTypes.any,
	completed: PropTypes.any,
	loading: PropTypes.any
};
