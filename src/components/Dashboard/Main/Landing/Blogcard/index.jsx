import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { SingleBlogCard } from "./SingleBlogCard";
import Link from "next/link";

const query = `
{
        user(username: "werengineer") {
          publication {
            posts{
              slug
              title
              brief
              coverImage
              dateAdded
            }
          }
        }
      }
`;

export const Blogcard = () => {
	const [blogs, setBlogs] = useState([]);

	useEffect(() => {
		const fetchBlogs = async () => {
			const res = await axios.post("https://api.hashnode.com", JSON.stringify({ query }), {
				headers: {
					"Content-type": "application/json"
				}
			});
			setBlogs(res.data.data.user.publication.posts);
		};
		fetchBlogs();
	}, []);

	return (
		<Box
			width={["92%", "50%"]}
			border={"1px solid #1D5352"}
			borderRadius={"10px"}
			paddingX={["4vw", "2vw"]}
			height={["410px", "410px", "290px"]}
			display={"flex"}
			flexDirection={"column"}
			paddingY={"2vh"}
			paddingBottom={"4vh"}
			gap={"2vh"}
			sx={{
				boxShadow: "1px 3px 10px 0px rgba(0,0,0,0.75)"
			}}
		>
			<Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
				<Typography fontSize={"20px"}>Latest Blogs</Typography>
				<Box display={["none", "flex"]}>
					<Link
						href={"https://werengineer.hashnode.dev"}
						style={{
							textDecorationLine: "none",
							fontSize: "13px",
							color: "#05D9D7",
							cursor: "pointer"
						}}
						target="_blank"
					>
						View Blog
						{blogs.length <= 1 ? " " : "s"}
					</Link>
				</Box>
			</Box>
			<Box
				display={"flex"}
				flexDirection={"column"}
				gap={"20px"}
				alignItems={"flex-start"}
				justifyContent={"space-between"}
			>
				{blogs?.slice(0, 3).map((blog, index) => (
					<SingleBlogCard blog={blog} key={index} />
				))}
			</Box>
			<Box display={["flex", "none"]} justifyContent={"center"}>
				<Link
					href={"https://werengineer.hashnode.dev"}
					style={{
						fontSize: "17px",
						color: "#05D9D7",
						cursor: "pointer"
					}}
				>
					View Blog
				</Link>
			</Box>
		</Box>
	);
};
