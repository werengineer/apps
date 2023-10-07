"use client";
import { Attachment } from "@mui/icons-material";
import { Masonry } from "@mui/lab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PropTypes } from "prop-types";
import { FullScreenModal } from "@components/Global/Modals/ViewImageModal";
import { useState } from "react";

export const QuestionFiles = ({ data, visible }) => {
	const [ImageUrl, setImageUrl] = useState("");
	const [open, setOpen] = useState(false);
	return (
		<>
			{data?.files?.length > 0 && (
				<Box
					sx={{
						width: "100%",
						display: "flex",
						flexDirection: "column"
					}}
				>
					<Masonry columns={[1, 2]} spacing={3} sx={{}}>
						{data?.files?.map(
							(f, i) =>
								f.name.slice(-3) !== "pdf" && (
									<Box
										key={i}
										width={["90vw", "375px"]}
										height={"400px"}
										position={"relative"}
										onClick={() => {
											setImageUrl(f.link);
											setOpen(true);
										}}
									>
										<Image
											style={{
												borderRadius: "10px",
												backgroundColor: "#3C3B41",
												padding: "10px",
												objectFit: "cover",
												cursor: "pointer"
											}}
											fill
											alt={f.name}
											src={f.link}
										/>
									</Box>
								)
						)}
					</Masonry>
					<Box
						sx={{
							display: visible ? "flex" : "none",
							flexDirection: "column",
							gap: "1vh"
						}}
					>
						<Typography
							sx={{
								fontSize: "20px",
								display: "flex",
								alignItems: "center",
								gap: "1vw",
								color: "grey"
							}}
						>
							Other Attachments
							<Attachment />
						</Typography>
						{data?.files?.map(
							(f, i) =>
								f.name.slice(-3) === "pdf" && (
									<Link key={i} href={f.link} target={"_blank"}>
										<Typography
											sx={{
												color: "grey",
												pl: 2
											}}
										>
											{f.name}
										</Typography>
									</Link>
								)
						)}
					</Box>
					<FullScreenModal open={open} setOpen={setOpen} imageUrl={ImageUrl} />
				</Box>
			)}
		</>
	);
};

QuestionFiles.propTypes = {
	data: PropTypes.any,
	visible: PropTypes.any,
	setImageUrl: PropTypes.any,
	setOpen2: PropTypes.any
};
