import Box from "@mui/material/Box";
import React from "react";
import { BackToTop, Footer } from "..";
import { MainContent } from "./MainContent";
import { AboutUs } from "./AboutUs";
import { Banner } from "./Banner";
import { Perks } from "./Perks";
import { Benifits } from "./Benifits";
import { Team } from "./Team";
import { Collaborate } from "./Collaborate";

export const Landing = () => {
	return (
		<Box
			display={"flex"}
			mt={7}
			flexDirection={"column"}
			gap={"10vh"}
			sx={{
				scrollBehavior: "smooth"
			}}
		>
			<BackToTop />
			<MainContent />
			<AboutUs />
			<Banner />
			<Perks />
			<Banner />
			<Benifits />
			{/* <Team /> */}
			<Collaborate />
			<Footer />
		</Box>
	);
};
