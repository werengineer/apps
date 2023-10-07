"use client";
import { Masonry } from "@mui/lab";
import Box from "@mui/material/Box";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PropTypes } from "prop-types";
import { FullScreenModal } from "@components/Global/Modals/ViewImageModal";
import { useState } from "react";

export function AnswerImages({ data }) {
	const [imageUrl, setImageUrl] = useState("");
	const [open, setOpen] = useState(false);

	const handleOpen = ({ link }) => {
		setImageUrl(link);
		setOpen(true);
	};

	return (
		<>
			<Masonry columns={[1, 2]} spacing={3} sx={{}}>
				{data?.files?.map(
					(f, i) =>
						f.name.slice(-3) !== "pdf" && (
							<Box
								key={i}
								sx={{
									width: ["300px", "400px", "450px"],
									height: ["300px", "400px", "450px"],
									position: "relative"
								}}
							>
								<Image
									style={{
										borderRadius: "10px",
										backgroundColor: "#3C3B41",
										padding: "10px",
										objectFit: "cover"
									}}
									fill
									alt={f.name}
									src={f.link}
									onClick={() => handleOpen({ link: f?.link })}
								/>
							</Box>
						)
				)}
			</Masonry>

			<FullScreenModal open={open} setOpen={setOpen} imageUrl={imageUrl} />
		</>
	);
}

AnswerImages.propTypes = {
	data: PropTypes.any
};
