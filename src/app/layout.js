"use client";
import "./globals.css";
import { Router } from "next/router";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { AllProviders } from "@components";
import { Analytics } from "@vercel/analytics/react";

export const myLink = "https://weareengineer.com";

export default function RootLayout({ children }) {

	// const [user,setUser]=useState();

	// useEffect(()=>{
	// 	setUser(sessionStorage.getItem('userKey'));
	// },[]);

	return (
		<html>
			<head>
				<title>We Are Engineer</title>
				<meta name="viewport" content="width=device-width,initial-scale=1"></meta>
				<meta
					name="description"
					content="Join us on an emotional journey of transformation as We Are Engineer shapes the future of engineering education. Experience our commitment to empowering individuals, creating opportunities, and fostering hope. Together, let's revolutionize the landscape of engineering education."
				/>
				{/* this will be changed to index, follow in beta */}
				<meta name=" robots" content="index, follow"></meta>
				<link rel="canonical" href={myLink} />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="We Are Engineer" />
				<meta
					property="og:description"
					content="Join us on an emotional journey of transformation as We Are Engineer shapes the future of engineering education. Experience our commitment to empowering individuals, creating opportunities, and fostering hope. Together, let's revolutionize the landscape of engineering education."
				/>
				<meta property="og:image" content="/images/wae-seo.png"></meta>
				<meta property="og:url" content={myLink}></meta>
				<meta property="og:site_name" content={"We Are Engineer"}></meta>
				<meta name="twitter:title" content="We Are Engineer"></meta>
				<meta
					name="twitter:description"
					content="Join us on an emotional journey of transformation as We Are Engineer shapes the future of engineering education. Experience our commitment to empowering individuals, creating opportunities, and fostering hope. Together, let's revolutionize the landscape of engineering education."
				></meta>
				<meta name="twitter:image" content="/images/wae-seo.png"></meta>
				<meta name="twitter:site" content="@werengineer"></meta>
				<meta name="twitter:creator" content="@werngineer"></meta>
				<meta name="robots" content="max-image-preview:large" />
			</head>
			<body>
				<AllProviders>
					{children} <Analytics />
				</AllProviders>
			</body>
		</html>
	);
}

RootLayout.propTypes = {
	children: PropTypes.any
};
