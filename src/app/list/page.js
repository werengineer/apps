"use client";

import { MainList } from "@components/List";
import { ListState } from "@context/list";
import Box from "@mui/material/Box";
import React from "react";

const List = () => {
	return (
		<>
			<Box
				display={"flex"}
				sx={{
					mt: [8, 9],
					ml: ["auto", 8],
					maxWidth: "100vw",
					display: "flex",
					overflowY: "hidden"
				}}
			>
				<Box
					sx={{
						width: ["100%", "100%", "75%"],
						overflowX: "hidden"
					}}
				>
					<ListState>
						<MainList />
					</ListState>
				</Box>
			</Box>
		</>
	);
};

export default List;
