"use client";
import { BookmarkBorder, Share } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import { useSnackbar } from "notistack";
import React from "react";
import { PropTypes } from "prop-types";
import { NEXT_PUBLIC_WEBSITE_URL } from "@constants";
import { listModalState, loginModalState } from "@atom";
import { useSetRecoilState } from "recoil";
import { getEngineer } from "@cookies";
import { LoginModal } from "@components/Global/Modals/LoginModal";

export const RightSection = ({ data, setOpen }) => {
	const engineer = getEngineer();
	const { enqueueSnackbar } = useSnackbar();
	const setListModal = useSetRecoilState(listModalState);
	const setLoginModal = useSetRecoilState(loginModalState);

	const handleShare = async () => {
		console.log(data);
		const shareData = {
			title: data?.title,
			// text: data?.description?.slice(0, 100),
			url: `${NEXT_PUBLIC_WEBSITE_URL}/questions/${data?._id}`
		};
		console.log(shareData);
		try {
			await navigator.share(shareData);
			enqueueSnackbar("Shared", { variant: "info" });
		} catch (error) {
			enqueueSnackbar("Error While Sharing", { variant: "error" });
		}
	};

	return (
		<Box
			sx={{
				display: "flex",
				gap: "2vw"
			}}
		>
			<Button
				sx={{
					color: "#1D5352",
					borderRadius: "25px",
					px: 2
				}}
				onClick={handleShare}
			>
				<Share
					sx={{
						mr: 2
					}}
				/>
				<Typography sx={{ display: ["none", "none", "flex"] }}>Share</Typography>
			</Button>
			<Button
				sx={{
					color: "#1D5352",
					borderRadius: "25px",
					px: 2
				}}
				onClick={() => (engineer ? setListModal(true) : setLoginModal(true))}
			>
				<BookmarkBorder
					sx={{
						mr: 2
					}}
				/>
				<Typography sx={{ display: ["none", "none", "flex"] }}>Add To List</Typography>
			</Button>
			<LoginModal />
		</Box>
	);
};

RightSection.propTypes = {
	data: PropTypes.any,
	setOpen: PropTypes.any
};
