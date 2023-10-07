import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React, { useContext } from "react";
import { TaskBlock } from "../../TaskBlock";
import { PuzzleContext } from "@context/puzzle";
import PropTypes from "prop-types";

export const Task = ({ setOpen, setTaskData }) => {
	const puzzleContext = useContext(PuzzleContext);
	const { blockModalData } = puzzleContext;

	return (
		<Box
			sx={{
				flex: 1
			}}
		>
			<Typography fontSize={20} fontWeight={500} mb={2}>
				Tasks
			</Typography>
			<Box
				display={["none", "flex"]}
				overflow={"scroll"}
				flexDirection={"column"}
				gap={2}
				sx={{
					height: "355px",
					overflowY: "scroll"
				}}
			>
				{blockModalData?.tasks?.map((t, i) => (
					<TaskBlock key={i} setOpen={setOpen} data={t} setTaskData={setTaskData} />
				))}
			</Box>

			<Box display={["flex", "none"]} flexDirection={"column"} gap={2}>
				{blockModalData?.tasks?.map((t, i) => (
					<TaskBlock key={i} setOpen={setOpen} data={t} setTaskData={setTaskData} />
				))}
			</Box>

			<Typography
				sx={{
					display: blockModalData?.tasks?.length > 3 ? "flex" : "none",
					mt: "10px",
					textAlign: "center",
					color: "grey",
					fontSize: "14px"
				}}
			>
				Scroll for more
			</Typography>
		</Box>
	);
};

Task.propTypes = {
	setOpen: PropTypes.any,
	setTaskData: PropTypes.any
};
