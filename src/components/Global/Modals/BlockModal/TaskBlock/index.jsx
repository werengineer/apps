import { PuzzleContext } from "@context/puzzle";
import { getEngineer } from "@cookies";
import { Done, OndemandVideo } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import React, { useContext } from "react";

export const TaskBlock = ({ data }) => {

	const engineer = getEngineer();

	// const handleClick = () => {
	//   setTaskData(data);
	//   setOpen(true);
	// };

	const puzzleContext = useContext(PuzzleContext);
	const { handleTaskClick } = puzzleContext;

	return (
		<Box
			display={"flex"}
			width={["100%", "95%"]}
			alignItems={"center"}
			justifyContent={"space-between"}
			backgroundColor="#272727"
			padding={2}
			borderRadius={3}
			border={"2px solid #50D9D7"} //1D5352
			sx={{
				boxShadow: "2px 2px 8px #50D9D7",
				cursor: "pointer"
			}}
			onClick={() => handleTaskClick({ data: data })}
		>
			<Box display={"flex"} flexDirection={"column"} gap={1}>
				<Typography fontWeight={700} fontSize={22}>
					{data?.name}
				</Typography>
				<Box display={"flex"} gap={2} alignItems={"center"}>
					<Box display={"flex"} backgroundColor="#1D5352" px={2} py={"5px"} borderRadius={5}>
						<Typography color={"#50D9D7"} fontSize={12}>
							{data?.tag}
						</Typography>
					</Box>
					<Box display={"flex"} gap={1} color={"#78787A"}>
						<OndemandVideo sx={{ display: data?.url ? "flex" : "none" }} />
					</Box>
				</Box>
			</Box>
			<Box
				color={"#50D9D7"}
				padding={2}
				backgroundColor={data?.users?.includes(engineer?._id) ? "#1D5352" : "grey"}
				justifyContent={"center"}
				alignItems={"center"}
				borderRadius={2}
			>
				<Box display={"flex"} alignItems={"center"}>
					<Done
						sx={{
							color: data?.users?.includes(engineer?._id) ? "#05D9D7" : "white"
						}}
					/>
					{/* <LockIcon/> */}
				</Box>
			</Box>
		</Box>
	);
};

TaskBlock.propTypes = {
	data: PropTypes.any
};
