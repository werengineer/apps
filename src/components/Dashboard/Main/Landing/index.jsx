"use client";
import { getEngineer } from "@cookies";
import React, { useEffect, useState } from "react";
import { getLists } from "./Cards/Functions";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import {
	ActivityCard,
	ClubsCard,
	DiscordCard,
	LeaderBoardCard,
	ListCard,
	ProfileCard,
	ShopCard,
	SocialsCard
} from "./Cards";
import { Blogcard } from "./Blogcard";
import { useRouter } from "next/navigation";
import { firebaseAuth } from "@fb";
import { sendEmailVerification } from "firebase/auth";
import { AchievementState } from "@context/achievements";

export const MainDashboard = () => {
	const [engineer, setEngineer] = useState();
	const router = useRouter();

	useEffect(() => {
		setEngineer(getEngineer);
	}, []);
	const [list, setList] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const getList = async () => {
			try {
				const res = await getLists();
				console.log(res);
				setList(res);
			} catch (error) {
				setList([]);
				// console.log(error);
			} finally {
				setLoading(false);
			}
		};
		getList();

		if (list.length === 0) {
			getList();
		}
	}, []);

	return (
		<Box
			display={"flex"}
			flexDirection={"column"}
			alignItems={["center", ""]}
			width={"100%"}
			gap={"3.5vh"}
		>
			<Box mt={1} pr={[2]} pl={[2, ""]} display={["flex", ""]} alignSelf={"flex-start"}>
				<Box
					display={"flex"}
					alignItems={"center"}
					fontSize={28}
					sx={{ cursor: "pointer" }}
					gap={"0.5vw"}
					width={"100%"}
					onClick={() => {
						router.push("/profile");
					}}
				>
					Hello {engineer?.name?.split(" ")[0]}!
					<Image width={40} height={40} src={"/icons/Hi.svg"} alt={"hi img"} />
				</Box>
			</Box>
			<ProfileCard />
			<LeaderBoardCard />
			<Box
				display={"flex"}
				gap={["3vh", "2%"]}
				alignItems={["center", "flex-start"]}
				flexDirection={["column", "row"]}
				width={"97.5%"}
			>
				<AchievementState>
					<ActivityCard />
				</AchievementState>
				<ListCard list={list} loading={loading} />
			</Box>

			<Box
				display={"flex"}
				gap={["3vh", "2%"]}
				alignItems={["center", "flex-start"]}
				flexDirection={["column", "row"]}
				width={"97.5%"}
			>
				<ClubsCard />
				<DiscordCard />
			</Box>
			<Box
				display={"flex"}
				gap={["3vh", "2%"]}
				alignItems={["center", "flex-start"]}
				flexDirection={["column", "row"]}
				width={"97.5%"}
			>
				{/* <BlogsCard /> */}
				<Blogcard />
				<SocialsCard />
			</Box>
			<ShopCard />
			<Box
				display={["flex", "none"]}
				flexDirection={"column"}
				gap={"8vw"}
				justifyContent={"center"}
				alignItems={"center"}
				mb={5}
			>
				<Box
					display={"flex"}
					alignItems={"center"}
					justifyContent={"center"}
					width={"100%"}
					gap={"3vh"}
					sx={{
						color: "#78787A"
					}}
				>
					About Advertising Help Center
				</Box>
				<Box
					display={"flex"}
					alignItems={"center"}
					justifyContent={"center"}
					width={"100%"}
					gap={"5vh"}
					sx={{
						color: "#78787A"
					}}
				>
					Privacy & Terms Business services
				</Box>
				<Typography>© 2023 Sumus Engineer Pvt. Ltd</Typography>
			</Box>
		</Box>
	);
};
