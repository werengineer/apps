"use client";
import { SnackbarProvider } from "notistack";
import { RecoilRoot } from "recoil";
import { Contexts } from "@context";
import { usePathname } from "next/navigation";
import { BackgroundAnim, Navbar, SideNav, TopBar } from "@components";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import ThemeProvider  from "@mui/material/styles/ThemeProvider";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@theme";
import PropTypes from "prop-types";
import { pages } from "@data/pages";
import { Modals } from "../Modals";
import { FloatingBtns } from "../FloatingBtns";
import { Popups } from "../Popups";

var logger = (function () {
	var oldConsoleLog = null;
	var pub = {};

	pub.enableLogger = function enableLogger() {
		if (oldConsoleLog == null) return;

		window["console"]["log"] = oldConsoleLog;
	};

	pub.disableLogger = function disableLogger() {
		oldConsoleLog = console.log;
		window["console"]["log"] = function () {};
	};

	return pub;
})();

export const AllProviders = ({ children }) => {
	const [hydrated, setHydrated] = useState(false);
	const path = usePathname();

	useEffect(() => {
		// This forces a rerender, so the date is rendered
		// the second time but not the first
		setHydrated(true);
	}, []);
	if (!hydrated) {
		// Returns null on first render, so the client and server match
		return null;
	}
	const topbarCondition =
		path === "/" ||
		path === "/signin" ||
		path === "/signup" ||
		path === "/calendar" ||
		path === "/calendar?tab=timeline" ||
		path === "/calendar?tab=cal" ||
		path === "/signup/success" ||
		path === "/privacy" ||
		path === "/subscriptions" ||
		path === "/terms" ||
		path === "/contact";
	// alert(topbarCondition);
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Contexts>
				<SnackbarProvider
					maxSnack={2}
					anchorOrigin={{ horizontal: "center", vertical: "top" }}
					autoHideDuration={3000}
				>
					<RecoilRoot>
						<Box display={pages.includes(path.split("/")[1]) ? "flex" : "none"}>
							<TopBar />
						</Box>
						<Box
							sx={{
								width: "100vw",
								flexDirection: "column",
								gap: "3vh"
							}}
							display={topbarCondition ? "flex" : "none"}
						>
							<Navbar />
						</Box>
						<Modals />
						<Popups />
						<BackgroundAnim />
						{children}
						<Box
							position={"fixed"}
							right={0}
							bgcolor={"#212121"}
							top={50}
							display={topbarCondition ? "none" : ["none", "none", "flex"]}
						>
							<SideNav />
						</Box>
						<FloatingBtns />
					</RecoilRoot>
				</SnackbarProvider>
			</Contexts>
		</ThemeProvider>
	);
};

AllProviders.propTypes = {
	children: PropTypes.any
};
