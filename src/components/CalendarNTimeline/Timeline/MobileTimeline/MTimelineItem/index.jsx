import {
	TimelineConnector,
	TimelineContent,
	TimelineDot,
	TimelineItem,
	TimelineSeparator
} from "@mui/lab";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import { Animate } from "react-simple-animate";

export const MTimelineItem = ({ idx, elRefs, active, setActive, event, setOpen, e }) => {
	return (
		<TimelineItem
			key={idx}
			sx={{
				display: "flex",
				height: "20vh"
			}}
		>
			<TimelineSeparator
				sx={{
					zIndex: "99"
				}}
			>
				<TimelineConnector
					sx={{
						backgroundColor: "#50D9D7",
						marginLeft: "7.5vw"
					}}
				/>
				<TimelineDot
					sx={{
						padding: 0,
						height: "15px",
						width: "15px",
						marginLeft: "7vw",
						marginY: "0",
						backgroundColor: "#50D9D7",
						position: "relative"
					}}
				>
					<Button
						id={idx}
						ref={elRefs[idx]}
						className="button-handler"
						sx={{
							position: "absolute",
							right: "-5vw",
							height: "7vh",
							borderRadius: "50%",
							bottom: "-2vh",
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
			</TimelineSeparator>
			<TimelineContent
				sx={{
					position: "relative"
				}}
			>
				<Animate play={active[idx]} start={{ opacity: 0 }} end={{ opacity: 1 }}>
					<>
						<Card
							variant="outined"
							sx={{
								borderTop: "1px solid #50D9D7",
								borderRadius: "0px",
								borderBottom: "1px solid #50D9D7",
								width: "85vw",
								backgroundColor: "#212121",
								display: `${active[idx] ? "flex" : "none"}`,
								position: "absolute",
								right: "-75vw",
								top: "8vh"
							}}
							onClick={() => {
								event.day = e.day;
								event.desc = e.desc;
								event.date = e.date;
								event.mon = e.mon;
								setOpen(true);
							}}
						>
							<CardContent>
								<Box
									sx={{
										display: "flex",
										flexDirection: "column",
										maxHeight: "15vh",
										gap: "2px"
									}}
								>
									<Typography
										sx={{
											fontSize: "14px",
											color: "#05D9D7"
										}}
									>
										{e.date} {e.mon}
									</Typography>
									<Typography
										sx={{
											fontSize: "14px",
											color: "#05D9D7"
										}}
									>
										{e.day}
									</Typography>
									<Typography
										sx={{
											fontSize: "10px"
										}}
									>
										{e.desc.slice(0, 160)}...
									</Typography>
								</Box>
							</CardContent>
						</Card>
					</>
				</Animate>
			</TimelineContent>
		</TimelineItem>
	);
};

MTimelineItem.propTypes = {
	idx: PropTypes.any,
	elRefs: PropTypes.any,
	active: PropTypes.any,
	setActive: PropTypes.any,
	event: PropTypes.any,
	setOpen: PropTypes.any,
	e: PropTypes.any
};
