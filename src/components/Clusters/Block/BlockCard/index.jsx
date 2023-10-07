import { FiberManualRecord, Lock } from "@mui/icons-material";
import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import PropTypes from "prop-types";

export const BlockCard = ({ data, glow, status }) => {
	const router = useRouter();
	const pathName = usePathname();
	const blockPath = pathName + `/${data?._id}`;

	return (
		<Card
			sx={{
				border: status === "Current" && "1px solid #50D9D7",
				borderRadius: "10px",
				boxShadow: status === "Current" && "0px 4px 19px rgba(80, 217, 215, 0.25)",
				cursor: glow ? "pointer" : "",
				background: glow
					? "linear-gradient(180deg, rgba(39, 39, 39, 0.94) 0%, rgba(39, 39, 39, 0.83) 0.01%, rgba(39, 39, 39, 0.08) 100%)"
					: "",
				opacity: glow ? 1 : 0.6,
				zIndex: 999
			}}
			onClick={() => (glow ? router.push(blockPath) : console.log("Do nothing"))}
		>
			<CardContent
				sx={{
					display: "flex",
					flexDirection: "column",
					gap: "5px"
				}}
			>
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center"
					}}
				>
					<Typography
						sx={{
							fontSize: "17px"
						}}
					>
						{data?.name}
					</Typography>
					{/* </Link> */}
					<Lock
						sx={{
							display: !glow ? "flex" : "none"
						}}
					/>
				</Box>

				<Typography
					sx={{
						fontSize: "13px",
						color: "grey"
					}}
					noWrap
				>
					{data?.content[0]?.name}, {data?.content[1]?.name}...
				</Typography>
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
						mt: "10px"
					}}
				>
					<Typography
						sx={{
							px: "5px",
							backgroundColor: "#1D5352",
							color: "#05D9D7",
							borderRadius: "5px",
							fontSize: "12px",
							display: "flex",
							justifyContent: "center",
							alignItems: "center"
						}}
					>
						Beginner
					</Typography>
					<Box
						sx={{
							display: status === "Upcoming" ? "none" : "flex",
							gap: "5px",
							justifyContent: "center",
							alignItems: "center",
							color: "#05D9D7"
						}}
					>
						<FiberManualRecord
							sx={{
								fontSize: "12px"
							}}
						/>
						<Typography
							sx={{
								fontSize: "12px"
							}}
						>
							{status}
						</Typography>
					</Box>
				</Box>
			</CardContent>
		</Card>
	);
};

BlockCard.propTypes = {
	data: PropTypes.any,
	glow: PropTypes.any,
	status: PropTypes.any
};
