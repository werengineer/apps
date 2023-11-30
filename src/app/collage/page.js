"use client";
import { Collage } from "@components/Collage";
import Box from "@mui/material/Box";
import React, { useEffect } from "react";

const CollagePage = () => {
	return (
		<>
			<Box
				display={"flex"}
				sx={{
					mt: [8, 10],
					ml: ["auto", 9],
					maxWidth: "100vw",
					display: "flex",
					overflowY: "hidden"
				}}
			>
				<Box
					sx={{
						width: ["100%", "95%", "75%"],
						px: [2, 0, 0]
					}}
				>
					<Collage />
				</Box>
			</Box>
		</>
	);ḍ
};

export default CollagePage;
