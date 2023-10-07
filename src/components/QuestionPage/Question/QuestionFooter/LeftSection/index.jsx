"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { useEffect } from "react";
import { Edit } from "@mui/icons-material";
import { LongPressEventType, useLongPress } from "use-long-press";
import { useCallback } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import { Like, Reaction } from "../../Functions";
import { ReactionMenu } from "../../ReactionMenu";
import Image from "next/image";
import { PropTypes } from "prop-types";
import { getEngineer } from "@cookies";
import { loginModalState } from "@atom";
import { useSetRecoilState } from "recoil";

export const LeftSection = ({ data, count, questionID }) => {
	const [reaction, setReaction] = useState(0);
	const [reactionsCount, setReactionsCount] = useState(count);
	const [loading, setLoading] = useState(true);
	const [anchorEl, setAnchorEl] = useState(null);
	const [answersCount, setAnswerCount] = useState(data?.answers?.length);
	const router = useRouter();
	const buttonRef = useRef();
	const buttonRef1 = useRef();
	const engineer = getEngineer();
	const setLoginModal = useSetRecoilState(loginModalState);

	useEffect(() => {
		const fetchReactionAndQuestion = async () => {
			setLoading(true);
			try {
				const res = await Reaction({ id: data?._id });
				console.log(res);
				setReaction(res);
			} catch (error) {
				console.log(error);
			} finally {
				setLoading(false);
			}
		};
		fetchReactionAndQuestion();
	}, []);

	useEffect(() => {
		if (anchorEl !== null) {
			setTimeout(() => {
				setAnchorEl(null);
			}, [3000]);
		}
	}, [anchorEl]);

	const handleReaction = async ({ rID }) => {
		setReaction(rID);

		if (rID === reaction) {
			setReaction(-1);
			setReactionsCount(reactionsCount - 1);
		} else {
			if (reaction === -1) {
				setReactionsCount(reactionsCount + 1);
			}
			setReaction(rID);
		}
		try {
			const res = await Like({ reactionID: rID, questionID: data?._id });
			console.log(res);
		} catch (error) {
			console.log(error);
		}
	};

	const callback = useCallback(() => {
		const button = buttonRef.current;
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
				gap: "10px",
				alignItems: "center"
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
				onClick={() =>
					engineer
						? handleReaction({ rID: reaction === -1 ? 0 : reaction })
						: setLoginModal(true)
				}
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
				) : engineer ? (
					<>
						{reaction === -1 && (
							<Image
								src={"/icons/questionsReaction/0.svg"}
								width={30}
								height={30}
								alt="reaction img"
							/>
						)}
						{reaction === 0 && (
							<Image
								src={"/icons/questionsReaction/1.svg"}
								width={30}
								height={30}
								alt="reaction img"
							/>
						)}
						{reaction === 1 && (
							<Image
								src={"/icons/questionsReaction/2.svg"}
								width={30}
								height={30}
								alt="reaction img"
							/>
						)}
						{reaction === 2 && (
							<Image
								src={"/icons/questionsReaction/3.svg"}
								width={30}
								height={30}
								alt="reaction img"
							/>
						)}
						{reaction === 3 && (
							<Image
								src={"/icons/questionsReaction/4.svg"}
								width={30}
								height={30}
								alt="reaction img"
							/>
						)}
						{reaction === 4 && (
							<Image
								src={"/icons/questionsReaction/5.svg"}
								width={30}
								height={30}
								alt="reaction img"
							/>
						)}
						{reaction === 5 && (
							<Image
								src={"/icons/questionsReaction/6.svg"}
								width={30}
								height={30}
								alt="reaction img"
							/>
						)}
					</>
				) : (
					<>
						<Image
							src={"/icons/questionsReaction/0.svg"}
							width={30}
							height={30}
							alt="reaction img"
						/>
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
				onClick={() =>
					engineer
						? handleReaction({ rID: reaction === -1 ? 0 : reaction })
						: setLoginModal(true)
				}
				onMouseOver={() =>
					engineer && setTimeout(() => setAnchorEl(buttonRef1.current), [1300])
				}
				//     onMouseEnter={() => setMouseHover(true)}
				//     onMouseLeave={() => setMouseHover(false)}
				// // {...handlers}
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
				) : engineer ? (
					<>
						{reaction === -1 && (
							<Image
								src={"/icons/questionsReaction/0.svg"}
								width={30}
								height={30}
								alt="reaction img"
							/>
						)}
						{reaction === 0 && (
							<Image
								src={"/icons/questionsReaction/1.svg"}
								width={30}
								height={30}
								alt="reaction img"
							/>
						)}
						{reaction === 1 && (
							<Image
								src={"/icons/questionsReaction/2.svg"}
								width={30}
								height={30}
								alt="reaction img"
							/>
						)}
						{reaction === 2 && (
							<Image
								src={"/icons/questionsReaction/3.svg"}
								width={30}
								height={30}
								alt="reaction img"
							/>
						)}
						{reaction === 3 && (
							<Image
								src={"/icons/questionsReaction/4.svg"}
								width={30}
								height={30}
								alt="reaction img"
							/>
						)}
						{reaction === 4 && (
							<Image
								src={"/icons/questionsReaction/5.svg"}
								width={30}
								height={30}
								alt="reaction img"
							/>
						)}
						{reaction === 5 && (
							<Image
								src={"/icons/questionsReaction/6.svg"}
								width={30}
								height={30}
								alt="reaction img"
							/>
						)}
					</>
				) : (
					<>
						<Image
							src={"/icons/questionsReaction/0.svg"}
							width={30}
							height={30}
							alt="reaction img"
						/>
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
				onClick={() => router.push("/questions/#addanswer")}
			>
				<Edit />
				{answersCount}
			</Button>
			<ReactionMenu
				anchorEl={anchorEl}
				setAnchorEl={setAnchorEl}
				handleReaction={handleReaction}
			/>
		</Box>
	);
};

LeftSection.propTypes = {
	data: PropTypes.any,
	count: PropTypes.any,
	playAudio: PropTypes.any,
	questionID: PropTypes.any,
	setOpen: PropTypes.any
};
