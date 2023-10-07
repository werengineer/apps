import { Box, Divider, Fade, Typography } from "@mui/material";
import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getGeneralEngineer } from "@api";
import { loginModalState } from "@atom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { PropTypes } from "prop-types";
import { RemoveListModal } from "@components/Global/Modals/RemoveListModal";

import { StoryHeader } from "./StoryHeader";
import { StoryContent } from "./StoryContent";
import { StoryCarousel } from "./StoryCarousel";
import { ListModal } from "@components/Global";
import { LoginModal } from "@components/Global/Modals/LoginModal";
import { StoryBottom } from "./StoryBotton";

export const Story = ({ data }) => {
	const setLoginModal = useSetRecoilState(loginModalState);
	const [creator, setCreator] = useState(false);
	const [imageOpen, setImageOpen] = useState(false);
	const [open, setOpen] = React.useState(false);
	const [open1, setOpen1] = useState(false);
	const [anchorEl, setAnchorEl] = useState(null);
	const openListMenu = Boolean(anchorEl);

	useEffect(() => {
		const desc = document.getElementById(`description-${data?._id}`);
		desc.innerHTML = data?.description;
		var childElements = desc?.children;
		for (var i = 0; i < childElements?.length; i++) {
			childElements[i].style.textAlign = "left";
		}

		const fetchCreator = async () => {
			const creator = await getGeneralEngineer({ id: data?.engineer });
			setCreator(creator);
		};
		fetchCreator();
	}, []);

	const audioRef = useRef();

	const playAudio = () => {
		if ("vibrate" in window.navigator) {
			window.navigator.vibrate(50);
		}
		audioRef.current.play();
	};

	return (
		<Box
			display={"flex"}
			flexDirection={"column"}
			width={["100%"]}
			gap={"2vh"}
			position={"relative"}
			// mb={2}
		>
			<audio ref={audioRef} src="/sounds/like.wav" />
			<StoryHeader
				creator={creator}
				data={data}
				openListMenu={openListMenu}
				setAnchorEl={setAnchorEl}
				anchorEl={anchorEl}
				setOpen={setOpen}
				setOpen1={setOpen1}
				setLoginModal={setLoginModal}
			/>
			<StoryContent data={data} setLoginModal={setLoginModal} />
			<StoryCarousel data={data} setOpen={setImageOpen} open={imageOpen} />
			<StoryBottom
				storyID={data?._id}
				reactions={data?.reactions?.length}
				playAudio={playAudio}
			/>
			<Divider
				sx={{
					backgroundColor: "#1D5352",
					width: "97.5%"
				}}
			/>
			{/* <FullScreenModal open={open2} setOpen={setOpen2} imageUrl={ImageUrl} />
			 */}
			<RemoveListModal storyId={data?._id} story={true} />
			<LoginModal />
			<ListModal storyId={data?._id} story={true} />
		</Box>
	);
};

Story.propTypes = {
	data: PropTypes.any
};
