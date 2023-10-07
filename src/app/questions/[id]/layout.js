"use client";
import { API_URL } from "@constants";
import { SetQuestionContext } from "@context/setQuestion";
import axios from "axios";
import { usePathname, useParams } from "next/navigation";
import PropTypes from "prop-types";
import React, { useContext, useEffect, useState } from "react";

export const myLink = "https://alpha.weareengineer.com";

export default function QuestionsPageLayout({ children }) {
	const [meta, setMeta] = useState();
	var params = useParams();

	useEffect(() => {
		const fetchQuestion = async () => {
			try {
				const res = await axios.get(`${API_URL}/question/get?id=${params.id}`);
				setMeta(res.data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchQuestion();
	}, []);

	return (
		<>
			<head>
				<title>{meta?.title}</title>
				<meta name="viewport" content="width=device-width,initial-scale=1"></meta>
				<meta name="description" content={`${meta?.description}`} />
				{/* this will be changed to index, follow in beta */}
				<meta name="robots" content="index, follow"></meta>
				<link rel="canonical" href={`${myLink}/questions/${params.id}`} />
				<meta property="og:type" content="website" />
				<meta property="og:title" content={meta?.title} />
				<meta
					property="og:description"
					content="Join us on an emotional journey of transformation as We Are Engineer shapes the future of engineering education. Experience our commitment to empowering individuals, creating opportunities, and fostering hope. Together, let's revolutionize the landscape of engineering education."
				/>
				<meta property="og:image" content="/images/wae-seo.png"></meta>
				<meta property="og:url" content={`${myLink}/questions/${params.id}`}></meta>
				<meta property="og:site_name" content={"We Are Engineer"}></meta>
				<meta name="twitter:title" content={meta?.title}></meta>
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

QuestionsPageLayout.propTypes = {
	children: PropTypes.any,
	params: PropTypes.any
};
