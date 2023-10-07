"use client";

import Box from "@mui/material/Box";
import React from "react";
import PropTypes from "prop-types";
import { OneListState } from "@context/oneList";
import { MainListPage } from "@components/ListPage";

const Index = ({ params }) => {
	return (
		<>
			<Box
				display={"flex"}
				sx={{
					mt: 8,
					ml: ["auto", 8],
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
					<OneListState>
						<MainListPage />
					</OneListState>
				</Box>
			</Box>
		</>
	);
};

export default Index;

Index.propTypes = {
	params: PropTypes.any
};
