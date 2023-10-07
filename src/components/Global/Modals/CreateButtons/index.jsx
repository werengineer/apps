import { getEngineer } from "@cookies";
import { Box, Fab, Grow, Modal, Tooltip } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import { useSetRecoilState } from "recoil";
import { loginModalState, questionModalState, storyModalState } from "@atom";
import { QuestionMark, WebStories } from "@mui/icons-material";

const CreateButtons = ({ menuOpen, setMenuOpen }) => {
	const engineer = getEngineer();
	const setLoginModal = useSetRecoilState(loginModalState);
	const setQuestionModal = useSetRecoilState(questionModalState);
	const setStoryModal = useSetRecoilState(storyModalState);

	return (
		<Modal open={menuOpen} onClose={() => setMenuOpen(false)}>
			<Box position={"absolute"}>
				<Grow
					in={menuOpen}
					style={{
						transitionDelay: "50ms"
					}}
				>
					<Tooltip title="Story">
						<Fab
							sx={{
								position: "fixed",
								bottom: "30px",
								right: "110px",
								backgroundColor: "white"
							}}
							onClick={() => {
								engineer ? setStoryModal(true) : setLoginModal(true);
								setMenuOpen(false);
							}}
						>
							<WebStories
								sx={{
									color: "#212121"
								}}
							/>
						</Fab>
					</Tooltip>
				</Grow>

				<Grow in={menuOpen}>
					<Tooltip title="Questions">
						<Fab
							sx={{
								position: "fixed",
								bottom: "100px",
								right: "30px",
								backgroundColor: "white"
							}}
							onClick={() => {
								engineer ? setQuestionModal(true) : setLoginModal(true);
								setMenuOpen(false);
							}}
						>
							<QuestionMark
								sx={{
									color: "#212121"
								}}
							/>
						</Fab>
					</Tooltip>
				</Grow>
			</Box>
		</Modal>
	);
};

export default CreateButtons;

CreateButtons.propTypes = {
	menuOpen: PropTypes.bool,
	setMenuOpen: PropTypes.func
};
