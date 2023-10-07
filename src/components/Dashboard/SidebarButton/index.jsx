"use client";
import {
	Box,
	Fade,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Tooltip
} from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

export const SidebarButton = ({ Icon, title, drawerTab, handleListItemClick, open }) => {
	const [bg, setBg] = useState(false);

	const handleListItemHover = () => {
		setBg(!bg);
	};

	return (
		<Tooltip title={title} placement="right">
			<ListItem
				disablePadding
				sx={{
					display: "relative",
					p: 1
				}}
			>
				{drawerTab?.includes(title) && (
					<Box
						sx={{
							boxShadow: open
								? "0px 0px 70px 30px rgba(5,217,215,0.94)"
								: "0px 0px 50px 12px rgba(5,217,215,0.94)",
							width: "40px",
							position: "absolute",
							left: !open ? "20%" : "25%",
							top: "40%",
							zIndex: -1
						}}
					></Box>
				)}

				<Fade in={bg && !drawerTab?.includes(title)}>
					<Box
						sx={{
							display: bg ? "flex" : "none",
							boxShadow: open
								? "0px 0px 70px 50px rgba(29, 83, 82, 0.94)"
								: "0px 0px 50px 40px rgba(29, 83, 82, 0.94)",
							width: "40px",
							position: "absolute",
							left: !open ? "20%" : "25%",
							top: "40%",
							zIndex: -1
						}}
					></Box>
				</Fade>

				<ListItemButton
					sx={{
						borderRadius: open ? "30px" : "30px",
						minHeight: 48,
						justifyContent: open ? "initial" : "center",
						px: 2.5,
						":hover": {
							backgroundColor: "transparent"
						}
					}}
					onClick={() => handleListItemClick(title)}
					onMouseEnter={handleListItemHover}
					onMouseLeave={handleListItemHover}
				>
					{Icon && (
						<ListItemIcon
							sx={{
								minWidth: 0,
								mr: open ? 3 : 0,
								justifyContent: "center",
								color: drawerTab === title || bg ? "#05D9D7" : "#1D5352"
							}}
						>
							{Icon}
						</ListItemIcon>
					)}
					<ListItemText
						sx={{
							opacity: open ? 1 : 0,
							color: drawerTab === title || bg ? "#05D9D7" : "#1D5352"
						}}
					>
						{title}
					</ListItemText>
				</ListItemButton>
			</ListItem>
		</Tooltip>
	);
};

SidebarButton.propTypes = {
	Icon: PropTypes.any,
	title: PropTypes.any,
	drawerTab: PropTypes.any,
	handleListItemClick: PropTypes.any,
	open: PropTypes.any
};
