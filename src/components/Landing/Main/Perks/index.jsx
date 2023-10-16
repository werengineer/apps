import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import "@styles/Custom.module.css";

export const Perks = () => {
	const router = useRouter();

	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 5
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 1
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1
		}
	};

	return (
		<Box
			id={"features"}
			display={"flex"}
			flexDirection={"column"}
			justifyContent={"center"}
			alignItems={"center"}
			gap={"10vh"}
		>
			<Typography
				sx={{
					color: "#05D9D7",
					fontSize: ["30px", "40px"]
				}}
			>
				What You Do Here?
			</Typography>
			<Box
				display={["none", "none", "flex"]}
				flexDirection={"column"}
				width={"85vw"}
				minHeight={"10vh"}
				gap={"15vh"}
			>
				<Box display={"flex"} flexDirection={"row"} alignItems={"flex-start"} gap={"5vw"}>
					<Box
						display={"flex"}
						flexDirection={"column"}
						justifyContent={"center"}
						alignItems={"flex-start"}
						gap={"4vh"}
						flex={1}
					>
						<Typography fontSize={"35px"} textTransform={"capitalize"} width={"45vw"}>
							Ask questions and learn from{" "}
							<span style={{ color: "#05D9D7" }}>experienced</span> engineers
						</Typography>
						<Typography
							width={"28vw"}
							fontSize={"20px"}
							textTransform={"capitalize"}
							lineHeight={"4.5vh"}
						>
							Our platform allows users to connect with experienced engineers and ask
							questions, find solutions and learn from each other.
						</Typography>
						<Box display={"flex"} flexDirection={"column"} gap={"1vh"}>
							<Box display={"flex"} alignItems={"center"} gap={"1vw"}>
								<Box
									width={"1vw"}
									height={"1vw"}
									borderRadius={"50%"}
									sx={{
										backgroundColor: "#05D9D7"
									}}
								></Box>
								<Typography fontSize={"20px"}>
									Connect with experienced professionals
								</Typography>
							</Box>
							<Box display={"flex"} alignItems={"center"} gap={"1vw"}>
								<Box
									width={"1vw"}
									height={"1vw"}
									borderRadius={"50%"}
									sx={{
										backgroundColor: "#05D9D7"
									}}
								></Box>
								<Typography fontSize={"20px"}>
									Find answers to engineering questions
								</Typography>
							</Box>
						</Box>
						<Button
							sx={{
								border: "1px solid white",
								paddingX: "30px",
								paddingY: "10px",
								borderRadius: "30px",
								":hover": {
									backgroundColor: "white",
									color: "#121212"
								}
							}}
							onClick={() => router.push("/")}
						>
							Explore More
						</Button>
					</Box>
					<Box flex={1} display={"flex"} justifyContent={"center"} alignItems={"center"}>
						<Image width={450} height={400} src={"/images/Perks/1.png"} alt={"1"} />
					</Box>
				</Box>

				<Box
					display={"flex"}
					flexDirection={"row-reverse"}
					alignItems={"flex-start"}
					gap={"5vw"}
				>
					<Box
						display={"flex"}
						flexDirection={"column"}
						justifyContent={"center"}
						alignItems={"flex-start"}
						gap={"4vh"}
						flex={1}
					>
						<Typography fontSize={"35px"} textTransform={"capitalize"} width={"25vw"}>
							Exchange <span style={{ color: "#05D9D7" }}>Ideas</span> and{" "}
							<span style={{ color: "#05D9D7" }}>Inspiration</span> with Fellow Engineers
						</Typography>
						<Typography
							width={"32vw"}
							fontSize={"20px"}
							textTransform={"capitalize"}
							lineHeight={"4.5vh"}
						>
							Join a global community of engineers and share your engineering stories and
							ideas.{" "}
						</Typography>
						<Box display={"flex"} flexDirection={"column"} gap={"1vh"}>
							<Box display={"flex"} alignItems={"center"} gap={"1vw"}>
								<Box
									width={"1vw"}
									height={"1vw"}
									borderRadius={"50%"}
									sx={{
										backgroundColor: "#05D9D7"
									}}
								></Box>
								<Typography fontSize={"20px"}>Discover new opportunities</Typography>
							</Box>
							<Box display={"flex"} alignItems={"center"} gap={"1vw"}>
								<Box
									width={"1vw"}
									height={"1vw"}
									borderRadius={"50%"}
									sx={{
										backgroundColor: "#05D9D7"
									}}
								></Box>
								<Typography fontSize={"20px"}>Get feedback on your ideas</Typography>
							</Box>
						</Box>
						<Button
							sx={{
								border: "1px solid white",
								paddingX: "30px",
								paddingY: "10px",
								borderRadius: "30px",
								":hover": {
									backgroundColor: "white",
									color: "#121212"
								}
							}}
							onClick={() => router.push("/")}
						>
							Explore More
						</Button>
					</Box>
					<Box flex={1} display={"flex"} justifyContent={"center"} alignItems={"center"}>
						<Image width={500} height={400} src={"/images/Perks/2.png"} alt={"2"} />
					</Box>
				</Box>

				<Box display={"flex"} flexDirection={"row"} alignItems={"flex-start"} gap={"5vw"}>
					<Box
						display={"flex"}
						flexDirection={"column"}
						justifyContent={"center"}
						alignItems={"flex-start"}
						gap={"4vh"}
						flex={1}
					>
						<Typography fontSize={"35px"} textTransform={"capitalize"} width={"45vw"}>
							Grow Your <span style={{ color: "#05D9D7" }}>Network</span>
						</Typography>
						<Typography
							width={"30vw"}
							fontSize={"20px"}
							textTransform={"capitalize"}
							lineHeight={"4.5vh"}
						>
							Advance in your engineering career with powerful networking tools. Get
							connected and build a thriving network of engineers.{" "}
						</Typography>
						<Box display={"flex"} flexDirection={"column"} gap={"1vh"}>
							<Box display={"flex"} alignItems={"center"} gap={"1vw"}>
								<Box
									width={"1vw"}
									height={"1vw"}
									borderRadius={"50%"}
									sx={{
										backgroundColor: "#05D9D7"
									}}
								></Box>
								<Typography fontSize={"20px"}>Network with industry leaders</Typography>
							</Box>
							<Box display={"flex"} alignItems={"center"} gap={"1vw"}>
								<Box
									width={"1vw"}
									height={"1vw"}
									borderRadius={"50%"}
									sx={{
										backgroundColor: "#05D9D7"
									}}
								></Box>
								<Typography fontSize={"20px"}>Share knowledge and experiences</Typography>
							</Box>
						</Box>
						<Button
							sx={{
								border: "1px solid white",
								paddingX: "30px",
								paddingY: "10px",
								borderRadius: "30px",
								":hover": {
									backgroundColor: "white",
									color: "#121212"
								}
							}}
							onClick={() => router.push("/")}
						>
							Explore More
						</Button>
					</Box>
					<Box flex={1} display={"flex"} justifyContent={"center"} alignItems={"center"}>
						<Image width={450} height={400} src={"/images/Perks/3.png"} alt={"3"} />
					</Box>
				</Box>
			</Box>
			<Box display={["flex", "flex", "none"]} width={["90vw"]} marginX={"auto"}>
				<Carousel
					responsive={responsive}
					autoPlay={false}
					infinite={true}
					keyBoardControl={true}
					removeArrowOnDeviceType={["tablet", "mobile"]}
				>
					{/* 1st Item */}
					<Box
						display={"flex"}
						flexDirection={"column-reverse"}
						alignItems={"flex-start"}
						gap={"5vw"}
					>
						<Box
							display={"flex"}
							flexDirection={"column"}
							justifyContent={"center"}
							alignItems={"flex-start"}
							gap={"4vh"}
							flex={1}
						>
							<Typography
								fontSize={"20px"}
								textTransform={"capitalize"}
								width={"90vw"}
								textAlign={"center"}
							>
								Ask questions and learn from{" "}
								<span style={{ color: "#05D9D7" }}>experienced</span> engineers
							</Typography>
							<Typography
								width={"80vw"}
								marginX={"auto"}
								textAlign={"center"}
								fontSize={"15px"}
								textTransform={"capitalize"}
								lineHeight={"3.5vh"}
							>
								Our platform allows users to connect with experienced engineers and ask
								questions, find solutions and learn from each other.
							</Typography>
							<Box
								display={"flex"}
								flexDirection={"column"}
								justifyContent={"center"}
								gap={"1vh"}
							>
								<Box display={"flex"} alignItems={"center"} gap={"3vw"}>
									<Box
										width={"4vw"}
										height={"4vw"}
										borderRadius={"50%"}
										sx={{
											backgroundColor: "#05D9D7"
										}}
									></Box>
									<Typography fontSize={"15px"}>
										Connect with experienced professionals
									</Typography>
								</Box>
								<Box display={"flex"} alignItems={"center"} gap={"3vw"}>
									<Box
										width={"4vw"}
										height={"4vw"}
										borderRadius={"50%"}
										sx={{
											backgroundColor: "#05D9D7"
										}}
									></Box>
									<Typography fontSize={"15px"}>
										Find answers to engineering questions
									</Typography>
								</Box>
							</Box>
							<Button
								sx={{
									border: "1px solid white",
									width: "80vw",
									margin: "auto",
									borderRadius: "30px",
									":hover": {
										backgroundColor: "white",
										color: "#121212"
									}
								}}
								onClick={() => router.push("/")}
							>
								Explore More
							</Button>
						</Box>
						<Box
							width={"100vw"}
							display={"flex"}
							justifyContent={"center"}
							alignItems={"center"}
						>
							<Image width={125} height={125} src={"/images/Perks/1.png"} alt={"1"} />
						</Box>
					</Box>
					{/* 2nd Item */}
					<Box
						display={"flex"}
						flexDirection={"column-reverse"}
						alignItems={"flex-start"}
						gap={"5vw"}
					>
						<Box
							display={"flex"}
							flexDirection={"column"}
							justifyContent={"center"}
							alignItems={"flex-start"}
							gap={"4vh"}
							flex={1}
						>
							<Typography
								fontSize={"20px"}
								textTransform={"capitalize"}
								width={"90vw"}
								textAlign={"center"}
							>
								Exchange <span style={{ color: "#05D9D7" }}>Ideas</span> and{" "}
								<span style={{ color: "#05D9D7" }}>Inspiration</span> with Fellow Engineers
							</Typography>
							<Typography
								width={"80vw"}
								marginX={"auto"}
								textAlign={"center"}
								fontSize={"15px"}
								textTransform={"capitalize"}
								lineHeight={"3.5vh"}
							>
								Join a global community of engineers and share your engineering stories and
								ideas.
							</Typography>
							<Box
								display={"flex"}
								flexDirection={"column"}
								justifyContent={"center"}
								marginX={"auto"}
								gap={"1vh"}
							>
								<Box display={"flex"} alignItems={"center"} gap={"3vw"}>
									<Box
										width={"4vw"}
										height={"4vw"}
										borderRadius={"50%"}
										sx={{
											backgroundColor: "#05D9D7"
										}}
									></Box>
									<Typography fontSize={"15px"}>Discover new opportunities</Typography>
								</Box>
								<Box display={"flex"} alignItems={"center"} gap={"3vw"}>
									<Box
										width={"4vw"}
										height={"4vw"}
										borderRadius={"50%"}
										sx={{
											backgroundColor: "#05D9D7"
										}}
									></Box>
									<Typography fontSize={"15px"}>Get feedback on your ideas</Typography>
								</Box>
							</Box>
							<Button
								sx={{
									border: "1px solid white",
									width: "80vw",
									margin: "auto",
									borderRadius: "30px",
									":hover": {
										backgroundColor: "white",
										color: "#121212"
									}
								}}
								onClick={() => router.push("/")}
							>
								Explore More
							</Button>
						</Box>
						<Box
							width={"100vw"}
							display={"flex"}
							justifyContent={"center"}
							alignItems={"center"}
						>
							<Image width={125} height={125} src={"/images/Perks/2.png"} alt={"2"} />
						</Box>
					</Box>

					{/* 3rd Item */}
					<Box
						display={"flex"}
						flexDirection={"column-reverse"}
						alignItems={"flex-start"}
						gap={"5vw"}
					>
						<Box
							display={"flex"}
							flexDirection={"column"}
							justifyContent={"center"}
							alignItems={"flex-start"}
							gap={"4vh"}
							flex={1}
						>
							<Typography
								fontSize={"20px"}
								textTransform={"capitalize"}
								width={"90vw"}
								textAlign={"center"}
							>
								Grow Your <span style={{ color: "#05D9D7" }}>Network</span>
							</Typography>
							<Typography
								width={"80vw"}
								marginX={"auto"}
								textAlign={"center"}
								fontSize={"15px"}
								textTransform={"capitalize"}
								lineHeight={"3.5vh"}
							>
								Advance in your engineering career with powerful networking tools. Get
								connected and build a thriving network of engineers.
							</Typography>
							<Box
								display={"flex"}
								flexDirection={"column"}
								justifyContent={"center"}
								marginX={"auto"}
								gap={"1vh"}
							>
								<Box display={"flex"} alignItems={"center"} gap={"3vw"}>
									<Box
										width={"4vw"}
										height={"4vw"}
										borderRadius={"50%"}
										sx={{
											backgroundColor: "#05D9D7"
										}}
									></Box>
									<Typography fontSize={"15px"}>Network with industry leaders</Typography>
								</Box>
								<Box display={"flex"} alignItems={"center"} gap={"3vw"}>
									<Box
										width={"4vw"}
										height={"4vw"}
										borderRadius={"50%"}
										sx={{
											backgroundColor: "#05D9D7"
										}}
									></Box>
									<Typography fontSize={"15px"}>
										Share knowledge and experiences
									</Typography>
								</Box>
							</Box>
							<Button
								sx={{
									border: "1px solid white",
									width: "80vw",
									margin: "auto",
									borderRadius: "30px",
									":hover": {
										backgroundColor: "white",
										color: "#121212"
									}
								}}
								onClick={() => router.push("/")}
							>
								Explore More
							</Button>
						</Box>
						<Box
							width={"100vw"}
							display={"flex"}
							justifyContent={"center"}
							alignItems={"center"}
						>
							<Image width={125} height={125} src={"/images/Perks/3.png"} alt={"3"} />
						</Box>
					</Box>
				</Carousel>
			</Box>
		</Box>
	);
};