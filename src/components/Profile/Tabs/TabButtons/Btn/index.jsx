import { ProfileContext } from "@context/profile";
import { Box, Button } from "@mui/material";
import React from "react";
import { useContext } from "react";
import PropType from "prop-types";

export const Btn = ({ tabToSet }) => {
	const profileContext = useContext(ProfileContext);
	const { handleTabClick, self, tab } = profileContext;

	return (
		<Box>
			<Button
				sx={{
					borderBottom: tab === tabToSet ? "2px solid #05D9D7" : "0px",
					p: 0,
					px: "12px",
					borderRadius: "0px",
					fontSize: ["13px", "15px", "18px"],
					color: tab === tabToSet ? "white" : "grey",
					borderTopLeftRadius: "10px",
					borderTopRightRadius: "10px",
					// display: !self && (tabToSet === "") ? "flex" : "none"
				}}
				onClick={() => handleTabClick({ tab: tabToSet })}
			>
				{tabToSet}
			</Button>
		</Box>
	);
};

Btn.propTypes = {
	tabToSet: PropType.string
};
