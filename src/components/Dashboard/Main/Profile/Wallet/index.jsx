import { ComingSoon } from "@components/Global";
import { Box, Button, CardActions, CardContent, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";



const Card = () => {
	return (
		<Box
			display={"flex"}
			flexDirection={"column"}
			border={"2px solid #1D5352"}
			my={6}
			width={"85%"}
			// height={'340px'}
			padding={2}
			borderRadius={5}
			gap={2}
			justifyContent={"center"}
			boxShadow={"0px 4px 15px rgba(0, 0, 0, 0.25)"}
		>
			<Box
				display={"flex"}
				alignItems={"center"}
				// mx={5}
				justifyContent={"space-between"}

				px={3}
				py={2}
			>
				<Box
					display={"flex"}
					alignItems={"center"}
					gap={2}
				>
					<Image src={"/icons/Gold_Tools.svg"} alt={"axe img"} width={80} height={80} />
					<Typography
						sx={{
							color: "#50D9D7",
							fontSize: 20
						}}
					>0 Tools</Typography>
				</Box>
				<Box
				>
					<Button variant="outlined"
						sx={{
							borderRadius: 8,
						}}
					>Sell</Button>
				</Box>
			</Box>
			<Box
				display={"flex"}
				alignItems={"center"}
				justifyContent={"space-between"}
				px={3}
				py={2}
			>
				<Box
					display={"flex"}
					alignItems={"center"}
					gap={2}
				>
					<Image src={"/icons/Tools.svg"} alt={"axe img"} width={80} height={80} />
					<Typography
						sx={{
							fontSize: 20
						}}
					>5.5k Tools</Typography>
				</Box>
				<Box
				>
					<Button variant="contained"
						sx={{
							borderRadius: 8,
						}}
					>Convert</Button>
				</Box>
			</Box>
		</Box>
	);
};


const Card2 = () => {
	return (
		<Box
			height={"500px"}
		>
			<Typography>How to use Tools</Typography>
			<Box
				display={"flex"}
				gap={1}
				flexDirection={"column"}
				alignItems={"center"}
				width={250}
				padding={3}
				sx={{
					background: "red"
				}}
			>

				<Typography>
                    Utilize tools to access the premium plan for WAE
				</Typography>
				<Button variant='contained'>Use Tools</Button>
				<Typography>
                    Required (+10K Tools)
				</Typography>
			</Box>
		</Box>
	);
};

const Index = () => {
	return (
		<Box display={"flex"} flexDirection={"column"} alignItems={"center"} gap={2} marginY={5}>
			<ComingSoon />
		</Box>
	);
};

export default Index;