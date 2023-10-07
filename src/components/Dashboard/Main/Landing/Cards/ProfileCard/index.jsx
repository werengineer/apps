import { getEngineer } from "@cookies";
import { CheckCircle, Info } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { TaskChip } from "./TaskChip";
import { achievementID, werID } from "@lib/achievementID";
import { useCoinsStore } from "@store";

export const ProfileCard = () => {
	const engineer = getEngineer();
	const router = useRouter();
	const [profileComplete, setProfileComplete] = useState(0);
	const coins = useCoinsStore((state) => state.coins);

	const completion = [
		"Great, you just started your journey",
		"You just took your first step",
		"Your are almost there",
		"You are now one of us!"
	];

	return (
		<Box
			sx={{
				width: ["90%", "97.5%"],
				border: "1px solid #1D5352",
				borderRadius: "10px",
				paddingX: ["4vw", "2vw"],
				paddingY: "2vh",
				paddingBottom: "3.5vh",
				display: "flex",
				flexDirection: ["column"],
				gap: ["2vh", "5vh"],
				boxShadow: "1px 3px 10px 0px rgba(0,0,0,0.75)"
			}}
		>
			<Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} mb={[0, -2]}>
				<Typography fontSize={"18px"}>Profile</Typography>
				<Box display={"flex"} alignItems={"center"} gap={"0.5vw"}>
					<Image width={30} height={30} alt={"Axe img"} src={"/icons/Axe.svg"} />
					<Typography fontSize={"13px"} color={"grey"}>
						WAE Coins {coins}
					</Typography>
					<Info
						sx={{
							display: ["none", "flex"],
							color: "grey"
						}}
					/>
				</Box>
			</Box>

			<Box
				display={"flex"}
				justifyContent={"space-between"}
				alignItems={"center"}
				width={"100%"}
			>
				<Box
					display={"flex"}
					alignItems={"center"}
					justifyContent={"center"}
					gap={["20vw", "6vw", "3vw"]}
					height={"100px"}
				>
					<Box position={"relative"} width={"4vw"} height={"8vh"} flex={[1]}>
						<CircularProgress
							sx={{
								backgroundColor: "#333333",
								margin: "auto",
								borderRadius: "40px",
								color: "#05D9D7"
							}}
							value={profileComplete === 0 ? 5 : profileComplete * 25}
							size={70}
							variant="determinate"
						/>
						<Typography position={"relative"} bottom={["53px"]} left={["18px"]}>
							{profileComplete * 25}%
						</Typography>
					</Box>
					<Box
						display={"flex"}
						alignItems={"center"}
						justifyContent={"center"}
						flex={[15]}
						sx={{
							mt: ["12px", "-13px", "12px"]
						}}
					>
						<Typography fontSize={["15px", "18px", "20px"]}>
							{completion[profileComplete !== 0 ? profileComplete - 1 : 0]}
						</Typography>
						<Image width={30} height={30} src={"/icons/Verified.svg"} alt={"verified"} />
					</Box>
				</Box>
				<Button
					sx={{
						border: "1px solid white",
						borderRadius: "30px",
						display: ["none", "flex"],
						paddingX: "1vw",
						":hover": {
							backgroundColor: "white",
							color: "#212121"
						}
					}}
					onClick={() => router.push("/profile")}
				>
					Go To Profile
				</Button>
			</Box>
			<Box
				display={"flex"}
				flexDirection={["column", "row"]}
				width={["97%"]}
				alignItems={["", "center"]}
				gap={["2vh", "10%"]}
			>
				<TaskChip
					id={achievementID.updateProfilePhoto}
					setProfileComplete={setProfileComplete}
					to={"/profile"}
				/>
				<TaskChip
					id={achievementID.followWAE}
					setProfileComplete={setProfileComplete}
					to={`/profile/${werID}`}
				/>
			</Box>
			<Box
				display={"flex"}
				gap={["2vh", "10%"]}
				width={["97%"]}
				alignItems={"center"}
				flexDirection={["column", "row"]}
			>
				<TaskChip
					id={achievementID.verifyEmail}
					setProfileComplete={setProfileComplete}
					to={"/settings"}
				/>
				<TaskChip
					id={achievementID.verifyNumber}
					setProfileComplete={setProfileComplete}
					to={"/settings"}
				/>
			</Box>

			<Box
				display={["flex", "none"]}
				justifyContent={"center"}
				sx={{
					textDecoration: "underline",
					color: "#50D9D7"
				}}
			>
				<Typography>Go To Profile</Typography>
			</Box>

			{/* <Box>
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						color: "#50D9D7",
						padding: 3,
						flexDirection: "column",
						gap: 5,
						my: "auto"
					}}
				>
					<Image
						src={"/Verification.svg"}
						height={100}
						width={100}
						alt={"verification logo"}
					/>
					<Typography
						sx={{
							fontSize: 20
						}}
					>
						Your Documents are being verified...
					</Typography>
				</Box>
			</Box> */}
		</Box>
	);
};
