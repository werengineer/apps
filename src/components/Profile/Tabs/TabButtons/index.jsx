import { ProfileContext } from "@context/profile";
import { Box, Button, Typography } from "@mui/material";
import React, { useState,useContext } from "react";
import { Btn } from "./Btn";
import { useRouter, useSearchParams } from "next/navigation";

export const TabButtons = () => {
	const profileContext = useContext(ProfileContext);
	const { tab, handleTabClick, self } = profileContext;
	const params = useSearchParams();
	const [section, setSection] = useState("progress");

	const handleButtonClick = (paramValue) => {
    const currentURL = window.location.href;
    const urlWithoutQueryString = currentURL.split('?')[0];
    const newURL = `${urlWithoutQueryString}?tab=${paramValue}`;
    window.history.replaceState(null, null, newURL);
  };
	


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
					onClick={() => {
						handleButtonClick("progress");
						handleTabClick({ tab: "progress" });
					  }}
					  
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
					onClick={() =>{handleButtonClick("questions"); handleTabClick({ tab: "questions" })}}
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
					onClick={() => {handleButtonClick("stories");; {handleTabClick({ tab: "stories" })}}}
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
					onClick={() => {handleButtonClick("wallet");handleTabClick({ tab: "wallet" })}}
				>
					Wallet
				</Button>
			</Box>
		</Box>
	);
};
