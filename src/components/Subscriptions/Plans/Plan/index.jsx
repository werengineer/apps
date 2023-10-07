import { SUBSCRIPTION_PLANS, countries } from "@data";
import {
	Autocomplete,
	Box,
	Button,
	Chip,
	Stack,
	TextField,
	ToggleButton,
	ToggleButtonGroup,
	Typography
} from "@mui/material";
import React from "react";
import { SubscriptionFeature } from "./Feature";

export const SubscriptionPlan = () => {
	const [filter, setFilter] = React.useState({ month: 6, country: "India" });

	const handleMonthChange = (event, newAlignment) => {
		setFilter({ month: newAlignment !== null ? newAlignment : 6, country: filter.country });
	};

	return (
		<>
			<Stack direction={"row"} spacing={10}>
				<ToggleButtonGroup
					value={filter.month}
					exclusive
					onChange={handleMonthChange}
					aria-label="Platform"
				>
					<ToggleButton
						sx={{
							borderRadius: "50px",
							border: "1px solid #EDC967",
							paddingX: "25px",
							"&:hover": {
								background:
									"linear-gradient(180deg, #F7EF8A 0%, #EDC967 37.5%, #D2AC47 78.65%, #AE8625 100%)",
								color: "#272727"
							}
						}}
						value={3}
					>
						3 Months
					</ToggleButton>
					<ToggleButton
						sx={{
							paddingX: "25px",
							border: "1px solid #EDC967",
							":hover": {
								background:
									"linear-gradient(180deg, #F7EF8A 0%, #EDC967 37.5%, #D2AC47 78.65%, #AE8625 100%)",
								color: "#272727"
							}
						}}
						value={6}
					>
						6 Months
					</ToggleButton>
					<ToggleButton
						sx={{
							border: "1px solid #EDC967",
							borderRadius: "50px",
							paddingX: "25px",
							":hover": {
								background:
									"linear-gradient(180deg, #F7EF8A 0%, #EDC967 37.5%, #D2AC47 78.65%, #AE8625 100%)",
								color: "#272727"
							}
						}}
						value={12}
					>
						12 Months
					</ToggleButton>
				</ToggleButtonGroup>
			</Stack>
			<Stack
				justifyContent={"center"}
				width={"full"}
				direction={["column", "row"]}
				mt={5}
				spacing={5}
				gap={5}
			>
				{SUBSCRIPTION_PLANS.map((p, i) => (
					<SubscriptionFeature p={p} i={i} key={i} filter={filter} />
				))}
			</Stack>
		</>
	);
};
{
	/* <Autocomplete
	id="country"
	sx={{ width: 300 }}
	options={countries}
	autoHighlight
	getOptionLabel={(option) => option.label}
	renderOption={(props, option) => (
		<Box component="li" sx={{ mr: 2, flexShrink: 0 }} {...props}>
			{option.currency} {option.label}
		</Box>
	)}
	renderInput={(params) => (
		<TextField
			{...params}
			label="Choose a currency"
			value={filter.country}
			defaultValue={filter.country}
			onChange={(e) => {
				setFilter({ month: filter.month, country: e.target.value });
			}}
			inputProps={{
				...params.inputProps,
				autoComplete: "new-password" // disable autocomplete and autofill
			}}
		/>
	)}
/>; */
}
