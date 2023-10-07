import { Check } from "@mui/icons-material";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";

export const Steps = ({ form }) => {
	return (
		<Stack
			direction="row"
			gap={["0px", "70px"]}
			justifyContent="space-between"
			mt={[0, 10]}
			sx={{ color: "#fff" }}
		>
			{form.steps.map((step, index) => (
				<Box display={"flex"} key={index} sx={{ paddingTop: ["0px", "80px"] }}>
					<IconButton
						key={index}
						size="large"
						onClick={
							form.currentStep.index > step.index ? () => form.goToStep(step.name) : null
						}
						sx={{
							borderRadius: "100%",
							border:
								form.currentStep.name === step.name || form.currentStep.index > step.index
									? "1px solid #50D9D7"
									: "1px solid #fff",
							width: ["45px", "50px"],
							height: ["45px", "50px"],
							cursor: "pointer",
							background:
								form.currentStep.name === step.name || form.currentStep.index > step.index
									? "#50D9D7"
									: "",
							color:
								form.currentStep.name === step.name || form.currentStep.index > step.index
									? "#212121"
									: "#ffffff"
						}}
					>
						{form.currentStep.index < step.index || !step.isValid ? (
							<Typography> {index + 1}</Typography>
						) : (
							<Check sx={{ ml: -1, mr: -1 }} />
						)}
					</IconButton>
					{index !== 3 && (
						<HorizontalRuleIcon
							sx={{ display: ["flex", "none"], marginX: "-3px", marginTop: "7px" }}
						/>
					)}
				</Box>
			))}
		</Stack>
	);
};

Steps.propTypes = {
	form: PropTypes.any
};
