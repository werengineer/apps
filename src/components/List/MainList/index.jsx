import { ListContext } from "@context/list";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import React from "react";
import { useContext } from "react";
import { ListCard } from "../ListCard";
import { useRecoilState } from "recoil";
import { listModalState } from "@atom";
import Image from "next/image";
import { Lock } from "@mui/icons-material";
import { getEngineer } from "@cookies";

export const MainList = () => {
	const listContext = useContext(ListContext);
	const [open, setOpen] = useRecoilState(listModalState);
	const { lists, loading } = listContext;
	const engineer = getEngineer();

	console.log("Test", lists);

	return (
		<Box
			sx={{
				px: "20px",
				pt: "20px",
				borderRight: ["none", "1px solid grey"],
				height: ["90vh", "89vh"],
				overflowY: "scroll",
				overflowX: "hidden"
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
			) : lists?.length > 0 ? (
				<>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							gap: "10px"
						}}
					>
						{lists?.map((l, i) => (
							<ListCard key={i} data={l} />
						))}
					</Box>
					<Box
						display={"flex"}
						justifyContent={"center"}
						sx={{
							mt: 3,
							mb: 1
						}}
					>
						<Button
							alignSelf={"center"}
							sx={{ color: "#50D9D7", gap: 1 }}
							onClick={() => setOpen(true)}
						>
							Create new list
						</Button>
					</Box>
				</>
			) : (
				<Box
					display={"flex"}
					flexDirection={"column"}
					alignItems={"center"}
					justifyContent={"center"}
					height={"90%"}
				>
					<Image src="/images/list.svg" width={200} height={300} alt="No list" />
					<Typography textAlign={"center"} fontSize="23px">
						You haven&#39;t created any list yet!
					</Typography>
					<Button
						alignSelf={"center"}
						sx={{ color: "#50D9D7", gap: 1 }}
						onClick={() => setOpen(true)}
						disabled={engineer.isEmailVerified && engineer.isMobileVerified ? false : true}
					>
						<Lock
							sx={{
								display:
									engineer.isEmailVerified && engineer.isMobileVerified ? "none" : "flex"
							}}
						/>{" "}
						Create new list
					</Button>
				</Box>
			)}
		</Box>
	);
};
