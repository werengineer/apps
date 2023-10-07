import {
	TimelineConnector,
	TimelineContent,
	TimelineDot,
	TimelineItem,
	TimelineSeparator
} from "@mui/lab";
import { Button } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";

export const DTimelineButton = ({ idx, elRefs, e }) => {
	return (
		<TimelineItem
			sx={{
				display: "flex",
				height: "25vh",
				marginLeft: ["2vw", "0"]
			}}
			key={idx}
		>
			<TimelineSeparator>
				<TimelineConnector
					sx={{
						backgroundColor: "#50D9D7"
					}}
				/>
				<TimelineDot
					sx={{
						width: "50px",
						height: "50px",
						margin: "0",
						backgroundColor: "#212121",
						border: "1px solid #05D9D7"
					}}
				>
					<Button
						sx={{
							marginTop: ["0.4vh", "0.1vh"],
							color: "#50D9D7!important",
							fontSize: "16px",
							textEmphasisColor: "red",
							paddingRight: ["7vw", "2vw"]
						}}
						className="button-handler"
						onClick={() => console.log("Yup")}
						ref={elRefs[idx]}
						id={idx}
					>
						{e?.month.slice(0, 3)}
					</Button>
				</TimelineDot>
			</TimelineSeparator>
			<TimelineContent
				sx={{
					display: "flex",
					flexDirection: "row-reverse"
				}}
			></TimelineContent>
		</TimelineItem>
	);
};

DTimelineButton.propTypes = {
	idx: PropTypes.any,
	elRefs: PropTypes.any,
	e: PropTypes.any
};
