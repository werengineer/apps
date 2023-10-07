import React, { useContext } from "react";
import { Box, Chip } from "@mui/material";
import { OneListContext } from "@context/oneList";

export const Chips = () => {

	const oneListContext = useContext(OneListContext);
	const {
		filter,
		addFilter,
		stories,
		questions,
		setFilter
	} = oneListContext;

	return (
		<Box
			sx={{
				display: "flex",
				gap: ["5vw", "5vw", "1vw"]
			}}
		>
			<Chip
				onClick={() => filter !== "Stories" ? addFilter({fil: "Stories"}) : addFilter({fil: "Both"})}
				label="Stories"
				sx={{
					display: stories.length > 0 ? "flex" : "none",
					border: filter === "Stories" ? "1px solid #05D9D7" : "",
					backgroundColor: filter === "Stories" ? "#1D5352" : "",
					color: filter === "Stories" ? "#05D9D7" : "",
					px: 1,
					fontSize: ["12px", "12px", "15px"],
					":hover": {
						backgroundColor: filter === "Stories" ? "#1D5352" : ""
					}
				}}
			/>

			<Chip
				onClick={() => filter !== "Q&A" ? addFilter({fil: "Q&A"}) : addFilter({fil: "Both"})}
				label="Q&A"
				sx={{
					display: questions.length > 0 ? "flex" : "none",
					border: filter === "Q&A" ? "1px solid #05D9D7" : "",
					backgroundColor: filter === "Q&A" ? "#1D5352" : "",
					color: filter === "Q&A" ? "#05D9D7" : "",
					px: [0.3, 0.3, 1],
					fontSize: ["12px", "12px", "15px"],
					":hover": {
						backgroundColor: filter === "Q&A" ? "#1D5352" : ""
					}
				}}
			/>
		</Box>
	);
};

