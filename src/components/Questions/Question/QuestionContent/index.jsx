import React from "react";
import { getEngineer } from "@cookies";
import { useRouter } from "next/navigation";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { PropTypes } from "prop-types";

export const QuestionContent = ({ data, setLoginModal }) => {
	const engineer = getEngineer();
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
			onClick={() => router.push(`/questions/${data?._id}`)}
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
					maxWidth: "100%",
					overflow: "hidden",
					color: "white",
					textAlign: "left"
				}}
			></Typography>
			{data?.tag !== null && data?.tag?.length !== 0 && (
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
						{data?.tag[0]}
					</Typography>
				</Box>
			)}
		</Box>
	);
};

QuestionContent.propTypes = {
	data: PropTypes.any,
	setLoginModal: PropTypes.any
};
