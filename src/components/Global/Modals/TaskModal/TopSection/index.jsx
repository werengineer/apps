import { Close, Done, FiberManualRecord, OndemandVideo, DoneAll } from "@mui/icons-material";
import { Box, IconButton, Typography, List, ListItem } from "@mui/material";
import React, { useEffect, useState } from "react";
import { LoadingButton } from "@mui/lab";
import { useContext } from "react";
import { getEngineer } from "@cookies";
import { PuzzleContext } from "@context/puzzle";

const TopSection = () => {
	const [done, setDone] = useState();
	const [loading, setLoading] = useState(false);

	const engineer = getEngineer();

	const puzzleContext = useContext(PuzzleContext);
	const { toggleTaskModal, taskData, handleDoneClick } = puzzleContext;

	useEffect(() => {
		const done = taskData?.users?.includes(engineer?._id) ? true : false;
		setDone(done);
		console.log(done);
	}, [loading, taskData.users, engineer._id]);

	const handleDone = async () => {
		try {
			setLoading(true);
			handleDoneClick();
		} catch (error) {
			//Throw error
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			<Box
				sx={{
					display: "flex",
					flexDirection: "row-reverse",
					width: "100%"
				}}
			>
				<IconButton onClick={toggleTaskModal}>
					<Close
						sx={{
							color: "#05D9D7"
						}}
					/>
				</IconButton>
			</Box>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between"
				}}
			>
				<Typography
					sx={{
						fontSize: "30px"
					}}
				>
					{taskData?.name}
				</Typography>
				{done === false ? (
					<LoadingButton
						loading={loading}
						sx={{
							gap: "5px",
							color: "#05D9D7",
							borderRadius: "20px"
						}}
						onClick={handleDone}
					>
						<Done />
						<Typography>Mark As Done</Typography>
					</LoadingButton>
				) : (
					<Typography
						sx={{
							display: taskData?.users?.includes(engineer?._id) ? "flex" : "none",
							alignItems: "center",
							gap: "5px",
							color: "grey"
						}}
					>
						<DoneAll />
						Done
					</Typography>
				)}
			</Box>
			<Box
				sx={{
					display: "flex",
					gap: "15px",
					alignItems: "center"
				}}
			>
				<Typography
					sx={{
						fontSize: "13px",
						paddingX: "10px",
						py: "3px",
						backgroundColor: "#1D5352",
						borderRadius: "10px",
						color: "#05D9D7"
					}}
				>
					{taskData?.tag}
				</Typography>
				<Typography
					sx={{
						display: "flex",
						alignItems: "center"
					}}
				>
					<OndemandVideo />
				</Typography>
			</Box>
			<Box
				sx={{
					maxWidth: "100%"
				}}
			>
				<Typography
					sx={{
						maxWidth: "100%",
						pr: ["5px", "30px"],
						color: "#B3B3B3"
					}}
					flexWrap
				>
					{taskData?.description}
				</Typography>
			</Box>
			<Box
				sx={{
					display: taskData?.instructions?.length > 0 ? "flex" : "none",
					my: "10px",
					flexDirection: "column"
				}}
			>
				<Typography
					sx={{
						fontSize: "18px"
					}}
				>
					Instructions
				</Typography>
				<List>
					{taskData?.instructions?.map((it, index) => (
						<ListItem
							sx={{
								display: "flex",
								gap: "5px",
								color: "#B3B3B3"
							}}
							key={index}
						>
							<FiberManualRecord
								sx={{
									fontSize: "12px"
								}}
							/>
							{it}
						</ListItem>
					))}
				</List>
			</Box>
			<Box
				sx={{
					display: taskData?.instructions?.length > 0 ? "flex" : "none",
					my: "10px",
					flexDirection: "column"
				}}
			>
				<Typography
					sx={{
						fontSize: "18px"
					}}
				>
					Content
				</Typography>
				<List>
					{taskData?.content?.map((it, index) => (
						<ListItem
							sx={{
								display: "flex",
								gap: "5px",
								color: "#B3B3B3"
							}}
							key={index}
						>
							<FiberManualRecord
								sx={{
									fontSize: "12px"
								}}
							/>
							{it}
						</ListItem>
					))}
				</List>
			</Box>
		</>
	);
};

export default TopSection;
