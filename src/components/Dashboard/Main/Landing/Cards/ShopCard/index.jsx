"use client";
import React, { useEffect, useState } from "react";
import { getProducts } from "../Functions";
import { Box, Button, Typography } from "@mui/material";
import Carousel from "react-multi-carousel";
import Image from "next/image";
import Link from "next/link";

export const ShopCard = () => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		const fetchProducts = async () => {
			const res = await getProducts();
			setProducts(res);
		};

		fetchProducts();
	}, []);

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
			items: 2
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1
		}
	};

	return (
		<Box
			sx={{
				width: ["90%", "97.5%"],
				border: "1px solid #1D5352",
				borderRadius: "10px",
				marginBottom: "5vh",
				paddingX: ["5vw", "1vw"],
				paddingY: "2vh",
				paddingBottom: "3.5vh",
				display: "flex",
				flexDirection: ["column"],
				gap: "5vh",
				boxShadow: "1px 3px 10px 0px rgba(0,0,0,0.75)"
			}}
		>
			<Box
				display={"flex"}
				justifyContent={["center", "space-between"]}
				alignItems={"center"}
				mb={-2}
				mx={2}
			>
				<Typography fontSize={"18px"}>Shop</Typography>
				<Box display={["none", "flex"]}>
					<Link
						style={{
							textDecorationLine: "none",
							fontSize: "13px",
							color: "#05D9D7",
							cursor: "pointer"
						}}
						href={"https://shop.weareengineer.com/"}
						target={"_blank"}
					>
						Go To Shop
					</Link>
				</Box>
			</Box>

			<Box
				display={"flex"}
				// justifyContent={["space-between"]}
				alignItems={["center"]}
				flexDirection={["column", "row"]}
				gap={["30px", "auto"]}
				marginX={["auto", 3]}
				width={"100%"}
			>
				<Carousel
					responsive={responsive}
					autoPlay={true}
					infinite={true}
					keyBoardControl={true}
					removeArrowOnDeviceType={["mobile"]} //"tablet",
				>
					{products?.map((data, i) => (
						<Box
							key={i}
							bgcolor={"rgba(0, 0, 0, 0.3)"}
							borderRadius={3}
							paddingX={"2.5vw"}
							width={["90%", "auto"]}
							paddingY={"3vh"}
							paddingBottom={"4vh"}
							display={"flex"}
							border={[" 1px solid #50D9D7", "none"]}
							flexDirection={"column"}
							justifyContent={"center"}
							alignItems={"center"}
							marginX={"auto"}
							maxWidth={["80%", "90%"]}
							gap={["2.5vh", "1.5vh"]}
						>
							<Image
								width={200}
								height={200}
								src={data?.thumbnail_url}
								alt={`${data?.name} img`}
							/>

							<Typography fontSize={"20px"} color={"#05D9D7"}>
								{data?.name}
							</Typography>

							<Button
								sx={{
									border: "1px solid grey",
									borderRadius: "30px",
									color: "grey",
									paddingX: ["5vw", "1vw"],
									":hover": {
										backgroundColor: "grey",
										color: "#212121"
									}
								}}
								href={data?.short_url}
								target="_blank"
							>
								Buy Now
							</Button>
						</Box>
					))}
				</Carousel>
			</Box>

			<Box display={["flex", "none"]} justifyContent={"center"}>
				<Link
					style={{
						alignSelf: "center",
						fontSize: "17px",
						color: "#05D9D7",
						cursor: "pointer"
					}}
					href={"https://werengineer.gumroad.com/"}
					target={"_blank"}
				>
					Go To Shop
				</Link>
			</Box>
		</Box>
	);
};
