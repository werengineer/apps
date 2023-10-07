import {
	TimelineConnector,
	TimelineContent,
	TimelineDot,
	TimelineItem,
	TimelineSeparator
} from "@mui/lab";
import { Box, Button, Card, CardContent, IconButton, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import { Animate } from "react-simple-animate";
import { Close } from "@mui/icons-material";
import ReactCardFlip from "react-card-flip";
import PropTypes from "prop-types";
import { ReactionButtons } from "@components/CalendarNTimeline/ReactionButtons";

export const DTimelineItem = ({
	idx,
	elRefs,
	setActive,
	active,
	e,
	activeReaction,
	setActiveReaction,
	reaction,
	react,
	monthId,
	date,
	id
}) => {
	const [Flip, setFlip] = useState(false);
	const [open, setOpen] = useState(false);

	return (
		<TimelineItem
			key={idx}
			sx={{
				display: "flex"
			}}
		>
			<TimelineSeparator
				sx={{
					height: "35vh"
				}}
			>
				<TimelineConnector
					sx={{
						backgroundColor: "#50D9D7"
					}}
				/>
				<>
					<TimelineDot
						sx={{
							width: "20px",
							height: "20px",
							margin: "0",
							backgroundColor: "#50D9D7",
							cursor: "pointer",
							position: "relative"
						}}
					>
						<Button
							id={idx}
							ref={elRefs[idx]}
							className="button-handler"
							sx={{
								position: "absolute",
								right: "-155%",
								bottom: "-6vh",
								padding: "0px",
								width: "10px",
								height: "60px",
								marginBottom: "20px",
								borderRadius: "50%",
								zIndex: "999"
							}}
							onClick={() =>
								setActive({
									...active,
									[idx]: !active[idx]
								})
							}
						></Button>
					</TimelineDot>
				</>
			</TimelineSeparator>
			<TimelineContent
				sx={{
					display: "flex",
					flexDirection: "row-reverse",
					position: "relative",
					height: "17vh",
					minHeight: ["20vh", "65%"]
				}}
			>
				<Animate play={active[idx]} start={{ opacity: 0 }} end={{ opacity: 1 }}>
					<>
						<Box
							position={"absolute"}
							zIndex={"99"}
							top="32.1vh"
							left={idx % 2 === 0 ? "-1vw" : "35.5vw"}
							display={`${active[idx] ? "flex" : "none"}`}
							flexDirection={idx % 2 === 0 ? "row-reverse" : "row"}
							alignItems={"center"}
						>
							<Box
								width="1.5vw"
								height="1.5vw"
								sx={{
									backgroundColor: "#50D9D7",
									borderRadius: "50%"
								}}
							></Box>
							<Box
								sx={{
									height: "0.5vh",
									width: "11.5vw",
									backgroundColor: "#50D9D7"
								}}
							></Box>
						</Box>
						<Box
							sx={{
								width: ["80%", "70%"],
								display: `${active[idx] ? "flex" : "none"}`,
								position: "absolute",
								right: `${idx % 2 === 0 ? "7%" : "24.5%"}`,
								top: "16.6vh",
								flexDirection: "column"
							}}
						>
							<ReactCardFlip
								isFlipped={Flip}
								flipDirection="vertical"
								flipSpeedBackToFront={0.8}
								flipSpeedFrontToBack={0.8}
							>
								<Card
									variant="outined"
									sx={{
										paddingX: "1.25vw",
										paddingY: "1vh",
										border: "0.5px solid #50D9D7",
										backgroundColor: "#212121"
									}}
									onMouseEnter={() => setFlip(true)}
								>
									<CardContent
										sx={{
											textAlign: "left",
											display: "flex",
											flexDirection: "column",
											gap: "10px"
										}}
									>
										<Typography
											sx={{
												fontSize: "25px",
												color: "#05D9D7",
												width: "27vw",
												overflow: "hidden"
											}}
										>
											{e?.day}
										</Typography>
										<Typography
											sx={{
												fontSize: "22px",
												color: "#05D9D7"
											}}
										>
											{e?.date} {e?.mon}
										</Typography>
										
									</CardContent>
								</Card>
								{/* Card 2 */}
								<Card
									variant="outined"
									sx={{
										paddingX: "1.25vw",
										paddingY: "1vh",
										border: "0.5px solid #50D9D7",
										backgroundColor: "#212121"
									}}
									onMouseLeave={() => setFlip(false)}
								>
									<CardContent
										sx={{
											textAlign: "left",
											display: "flex",
											flexDirection: "column",
											gap: "10px"
										}}
									>
										<Typography
											sx={{
												fontSize: "25px",
												color: "#05D9D7",
												width: "27vw",
												overflow: "hidden"
											}}
										>
											{e?.day}
										</Typography>
										<Typography
											sx={{
												fontSize: "22px",
												color: "#05D9D7"
											}}
										>
											{e?.date} {e?.mon}
										</Typography>
										<Typography
											sx={{
												fontSize: "14px"
											}}
										>
											{e?.desc}
										</Typography>
										{/* <ReactionButtons
											index={idx}
											activeReaction={activeReaction}
											setActiveReaction={setActiveReaction}
											reaction={reaction}
											react={react}
											monthId={monthId}
											date={date}
											id={id}
										/> */}
									</CardContent>
								</Card>
							</ReactCardFlip>
						</Box>
					</>
				</Animate>
			</TimelineContent>

			<Modal
				open={open}
				onClose={() => setOpen(false)}
				sx={{
					display: ["none", "flex"],
					backgroundColor: "rgba(0, 0, 0, 0.7)",
					justifyContent: "center",
					alignItems: "center"
				}}
			>
				<Box
					maxWidth={["600px"]}
					sx={{
						border: "1px solid #05D9D7",
						backgroundColor: "#212121",
						borderRadius: "20px",
						px: "50px",
						py: "30px"
					}}
				>
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between"
						}}
					>
						<Box></Box>
						<IconButton
							sx={{
								color: "#05D9D7"
							}}
							onClick={() => setOpen(false)}
						>
							<Close />
						</IconButton>
					</Box>
					<Box
						sx={{
							display: "flex",
							gap: "2vh",
							flexDirection: "column"
						}}
					>
						<Typography
							sx={{
								fontSize: "25px",
								color: "#05D9D7"
							}}
						>
							{e.date} {e.mon}
						</Typography>
						<Typography
							sx={{
								fontSize: "30px",
								color: "#05D9D7"
							}}
						>
							{e.day}
						</Typography>
						<Typography>{e.desc}</Typography>
					</Box>
					{/* <ReactionButtons
						index={idx}
						activeReaction={activeReaction}
						setActiveReaction={setActiveReaction}
						reaction={reaction}
						react={react}
						monthId={monthId}
						date={date}
						id={id}
					/> */}
				</Box>
			</Modal>
		</TimelineItem>
	);
};

DTimelineItem.propTypes = {
	idx: PropTypes.any,
	elRefs: PropTypes.any,
	setActive: PropTypes.any,
	active: PropTypes.any,
	e: PropTypes.any,
	event: PropTypes.any,
	activeReaction: PropTypes.any,
	setActiveReaction: PropTypes.any,
	reaction: PropTypes.any,
	react: PropTypes.any,
	monthId: PropTypes.any,
	date: PropTypes.any,
	id: PropTypes.any
};
