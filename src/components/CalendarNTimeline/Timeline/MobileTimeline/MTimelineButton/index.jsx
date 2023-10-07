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

export const MTimelineButton = ({ idx, elRefs, e }) => {
	return (
		<TimelineItem
			sx={{
				display: "flex",
				height: "25vh"
			}}
			key={idx}
		>
			<TimelineSeparator sx={{}}>
				<TimelineConnector sx={{}} />
				<TimelineDot
					sx={{
						display: "flex",
						justifyContent: "center",
						margin: "0",
						backgroundColor: "#212121",
						border: "1px solid #05D9D7"
					}}
				>
					<Button
						sx={{
							color: "#50D9D7!important",
							fontSize: "18px"
						}}
						ref={elRefs[idx]}
						id={idx}
						onClick={() => console.log("Yup!?")}
					>
						{e.month.slice(0, 3)}
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

MTimelineButton.propTypes = {
	idx: PropTypes.any,
	elRefs: PropTypes.any,
	e: PropTypes.any
};
