"use client";
import { Question } from "@components/Questions/Question";
import { ProfileContext } from "@context/profile";
import { LoadingButton } from "@mui/lab";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import React, { useContext } from "react";
import { Write } from "./Write";

export const Questions = () => {
	const profileContext = useContext(ProfileContext);
	const { questions, loading, qnsLoader, fetchQuestions, completed } = profileContext;

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				gap: "10px",
				my: "10px",
				px: "20px",
				mt: "30px"
			}}
		>
			{loading ? (
				<Box
					sx={{
						display: "flex",
						width: "100%",
						justifyContent: "center",
						alignItems: "center",
						color: "#1D5352"
					}}
				>
					<CircularProgress color="inherit" />
				</Box>
			) : questions?.length == 0 ? (
				<Write />
			) : (
				<>
					{questions?.map((q, i) => (
						<Question key={i} data={q} />
					))}
				</>
			)}
			<Box
				sx={{
					display: questions?.length === 0 ? "none" : "flex"
				}}
			>
				<LoadingButton
					loading={qnsLoader}
					onClick={() => fetchQuestions()}
					sx={{
						mx: "auto",
						borderRadius: "30px",
						backgroundColor: "#212121",
						border: "1px solid #05D9D7",
						color: "#05D9D7",
						px: "20px",

						display: completed?.questions === true ? "none" : "false"
					}}
				>
					View More
				</LoadingButton>
				<Typography
					sx={{
						color: "#1D5352",
						display: completed?.questions === true ? "flex" : "none",
						textAlign: "center",
						mx: "auto"
					}}
				>
					And that&apos;s it!
				</Typography>
			</Box>
		</Box>
	);
};
