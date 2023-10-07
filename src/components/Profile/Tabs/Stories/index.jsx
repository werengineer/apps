import React, { useContext } from "react";
import { ProfileContext } from "@context/profile";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import { Story } from "@components/Stories/Story";
import { PhoneBluetoothSpeakerRounded } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { useRecoilState } from "recoil";
import { storyModalState } from "@atom";
import { Write } from "./Write";

export const Stories = () => {
	const profileContext = useContext(ProfileContext);
	const { stories, loading, qnsLoader, fetchStories, completed } = profileContext;
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				gap: "10px",
				my: "10px",
				px: "20px",
				mt: "30px"
			}}
		>
			{loading ? (
				<Box
					sx={{
						display: "flex",
						width: "100%",
						justifyContent: "center",
						alignItems: "center",
						color: "#1D5352"
					}}
				>
					<CircularProgress color="inherit" />
				</Box>
			) : stories?.length == 0 ? (
				<Write />
			) : (
				<>
					{stories?.map((data, i) => (
						<Story data={data} key={i} />
					))}
				</>
			)}

			<Box
				sx={{
					display: stories?.length === 0 ? "none" : "flex"
				}}
			>
				<LoadingButton
					loading={qnsLoader}
					onClick={() => fetchStories()}
					sx={{
						mx: "auto",
						borderRadius: "30px",
						backgroundColor: "#212121",
						border: "1px solid #05D9D7",
						color: "#05D9D7",
						px: "20px",
						display: completed?.stories === true ? "none" : "false"
					}}
				>
					View More
				</LoadingButton>
				<Typography
					sx={{
						color: "#1D5352",
						display: completed?.stories === true ? "flex" : "none",
						textAlign: "center",
						mx: "auto"
					}}
				>
					And that&apos;s it!
				</Typography>
			</Box>
		</Box>
	);
};
