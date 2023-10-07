import { Info } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { ItemModal } from "./ItemModal";

const ItemCard = ({ data }) => {
	const [open, setOpen] = useState(false);
	return (
		<Box
			sx={{
				display: "flex",
				width: ["100%", "90%"],
				flexDirection: "column",
				alignItems: "center",
				textAlign: "center",
				backgroundColor: "#212121",
				borderRadius: 3,
				gap: 3,
				p: 3,
				border: "1px solid #50D9D7"
			}}
		>
			<Box
				sx={{
					display: "flex",
					width: "100%",
					justifyContent: "flex-end"
				}}
			>
				<Info
					sx={{
						display: ["none", "flex"],
						color: "grey"
					}}
				/>
			</Box>
			<Box component={"img"} width="150px" src={data.image[0]} alt="Competitions" />
			<Typography fontSize={"20px"}>{data.name}</Typography>
			<Typography fontSize={"15px"}>{data.description}</Typography>
			<Button
				onClick={() => setOpen(true)}
				sx={{
					display: "flex",
					width: ["40vw", "12vw"],
					height: "6vh",
					backgroundColor: "#fff",
					fontWeight: 400,
					borderRadius: 10,
					color: "black"
				}}
			>
				{data?.apply?.includes("forms") ? "Apply" : "Burn Coins"}
			</Button>
			<Typography color={"gray"} mt={-1} fontSize={12}>
				Required (+10K WAE Coins)
			</Typography>
			<ItemModal open={open} setOpen={setOpen} data={data} />
		</Box>
	);
};

export default ItemCard;

ItemCard.propTypes = {
	data: PropTypes.any
};
