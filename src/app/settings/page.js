"use client";
import {
	Document,
	EditProfile,
	EducationDetail,
	ManageAccounts,
	ResetPass,
	YourInterest
} from "@components";
import { SettingsContext } from "@context/settings";
import { getEngineer } from "@cookies";
import { Formiz, useForm } from "@formiz/core";
import { Box, Divider } from "@mui/material";
import React, { useContext } from "react";

export default function SettingsPage() {
	const form = useForm();
	const engineer = getEngineer();
	const { setData, setDataChanged } = useContext(SettingsContext);

	const handleChange = () => {
		setData({ ...form.flatValues });
		setDataChanged(true);
	};
	return (
		<Box
			display={"flex"}
			sx={{
				mt: [8, 9],
				ml: ["auto", 10],
				maxWidth: "100vw",
				display: "flex",
				overflowY: "hidden"
			}}
		>
			<Box
				sx={{
					width: ["100%", "100%", "75%"],
					height: ["92vh", "89vh"],
					overflowY: "scroll",
					px: [2, 0],
					borderRight: ["none", "1px solid gray"]
				}}
			>
				<Box display={"flex"} gap={5} flexDirection={"column"} mb={2}>
					<Formiz connect={form} onChange={handleChange}>
						<EditProfile id={engineer._id} />
						<YourInterest />
						<EducationDetail />
						<Document form={form} engineer={engineer} />
						<ManageAccounts />
						{/* <DeactivateAccount /> */}
					</Formiz>
					<ResetPass />
				</Box>
			</Box>
			<Divider
				sx={{
					display: ["none", "none", "flex"],
					position: "fixed",
					right: "23vw",
					backgroundColor: "#1D5352"
				}}
				orientation="vertical"
				light
			/>
		</Box>
	);
}
