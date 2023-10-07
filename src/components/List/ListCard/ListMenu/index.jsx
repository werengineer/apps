import { Box, Button, Menu, MenuList } from "@mui/material";
import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Delete } from "@mui/icons-material";
import { ListContext } from "@context/list";

const ListMenu = ({ anchorEl, handleClose, id }) => {
	const listContext = useContext(ListContext);
	const { deleteList } = listContext;

	return (
		<Menu
			id="demo-positioned-menu"
			aria-labelledby="demo-positioned-button"
			anchorEl={anchorEl}
			open={Boolean(anchorEl)}
			onClose={handleClose}
			anchorOrigin={{
				vertical: "top",
				horizontal: "left"
			}}
			transformOrigin={{
				vertical: "top",
				horizontal: "left"
			}}
			PaperProps={{
				sx: {
					backgroundColor: "rgba(0, 0, 0, 1)",
					px: "20px"
				}
			}}
			sx={{
				ml: ["-10px", "-2%",  "-7%"],
				p: "0px"
			}}
		>
			<MenuList>
				<Button
					sx={{
						fontSize: "12px",
						display: "flex",
						gap: "10px",
						borderRadius: "20px",
						px: "10px"
					}}
					onClick={() => {deleteList({ id: id }); handleClose();}}
				>
					<Delete />
					Delete
				</Button>
			</MenuList>
		</Menu>
	);
};

export default ListMenu;
ListMenu.propTypes = {
	anchorEl: PropTypes.any,
	handleClose: PropTypes.any,
	id: PropTypes.string
};
