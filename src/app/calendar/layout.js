"use client";
import { myLink } from "app/layout";
import PropTypes from "prop-types";
import React from "react";

export default function EventsLayout({ children }) {
	return (
		<>
			<head>
				<title>Events | We Are Engineer</title>
				<meta name="viewport" content="width=device-width,initial-scale=1"></meta>
				<meta
					name="description"
					content="Join us on an emotional journey of transformation as We Are Engineer shapes the future of engineering education. Experience our commitment to empowering individuals, creating opportunities, and fostering hope. Together, let's revolutionize the landscape of engineering education."
				/>
				{/* this will be changed to index, follow in beta */}
				<meta name=" robots" content="index, follow"></meta>
				<link rel="canonical" href={`${myLink}/calendar`} />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="Events | We Are Engineer" />
				<meta
					property="og:description"
					content="Join us on an emotional journey of transformation as We Are Engineer shapes the future of engineering education. Experience our commitment to empowering individuals, creating opportunities, and fostering hope. Together, let's revolutionize the landscape of engineering education."
				/>
				<meta property="og:image" content="/images/wae-seo.png"></meta>
				<meta property="og:url" content={`${myLink}/calendar`}></meta>
				<meta property="og:site_name" content={"We Are Engineer"}></meta>
				<meta name="twitter:title" content="Events | We Are Engineer"></meta>
				<meta
					name="twitter:description"
					content="Join us on an emotional journey of transformation as We Are Engineer shapes the future of engineering education. Experience our commitment to empowering individuals, creating opportunities, and fostering hope. Together, let's revolutionize the landscape of engineering education."
				></meta>
				<meta name="twitter:image" content="/images/wae-seo.png"></meta>
				<meta name="twitter:site" content="@werengineer"></meta>
				<meta name="twitter:creator" content="@werngineer"></meta>
				<meta name="robots" content="max-image-preview:large" />
			</head>
			<main>{children}</main>
		</>
	);
}
EventsLayout.propTypes = {
	children: PropTypes.any
};
