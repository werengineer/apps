import Box from "@mui/material/Box";
import React, { useEffect, useState } from "react";
import { Row1 } from "./Row1";
import { Row2 } from "./Row2";
import { Row3 } from "./Row3";
import { Row4 } from "./Row4";
import PropTypes from "prop-types";

export const DesktopPuzzle = ({ content, handlePuzzleClick }) => {
	const [opacityIndex, setOpacityIndex] = useState(0);

	useEffect(() => {
		
		for (var i = 0; i < content?.length; i++) {
			if (content[i]?.status === "In Progress") {
				setOpacityIndex(i + 1);
				break;
			}
		}
	}, []);

	return (
		<Box
			display={["none", "flex"]}
			position={"relative"}
			width={"951px"}
			height={"951px"}
			overflow={"scroll"}
			flexDirection={"column"}
		>
			<Row1
			/>
			<Row2
			/>
			<Row3
			/>
			<Row4
			/>
		</Box>
	);
};

DesktopPuzzle.propTypes = {
	content: PropTypes.any,
	handlePuzzleClick: PropTypes.any
};
