import Box from "@mui/material/Box";
import React from "react";
import { ListModal } from "@components/Global/Modals/ListModal";
import { BlockModal } from "@components/Global/Modals/BlockModal";
import { MobileDrawer } from "./MobileDrawer";
import { LoginModal } from "./LoginModal";
import { ContentModal } from "./ContentModal";
import { FullScreenModal } from "./ViewImageModal";
import { QuestionModal } from "./QuestionModal";
import { StoryModal } from "./StoryModal";
import { PuzzleIncompleteModal } from "./PuzzleIncompleteModal";
import { SearchModal } from "./SearchModal";
import { MobileVerificationModal } from "@components/Settings/EditProfile/MobileVerificationModal";

export const Modals = () => {
	return (
		<Box>
			<QuestionModal />
			<StoryModal />
			<ListModal />
			{/* <BlockModal /> */}
			<LoginModal />
			<MobileDrawer />
			<SearchModal />
			<ContentModal />
			<PuzzleIncompleteModal />
			<MobileVerificationModal />
			{/* <FullScreenModal /> */}
		</Box>
	);
};
