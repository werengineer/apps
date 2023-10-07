"use client";
import { searchAll } from "@api";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { EngineerProfile } from "./EngineerProfile";

export const Search = ({ search }) => {
	console.log(search);
	const [searchedData, setSearchedData] = useState([]);
	useEffect(() => {
		async function searching() {
			try {
				const data = await searchAll(search.q);
				console.log(data);
				setSearchedData(data);
			} catch (error) {
				console.error(error);
			}
		}
		searching();
	}, [search.q]);
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: ["center", "normal", "normal"],
				gap: "4vh",
				pl: [0, 2, 3],
				mb: 3
			}}
		>
			{searchedData.length !== 0 ? (
				searchedData?.map((s, i) => (
					<EngineerProfile
						key={i}
						profile={s}
					/>
				))
			) : (
				<Typography textAlign={"center"} fontSize={"20px"} mx={"auto"} my={20}>
					Oops :&#40;
					<br /> No result with this query.
				</Typography>
			)}
			<></>
		</Box>
	);
};

Search.propTypes = {
	search: PropTypes.any // search params object with keys as
};
