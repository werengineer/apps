import { Menu, MenuItem } from "@mui/material";
import React from "react";
import { PropTypes } from "prop-types";

export const ReactionDrawer = ({ reactionOpen, reactionDrawer, setReactionDrawer }) => {
	return (
		<Menu
			id="reaction-drawer-main"
			open={reactionOpen}
			anchorEl={reactionDrawer}
			onClose={() => setReactionDrawer(null)}
			MenuListProps={{
				"aria-labelledby": "reaction-drawer"
			}}
		>
			<MenuItem>Like</MenuItem>

			<MenuItem>Love</MenuItem>

			<MenuItem>Laugh</MenuItem>
		</Menu>
	);
};

ReactionDrawer.propTypes = {
	reactionOpen: PropTypes.any,
	reactionDrawer: PropTypes.any,
	setReactionDrawer: PropTypes.any
};
