import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { PropTypes } from "prop-types";
import { AllResourceModel } from "./AllResourceModel";
import Link from "next/link";
import { ContentLoading } from "@components/Global";
import { GhostCard } from "./GhostCard";
import { getSubscription } from "@hooks/getSubscription";

export const GhostWriting = ({ data, loading }) => {
	const [open, setOpen] = useState(false);
	const [resourceData, setResourceData] = useState([]);
	const { subscription } = getSubscription();
	const [subed, setSubed] = useState();
	const getSub = async () => {
		setSubed(await subscription());
	};
	getSub();
	return (
		<Box display={"flex"} width={"100%"} flexDirection={"column"} gap={1} pt={1} pr={2} mb={2}>
			<Typography fontSize={35}>Ghost Writing</Typography>
			<Box
				sx={{
					display: data.length !== 0 ? "grid" : "flex",
					gridTemplateColumns: data.length !== 0 && [
						"repeat(1, minmax(0, 1fr))",
						"repeat(2, minmax(0, 1fr))",
						"repeat(3, minmax(0, 1fr))"
					],
					gap: 2,
					p: 4
				}}
			>
				{loading ? (
					<ContentLoading width={"100%"} height={"100%"} />
				) : data.length === 0 ? (
					<Box
						sx={{
							display: "flex",
							width: "100%",
							justifyContent: "center"
						}}
					>
						<Typography
							sx={{
								textAlign: "center",
								color: "#fff",
								fontSize: "20px",
								textDecoration: "bold"
							}}
						>
							Please apply from below!
						</Typography>
					</Box>
				) : (
					data?.map((e, i) => {
						return (
							<GhostCard
								key={i}
								data={e}
								i={i}
								setOpen={setOpen}
								setResourceData={setResourceData}
							/>
						);
					})
				)}
				<AllResourceModel data={resourceData} open={open} setOpen={setOpen} subed={subed} />
			</Box>
			<Box
				sx={{
					display: "flex",
					width: "100%",
					justifyContent: "center"
				}}
			>
				<Typography
					sx={{
						textAlign: "center",
						color: "#fff",
						fontSize: "20px",
						textDecoration: "bold"
					}}
				>
					Apply for ghostwriting
					<Link
						style={{
							textDecorationLine: "underline",
							textDecorationColor: "#fff",
							marginLeft: "5px"
						}}
						href={"https://forms.gle/ShcbAASWgQKfZP3Y6"}
						target="_blank"
					>
						Here
					</Link>
				</Typography>
			</Box>
		</Box>
	);
};

GhostWriting.propTypes = {
	data: PropTypes.any,
	loading: PropTypes.any
};
