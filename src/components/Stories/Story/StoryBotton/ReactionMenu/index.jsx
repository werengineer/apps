import { Box, Menu } from "@mui/material";
import React from "react";
import { MItem } from "./MItem";
import { PropTypes } from "prop-types";

export const ReactionMenu = ({ anchorEl, setAnchorEl, handleReaction }) => {
	const handleReact = ({ rID }) => {
		handleReaction({ rID: rID });
		setAnchorEl(null);
	};

	return (
		<Menu
			id="reaction-menu"
			aria-labelledby="reaction-button"
			anchorEl={anchorEl}
			open={Boolean(anchorEl)}
			onClose={() => setAnchorEl(null)}
			anchorOrigin={{
				vertical: "top",
				horizontal: "left"
			}}
			transformOrigin={{
				vertical: "top",
				horizontal: "left"
			}}
			sx={{
				mt: "-65px"
			}}
			PaperProps={{
				sx: {
					backgroundColor: "black",
					borderRadius: "50px",
					px: "10px"
				}
			}}
		>
			<Box
				sx={{
					display: "flex",
					gap: "10px"
				}}
			>
				<MItem
					title={"Idea"}
					rID={0}
					img={"/icons/questionsReaction/1.svg"}
					handleReact={handleReact}
				/>

				<MItem
					title={"Celebrate"}
					rID={1}
					img={"/icons/questionsReaction/2.svg"}
					handleReact={handleReact}
				/>

				<MItem
					title={"Mindblown"}
					rID={2}
					img={"/icons/questionsReaction/3.svg"}
					handleReact={handleReact}
				/>

				<MItem
					title="Funny"
					rID={3}
					img={"/icons/questionsReaction/4.svg"}
					handleReact={handleReact}
				/>

				<MItem
					title={"Like"}
					rID={4}
					img={"/icons/questionsReaction/5.svg"}
					handleReact={handleReact}
				/>

				<MItem
					title="Love"
					rID={5}
					img={"/icons/questionsReaction/6.svg"}
					handleReact={handleReact}
				/>
			</Box>
		</Menu>
	);
};

ReactionMenu.propTypes = {
	anchorEl: PropTypes.any,
	setAnchorEl: PropTypes.any,
	handleReaction: PropTypes.any
};
