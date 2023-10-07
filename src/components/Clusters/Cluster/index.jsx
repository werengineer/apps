/* eslint-disable indent */
"use client";
import { ClustersContext } from "@context/cluster";
import { getEngineer } from "@cookies";
import { FiberManualRecord, MoreVert } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { Box, Card, CardActions, CardContent, IconButton, Typography } from "@mui/material";
import { useSnackbar } from "notistack";
import PropTypes from "prop-types";
import React, { useContext, useState } from "react";

export const Cluster = ({ data, glow, type }) => {
	const [cluster, setCluster] = useState(data);
	const [loading, setLoading] = useState(false);
	const engineer = getEngineer();
	var diff;
	const clustersContext = useContext(ClustersContext);
	const { enrollToCluster, openCluster } = clustersContext;
	const {enqueueSnackbar} = useSnackbar();

	const enrollToClusterWState = async () => {
		try {
			setLoading(true);
			await enrollToCluster({ clusterID: cluster?._id, enqueueSnackbar: enqueueSnackbar });
		} catch (error) {
			//Catch error here and do things
		} finally {
			setLoading(false);
		}
	};

	return (
		<Card
			sx={{
				display: "flex",
				flexDirection: "column",
				minWidth: ["80vw", "35vw", "20vw"],
				maxWidth: ["80vw", "35vw", "20vw"],
				height: "auto",
				backgroundColor: "",
				boxShadow:
					glow === true ? "0px 4px 19px rgba(80, 217, 215, 0.25)" : "0px 4px 19px #212121",
				backdropFilter: "blur(20px)",
				// background:
				background: glow
					? "linear-gradient(180deg, rgba(39, 39, 39, 0.94) 0%, rgba(39, 39, 39, 0.83) 0.01%, rgba(39, 39, 39, 0.08) 100%)"
					: "",
				border: glow === true ? "1px solid #05D9D7" : "1px solid transparent",
				borderRadius: 3,
				padding: 1,
				gap: "10px"
			}}
			onClick={() => openCluster({ path: `/clusters/${data?._id}` })}
		>
			<CardContent
				sx={{
					display: "flex",
					flexDirection: "column",
					py: 0,
					px: 1,
					gap: "10px"
				}}
			>
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						gap: "5px"
					}}
				>
					{/* <Link href={`/clusters/${data?._id}`}> */}
					<Typography
						sx={{
							fontSize: "20px"
						}}
						noWrap
					>
						{cluster?.name}
					</Typography>
					{/* </Link> */}
					<IconButton>
						<MoreVert />
					</IconButton>
				</Box>
				<Typography
					sx={{
						fontSize: "12px",
						color: "grey"
					}}
				>
					{cluster?.blocks.length} Blocks
				</Typography>
				<Box>
					<Typography
						sx={{
							display: "-webkit-box",
							WebkitLineClamp: 3,
							WebkitBoxOrient: "vertical",
							overflow: "hidden",
							textOverflow: "ellipsis",
							height: `${3 * 1.2}em`, // Adjust the line height to match the font size and line height
							fontSize: "13px",
							lineHeight: "21px",
							color: "grey"
						}}
					>
						{cluster?.description}
					</Typography>
				</Box>
			</CardContent>
			<CardActions
				sx={{
					display: "flex",
					justifyContent: "space-between",
					flexDirection: type === "Upcoming" ? "row-reverse" : "row"
				}}
			>
				<LoadingButton
					loading={loading}
					sx={{
						display: type === "Enrolled" || type === "Completed" ? "flex" : "none",
						border: "1px solid #05D9D7",
						py: "5px",
						px: "15px",
						borderRadius: "20px",
						fontSize: "12px"
					}}
					onClick={() => openCluster({ path: `/clusters/${data?._id}` })}
				>
					Open
				</LoadingButton>

				<LoadingButton
					loading={loading}
					sx={{
						display: type === "Others" ? "flex" : "none",
						border: "1px solid #05D9D7",
						py: "5px",
						px: "15px",
						borderRadius: "20px",
						fontSize: "12px"
					}}
					onClick={enrollToClusterWState}
				>
					Enroll Now
				</LoadingButton>

				<Typography
					sx={{
						color: glow ? "#05D9D7" : "#1D5352",
						fontSize: "12px",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						gap: "3px"
					}}
				>
					<FiberManualRecord
						sx={{
							fontSize: "12px"
						}}
					/>
					{cluster?.inProgress.includes(engineer?._id)
						? "Enrolled"
						: cluster?.done.includes(engineer?._id)
						? "Completed"
						: cluster.status === "Upcoming"
						? "Upcoming"
						: diff !== true
						? "New"
						: null}
				</Typography>
			</CardActions>
		</Card>
	);
};

Cluster.propTypes = {
	data: PropTypes.any,
	glow: PropTypes.any,
	type: PropTypes.any
};
