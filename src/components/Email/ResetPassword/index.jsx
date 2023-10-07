import Box from "@mui/material/Box";
import React from "react";
import { Main } from "./Main";
import { Success } from "./Success";
import { Error } from "./Error";
import { Loading } from "./Loading";

export const ResetPassword = () => {
	return (
		<Box
			sx={{
				width: ["100%", "100%", "80%"],
				height: "100vh",
				ml: [0, 3, 0],
				borderRight: ["0px", "0px", "1px solid grey"]
			}}
		>
			<Main />
			<Success />
			<Error />
			<Loading />
		</Box>
	);
};
