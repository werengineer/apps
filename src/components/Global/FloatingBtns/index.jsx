import { SettingsContext } from "@context/settings";
import { Add, Close, Save } from "@mui/icons-material";
import { Fab } from "@mui/material";
import React, { useContext } from "react";
import { usePathname } from "next/navigation";
import { useSnackbar } from "notistack";
import { useState } from "react";
import CreateButtons from "../Modals/CreateButtons";

export const FloatingBtns = () => {
    
	const settingsContext = useContext(SettingsContext);
	const { dataChanged, handleSubmit } = settingsContext;
	const [menuOpen, setMenuOpen] = useState(false);
	const { enqueueSnackbar } = useSnackbar();
	const path = usePathname();

	return (
		<>
			<Fab
				sx={{
					display: [dataChanged && path === "/settings" ? "flex" : "none", "none", "none"],
					backgroundColor: "#05D9D7",
					bottom: "3%",
					right: "5%",
					position: "fixed"
				}}
				onClick={() => handleSubmit(enqueueSnackbar)}
			>
				<Save
					sx={{
						color: "white"
					}}
				/>
			</Fab>

			<Fab
				sx={{
					display: [
						path === "/" || path === "/questions" || path === "/stories"
							? "flex"
							: "none",
						"none",
						"none"
					],
					backgroundColor: "#05D9D7",
					bottom: "3%",
					right: "5%",
					position: "fixed"
				}}
				onClick={() => setMenuOpen(true)}
			>
				{menuOpen ? (
					<Close
						sx={{
							color: "black"
						}}
					/>
				) : (
					<Add
						sx={{
							color: "black"
						}}
					/>
				)}
			</Fab>

			<CreateButtons menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
		</>
	);
};
