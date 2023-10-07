import { searchModalState } from "@atom";
import { ArrowBack, SearchOutlined } from "@mui/icons-material";
import { Box, Button, Drawer, Fade, IconButton, InputBase, Modal, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useRecoilState } from "recoil";

export const SearchModal = () => {
	const [open, setOpen] = useRecoilState(searchModalState);
	const [searchValue, setSearchValue] = useState("");
	const router = useRouter();
	const goToSearch = (q) => {
		if (q.keyCode === 13) {
			router.push(`/search?q=${q.target.value}`);
			setOpen(false);
		}
	};
	return (
		<Drawer
			open={open}
			anchor="left"
			onClose={() => setOpen(false)}
			sx={{
				width: "100vw",
				display: ["flex", "flex", "none"]
			}}
			PaperProps={{
				sx: {
					width: "100vw",
					backgroundColor: "rgba(0, 0, 0, 0.5)",
					backdropFilter: "blur(5px)"
				}
			}}
		>
			<Box
				sx={{
					dipslay: "flex",
					flexDirection: "column",
					pl: 2.5,
					px: 2.5,
					mt: 9,
					pb: 5,
					maxHeight: "85vh",
					overflowY: "hidden"
				}}
			>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between"
					}}
				>
					<IconButton onClick={() => setOpen(false)}>
						<ArrowBack sx={{ color: "#05D9D7" }} />
					</IconButton>
					<Button
						onClick={() => {
							router.push(`/search?q=${searchValue}`);
							setOpen(false);
						}}
					>
						Search
					</Button>
				</Box>
				<InputBase
					sx={{
						display: ["flex", "none", "none"],
						border: "1.55px solid #1C5352",
						paddingX: "20px",
						backgroundColor: "#3C3B41",
						width: "full",
						height: "40px",
						borderRadius: "30px",
						color: "#05D9D7",
						mt: 5
					}}
					startAdornment={<SearchOutlined sx={{ marginRight: "1vw" }} />}
					value={searchValue}
					onChange={(e) => setSearchValue(e.target.value)}
					onKeyDown={(e) => goToSearch(e.target.value)}
					onKeyDownCapture={(e) => goToSearch(e)}
					placeholder={"Search"}
				/>
			</Box>
		</Drawer>
	);
};
