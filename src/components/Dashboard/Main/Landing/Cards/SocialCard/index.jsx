import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const SocialsCard = () => {
	return (
		<Box
			width={["92%", "50%"]}
			border={"1px solid #1D5352"}
			borderRadius={"10px"}
			display={"flex"}
			height={["410px", "410px", "290px"]}
			flexDirection={"column"}
			justifyContent={"center"}
			alignItems={"center"}
			paddingY={"2vh"}
			gap={"2vh"}
			sx={{
				boxShadow: "1px 3px 10px 0px rgba(0,0,0,0.75)"
			}}
		>
			<Typography fontSize={"18px"}>Let&apos;s Connect</Typography>
			<Box
				display={"flex"}
				flexDirection={"column"}
				height={"100%"}
				justifyContent={"center"}
				alignItems={"center"}
				gap={"2vh"}
			>
				<Box display={"flex"} alignItems={"center"} gap={"1vw"}>
					<Image
						width={40}
						height={40}
						src={"/icons/Twitter.svg"}
						onClick={() => window.open("https://twitter.com/werengineer")}
						alt={"twitter img"}
						style={{
							cursor: "pointer"
						}}
					/>
					<Image
						width={40}
						height={40}
						src={"/icons/Youtube.svg"}
						onClick={() => window.open("https://www.youtube.com/@weareengineer")}
						alt={"youtube img"}
						style={{
							cursor: "pointer"
						}}
					/>
					<Image
						width={40}
						height={40}
						src={"/icons/Instagram.svg"}
						onClick={() => window.open("https://www.instagram.com/werengineer/")}
						alt={"instagram img"}
						style={{
							cursor: "pointer"
						}}
					/>
					<Image
						width={40}
						height={40}
						src={"/icons/Linkedin.svg"}
						onClick={() => window.open("https://www.linkedin.com/company/werengineer")}
						alt={"linkedin img"}
						style={{
							cursor: "pointer"
						}}
					/>
					<Image
						width={40}
						height={40}
						src={"/icons/Facebook.svg"}
						onClick={() => window.open("https://www.facebook.com/weerengineer")}
						alt={"facebook img"}
						style={{
							cursor: "pointer"
						}}
					/>

					<Image
						width={40}
						height={40}
						src={"/icons/github.svg"}
						onClick={() => window.open("https://www.github.com/werengineer")}
						alt={"facebook img"}
						style={{
							cursor: "pointer"
						}}
					/>
				</Box>
				<Link
					style={{
						fontSize: "17px",
						color: "#05D9D7",
						textDecorationLine: "none"
					}}
					target={"_blank"}
					rel={"noreferrer noopener"}
					href={"/"}
				>
					@weareengineer
				</Link>
				{/* </Box> */}
			</Box>
		</Box>
	);
};
