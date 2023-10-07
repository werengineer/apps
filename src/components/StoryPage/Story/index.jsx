import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { getEngineer } from "@cookies";
import { useEffect } from "react";
import { getGeneralEngineer } from "@api";
import { useSnackbar } from "notistack";
import { Like, Reaction } from "../Functions";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import { PropTypes } from "prop-types";
import { NEXT_PUBLIC_WEBSITE_URL } from "@constants";
import { FullScreenModal } from "@components/Global/Modals/ViewImageModal";
import { ListModal } from "@components/Global";
import { useSetRecoilState } from "recoil";
import { listModalState, loginModalState } from "@atom";
import { LoginModal } from "@components/Global/Modals/LoginModal";
import { StoryFooter } from "./StoryFooter";
import { StoryHeader } from "./StoryHeader";
import { StoryContent } from "./StoryContent";
import { StroyFiles } from "./StoryFiles";

export const Story = ({ story }) => {
	console.log("count:", story._id);
	const [open, setOpen] = useState(false);
	const [imageUrl, setImageUrl] = useState("");
	const [liked, setLiked] = useState();
	const [visible, setVisible] = useState(false);
	const [creator, setCreator] = useState({});
	const engineer = getEngineer();
	const [count, setCount] = useState(story?.reactions.length);
	const { enqueueSnackbar } = useSnackbar();
	const [openReaction, setOpenReaction] = useState(false);
	const router = useRouter();

	const setLoginModal = useSetRecoilState(loginModalState);
	const setListModalOpen = useSetRecoilState(listModalState);

	useEffect(() => {
		setLiked(story?.likes?.includes(engineer?._id));

		const fetchCreator = async () => {
			const creator = await getGeneralEngineer({ id: story?.engineer });
			setCreator(creator);
		};
		fetchCreator();

		const desc = document.getElementById(`description-${story?._id}`);
		desc.innerHTML = story?.description;
		var childElements = desc?.children;
		for (var i = 0; i < childElements?.length; i++) {
			childElements[i].style.textAlign = "left";
		}
		const fetchReaction = async () => {
			try {
				const res = await Reaction(story);
				setLiked(res);
				console.log(res);
			} catch (error) {
				console.log("Story 59", error);
			}
		};
		fetchReaction();
	}, []);

	const handleLike = async (id) => {
		if (!engineer) {
			setLoginModal(true);
			return;
		}
		if (liked === id) {
			setLiked(-1);
			setCount(count - 1);
		} else if (liked !== -1) {
			setLiked(-1);
			setCount(count - 1);
		} else {
			setLiked(id);
			setCount(liked === -1 ? count + 1 : count);
		}
		playAudio();
		try {
			const res = await Like(story, id);
			console.error(res);
		} catch (error) {
			setLiked(!liked);
			setCount(liked ? count + 1 : count - 1);
			console.log("Story 86", error);
		}
	};

	const handleShare = async () => {
		const shareData = {
			title: story?.title,
			text: story?.description?.slice(0, 100),
			url: `${NEXT_PUBLIC_WEBSITE_URL}/stories/${story?._id}`
		};
		try {
			await navigator.share(shareData);
			enqueueSnackbar("Shared", { variant: "info" });
		} catch (error) {
			enqueueSnackbar("Error While Sharing", { variant: "error" });
		}
	};

	const audioRef = useRef();
	const playAudio = () => {
		if ("vibrate" in window.navigator) {
			window.navigator.vibrate(50);
		}
		audioRef.current.src = "/sounds/like.wav";
		audioRef.current.play();
	};

	return (
		<Box>
			<audio ref={audioRef} />
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					gap: "3vh",
					pl: [2, 2, 0]
				}}
			>
				<StoryHeader story={story} creator={creator} />
				<StoryContent story={story} />
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						gap: "4vh"
					}}
				>
					<Box
						sx={{
							display: ["flex", "flex", "none"],
							gap: "1vw"
						}}
					>
						{story?.tag?.slice(0, 5).map((d, i) => (
							<Typography
								sx={{
									color: "#05D9D7",
									fontSize: "14px",
									paddingX: "10px",
									paddingY: "3px",
									borderRadius: "10px",
									backgroundColor: "rgba(29, 83, 82, 0.2)"
								}}
								key={i}
							>
								{d}
							</Typography>
						))}
					</Box>

					<StroyFiles story={story} visible={visible} />
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
							width: "100%"
						}}
					>
						<StoryFooter data={story} count={count} playAudio={playAudio} setOpen={setOpen} />
					</Box>
				</Box>
			</Box>
			<FullScreenModal open={open} setOpen={setOpen} imageUrl={imageUrl} />
			<LoginModal />
			<ListModal question={false} storyId={story?._id} story={true} />
		</Box>
	);
};

Story.propTypes = {
	story: PropTypes.any
};
