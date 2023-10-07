import { Box, Button, IconButton } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { ReactionsCounts } from "./Functions";
import { getEngineer } from "@cookies";
import PropTypes from "prop-types";

export const ReactionButtons = ({
	index,
	activeReaction,
	setActiveReaction,
	reaction,
	react,
	monthId,
	date,
	id
}) => {
	const [reactionId, setReactionId] = useState();
	const [hideRButtons, setHideRButtons] = useState(false);
	const [reactions, setReactions] = useState();
	const engineer = getEngineer();

	useEffect(() => {
		if (reaction) {
			reaction.map((r) => (r.date === date ? setReactionId(r.reactionId) : ""));
		}
		const getReactionsCount = async () => {
			try {
				const res = await ReactionsCounts(date, monthId);
				setReactions(res);
				console.log(reactions);
			} catch (error) {
				console.log(error);
			}
		};
		getReactionsCount();
	}, [reaction]);

	const reactionFunc = (rId) => {
		if (rId === reactionId) {
			react(rId, id, monthId, date);
			setReactionId(999);
		} else {
			react(rId, id, monthId, date);
			if (engineer._id) {
				setReactionId(rId);
			}
		}
	};
	return (
		<Box display={"flex"} flexDirection={"column"} alignItems={"flex-start"} gap={"2vh"} mt={2}>
			<Box
				border={"1px solid #05D9D7"}
				width={["80vw", "25vw"]}
				display={hideRButtons ? "flex" : "none"}
				flexDirection={"row"}
				justifyContent={"space-evenly"}
				alignItems={"center"}
				borderRadius={"10px"}
				zIndex={"999"}
				paddingY={"10px"}
			>
				<IconButton
					sx={{
						zIndex: "999",
						border: reactionId === 0 ? "1px solid #05D9D7" : ""
					}}
					onClick={() => reactionFunc(0)}
				>
					<Image alt="bulb" width={30} height={30} src={"/icons/Bulb-1.svg"} />
				</IconButton>

				<IconButton
					sx={{
						zIndex: "999",
						border: reactionId === 1 ? "1px solid #05D9D7" : ""
					}}
					onClick={() => reactionFunc(1)}
				>
					<Image alt="like" width={30} height={30} src={"/icons/Like.svg"} />
				</IconButton>

				<IconButton
					sx={{
						zIndex: "999",
						border: reactionId === 2 ? "1px solid #05D9D7" : ""
					}}
					onClick={() => reactionFunc(2)}
				>
					<Image alt="love" width={30} height={30} src={"/icons/Love.svg"} />
				</IconButton>

				<IconButton
					sx={{
						zIndex: "999",
						border: reactionId === 3 ? "1px solid #05D9D7" : ""
					}}
					onClick={() => reactionFunc(3)}
				>
					<Image alt="celebrate" width={30} height={30} src={"/icons/Confetti.svg"} />
				</IconButton>
			</Box>
			<Button
				sx={{
					zIndex: "999",
					width: "100px",
					color: "#1D5352",
					display: "flex",
					gap: "5px",
					borderRadius: "50px"
				}}
				onMouseEnter={() => {
					activeReaction && setActiveReaction({ ...activeReaction, [index]: true });
					setHideRButtons(true);
				}}
				onMouseLeave={() => {
					setTimeout(() => {
						if (hideRButtons) {
							setActiveReaction({ ...activeReaction, [index]: false });
						}
						setHideRButtons(false);
					}, 3000);
				}}
				onClick={() => reactionFunc(0)}
			>
				<Image alt="bulb" width={20} height={20} src={"/icons/Bulb.svg"} />
				{reactions}
			</Button>
		</Box>
	);
};

ReactionButtons.propTypes = {
	index: PropTypes.any,
	activeReaction: PropTypes.any,
	setActiveReaction: PropTypes.any,
	reaction: PropTypes.any,
	react: PropTypes.any,
	monthId: PropTypes.any,
	date: PropTypes.any,
	id: PropTypes.anyjkhgjk
};
