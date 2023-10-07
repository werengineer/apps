import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { TeamMembers } from "./TeamMembers";
import { team } from "@data/team";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "react";

export const Team = () => {
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
		<Box id={"team"} display={"flex"} flexDirection={"column"} gap={"5vh"}>
			<Typography textAlign={"center"} color={"#05D9D7"} fontSize={"40px"}>
				Meet Our Team
			</Typography>
			<Box width={["90vw", "100vw"]} marginX={"auto"}>
				<Carousel
					responsive={responsive}
					autoPlay={true}
					infinite={true}
					keyBoardControl={true}
					removeArrowOnDeviceType={["mobile"]} //"tablet",
				>
					{team.map((t, i) => (
						<TeamMembers key={i} info={t} />
					))}
				</Carousel>
			</Box>
		</Box>
	);
};
