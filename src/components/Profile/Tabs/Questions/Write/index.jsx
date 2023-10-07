import { questionModalState } from "@atom";
import { ProfileContext } from "@context/profile";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useContext } from "react";
import { useRecoilState } from "recoil";

export const Write = () => {
	const profileContext = useContext(ProfileContext);
	const { questions, self } = profileContext;
	const [open, setOpen] = useRecoilState(questionModalState);

	return (
		<>
			{questions?.length === 0 && (
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						gap: "15px",
						alignItems: "center"
					}}
				>
					<Typography
						sx={{
							fontSize: "14px",
							color: "#1D5352",
							textAlign: "center",
							display: self ? "flex" : "none"
						}}
					>
						You do not have any question asked yet, try exploring WAE
					</Typography>
					<Typography
						sx={{
							fontSize: "14px",
							color: "#1D5352",
							textAlign: "center",
							display: !self ? "flex" : "none",
							mt: ["10px", "70px"]
						}}
					>
						No questions to show
					</Typography>
					<Box
						sx={{
							display: self ? "flex" : "none"
						}}
					>
						<Button
							onClick={() => setOpen(true)}
							sx={{
								textDecoration: "underline",
								textDecorationColor: "#1D5352",
								color: "#1D5352",
								":hover": {
									backgroundColor: "transparent",
									textDecoration: "underline"
								}
							}}
							disableRipple
						>
							Ask A Question
						</Button>
					</Box>
				</Box>
			)}
		</>
	);
};
