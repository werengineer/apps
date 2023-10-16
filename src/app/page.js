"use client";
import { DashboardMain } from "@components";
import Box from "@mui/material/Box";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
// import { firebaseAuth } from "../firebase";

export default function DashboardPage() {

	const router = useRouter();

	useEffect(() => {
		const token = sessionStorage.getItem('userKey');
		console.log("check")
		
		if (token !== undefined) {
			try {
			  const parsedData = JSON.parse(token);
			  if (parsedData?._id) {
				router.push('/');
			  }
			} catch (error) {
			  console.error("Error parsing JSON:", error);
			}
		  }
		  
	}, []);


	return (
		<>
			<Box
				display={"flex"}
				sx={{
					mt: [8, 10],
					ml: ["auto", 8],
					maxWidth: "100vw",
					display: "flex",
					overflowY: "hidden"
				}}
			>
				<Box
					sx={{
						width: ["100%", "100%", "75%"],
						pl: [0, 0, 0],
						pr: [0, 0, 0]
					}}
				>
					<DashboardMain tab={undefined} setTab={undefined} />
				</Box>
			</Box>
		</>
	);
}
