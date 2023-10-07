import { DropdownInput } from "@components/Global";
import { courses, years } from "@data";
import { FormizStep } from "@formiz/core";
import { isNotEmptyString } from "@formiz/validations";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import React from "react";

export const Step3 = () => {
	return (
		<>
			<FormizStep
				as={Box}
				sx={{
					width: ["80vw", "80%"],
					display: "flex",
					flexDirection: "column",
					gap: 2,
					justifyContent: "center",
					alignItems: "center"
				}}
				component="form"
				noValidate="false"
				label="Step 3"
				name="step3"
			>
				<DropdownInput
					name="course"
					label="Choose a course"
					array={courses}
					validations={[
						{
							rule: isNotEmptyString(),
							message: "Please select a course"
						}
					]}
					required="Course is required."
				/>
				<DropdownInput
					validations={[
						{
							rule: isNotEmptyString(),
							message: "Please select a year"
						}
					]}
					name="year"
					label="Choose your year"
					array={years}
					required="Year is required."
				/>
			</FormizStep>
		</>
	);
};

Step3.propTypes = {
	form: PropTypes.any
};
