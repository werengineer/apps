"use client";
import React from "react";
import { NotificationState } from "./notification";
import SettingState from "./settings";
import { SignupState } from "./signup";
import PropTypes from "prop-types";
import { ListModalStates } from "./listModal";
// import ListModalStates from "./listModal";
import { QuestionModalStates } from "./questionModal";

export const Contexts = ({ children }) => {
	return (
		<>
			<NotificationState>
				<SignupState>
					<SettingState>
						<ListModalStates>
							<QuestionModalStates>{children}</QuestionModalStates>
						</ListModalStates>
					</SettingState>
				</SignupState>
			</NotificationState>
		</>
	);
};

Contexts.propTypes = {
	children: PropTypes.any
};
