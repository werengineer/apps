import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";
import React from "react";

export const SingleBlockCard = ({ link, content }) => {
	return (
		<Box
			sx={{
				display: "flex",
				gap: "10px",
				my: "10px"
			}}
		>
			<Box position={"relative"} width={"150px"} height={"100px"}>
				<Link
					href={link}
					style={{
						cursor: "pointer"
					}}
					target={"_blank"}
					rel={"noreferrer noopener"}
				>
					<Image
						src={content?.image}
						fill
						style={{
							objectFit: "cover"
						}}
					/>
				</Link>
			</Box>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					flex: 1,
					overflow: "hidden"
				}}
			>
				<Link
					href={link}
					style={{
						cursor: "pointer"
					}}
					target={"_blank"}
					rel={"noreferrer noopener"}
				>
					<Typography
						sx={{
							width: "100%"
						}}
						noWrap
					>
						{content?.title}
					</Typography>
					<Typography
						sx={{
							width: "100%",
							color: "#B3B3B3",
							fontSize: "12px",
							display: "-webkit-box",
							WebkitLineClamp: 5,
							WebkitBoxOrient: "vertical",
							overflow: "hidden",
							textOverflow: "ellipsis",
							height: [`${5 * 1.1}em`, `${5 * 1.2}em`], // Adjust the line height to match the font size and line height
							lineHeight: "21px"
						}}
					>
						{content?.description}
					</Typography>
				</Link>
			</Box>
		</Box>
	);
};

SingleBlockCard.propTypes = {
	link: PropTypes.any,
	content: PropTypes.any
};
