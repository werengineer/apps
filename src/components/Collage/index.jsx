import { getEngineer } from "@cookies";
// import { Button } from "@mui/base";
import { Done, ModeEdit, MoreVert, NotificationAdd } from "@mui/icons-material";
import { Avatar, Box, CircularProgress, Typography, Button, IconButton } from "@mui/material";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { TopSection } from "./TopSection";
import { TabButtons } from "./TabButtons";
import { Alumni } from "./Tabs/Alumni";
import { Clubs } from "./Tabs/Clubs";
import { About } from "./Tabs/About";
import { Posts } from "./Tabs/Post";

export const Collage = () => {
	const [tab, setTab] = useState("alumni");
	return (
		<Box
			sx={{
				display: "flex",
				gap: 0,
				flexDirection: "column",
				borderRight: ["none", "1px solid grey"]
			}}
		>
			<>
				<TopSection />
				<TabButtons />
				{/* {tab} */}
				{tab === "about" && <About />}
				{tab === "alumni" && <Alumni />}
				{tab === "clubs" && <Clubs />}
				{tab === "posts" && <Posts />}
			</>
		</Box>
	);
};
