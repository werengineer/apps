"use client";
import { Attachment } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import React from "react";
import { PropTypes } from "prop-types";

export function AnswerAttachments({ visible, data }) {
	return (
		<Box
			sx={{
				display: visible ? "flex" : "none",
				flexDirection: "column",
				gap: "1vh"
			}}
		>
			<Typography
				sx={{
					fontSize: ["13px", "13px", "15px"],
					display: "flex",
					alignItems: "center",
					gap: "10px",
					color: "grey"
				}}
			>
				Other Attachments
				<Attachment
					sx={{
						fontSize: ["15px", "20px"]
					}}
				/>
			</Typography>
			{data?.files?.map(
				(f, i) =>
					f.name.slice(-3) === "pdf" && (
						<Link
							key={i}
							href={f.link}
							target={"_blank"}
							style={{
								textDecorationLine: "underline",
								textDecorationColor: "grey"
							}}
						>
							<Typography
								sx={{
									color: "grey",
									pl: 2,
									fontSize: ["15px", "15px", "17px"]
								}}
							>
								{f.name}
							</Typography>
						</Link>
					)
			)}
		</Box>
	);
}

AnswerAttachments.propTypes = {
	visible: PropTypes.any,
	data: PropTypes.any
};
