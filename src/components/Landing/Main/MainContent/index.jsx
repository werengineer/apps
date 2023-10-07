import Box from "@mui/material/Box";
import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { getEngineer } from "@cookies";

export const MainContent = () => {
	const router = useRouter();
	const engineer = getEngineer();

	return (
		<>
			<Box
				display={"flex"}
				flexDirection={"row"}
				zIndex={"999"}
				width={"85vw"}
				margin={"auto"}
				justifyContent={"center"}
			>
				<Box
					flex={1}
					display={"flex"}
					flexDirection={"column"}
					justifyContent={"center"}
					alignItems={["flex-start", "center", "flex-start"]}
					gap={["7vh", " 4vh", "5vh"]}
					marginTop={["7vh", "0vh"]}
					paddingX={["4vh", "4vh", "0vh"]}
				>
					<Typography
						fontSize={["30px", "30px", "50px"]}
						width={["100vw", "100vw", "40vw"]}
						lineHeight={"8vh"}
						textAlign={["center", "center", "left"]}
					>
						A <span style={{ color: "#05D9D7" }}>Community</span> Of{" "}
						<span style={{ color: "#05D9D7" }}>Engineering</span> Pioneers
					</Typography>
					<Typography
						width={["100vw", "80vw", "40vw"]}
						fontSize={["20px", "18px", "21px"]}
						textAlign={["center", "center", "left"]}
					>
						Achieve your aspirations with our engineer community. Connect, share and learn
						together.
					</Typography>
					<Box
						display={"flex"}
						flexDirection={"row"}
						width={["100vw", "80vw", "33vw"]}
						gap={["6vw", "1vw"]}
						justifyContent={"center"}
						alignItems={"center"}
					>
						{engineer ? (
							<Button
								sx={{
									paddingX: ["15px", "40px"],
									backgroundColor: "white",
									borderRadius: "30px",
									fontFamily: ["12px"],
									color: "black",
									paddingY: "10px",
									border: "1px solid white",
									":hover": {
										backgroundColor: "transparent",
										color: "white"
									}
								}}
								onClick={() => router.push("/dashboard")}
							>
								Go To Dashboard
							</Button>
						) : (
							<Button
								sx={{
									paddingX: ["15px", "40px"],
									backgroundColor: "white",
									borderRadius: "30px",
									fontFamily: ["12px"],
									color: "black",
									paddingY: "10px",
									border: "1px solid white",
									":hover": {
										backgroundColor: "transparent",
										color: "white"
									}
								}}
								onClick={() => router.push("/signup")}
							>
								Join Community
							</Button>
						)}
						<Button
							sx={{
								paddingX: ["15px", "40px"],
								borderRadius: "30px",
								paddingY: "10px",
								border: "1px solid transparent",
								":hover": {
									border: "1px solid white",
									backgroundColor: "transparent"
								}
							}}
							onClick={() => router.push("/calendar?tab=timeline")}
						>
							Check Timeline
						</Button>
					</Box>
				</Box>
				<Box
					flex={0.5}
					display={["none", "none", "flex"]}
					justifyContent={"center"}
					alignItems={"flex-end"}
				>
					<Image alt={"files"} width={536} height={470} src={"/images/MainImage.png"} />
				</Box>
			</Box>
		</>
	);
};