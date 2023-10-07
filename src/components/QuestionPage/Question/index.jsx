"use client";
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import Box from "@mui/material/Box";
import React, { useEffect, useRef, useState } from "react";
import { Reaction, fetchEngineer1 } from "./Functions";
import { LongPressEventType, useLongPress } from "use-long-press";
import { QuestionHeader } from "./QuestionHeader";
import { QuestionContent } from "./QuestionContent";
import { QuestionFiles } from "./QuestionFiles";
import { QuestionTags } from "./QuestionTags";
import { QuestionFooter } from "./QuestionFooter";
import { PropTypes } from "prop-types";
import { ListModal } from "@components/Global";

export const Question = ({ data }) => {
	const [engineer, setEngineer] = useState();
	const [visible, setVisible] = useState(false);
	const [open, setOpen] = useState(false);
	const [liked, setLiked] = useState();
	const [ImageUrl, setImageUrl] = useState("");
	const [count, setCount] = useState(data?.reactions?.length);
	const [reactionDrawer, setReactionDrawer] = useState(null);
	const reactionOpen = Boolean(reactionDrawer);
	const [openReaction, setOpenReaction] = useState(false);
	const [enabled, setEnabled] = React.useState(true);

	// useEffects and functions
	useEffect(() => {
		for (let i = 0; i < data?.files; i++) {
			if (data?.files?.link.slice(-3) === "pdf") {
				setVisible(true);
				break;
			}
		}

		const fetchEngineer = async () => {
			try {
				console.log(data.engineer);
				const engg = await fetchEngineer1(data);
				const res = await Reaction(data);
				setLiked(res);
				setEngineer(engg.data);
			} catch (error) {
				console.log("QuestionPage/Question 41", error);
			}
		};

		fetchEngineer();

		const desc = document.getElementById(`description-${data?._id}`);
		desc.innerHTML = data?.description;
		var childElements = desc?.children;
		for (var i = 0; i < childElements?.length; i++) {
			childElements[i].style.textAlign = "left";
		}
	}, []);

	const audioRef = useRef();
	const playAudio = () => {
		if ("vibrate" in window.navigator) {
			window.navigator.vibrate(50);
		}
		audioRef.current.play();
	};

	const callback = React.useCallback(() => {
		setLongPressed(true);
	}, []);

	const bind = useLongPress(enabled ? callback : null, {
		onStart: (event, meta) => {
			setOpenReaction(true);
		},
		onFinish: (event, meta) => {
			setLongPressed(false);
		},
		onCancel: (event, meta) => {
			console.log("Press cancelled", meta);
		},
		filterEvents: () => true,
		threshold: 400,
		captureEvent: true,
		cancelOnMovement: false,
		cancelOutsideElement: true,
		detect: LongPressEventType.Pointer
	});
	const handlers = bind("test context");

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				gap: "3vh",
				paddingRight: ["0", "0", "30px"]
			}}
		>
			<audio ref={audioRef} src={"/sounds/like.wav"} />

			<QuestionHeader data={data} engineer={engineer} />

			<QuestionContent data={data} />

			<QuestionFiles data={data} visible={visible} setImageUrl={setImageUrl} />

			<QuestionTags tags={data?.tag} />

			<QuestionFooter data={data} count={count} playAudio={playAudio} setOpen={setOpen} />

			<ListModal questionId={data?._id} question={true} />
		</Box>
	);
};

Question.propTypes = {
	data: PropTypes.any
};
