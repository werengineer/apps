import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

export const Banner = () => {
	const router = useRouter();

	return (
		<Box
			width={"100vw"}
			minHeight={"12vh"}
			sx={{
				backgroundColor: "white",
				paddingX: "4.5vw",
				paddingY: ["2vh", "0"],
				color: "#121212",
				display: "flex",
				flexDirection: ["column", "row"],
				gap: ["3vh", "0"],
				justifyContent: "space-between",
				alignItems: "center"
			}}
		>
			<Typography
				fontSize={["20px", "27px", "30px"]}
				fontWeight={600}
				textAlign={["center", "left"]}
			>
				Join Our <span style={{ color: "#1D5352" }}>We Are Engineer</span> Now
			</Typography>

			<Button
				sx={{
					backgroundColor: "#121212",
					borderRadius: "30px",
					paddingX: "30px",
					width: ["90vw", "25vw", "15vw"],
					paddingY: "10px",
					color: "#05D9D7",
					":hover": {
						backgroundColor: "#05D9D7",
						color: "#121212"
					}
				}}
				onClick={() => router.push("/signup")}
			>
				Join Community
			</Button>
		</Box>
	);
};
