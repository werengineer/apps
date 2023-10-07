import {
	BookmarkAdd,
	BookmarkRemove,
	DeleteRounded,
	MoreHoriz,
	MoreVert
} from "@mui/icons-material";
import { Avatar, Box, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import React from "react";
import { getEngineer } from "@cookies";
import { PropTypes } from "prop-types";
import { useSetRecoilState } from "recoil";
import { listModalState, removeListModalState } from "@atom";
import { LoginModal } from "@components/Global/Modals/LoginModal";
import { ProfileContext } from "@context/profile";
import { useContext } from "react";
import { deleteStory } from "@components/Stories/Functions";
import { useSnackbar } from "notistack";
import { useRouter } from "next/navigation";
import { useStoryStore } from "store/storiesStore";
import Link from "next/link";

export const StoryHeader = ({
	creator,
	data,
	openListMenu,
	setAnchorEl,
	anchorEl,
	setLoginModal
}) => {
	const engineer = getEngineer();
	const setOpen = useSetRecoilState(listModalState);
	const setOpenRemoveListModal = useSetRecoilState(removeListModalState);
	const { enqueueSnackbar } = useSnackbar();
	const router = useRouter();
	const updateStories = useStoryStore((state) => state.updateStories);

	const handleDeleteStory = async () => {
		try {
			if (data.engineer === engineer._id) {
				await deleteStory(data._id);
				enqueueSnackbar("Story Deleted", { variant: "success" });
				router.refresh();
				updateStories({ id: data?._id });
			}
		} catch (error) {
			enqueueSnackbar(error.message || "Unable to delete the story", { variant: "warning" });
		}
	};

	console.log(data?.tag);

	return (
		<>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					position: "relative"
				}}
			>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						gap: "10px"
					}}
				>
					<Link href={`/profile/${creator?._id}`} style={{cursor: "pointer"}} >
						<Avatar
							src={creator?.avatar}
							sx={{
								fontSize: ["20px"],
								width: ["30px", "35px", "40px"],
								height: ["30px", "35px", "40px"]
							}}
						/>
					</Link>
					<Link href={`/profile/${creator?._id}`} style={{cursor: "pointer"}}>
						<Typography
							sx={{
								fontSize: ["12px", "14px", "16px"]
							}}
						>
							{creator?.name}
						</Typography>
					</Link>
					<Typography
						sx={{
							display: ["flex", "flex", "none"],
							fontSize: "12px",
							color: "grey"
						}}
					>
						{data?.answers?.length} Answers
					</Typography>
				</Box>

				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						gap: "20px"
					}}
				>
					<Typography
						sx={{
							display: ["none", "none", data?.tag !== null ? "flex" : "none"],
							fontSize: "12px",
							px: "10px",
							py: "2px",
							color: "#05D9D7",
							backgroundColor: "#1D5352",
							borderRadius: "5px"
						}}
					>
						{data?.tag}
					</Typography>

					<IconButton
						id={`${data?._id}`}
						aria-controls={openListMenu ? "positioned-menu" : undefined}
						aria-haspopup="true"
						aria-expanded={openListMenu ? "true" : undefined}
						onClick={(e) => {
							setAnchorEl(e.currentTarget);
						}}
					>
						<MoreHoriz
							sx={{
								display: ["flex", "flex", "none"]
							}}
						/>

						<MoreVert
							sx={{
								display: ["none", "none", "flex"]
							}}
						/>
					</IconButton>
				</Box>

				{/* //Menu Section */}
				<Menu
					id={data?._id}
					aria-labelledby="positioned-menu"
					anchorEl={anchorEl}
					open={openListMenu}
					onClose={() => setAnchorEl(null)}
					anchorOrigin={{
						vertical: "bottom",
						horizontal: "right"
					}}
					transformOrigin={{
						vertical: "top",
						horizontal: "left"
					}}
					PaperProps={{
						sx: {
							width: "200px",
							border: "1px solid #05D9D7",
							borderRadius: "15px"
						}
					}}
					sx={{
						ml: ["0px", "-200px"],
						mt: "20px"
					}}
				>
					<MenuItem
						sx={{
							color: "#05D9D7",
							display: "flex",
							gap: "10px"
						}}
						onClick={() => {
							engineer ? setOpen(true) : setLoginModal(true);
							setAnchorEl(null);
						}}
					>
						<BookmarkAdd
							sx={{
								fontSize: "20px"
							}}
						/>
						<Typography
							sx={{
								fontSize: "13px"
							}}
						>
							Add To List
						</Typography>
					</MenuItem>

					<MenuItem
						sx={{
							color: "#05D9D7",
							display: "flex",
							gap: "10px"
						}}
						onClick={() => {
							engineer ? setOpenRemoveListModal(true) : setLoginModal(true);
							setAnchorEl(null);
						}}
					>
						<BookmarkRemove
							sx={{
								fontSize: "20px"
							}}
						/>
						<Typography
							sx={{
								fontSize: "13px"
							}}
						>
							Remove From List
						</Typography>
					</MenuItem>
					{data.engineer === engineer._id && (
						<MenuItem
							sx={{
								color: "#05D9D7",
								display: "flex",
								gap: "10px"
							}}
							onClick={() => {
								engineer ? handleDeleteStory() : setLoginModal(true);
								setAnchorEl(null);
							}}
						>
							<DeleteRounded
								sx={{
									fontSize: "20px"
								}}
							/>
							<Typography
								sx={{
									fontSize: "13px"
								}}
							>
								Delete Story
							</Typography>
						</MenuItem>
					)}
				</Menu>
			</Box>
			<LoginModal />
		</>
	);
};

StoryHeader.propTypes = {
	creator: PropTypes.any,
	data: PropTypes.any,
	openListMenu: PropTypes.any,
	setAnchorEl: PropTypes.any,
	anchorEl: PropTypes.any,
	setOpen: PropTypes.any,
	setLoginModal: PropTypes.any,
	setOpen1: PropTypes.any
};
