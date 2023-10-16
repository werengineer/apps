"use client";
import { Search } from "@components";
import Box from "@mui/material/Box";
import { useSearchParams } from "next/navigation";
import PropTypes from "prop-types";
import React from "react";

export const dynamic = "force-dynamic";

export default function SearchPage() {
	
	const searchParams = useSearchParams();
	return (
		<Box
			display={"flex"}
			sx={{
				mt: [8, 9],
				ml: ["auto", 10],
				maxWidth: "100vw",
				display: "flex",
				overflowY: "hidden"
			}}
		>
			<Box
				sx={{
					width: ["100%", "100%", "75%"],
					height: ["92vh", "89vh"],
					overflowY: "scroll",
					px: [2, 0],
					borderRight: ["none", "1px solid gray"]
				}}
			>
				<Search search={searchParams.get("q")} />
			</Box>
		</Box>
	);
}

SearchPage.propTypes = {
	searchParams: PropTypes.any // search params object with keys as
};
