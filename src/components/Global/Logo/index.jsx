"use client";
import { getEngineer } from "@cookies";
import { Box, Tooltip } from "@mui/material";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

export const Logo = ({ index }) => {
	const router = useRouter();
	const engineer = getEngineer();
	const pathName = usePathname();
	const [subscriptions, setSubscriptions] = useState(false);

	useEffect(() => {
		if (pathName === "/subscriptions") {
			setSubscriptions(true);
		} else {
			setSubscriptions(false);
		}
	}, [pathName]);

	return (
		<Tooltip title="We are engineer">
			<Box
				onClick={() => {
					engineer !== false ? router.push("/") : router.push("/");
				}}
				sx={{
					marginRight: "50px",
					display: [index !== 0 && index !== undefined ? "none" : "flex", "flex"],
					fontSize: "30px",
					cursor: "pointer",
					width: "fit-content"
				}}
			>
				<Image
					alt="logo"
					priority={true}
					width={subscriptions ? 130 : 90}
					height={subscriptions ? 90 : 60}
					src={subscriptions ? "/images/golden-logo.png" : "/images/logo.svg"}
				/>
			</Box>
		</Tooltip>
	);
};

Logo.propTypes = {
	index: PropTypes.any
};
