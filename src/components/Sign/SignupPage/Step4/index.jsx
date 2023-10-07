import { DragNDrop } from "@components/Global";
import { FormizStep } from "@formiz/core";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import React from "react";

export const Step4 = ({ form }) => {
	return (
		<>
			<FormizStep
				as={Box}
				sx={{
					width: "100%",
					display: "flex",
					flexDirection: ["column"],
					gap: 2,
					justifyContent: "center",
					alignItems: "center"
				}}
				component="form"
				noValidate="false"
				label="Step 4"
				name="step4"
			>
				<DragNDrop form={form} name="file" />
			</FormizStep>
		</>
	);
};

Step4.propTypes = {
	form: PropTypes.any
};
