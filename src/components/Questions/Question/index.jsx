"use client";
import { Box, Divider } from "@mui/material";
import React, { useRef, useState, useEffect } from "react";
import { getGeneralEngineer } from "@api";
import { loginModalState } from "@atom";
import { useRecoilState } from "recoil";
import { PropTypes } from "prop-types";

import { QuestionHeader } from "./QuestionHeader";
import { QuestionContent } from "./QuestionContent";
import { QuestionCarousel } from "./QuestionCarousel";
import { QuestionBottom } from "./QuestionBottom";

import { RemoveListModal } from "@components/Global/Modals/RemoveListModal";
import { LoginModal } from "@components/Global/Modals/LoginModal";
import { ListModal } from "@components/Global";
import { useSnackbar } from "notistack";

export const Question = ({ data }) => {
	const [login, setLoginModal] = useRecoilState(loginModalState);
	const [creator, setCreator] = useState(false);
	const [anchorEl, setAnchorEl] = useState(null);
	const openListMenu = Boolean(anchorEl);
	const { enqueueSnackbar } = useSnackbar();

	const [reactionDrawer, setReactionDrawer] = useState(null);

	useEffect(() => {
		const desc = document.getElementById(`description-${data?._id}`);
		desc.innerHTML = data?.description;
		var childElements = desc?.children;
		for (var i = 0; i < childElements?.length; i++) {
			childElements[i].style.textAlign = "left";
		}

		const fetchCreator = async () => {
			const creator = await getGeneralEngineer({ id: data.engineer });
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

	// const handleReactionDrawer = (e) => {
	// 	console.log(e);
	// 	setTimeout(() => console.log(e.currentTarget), 500);
	// };

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
			<QuestionHeader
				creator={creator}
				data={data}
				openListMenu={openListMenu}
				setAnchorEl={setAnchorEl}
				anchorEl={anchorEl}
				setLoginModal={setLoginModal}
			/>

			<QuestionContent data={data} setLoginModal={setLoginModal} />
			<QuestionCarousel data={data} />
			<QuestionBottom
				questionID={data?._id}
				reactions={data?.reactions?.length}
				playAudio={playAudio}
			/>

			<Divider
				sx={{
					backgroundColor: "#1D5352",
					width: "97.5%",
					mb: 2
				}}
			/>
			<RemoveListModal questionId={data?._id} question={true} />
			<LoginModal />
			<ListModal questionId={data?._id} question={true} />
		</Box>
	);
};

Question.propTypes = {
	data: PropTypes.any
};
