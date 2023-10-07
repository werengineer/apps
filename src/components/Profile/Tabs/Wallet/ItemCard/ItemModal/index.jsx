import { Box, Button, IconButton, List, ListItem, Modal, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Close } from "@mui/icons-material";
import { FullScreenModal } from "@components/Global/Modals/ViewImageModal";
import Image from "next/image";
import Carousel from "react-material-ui-carousel";

export const ItemModal = ({ open, setOpen, data }) => {
	const [openn, setOpenn] = useState(false);
	console.log(data);
	return (
		<Modal
			open={open}
			sx={{
				width: "100%",
				height: "100%",
				backgroundColor: "rgba(0, 0, 0, 0.5)",
				display: "flex",
				justifyContent: "center",
				alignItems: "center"
			}}
			onClose={() => setOpen(false)}
		>
			<Box
				sx={{
					width: ["90%", "70%", "50%"],
					height: ["85%", "80%"],
					backgroundColor: "#212121",
					borderRadius: "20px",
					p: 3,
					border: "1px solid #05D9D7",
					position: "relative",
					overflowY: "scroll"
				}}
			>
				<Box
					position={"fixed"}
					right={["10%", "20%", "26%"]}
					mb={3}
					display={"flex"}
					justifyContent={"flex-end"}
				>
					<IconButton onClick={() => setOpen(false)}>
						<Close />
					</IconButton>
				</Box>
				<Stack spacing={2}>
					<Carousel
						sx={{
							display: "flex",
							flexDirection: "column",
							maxHeight: "200px",
							justifyContent: "center",
							alignItems: "center",
							width: "50%"
						}}
						autoPlay={true}
					>
						{data?.image?.map((e, i) => (
							<div key={i}>
								<Box
									sx={{
										width: ["120px", "200px"],
										height: ["120px", "200px"],
										position: "relative",
										cursor: "pointer",
										ml: ["15px"]
									}}
									onClick={() => {
										setOpenn(true);
									}}
								>
									<Box component={"img"} src={e} height={"100%"} alt="Competitions" />
								</Box>
								<FullScreenModal open={openn} setOpen={setOpenn} imageUrl={e} />
							</div>
						))}
					</Carousel>
					<Typography fontSize="24px">{data.name}</Typography>
					<Stack spacing={1}>
						<Typography fontSize="15px" sx={{ textDecoration: "underline" }}>
							Description
						</Typography>
						<Typography fontSize="15px">{data.description}</Typography>
					</Stack>
					<Stack spacing={1}>
						<Typography fontSize="15px" sx={{ textDecoration: "underline" }}>
							Benefits
						</Typography>
						<List component="ul">
							{data?.benefits?.map((b, i) => (
								<ListItem key={i}>
									<Typography fontSize="15px">{b}</Typography>
								</ListItem>
							))}
						</List>
					</Stack>
					<Stack spacing={1}>
						<Typography fontSize="15px" sx={{ textDecoration: "underline" }}>
							How To
						</Typography>
						<List component="ul">
							{data?.howTo?.map((b, i) => (
								<ListItem key={i}>
									<Typography fontSize="15px">{b}</Typography>
								</ListItem>
							))}
						</List>
					</Stack>
					<Button sx={{ position: "fixed", bottom: "15%", right: "26%" }} variant="contained">
					{data?.apply?.includes("forms") ? "Apply" : "Claim "}
					</Button>
				</Stack>
			</Box>
		</Modal>
	);
};

ItemModal.propTypes = {
	open: PropTypes.any,
	setOpen: PropTypes.any,
	data: PropTypes.any
};
