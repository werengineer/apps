import { DropdownInput } from "@components/Global";
import { getEngineer } from "@cookies";
import { courses, years } from "@data";
import { isNotEmptyString } from "@formiz/validations";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";


export const EducationDetail = () => {
	const engineer = getEngineer();
	return (
		<Box
			display={"flex"}
			justifyContent={"space-between"}
			border="2px solid rgba(29, 83, 82, 1)"
			borderRadius="12px"
			width={["100%", "97%"]}
			padding={"20px"}
			flexDirection="column"
			height="100%"
			boxShadow={"0px 4px 15px rgba(0, 0, 0, 0.25)"}
		>
			<Typography fontSize={"20px"}>Education Details</Typography>
			<Box
				display={"flex"}
				flexDirection={"column"}
				gap={3}
				mt={5}
				alignItems={["center", "flex-start"]}
			>
				<DropdownInput
					name="course"
					label="Course Name"
					defaultValue={engineer?.course}
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
					defaultValue={engineer?.year}
					label="Course year"
					array={years}
					required="Year is required."
				/>
			</Box>
		</Box>
	);
};
