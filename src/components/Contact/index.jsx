import { Box, Link, Typography } from "@mui/material";
import React from "react";

export const ContactUs = () => {
	return (
		<>
			<Box pt={10}>
				<Typography sx={{ fontSize: "30px" }}>Contact Us</Typography>
				<Typography>Please choose a topic below related to your inquiry:</Typography>
				<ul>
					<li>Email enquiries: <Link href={"mailto:contact@weareengineer.com"}>contact@weareengineer.com</Link></li>
					<li>
						Our address: <br />
						MOHAN NGR, S. NO. 448/2,PL. NO. 7,<br/>Jalgaon,Jalgaon,Jalgaon-425001,Maharashtra,
						India
					</li>
				</ul>
			</Box>
		</>
	);
};
