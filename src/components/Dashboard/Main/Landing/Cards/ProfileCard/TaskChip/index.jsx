import { CheckCircle } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { API_URL } from "@constants";
import { getEngineer } from "@cookies";
import Link from "next/link";

export const TaskChip = ({ id, setProfileComplete, to }) => {
	const [data, setData] = useState({});
	const [completed, setCompleted] = useState(false);
	const engineer = getEngineer();

	useEffect(() => {
		const fetchAchievement = async () => {
			const res = await axios.get(`${API_URL}/achievement/get/${id}`);
			console.log(res.data);
			if (res.data.engineer.includes(engineer?._id)) {
				setCompleted(true);
				setProfileComplete((profileComplete) =>
					profileComplete <= 3 ? profileComplete + 1 : profileComplete
				);
			}
			setData(res.data);
		};
		fetchAchievement();
	}, []);

	return (
		<Box
			display={"flex"}
			justifyContent={"space-between"}
			width={["100%", "50%"]}
			paddingY={"1.5vh"}
			paddingX={["5vw", "1vw"]}
			alignItems={"center"}
			borderRadius={"30px"}
			bgcolor={completed ? "#3C3B41" : "transparent"}
			border={completed ? "1px solid #3C3B41" : "1px solid #1D5352"}
			gap={"10px"}
		>
			<Typography color={completed ? "#05D9D7" : "white"} fontSize={["13px", "16px"]} noWrap>
				<Link href={to}>{data?.name}</Link>
			</Typography>
			<Box display={"flex"} alignItems={"center"} gap={"5px"}>
				<Typography fontSize={["10px", "13px"]} color={"grey"} noWrap>
					{data?.coins} WCs
				</Typography>
				<CheckCircle
					sx={{
						color: completed ? "#05D9D7" : "grey",
						fontSize: ["20px", "25px"]
					}}
				/>
			</Box>
		</Box>
	);
};

TaskChip.propTypes = {
	id: PropTypes.string,
	setProfileComplete: PropTypes.func,
	to: PropTypes.string
};
