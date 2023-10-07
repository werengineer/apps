import { ProfileContext } from "@context/profile";
import { Box, Button, Typography } from "@mui/material";
import React, { useContext } from "react";
import { Btn } from "./Btn";

export const TabButtons = () => {
	const profileContext = useContext(ProfileContext);
	const { tab, handleTabClick, self } = profileContext;

	return (
		<Box
			display={"flex"}
			width={"100%"}
			justifyContent={"space-evenly"}
			alignItems={"flex-end"}
			mt={3}
			gap={"5vw"}
		>
			{/* <Btn tabToSet={"progress"} title={"Progress"}/>

			<Btn tabToSet={"questions"} title={"Your Questions"}/>

			<Btn tabToSet={"stories"} title={"Your Stories"}/>

			<Btn tabToSet={"wallet"} /> */}

			<Box>
				<Button
					sx={{
						borderBottom: tab === "progress" ? "2px solid #05D9D7" : "0px",
						p: 0,
						px: "12px",
						borderRadius: "0px",
						fontSize: ["13px", "15px", "18px"],
						color: tab === "progress" ? "white" : "grey",
						borderTopLeftRadius: "10px",
						borderTopRightRadius: "10px",
						display: self ? "flex" : "none"
					}}
					onClick={() => handleTabClick({ tab: "progress" })}
				>
					Progress
				</Button>
			</Box>

			<Box>
				<Button
					sx={{
						borderBottom: tab === "questions" ? "2px solid #05D9D7" : "0px",
						p: 0,
						px: "12px",
						borderRadius: "0px",
						fontSize: ["13px", "15px", "18px"],
						color: tab === "questions" ? "white" : "grey",
						borderTopLeftRadius: "10px",
						borderTopRightRadius: "10px"
					}}
					onClick={() => handleTabClick({ tab: "questions" })}
				>
					{self ? "Your" : ""} Questions
				</Button>
			</Box>

			<Box>
				<Button
					sx={{
						borderBottom: tab === "stories" ? "2px solid #05D9D7" : "0px",
						p: 0,
						px: "12px",
						borderRadius: "0px",
						fontSize: ["13px", "15px", "18px"],
						color: tab === "posts" ? "white" : "grey",
						borderTopLeftRadius: "10px",
						borderTopRightRadius: "10px"
					}}
					onClick={() => handleTabClick({ tab: "stories" })}
				>
					{self ? "Your" : ""} Stories
				</Button>
			</Box>

			<Box>
				<Button
					sx={{
						borderBottom: tab === "wallet" ? "2px solid #05D9D7" : "0px",
						p: 0,
						px: "12px",
						borderRadius: "0px",
						fontSize: ["13px", "15px", "18px"],
						color: tab === "wallet" ? "white" : "grey",
						borderTopLeftRadius: "10px",
						borderTopRightRadius: "10px",
						display: self ? "flex" : "none"
					}}
					onClick={() => handleTabClick({ tab: "wallet" })}
				>
					Wallet
				</Button>
			</Box>
		</Box>
	);
};
