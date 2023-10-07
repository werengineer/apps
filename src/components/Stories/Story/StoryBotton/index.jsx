import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import axios from "axios";
import React, { useCallback, useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Like, Reaction } from "../../Functions";
import Image from "next/image";
import { ReactionMenu } from "./ReactionMenu";
import { API_URL } from "@constants";
import { Edit } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { LongPressEventType, useLongPress } from "use-long-press";
import { PropTypes } from "prop-types";
import { getEngineer } from "@cookies";
import { useSetRecoilState } from "recoil";
import { loginModalState } from "@atom";

export const StoryBottom = ({ storyID, reactions, playAudio }) => {
	const [reaction, setReaction] = useState(0);
	const [reactionsCount, setReactionsCount] = useState(reactions);
	const [loading, setLoading] = useState(true);
	const [anchorEl, setAnchorEl] = useState(null);
	const [commentsCount, setCommentsCount] = useState(null);
	const router = useRouter();
	const buttonRef = useRef();
	const buttonRef1 = useRef();
	const engineer = getEngineer();
	const setLoginModal = useSetRecoilState(loginModalState);

	useEffect(() => {
		const fetchReactionAndStory = async () => {
			setLoading(true);
			try {
				const res = await Reaction({ id: storyID });
				setReaction(res);

				const res2 = await axios.get(`${API_URL}/story/get?id=${storyID}`);
				setCommentsCount(res2?.data?.comments?.length);
				setReactionsCount(res2?.data?.reactions?.length);
			} catch (error) {
				console.log(error);
			} finally {
				setLoading(false);
			}
		};
		fetchReactionAndStory();
	}, []);

	//Handling Reaction
	const handleReaction = async ({ rID }) => {
		const currentReaction = reaction;
		const currentRC = reactionsCount;
		playAudio();
		try {
			if (reaction === rID) {
				setReaction(-1);
				setReactionsCount(reactionsCount - 1);
			} else {
				if (reaction === -1) {
					setReactionsCount(reactionsCount + 1);
				}
				setReaction(rID);
			}
			await Like({ reactionID: rID, storyID: storyID });
		} catch (error) {
			setReaction(currentReaction);
			setCommentsCount(currentRC);
		}
	};

	//For Implementing Long Press
	const callback = useCallback(() => {
		const button = buttonRef.current;
		console.log(buttonRef);
		if (button) {
			setAnchorEl(button);
		}
	}, []);

	const bind = useLongPress(callback, {
		onFinish: () => {
			setTimeout(() => {
				setAnchorEl(null);
			}, 2000);
		},
		threshold: 700,
		detect: LongPressEventType.Pointer
	});

	const handlers = bind();

	return (
		<Box
			sx={{
				display: "flex",
				gap: "20px"
			}}
		>
			<Button
				id="reaction-button"
				aria-controls={anchorEl ? "reaction-menu" : undefined}
				aria-haspopup="true"
				aria-expanded={anchorEl ? "true" : undefined}
				sx={{
					display: ["flex", "none"],
					alignItems: "center",
					justifyContent: "center",
					gap: "10px",
					borderRadius: "30px"
				}}
				disabled={engineer.isEmailVerified && engineer.isMobileVerified ? false : true}
				ref={buttonRef}
				onClick={() => {
					engineer
						? handleReaction({ rID: reaction === -1 ? 0 : reaction })
						: setLoginModal(true);
				}}
				{...handlers}
			>
				{loading ? (
					<CircularProgress
						sx={{
							// fontSize: '20px'  ,
							width: "35px",
							height: "35px",
							color: "#05D9D7"
						}}
						size={30}
					/>
				) : (
					<>
						{reaction === -1 && (
							<Image src={"/icons/questionsReaction/0.svg"} width={30} height={30} />
						)}
						{reaction === 0 && (
							<Image src={"/icons/questionsReaction/1.svg"} width={30} height={30} />
						)}
						{reaction === 1 && (
							<Image src={"/icons/questionsReaction/2.svg"} width={30} height={30} />
						)}
						{reaction === 2 && (
							<Image src={"/icons/questionsReaction/3.svg"} width={30} height={30} />
						)}
						{reaction === 3 && (
							<Image src={"/icons/questionsReaction/4.svg"} width={30} height={30} />
						)}
						{reaction === 4 && (
							<Image src={"/icons/questionsReaction/5.svg"} width={30} height={30} />
						)}
						{reaction === 5 && (
							<Image src={"/icons/questionsReaction/6.svg"} width={30} height={30} />
						)}
					</>
				)}
				<Typography>{reactionsCount}</Typography>
			</Button>

			<Button
				id="reaction-button"
				aria-controls={anchorEl ? "reaction-menu" : undefined}
				aria-haspopup="true"
				aria-expanded={anchorEl ? "true" : undefined}
				sx={{
					display: ["none", "flex"],
					alignItems: "center",
					justifyContent: "center",
					gap: "10px",
					borderRadius: "30px"
				}}
				disabled={engineer.isEmailVerified && engineer.isMobileVerified ? false : true}
				ref={buttonRef1}
				onClick={() => {
					engineer
						? handleReaction({ rID: reaction === -1 ? 0 : reaction })
						: setLoginModal(true);
				}}
				onMouseOver={() => {
					engineer && setTimeout(() => setAnchorEl(buttonRef1.current), [1000]);
				}}
				// onMouseEnter={() => setMouseHover(true)}
				// onMouseLeave={() => setMouseHover(false)}
				//         onMouseEnter={handleButtonHover}
				// onMouseLeave={handleButtonLeave}
			>
				{loading ? (
					<CircularProgress
						sx={{
							// fontSize: '20px'  ,
							width: "35px",
							height: "35px",
							color: "#05D9D7"
						}}
						size={30}
					/>
				) : (
					<>
						{reaction === -1 && (
							<Image src={"/icons/questionsReaction/0.svg"} width={30} height={30} />
						)}
						{reaction === 0 && (
							<Image src={"/icons/questionsReaction/1.svg"} width={30} height={30} />
						)}
						{reaction === 1 && (
							<Image src={"/icons/questionsReaction/2.svg"} width={30} height={30} />
						)}
						{reaction === 2 && (
							<Image src={"/icons/questionsReaction/3.svg"} width={30} height={30} />
						)}
						{reaction === 3 && (
							<Image src={"/icons/questionsReaction/4.svg"} width={30} height={30} />
						)}
						{reaction === 4 && (
							<Image src={"/icons/questionsReaction/5.svg"} width={30} height={30} />
						)}
						{reaction === 5 && (
							<Image src={"/icons/questionsReaction/6.svg"} width={30} height={30} />
						)}
					</>
				)}
				<Typography>{reactionsCount}</Typography>
			</Button>

			<Button
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					gap: "10px",
					color: "#1D5352",
					borderRadius: "30px"
				}}
				onClick={() =>
					engineer ? router.push(`/stories/${storyID}#addanswer`) : setLoginModal(true)
				}
			>
				<Edit />
				{commentsCount}
			</Button>
			<ReactionMenu
				anchorEl={anchorEl}
				setAnchorEl={setAnchorEl}
				setReaction={setReaction}
				handleReaction={handleReaction}
			/>
		</Box>
	);
};

StoryBottom.propTypes = {
	storyID: PropTypes.any,
	reactions: PropTypes.any,
	playAudio: PropTypes.any,
	setLoginModal: PropTypes.any
};
