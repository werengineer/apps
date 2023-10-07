"use client";
import { Box, Modal, Stack } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Slide } from "@mui/material";
import PropTypes from "prop-types";

export const Loader = ({ open }) => {
	const [loading, setLoading] = useState([false, false, false, false, false]);
	const [twoSec, setTwoSec] = useState(1);

	setTimeout(() => {
		setTwoSec(twoSec + 1);
	}, 3000);

	useEffect(() => {
		const main = async () => {
			for (const [index, _] of loading.entries()) {
				setLoading((v) => [...v.slice(0, index), true, ...v.slice(index + 1)]);
				await new Promise((r) => setTimeout(r, 500));
			}
			setLoading([false, false, false, false, false]);
		};

		main();
	}, [twoSec]);

	return (
		<Modal
			open={open}
			sx={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				backdropFilter: "blur(10px)",
				overflowY: "scroll",
				paddingTop: ["25vh", "0vh"],
				minHeight: "100vh",
				position: "fixed",
				overflow: "hidden"
			}}
		>
			<Stack sx={{ outline: "none" }} direction={"column"} alignItems="center" spacing={1}>
				<Slide sx={{ outline: "none" }} in={loading[3]} direction="down">
					<Image
						src="/images/loader/O.png"
						style={{ marginLeft: 20 }}
						width={25}
						height={25}
						alt="O"
					/>
				</Slide>
				<Box>
					<Slide sx={{ outline: "none" }} in={loading[0]} direction="right">
						<Image src="/images/loader/W.png" width={70} height={55} alt="W" />
					</Slide>
					<Slide sx={{ outline: "none" }} in={loading[2]} direction="up">
						<Image src="/images/loader/A.png" width={55} height={55} alt="A" />
					</Slide>
					<Slide sx={{ outline: "none" }} in={loading[1]} direction="left">
						<Image src="/images/loader/E.png" width={55} height={55} alt="E" />
					</Slide>
				</Box>
				<Slide sx={{ outline: "none" }} in={loading[4]} direction="up">
					<Image
						src="/images/loader/weareengineer.png"
						width={150}
						height={20}
						alt="weareengineer"
					/>
				</Slide>
			</Stack>
		</Modal>
	);
};

Loader.propTypes = {
	open: PropTypes.any
};
