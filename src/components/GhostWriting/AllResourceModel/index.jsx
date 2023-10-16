import { Brush, Close, CurrencyRupee } from "@mui/icons-material";
import { Box, Button, Fade, IconButton, Modal, Stack, Typography } from "@mui/material";
import React from "react";
import { PropTypes } from "prop-types";
import DateRangeIcon from "@mui/icons-material/DateRange";
import DescriptionIcon from "@mui/icons-material/Description";
import FileOpenIcon from "@mui/icons-material/FileOpen";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ScatterPlotIcon from "@mui/icons-material/ScatterPlot";
import dateFormat, { masks } from "dateformat";
import { ConfirmButton } from "./ConfirmButton";
import { getPercentageValue } from "@hooks/getPercentValue";

export const AllResourceModel = ({ open, setOpen, data, subed }) => {
	console.log(data);
	return (
		<Modal
			open={open}
			sx={{
				height: "100vh",
				width: "100vw",
				backgroundColor: "rgba(0, 0, 0, 0.8)",
				display: ["flex"],
				overflowY: "scroll",
				justifyContent: "center",
				alignItems: "center"
			}}
		>
			<Fade in={open}>
				<Box
					sx={{
						width: ["100vw", "60vw", "40vw"],
						maxHeight: ["100vh", "55vh", "90vh"],
						border: ["0px", "1px solid #05D9D7"],
						borderRadius: ["0px", "10px"],
						px: "30px",
						py: "30px",
						display: "flex",
						flexDirection: "column",
						gap: "3vh",
						backgroundColor: "#212121",
						overflowY: "scroll"
					}}
				>
					<>
						<Box
							sx={{
								display: ["flex"],
								justifyContent: "space-between",
								alignItems: "center"
							}}
						>
							<Typography
								sx={{
									flexGrow: 1,
									fontSize: 20
								}}
							>
								GhostWriting
							</Typography>
							<IconButton onClick={() => setOpen(false)}>
								<Close
									sx={{
										color: "#05D9D7"
									}}
								/>
							</IconButton>
						</Box>
						<Box color={"gray"} display={"flex"} flexDirection={"column"} gap={1}>
							<Typography
								fontSize={15}
								sx={{
									display: "flex",
									alignItems: "center",
									gap: 1
								}}
							>
								<DescriptionIcon /> Pages:- {data.noOfPages}
							</Typography>
							<Typography
								fontSize={15}
								sx={{
									display: "flex",
									alignItems: "center",
									gap: 1
								}}
							>
								<DescriptionIcon /> College Papers:- {data.diagrams}
							</Typography>
							<Typography
								fontSize={15}
								sx={{
									display: "flex",
									alignItems: "center",
									gap: 1
								}}
							>
								<FileOpenIcon /> PaperSize:-{data.paperSize}
							</Typography>
							<Typography
								sx={{
									display: "flex",
									alignItems: "center",
									gap: 1
								}}
							>
								{" "}
								<DateRangeIcon /> Submission Date:-{" "}
								{dateFormat(data.submissionDate, "dddd, mmmm dS, yyyy, h:MM TT")}
							</Typography>
							<Typography
								sx={{
									display: "flex",
									alignItems: "center",
									gap: 1
								}}
							>
								{" "}
								<DateRangeIcon /> Last Submitted:-{" "}
								{dateFormat(data.lastSubmitted, "dddd, mmmm dS, yyyy, h:MM TT")}
							</Typography>
							<Typography
								sx={{
									display: "flex",
									alignItems: "center",
									gap: 1
								}}
							>
								{" "}
								<ScatterPlotIcon /> Diagrams:- {data.collegePapers}
							</Typography>
							<Typography
								sx={{
									display: "flex",
									alignItems: "center",
									gap: 1
								}}
							>
								{" "}
								<MenuBookIcon /> Book:- {data.book}
							</Typography>
							<Typography
								fontSize={15}
								sx={{
									display: "flex",
									alignItems: "center",
									gap: 1
								}}
							>
								{" "}
								<Brush
									sx={{
										color:
											data.inkColor === "Blue"
												? "#007FFF"
												: data.inkColor === "Black"
												? "#000000"
												: "red"
									}}
								/>{" "}
								Ink Color:- {data.inkColor}
							</Typography>
							{/* {subed?.enrolled ? (
								<Stack>
									<Typography
										fontSize={15}
										sx={{
											display: "flex",
											alignItems: "center",
											gap: 1,
											textDecoration: "line-through"
										}}
									>
										{" "}
										<CurrencyRupee /> Price:- {data.totalPrice}
									</Typography>
									<Typography
										fontSize={15}
										sx={{
											display: "flex",
											alignItems: "center",
											gap: 1
										}}
									>
										{" "}
										<CurrencyRupee /> Premium Price:-{" "}
										{getPercentageValue(20, data.totalPrice)}
									</Typography>
								</Stack>
							) : (*/}
							<Typography
								fontSize={15}
								sx={{
									display: "flex",
									alignItems: "center",
									gap: 1
								}}
							>
								{" "}
								<CurrencyRupee /> Price:- {data.totalPrice}
							</Typography>
						</Box>
						<ConfirmButton data={data} subed={subed?.enrolled} />
					</>
				</Box>
			</Fade>
		</Modal>
	);
};

AllResourceModel.propTypes = {
	open: PropTypes.any,
	setOpen: PropTypes.any,
	data: PropTypes.any,
	subed: PropTypes.any
};
