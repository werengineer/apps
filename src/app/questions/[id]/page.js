"use client";
import { QuestionMain } from "@components/QuestionPage";
import { API_URL } from "@constants";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function QuestionPage() {
	const [question, setQuestion] = useState({});
	const [loading, setLoading] = useState(true);
	var pathname = usePathname();
	pathname = pathname.split("/");

	useEffect(() => {
		const fetchQuestion = async () => {
			const res = await axios.get(`${API_URL}/question/get?id=${pathname[2]}`);
			setQuestion(res.data);
			setLoading(false);
		};
		fetchQuestion();
	}, []);
	return (
		<>
			<Box
				display={"flex"}
				sx={{
					mt: [9],
					ml: ["auto", 7],
					maxWidth: "100vw",
					display: "flex",
					borderRight: ["0px", "0px", "1px solid grey"],
					overflowY: "hidden"
				}}
			>
				<Box
					sx={{
						display: "flex",
						width: ["100%", "100%", "74%"]
					}}
				>
					{loading ? (
						<Box
							sx={{
								display: "flex",
								width: "100%",
								height: ["90vh", "87vh"],
								justifyContent: "center",
								alignItems: "center",
								color: "#1D5352"
							}}
						>
							<CircularProgress color="inherit" />
						</Box>
					) : (
						<QuestionMain data={question} />
					)}
				</Box>
			</Box>
		</>
	);
}

// export async function getStaticPaths() {
// 	var paths;

// 	try {
// 		const res = await axios.get(`${API_URL}/question/get`);
// 		console.log(res.data);
// 		const data = res.data;

// 		paths = data.map((d) => {
// 			return {
// 				params: {
// 					id: d._id
// 				}
// 			};
// 		});
// 	} catch (error) {
// 		console.log("getStaticPaths Questions [id]", error);
// 	}

// 	return {
// 		paths: paths,
// 		fallback: true
// 	};
// }

// export const getStaticProps = async ({ params }) => {
// 	var data;

// 	try {
// 		const id = params.id;
// 		const res = await axios.get(`${API_URL}/question/get?id=${params}`);
// 		data = res.data;
// 	} catch (error) {
// 		console.log("getStaticProps Questions [id]", error);
// 	}

// 	return {
// 		props: {
// 			question: data
// 		}
// 	};
// };

// QuestionPage.propTypes = {
// 	Question: PropTypes.any
// };
