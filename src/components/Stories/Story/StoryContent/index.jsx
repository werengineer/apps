import React from "react";
import { useRouter } from "next/navigation";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { PropTypes } from "prop-types";

export const StoryContent = ({ data, setLoginModal }) => {
	const router = useRouter();

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				gap: "15px",
				backgroundColor: "transparent",
				boxShadow: "none",
				border: "0px",
				cursor: "pointer"
			}}
			component={"button"}
			onClick={() => router.push(`/stories/${data?._id}`)}
		>
			<Typography
				sx={{
					fontSize: ["17px", "20px", "25px"],
					fontWeight: [550, 500, 600],
					color: "white"
				}}
			>
				{data?.title}
			</Typography>

			<Typography
				id={`description-${data?._id}`}
				sx={{
					fontSize: ["13px", "14px", "15px"],
					maxHeight: ["100px", "130px"],
					overflow: "hidden",
					color: "white"
				}}
			></Typography>
			{data?.tag !== null && (
				<Box
					sx={{
						display: ["flex", "flex", "none"],
						// justifyContent: 'center',
						alignItems: "center"
					}}
				>
					<Typography
						sx={{
							color: "#05D9D7",
							px: 1,
							py: "3px",
							backgroundColor: "#1D5352",
							fontSize: "10px",
							borderRadius: "10px"
						}}
					>
						{data?.tag && data?.tag[0]}
					</Typography>
				</Box>
			)}
		</Box>
	);
};

StoryContent.propTypes = {
	data: PropTypes.any,
	setLoginModal: PropTypes.any
};
