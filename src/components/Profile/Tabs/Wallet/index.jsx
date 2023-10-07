import { ComingSoon } from "@components/Global";
import { Info } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import { getProducts } from "@api";
import { nFormatter } from "@hooks/nFormatter";
import { getEngineer } from "@cookies";

export const Wallet = () => {
	const router = useRouter();
	const [data, setData] = useState();
	const engineer = getEngineer();

	useEffect(() => {
		const getAllRewards = async () => {
			const rewards = await getProducts();
			console.log(rewards);
			setData(rewards);
		};
		getAllRewards();
	}, []);

	return (
		<Box display={"flex"} flexDirection={"column"} px={5} width={"100%"} gap={5} marginY={5}>
			<Box
				sx={{
					display: "flex",
					width: "100%",
					alignItems: "center",
					justifyContent: "center"
				}}
			>
				<Box
					sx={{ backgroundColor: "#212121" }}
					display={["none", "flex"]}
					flexDirection={"column"}
					width={"100%"}
					borderRadius={5}
					border={"1px solid #50D9D7"}
					px={5}
					py={3}
					gap={3}
				>
					<Box
						sx={{
							display: "flex",
							justifyContent: "flex-end"
						}}
					>
						<Info
							sx={{
								display: ["none", "flex"],
								color: "grey"
							}}
						/>
					</Box>
					<Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								gap: 5
							}}
						>
							<Box component={"img"} src="/tools/Tools.svg" alt={"Tools"} />
							<Typography fontSize={23} color={"#50D9D7"}>
								{nFormatter(engineer?.coins, 0)} WAE Coins
							</Typography>
						</Box>
						<Button
							sx={{
								display: "flex",
								width: "12vw",
								height: "6vh",
								backgroundColor: "white",
								borderRadius: 10,
								color: "black",
								"&:hover": {
									color: "white",
									border: "1px solid white"
								}
							}}
						>
							Convert
						</Button>
					</Box>
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between"
						}}
					>
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								gap: 5
							}}
						>
							<Box component={"img"} src="/tools/GoldenTools.svg" />
							<Typography fontSize={23} color={"gold"}>
								0 WAE Gold Coins
							</Typography>
						</Box>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								gap: 1
							}}
						>
							<Button
								disabled={true}
								sx={{
									display: "flex",
									width: "12vw",
									height: "6vh",
									borderRadius: 10,
									color: "black",
									border: "1px solid #979797",
									"&:hover": {
										color: "white"
									}
								}}
							>
								Coming Soon
							</Button>
							<Typography fontSize={10} color={"#979797"}>
								Required (+10K WAE Coins)
							</Typography>
						</Box>
					</Box>
				</Box>
				<Box
					sx={{
						display: ["flex", "none"],
						flexDirection: "column",
						gap: 3,
						width: "100%"
					}}
				>
					<Box
						sx={{
							display: "flex",
							width: ["100%", "90%"],
							flexDirection: "column",
							alignItems: "center",
							textAlign: "center",
							backgroundColor: "#212121",
							borderRadius: 3,
							gap: 3,
							p: 3,
							border: "1px solid #50D9D7"
						}}
					>
						<Box
							sx={{
								display: "flex",
								width: "100%",
								justifyContent: "flex-end"
							}}
						>
							<Info
								sx={{
									display: ["none", "flex"],
									color: "grey"
								}}
							/>
						</Box>
						<Box component={"img"} src={"/tools/Tools.svg"} alt="Competitions" />
						<Typography fontSize={25} color="#50D9D7">
							5.5k Tools
						</Typography>
						<Button
							sx={{
								display: "flex",
								width: ["40vw", "12vw"],
								height: "6vh",
								backgroundColor: "white",
								fontWeight: 400,
								borderRadius: 10,
								color: "black",
								"&:hover": {
									color: "white",
									border: "1px solid white"
								}
							}}
						>
							Convert Coins
						</Button>
						<Typography color={"gray"} mt={-1} fontSize={12}>
							Required (+10K WAE Coins)
						</Typography>
					</Box>
					<Box
						sx={{
							display: "flex",
							width: ["100%", "90%"],
							flexDirection: "column",
							alignItems: "center",
							textAlign: "center",
							backgroundColor: "#212121",
							borderRadius: 3,
							gap: 3,
							p: 3,
							border: "1px solid #50D9D7"
						}}
					>
						<Box
							sx={{
								display: "flex",
								width: "100%",
								justifyContent: "flex-end"
							}}
						>
							<Info
								sx={{
									display: ["none", "flex"],
									color: "grey"
								}}
							/>
						</Box>
						<Box component={"img"} src={"/tools/GoldenTools.svg"} alt="Competitions" />
						<Typography fontSize={25}>0 Tools</Typography>
						<Button
							disabled={true}
							sx={{
								display: "flex",
								width: ["40vw", "12vw"],
								height: "6vh",
								fontWeight: 400,
								borderRadius: 10,
								border: "1px solid gray"
							}}
						>
							Coming Soon{" "}
						</Button>
						<Typography color={"gray"} mt={-1} fontSize={12}>
							Required (+10K WAE Coins)
						</Typography>
					</Box>
				</Box>
			</Box>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					gap: 2
				}}
			>
				<Typography fontSize={20}>Offers & Discounts</Typography>
				<Box
					sx={{
						display: "grid",
						gridTemplateColumns: [
							"repeat(1, minmax(0, 1fr))",
							"repeat(2, minmax(0, 1fr))",
							"repeat(3, minmax(0, 1fr))"
						],
						gap: 2
					}}
				>
					{data?.products?.map((data, i) => {
						return <ItemCard key={i} data={data} />;
					})}
				</Box>
			</Box>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					gap: 2
				}}
			>
				<Typography fontSize={20}>Topups</Typography>
				<Box
					sx={{
						display: "grid",
						gridTemplateColumns: [
							"repeat(1, minmax(0, 1fr))",
							"repeat(2, minmax(0, 1fr))",
							"repeat(3, minmax(0, 1fr))"
						],
						gap: 2
					}}
				>
					{data?.topups?.map((data, i) => {
						return <ItemCard key={i} data={data} />;
					})}
				</Box>
			</Box>

			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					textAlign: "center",
					gap: 3,
					justifyContent: "center",
					alignItems: "center"
				}}
			>
				<Typography fontSize={30} fontWeight={600}>
					You can also explore our premium plan to enjoy additional benefits of the{" "}
					<span
						style={{
							color: "gold",
							textShadow:
								"0 0 20px gold, 0 0 20px gold, 0 0 30px gold, 0 0 40px gold, 0 0 50px gold"
						}}
					>
						WAE community
					</span>
				</Typography>
				<Button
					sx={{
						border: "1px solid #F7EF8A",
						borderRadius: "30px",
						width: ["50vw", "14vw"],
						backgroundColor: "#D2AC47",
						paddingX: "20px",
						display: ["block"],
						color: "#272727",

						":hover": {
							background:
								"linear-gradient(181deg, #F7EF8A 0%, #EDC967 37.50%, #D2AC47 78.65%, #AE8625 100%)",
							boxShadow: "0px 4px 66.95999908447266px 0px #867004",
							color: "#272727"
						}
					}}
					onClick={() => router.push("/subscriptions")}
				>
					Try Premium
				</Button>
			</Box>
		</Box>
	);
};
