import { Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { PropTypes } from "prop-types";
import { getPercentageValue } from "@hooks/getPercentValue";
import Link from "next/link";
import { checkGhostPayment } from "@api";

export const ConfirmButton = ({ data, subed, i }) => {
	const [paid, setPaid] = useState(false);
	const getPayment = async () => {
		const dataa = await checkGhostPayment(data.responseId);
		if (!dataa) setPaid(false);
		else setPaid(true);
	};
	getPayment();
	return (
		<form action="/api/ghostwriting" method="POST">
			<input
				type="hidden"
				value={subed ? getPercentageValue(20, data.totalPrice) : data.totalPrice}
				defaultValue={data.totalPrice}
				name="price"
				id="price"
			/>
			<input
				type="hidden"
				value={data.diagrams}
				defaultValue={data.diagrams}
				name="collegePapers"
				id="collegePapers"
			/>
			<input
				type="hidden"
				value={data.responseId}
				defaultValue={data.responseId}
				name="id"
				id="id"
			/>
			<input
				type="hidden"
				value={data.username}
				defaultValue={data.username}
				name="username"
				id="username"
			/>
			<input
				type="hidden"
				value={data.noOfPages}
				defaultValue={data.noOfPages}
				name="noOfPages"
				id="noOfPages"
			/>
			<Button
				sx={{
					width: "40%",
					color: "black",
					borderRadius: 10,
					backgroundColor: "#05D9D7",
					border: "1px solid #05D9D7",
					mt: 1,
					"&:hover": {
						color: "white"
					},
					"&.Mui-disabled": {
						color: "white",
						backgroundColor: "transparent",
						cursor: "not-allowed"
					}
				}}
				type="submit"
				disabled={paid}
			>
				{paid
					? "Paid ✔"
					: `Confirm ₹${subed ? getPercentageValue(20, data.totalPrice) : data.totalPrice}`}
			</Button>
			<Typography mt={2} ml={1} fontSize="10px">
				By confirming you agree to our <Link href="/terms">Terms of Services</Link>
			</Typography>
		</form>
	);
};

ConfirmButton.propTypes = {
	data: PropTypes.any,
	subed: PropTypes.any,
	i: PropTypes.any
};
