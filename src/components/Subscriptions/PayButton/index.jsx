import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY, STRIPE_SECRET_KEY } from "@constants";
import { Button } from "@mui/material";
import PropTypes from "prop-types";
import stripe from "stripe";
import { getEngineer } from "@cookies";
import { confirmPayment } from "@api";
import { useSnackbar } from "notistack";
import { AuthError } from "@lib";
import { getSubscription } from "@hooks/getSubscription";
import { useRouter } from "next/navigation";

// const stripePromise = loadStripe(NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export const PayButton = ({ main }) => {
	const { enqueueSnackbar } = useSnackbar();
	const stripee = stripe(STRIPE_SECRET_KEY);
	const engineer = getEngineer();
	// // const { subscription } = getSubscription();
	const [subed, setSubed] = useState();
	// const getSub = async () => {
	// 	setSubed(await subscription());
	// };
	// getSub();
	const router = useRouter();
	const getSessionAndSetOrder = async (sessionId) => {
		const session = await stripee.checkout.sessions.retrieve(sessionId);
		try {
			if (session && session.status === "complete") {
				const paymentDetails = {
					customerId: session.customer,
					status: session.status,
					paymentStatus: session.payment_status,
					subscriptionId: session.subscription,
					invoice: session.invoice,
					id: session.id,
					customerDetails: session.customer_details
				};
				const data = {
					service: "Early Bird Subscription!",
					engineer: engineer._id,
					paymentDetails
				};
				const res = await confirmPayment(data);
				setSubed(true);
				enqueueSnackbar(`Thankyou for your subscription ${engineer?.name}!`, {
					variant: "success"
				});

				setTimeout(() => {
					enqueueSnackbar("Congrats you just received 400000 coins into your wallet", {
						variant: "success"
					});
				}, 5000);
				router.push("/dashboard");
			}
		} catch (error) {
			console.log(error);
			enqueueSnackbar(`Thankyou for your subscription ${engineer?.name}!`, {
				variant: "success"
			});
		}
	};
	React.useEffect(() => {
		// Check to see if this is a redirect back from Checkout
		const query = new URLSearchParams(window.location.search);
		if (query.get("success") && query.get("session_id")) {
			const sessionId = query.get("session_id");
			// if (!subed) {
			getSessionAndSetOrder(sessionId);
			console.log("Order placed! You will receive an email confirmation.");
			// }
		}

		if (query.get("canceled")) {
			console.log("Order canceled -- continue to shop around and checkout when you’re ready.");
		}
		if (!engineer) {
			enqueueSnackbar("Please login to subscribe!", { variant: "warning" });
		}
	}, []);
	return (
		<form action="/api/subscription" method="POST">
			<Button
				disabled={!main || !engineer}
				sx={{
					border: "1px solid #F7EF8A",
					borderRadius: "30px",
					paddingX: "20px",
					color: "#F7EF8A",
					mt: 3,
					":hover": {
						background: !main
							? "linear-gradient(181deg, #F7EF8A 0%, #EDC967 37.50%, #D2AC47 78.65%, #AE8625 100%)"
							: "#fff",
						boxShadow: "0px 4px 66.95999908447266px 0px #867004",
						color: !main ? "#fff" : "#272727"
					}
				}}
				type="submit"
			>
				{main ? "Subscribed ✔" : "Coming Soon 👀"}
			</Button>
		</form>
	);
};

PayButton.propTypes = {
	main: PropTypes.boolean
};
