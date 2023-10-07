import { NEXT_PUBLIC_STRIPE_SUBSCRIPTION_ID, STRIPE_SECRET_KEY } from "@constants";
import { NextResponse } from "next/server";
import stripe from "stripe";

export async function POST(req) {
	const stripee = stripe(STRIPE_SECRET_KEY);
	if (req.method === "POST") {
		try {
			// Create Checkout Sessions from body params.
			const session = await stripee.checkout.sessions.create({
				line_items: [
					{
						// Provide the exact Price ID (for example, pr_1234) of the product you want to sell
						price: NEXT_PUBLIC_STRIPE_SUBSCRIPTION_ID,
						quantity: 1
					}
				],
				mode: "subscription",
				success_url:
					"http://localhost:5000/subscriptions/?success=true&session_id={CHECKOUT_SESSION_ID}&product=Early Bird",
				cancel_url: "http://localhost:5000/subscriptions/?canceled=true"
			});
			return NextResponse.redirect(session?.url, 303);
		} catch (err) {
			console.log(err);
			NextResponse.status(err.statusCode || 500).json(err.message);
		}
	} else {
		NextResponse.setHeader("Allow", "POST");
		NextResponse.status(405).end("Method Not Allowed");
	}
}