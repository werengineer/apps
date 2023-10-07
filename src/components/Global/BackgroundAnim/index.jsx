"use client";
import Box from "@mui/material/Box";
import React, { useEffect, useState } from "react";
import "./bg.css";
import { usePathname } from "next/navigation";

export const BackgroundAnim = () => {
	const pathName = usePathname();
	const [subscriptions, setSubscriptions] = useState();

	useEffect(() => {
		if (pathName === "/subscriptions") {
			setSubscriptions(true);
		} else {
			setSubscriptions(false);
		}
	}, [pathName]);
	return (
		<>
			<Box
				sx={{
					background: subscriptions
						? "linear-gradient(180deg, #F7EF8A 0%, #EDC967 29.17%, #D2AC47 77.60%, #AE8625 100%)"
						: "linear-gradient(180deg, #50D9D7 0%, #4C75F2 100%)",
					filter: "blur(300px)",
					zIndex: -1,
					display: "flex",
					flexDirection: "row",
					alignItems: "flex-start",
					padding: "10px",
					gap: "10px",
					position: "fixed",
					width: "292px",
					height: "292px",
					right: "-22px",
					top: "-25px",
					animation: "slideReverse 3s ease-in-out infinite"
				}}
			></Box>
			<Box
				sx={{
					background: subscriptions
						? "linear-gradient(180deg, #F7EF8A 0%, #EDC967 29.17%, #D2AC47 77.60%, #AE8625 100%)"
						: "linear-gradient(180deg, #50D9D7 0%, #4C75F2 100%)",
					filter: "blur(300px)",
					display: "flex",
					flexDirection: "row",
					zIndex: -1,
					alignItems: "flex-start",
					padding: "10px",
					gap: "10px",
					position: "fixed",
					width: "366px",
					height: "366px",
					left: "1115px",
					top: "668px",
					animation: "slide 6s ease-in-out infinite"
				}}
			></Box>
		</>
	);
};
