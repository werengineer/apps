import { Story } from "@components/Stories/Story";
import { OneListContext } from "@context/oneList";
import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import { useContext } from "react";

export const Stories = () => {
	const oneListContext = useContext(OneListContext);
	const { stories, filter } = oneListContext;
	console.log(stories);
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				overflowX: "hidden"
			}}
		>
			<Box
				sx={{
					display:
						stories.length > 0 && (filter === "Stories" || filter === "Both")
							? "flex"
							: "none",
					alignItems: "center",
					gap: "1vw",
					mt: 2
				}}
			>
				<Divider
					sx={{
						width: "5%",
						backgroundColor: "#1D5352"
					}}
				/>
				<Typography
					sx={{
						color: "#1D5352"
					}}
				>
					Stories
				</Typography>
				<Divider
					sx={{
						width: ["70%", "82%", "83%"],
						backgroundColor: "#1D5352"
					}}
				/>
			</Box>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					gap: "10px"
				}}
			>
				{(filter === "Stories" || filter === "Both") &&
					stories.map((q, i) => <Story key={i} data={q} />)}
			</Box>
		</Box>
	);
};
