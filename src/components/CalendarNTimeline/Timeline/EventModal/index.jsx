import { Box, IconButton, Modal, Typography } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import { Close } from "@mui/icons-material";
import { ReactionButtons } from "@components/CalendarNTimeline/ReactionButtons";

export const EventModal = ({
	index,
	activeReaction,
	setActiveReaction,
	open,
	setOpen,
	event,
	setEvent,
	reaction,
	react,
	monthId,
	date,
	id
}) => (
	<Modal
		open={open}
		onClose={() => {
			setOpen(false);
			setEvent({});
		}}
		sx={{
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			overflowY: "scroll",
			paddingTop: ["10vh", "0vh"],
			backdropFilter: "blur(7px)",
			position: "fixed"
		}}
	>
		{/* <Fade> */}
		<Box
			sx={{
				width: ["100vw", "60vw"],
				zIndex: "999",
				display: "flex",
				flexDirection: "column",
				paddingX: "3vw",
				gap: "5vh"
			}}
		>
			<IconButton
				sx={{
					display: ["flex", "flex"],
					backgroundColor: "white",
					position: "absolute",
					top: "0",
					right: ["3%", "0"],
					width: "40px",
					margin: "auto",
					marginBottom: ["6vh", "3vh"],
					border: "1px solid #05D9D7",
					marginTop: "2vh",
					color: "black",
					":hover": {
						color: "white"
					}
				}}
				onClick={() => {
					setOpen(false);
					setEvent({});
				}}
			>
				<Close
					sx={{
						color: "black",
						":hover": {
							color: "white"
						}
					}}
				/>
			</IconButton>
			<Box
				display={"flex"}
				flexDirection={["row"]}
				gap={"20px"}
				justifyContent={"space-evenly"}
				alignItems="center"
				marginX={"auto"}
				width={["100vw", "40vw"]}
			>
				<Box
					display={"flex"}
					flexDirection={["column-reverse", "column-reverse"]}
					gap={["2vw", "0vw"]}
					alignItems="center"
					justifyContent={"center"}
					width={["100vw", "50vw"]}
				>
					<Typography
						sx={{
							width: ["100%", "50vw"],
							textAlign: ["center"],
							color: "#05D9D7",
							display: ["flex", "flex"],
							fontSize: ["20px", "25px"],
							alignItems: "center"
						}}
					>
						{event.day}
					</Typography>
					<Typography
						sx={{
							width: ["100%", "50vw"],
							textAlign: ["center"],
							fontSize: ["20px", "30px"],
							color: "#05D9D7",
							display: ["flex", "flex"],
							alignItems: "center"
						}}
					>
						{event.date} {event.mon}
					</Typography>
				</Box>
			</Box>
			<Typography
				fontSize={["13px", "15px"]}
				textAlign="left"
				width={["90vw", "50vw"]}
				marginX="auto"
			>
				{event.desc}
			</Typography>
			{/* <ReactionButtons
				activeReaction={activeReaction}
				setActiveReaction={setActiveReaction}
				index={index}
				reaction={reaction}
				react={react}
				monthId={monthId}
				date={date}
				id={id}
			/> */}
		</Box>
	</Modal>
);

EventModal.propTypes = {
	index: PropTypes.any,
	activeReaction: PropTypes.any,
	setActiveReaction: PropTypes.any,
	open: PropTypes.any,
	setOpen: PropTypes.any,
	event: PropTypes.any,
	setEvent: PropTypes.any,
	reaction: PropTypes.any,
	react: PropTypes.any,
	monthId: PropTypes.any,
	date: PropTypes.any,
	id: PropTypes.any
};
