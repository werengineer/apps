import { getEngineer } from "@cookies";
import { Close } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { Avatar, Box, IconButton, Typography } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";

export const QuestionHeader = ({ loading, setOpen, handleSubmit }) => {
	const engineer = getEngineer();
	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				flexDirection: ["row-reverse", "row"]
			}}
		>
			<Box
				sx={{
					display: ["none", "none", "flex"],
					justifyContent: "space-between",
					alignItems: "center",
					gap: 2
				}}
			>
				<Avatar src={engineer?.avatar} />
				<Typography>{engineer?.name}</Typography>
			</Box>

			<Box
				sx={{
					display: ["flex", "flex", "none"]
				}}
			>
				<LoadingButton
					loading={loading}
					sx={{
						backgroundColor: "grey",
						border: "1px solid grey",
						px: "20px",
						borderRadius: "30px"
					}}
					onClick={handleSubmit}
				>
					Post Question
				</LoadingButton>
			</Box>

			<IconButton onClick={() => setOpen(false)}>
				<Close
					sx={{
						color: "#05D9D7"
					}}
				/>
			</IconButton>
		</Box>
	);
};

QuestionHeader.propTypes = {
	setOpen: PropTypes.any,
	handleSubmit: PropTypes.any,
	loading: PropTypes.any
};
