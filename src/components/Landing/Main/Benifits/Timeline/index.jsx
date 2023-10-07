import {
	Timeline,
	TimelineConnector,
	TimelineContent,
	TimelineDot,
	TimelineItem,
	TimelineSeparator
} from "@mui/lab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";

export const BenifitsTimeline = () => {
	const allBenifits = [
		"Guidance from expert engineers",
		"Variety of Career opportunities",
		"Industry Trends and insights",
		"Best Career opportunities",
		"All type of exam material",
		"Best Problem solutions",
		"100+ Engineering resources",
		"Connection With Like Minded People",
		"Competitions & Hackathons",
		"Practical Learning"
	];

	return (
		<Box>
			<Timeline sx={{ display: ["none", "flex"] }} position={"alternate"}>
				{allBenifits.map((benifit, idx) => (
					<TimelineItem key={idx}>
						<TimelineSeparator>
							<TimelineDot
								variant="outline"
								sx={{
									width: ["60px"],
									height: "60px",
									margin: "0",
									borderColor: "#50D9D7",
									cursor: "pointer",
									position: "relative",
									alignItems: "center",
									justifyContent: "center"
								}}
							>
								<Typography>{idx + 1}</Typography>
							</TimelineDot>
							{idx !== 9 && (
								<TimelineConnector
									sx={{
										backgroundColor: "#50D9D7",
										width: "2px",
										height: "100px"
									}}
								/>
							)}
						</TimelineSeparator>
						<TimelineContent width={["900px", " 670px", "900px"]} p={0} m={0}>
							<Typography
								sx={{
									borderTop: "2px solid #50D9D7",
									borderBottom: "2px solid #50D9D7",
									borderLeft: idx % 2 !== 0 && "2px solid #50D9D7",
									borderRight: idx % 2 === 0 && "2px solid #50D9D7",
									borderStartEndRadius: idx % 2 === 0 ? 100 : 0,
									borderStartStartRadius: idx % 2 === 0 ? 0 : 100,
									borderEndEndRadius: idx % 2 === 0 ? 100 : 0,
									borderEndStartRadius: idx % 2 === 0 ? 0 : 100,
									padding: "13px",
									// width:[ 'auto', '80%'   ,'auto'],
									mt: -0.5,
									ml: idx % 2 === 0 ? -4 : 0,
									mr: idx % 2 === 0 ? 0 : -4,
									alignSelf: "start",
									pr: "30px",
									pl: "30px"
								}}
							>
								{benifit}
							</Typography>
						</TimelineContent>
					</TimelineItem>
				))}
			</Timeline>

			<Timeline sx={{ display: ["flex", "none"], marginRight: "70vw" }} position={"right"}>
				{allBenifits.map((benifit, idx) => (
					<TimelineItem key={idx}>
						<TimelineSeparator>
							<TimelineDot
								variant="outline"
								sx={{
									width: "45px",
									height: "45px",
									borderColor: "#50D9D7",
									cursor: "pointer",
									position: "relative",
									alignItems: "center",
									justifyContent: "center",
									margin: 0
								}}
							>
								<Typography>{idx + 1}</Typography>
							</TimelineDot>
							{idx !== 9 && (
								<TimelineConnector
									sx={{
										backgroundColor: "#50D9D7",
										width: "2px",
										height: "100px"
									}}
								/>
							)}
						</TimelineSeparator>
						<TimelineContent width={"125vw"} p={0} m={0}>
							<Typography
								sx={{
									borderTop: "2px solid #50D9D7",
									borderBottom: "2px solid #50D9D7",
									borderRight: "2px solid #50D9D7",
									borderStartEndRadius: "30px",
									borderEndEndRadius: "30px",
									padding: "13px",
									fontSize: "10px",
									// width: ['auto', '80%', 'auto'],
									mt: -0.7,
									ml: -4,
									alignSelf: "start",
									pr: "30px",
									pl: "30px"
								}}
							>
								{benifit}
							</Typography>
						</TimelineContent>
					</TimelineItem>
				))}
			</Timeline>

			<Timeline sx={{ display: ["flex", "none"], marginRight: "70vw" }} position={"right"}>
				{allBenifits.map((benifit, idx) => (
					<TimelineItem key={idx}>
						<TimelineSeparator>
							<TimelineDot
								variant="outline"
								sx={{
									width: "45px",
									height: "45px",
									borderColor: "#50D9D7",
									cursor: "pointer",
									position: "relative",
									alignItems: "center",
									justifyContent: "center",
									margin: 0
								}}
							>
								<Typography>{idx + 1}</Typography>
							</TimelineDot>
							{idx !== 9 && (
								<TimelineConnector
									sx={{
										backgroundColor: "#50D9D7",
										width: "2px",
										height: "100px"
									}}
								/>
							)}
						</TimelineSeparator>
						<TimelineContent width={"125vw"} p={0} m={0}>
							<Typography
								sx={{
									borderTop: "2px solid #50D9D7",
									borderBottom: "2px solid #50D9D7",
									borderRight: "2px solid #50D9D7",
									borderStartEndRadius: "30px",
									borderEndEndRadius: "30px",
									padding: "13px",
									fontSize: "10px",
									mt: -0.7,
									ml: -4,
									alignSelf: "start",
									pr: "30px",
									pl: "30px"
								}}
							>
								{benifit}
							</Typography>
						</TimelineContent>
					</TimelineItem>
				))}
			</Timeline>
		</Box>
	);
};
