import { Box, Stack, Typography, Button, Link } from "@mui/material";
import { Logo } from "@components";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import { getEngineer } from "@cookies";
import { Facebook, GitHub, Instagram, LinkedIn, Twitter, YouTube } from "@mui/icons-material";

export const Footer = () => {

	const router = useRouter();
	const engineer = getEngineer();

	return (
		<Box
			sx={{
				padding:["20px"],
				marginTop: -17,
				display: "flex",
				flexDirection: "column",
				alignItems: "center"
			}}
		>
			<Stack direction={["column", "row"]} justifyContent="space-between" width="95vw">
				<Logo />
				<Stack mt={[5, 6, 5]} mx={[2, "auto"]} spacing={1} direction={"column"}>
					<Typography ml={-2}>Sitemap:</Typography>
					<Link href="/#aboutus">About Us</Link>
					<Link href="/#features">Features</Link>
					<Link href="/#benifits">Benifits</Link>
					<Link href="/#team">Our Team</Link>
				</Stack>
				<Stack mt={[5, 6, 5]} mx={[2, "auto"]} spacing={5} direction={"column"}>
					<Stack spacing={1} direction={"column"}>
						<Typography ml={-2}>Company:</Typography>
						<Link href={"https://blog.weareengineer.com/"} target="_blank">
							Blog
						</Link>
						<Link href="https://shop.weareengineer.com/" target="_blank">
							Shop
						</Link>
					</Stack>
					<Stack mt={[5, 6, 5]} mx={[2, "auto"]} spacing={1} direction={"column"}>
						<Typography ml={-2}>Legal:</Typography>
						<Link href="/privacy">Privacy</Link>
						<Link href="/terms">Terms</Link>
						<Link href="/refund-returns">Refunds</Link>
						<Link href="/contact">Contact Us</Link>
					</Stack>
				</Stack>
				<Stack mt={[5, 6, 5]} mx={[2, "auto"]} spacing={5} direction={"column"}>
					<Stack spacing={1} direction={"column"}>
						<Typography ml={-2}>Contact Us:</Typography>
						<Link href={"mailto:contact@weareengineer.com"}>contact@weareengineer.com</Link>
					</Stack>
					<Stack spacing={1} mx={[2, "auto"]} direction={"column"}>
						<Typography ml={-2}>Connect With Us:</Typography>
						<Box display={"flex"} gap={1}>
							<Link href="https://www.youtube.com/@weareengineer" target="_blank">
								<YouTube />
							</Link>
							<Link href="https://www.facebook.com/weerengineer" target="_blank">
								<Facebook />
							</Link>
							<Link href="https://twitter.com/werengineer" target="_blank">
								<Twitter />
							</Link>
							<Link href="https://www.instagram.com/werengineer/" target="_blank">
								<Instagram />
							</Link>
							<Link href="https://www.github.com/werengineer/" target="_blank">
								<GitHub />
							</Link>
							<Link href="https://www.linkedin.com/company/werengineer/" target="_blank">
								<LinkedIn />
							</Link>
						</Box>
					</Stack>
					<Stack spacing={4} mx={[2, "auto"]} direction={"column"}>
						<Typography ml={-2}>
							Don&apos;t wait any longer, Join our <br /> community now
						</Typography>
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
								onClick={() => router.push("/")}
							>
								Go To DashBoard
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
					</Stack>
				</Stack>
			</Stack>
			<Typography marginTop={[8, 10, 15]} marginBottom={5}>
				Copyright &copy; 2023 Sumus Engineer Pvt. Ltd. All rights reserved
			</Typography>
		</Box>
	);
};
