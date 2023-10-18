"use client";
import { completeSignup } from "@api";
import { InterestsInput, Navbar } from "@components";
import { getEngineer } from "@cookies";
import { Formiz, useForm } from "@formiz/core";
import { LoadingButton } from "@mui/lab";
import { Box, Button, Link, Typography } from "@mui/material";
import { setCookie } from "cookies-next";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function SignupSuccess() {
	const router = useRouter();
	const form = useForm();
	const [loading, setLoading] = useState();
	const engineer = getEngineer();
	const data = {
		id: engineer?._id,
		interests: form?.flatValues?.interest
	};
	const signupDone = async () => {
		setLoading(true);
		try {
			const res = await completeSignup(data);
			// setCookie("engineer", JSON.stringify(res));
			sessionStorage.setItem("engineer", JSON.stringify(res));
			setLoading(false);
			router.push("/");
		} catch (error) {
			setLoading(false);
			console.log(error);
			throw error;
		}
		setLoading(false);
	};
	return (
		<Box
			sx={{
				height: "100vh",
				display: "flex",
				flexDirection: "column",
				gap: ["5vh"]
			}}
		>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					flexDirection: "column",
					justifyContent: "center",
					w: "100vw",
					h: "90vh",
					pb: 3,
					gap: 4
				}}
			>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						flexDirection: "column",
						justifyContent: "center",
						w: "100vw",
						h: "90vh",
						pb: 3
					}}
				>
					<Box display={["none", "flex"]}>
						<Image src="/images/success.png" width={300} height={200} alt="success" />
					</Box>
					<Box display={["flex", "none"]}>
						<Image src="/images/success.png" width={200} height={140} alt="success" />
					</Box>
					<Typography
						sx={{
							mt: 5,
							fontSize: ["30px", "40px"],
							lineHeight: "54.15px",
							paddingX: ["50px", "0px"],
							textAlign: "center",
							fontWeight: "600",
							color: "#FFFFFF"
						}}
					>
						<span style={{ color: "#50D9D7" }}>Congratulations</span>
						<br /> you have successfully sign up !
					</Typography>
					<Typography
						sx={{
							mt: 5,
							fontSize: "17px",
							lineHeight: "24.15px",
							textAlign: "center",
							fontWeight: "400",
							color: "#FFFFFF",
							display: ["none", "flex"]
						}}
					>
						By clicking on continue you agree to
						<Link ml={1} mr={1} href="/privacy" target="_blank">
							{" "}
							privacy{" "}
						</Link>
						and
						<Link ml={1} href="/terms" target="_blank">
							{" "}
							terms
						</Link>
					</Typography>
				</Box>
				<Formiz connect={form}>
					<Box
						marginX={["3%", "10px"]}
						display={"flex"}
						justifyContent={"space-between"}
						border="2px solid rgba(29, 83, 82, 1)"
						// border='2px solid #212121'
						borderRadius="12px"
						width={["90%", "55%"]}
						padding={"20px"}
						flexDirection="column"
						height="100%"
						boxShadow={"0px 4px 15px rgba(0, 0, 0, 0.25)"}
						gap={"10px"}
					>
						<Typography fontSize={"20px"}>
							To complete the signup please select Interests
						</Typography>
						<InterestsInput name="interest" />
					</Box>
				</Formiz>

				<Box sx={{ display: "flex", gap: ["20px", "40px"] }}>
					{loading ? (
						<LoadingButton
							loading
							disabled
							sx={{
								padding: "10px",
								border: "1px solid #50D9D7",
								borderRadius: "50px",
								color: "white",
								paddingRight: "30px",
								paddingLeft: "30px",
								fontWeight: 700,
								"&:hover": {
									backgroundColor: "#50D9D7",
									color: "black"
								},
								alignSelf: "flex-end"
							}}
						>
							Continue
						</LoadingButton>
					) : (
						<Button
							disabled={form?.flatValues?.interest?.length === 0}
							onClick={signupDone}
							sx={{
								padding: ["5px", "10px"],
								border: "1px solid #50D9D7",
								borderRadius: "50px",
								color: "#50D9D7",
								px: [2, "30px"],
								fontWeight: 700,
								"&:hover": {
									backgroundColor: "#50D9D7",
									color: "#212121"
								}
							}}
						>
							Continue
						</Button>
					)}
				</Box>
			</Box>
		</Box>
	);
}
