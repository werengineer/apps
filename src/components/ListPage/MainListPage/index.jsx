import { OneListContext } from "@context/oneList";
import { Box, CircularProgress, Typography, Button } from "@mui/material";
import React from "react";
import { useContext } from "react";
import { Chips } from "./Chips";
import { Questions } from "./Questions";
import { Stories } from "./Stories";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const MainListPage = () => {
	const oneListContext = useContext(OneListContext);
	const { questions, stories, loading } = oneListContext;
	console.log(questions, stories);
	const router = useRouter();

	return (
		<Box
			sx={{
				px: [2],
				pt: "10px",
				borderRight: ["none", "1px solid gray"],
				overflowX: "hidden"
			}}
		>
			{loading ? (
				<Box
					sx={{
						display: "flex",
						width: "100%",
						height: ["90vh", "87vh"],
						justifyContent: "center",
						alignItems: "center",
						color: "#1D5352"
					}}
				>
					<CircularProgress color="inherit" />
				</Box>
			) : questions?.length || stories?.length ? (
				<>
					<Chips />
					<Questions />
					<Stories />
				</>
			) : (
				<Box
					sx={{
						display: "flex",
						width: "100%",
						height: ["90vh", "87vh"],
						justifyContent: "center",
						alignItems: "center",
						flexDirection: "column",
						gap: 3
					}}
				>
					<Box display={["flex", "flex"]}>
						<Image src={"/Empty_list.svg"} width={150} height={150} alt="helo" />
					</Box>
					<Typography
						sx={{
							fontSize: "20px"
						}}
					>
						No Question And Story Added!
					</Typography>
					<Box display={"flex"} flexDirection={["column", "row"]} gap={2}>
						<Button
							sx={{
								paddingX: ["15px", "40px"],
								borderRadius: "30px",
								paddingY: "10px",
								px: 30,
								border: "1px solid white",
								transition: "0.2s ease-in",
								":hover": {
									border: "1px solid white",
									backgroundColor: "white",
									color: "black"
								}
							}}
							onClick={() => router.push("/questions")}
						>
							Explore Questions
						</Button>
						<Button
							sx={{
								paddingX: ["15px", "40px"],
								borderRadius: "30px",
								paddingY: "10px",
								px: 30,
								border: "1px solid white",
								transition: "0.2s ease-in",
								":hover": {
									border: "1px solid white",
									backgroundColor: "white",
									color: "black"
								}
							}}
							onClick={() => router.push("/stories")}
						>
							Explore Stories
						</Button>
					</Box>
				</Box>
			)}
		</Box>
	);
};
