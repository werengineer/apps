import { STRIPE_SECRET_KEY } from "@constants";
import { NextResponse, NextRequest } from "next/server";
import stripe from "stripe";
import * as formidable from "formidable";

export async function POST(req) {
	// const form = new formidable.IncomingForm();
	const data = await req.formData();
	const stripee = stripe(STRIPE_SECRET_KEY);
	// form.parse(req, async (err, fields, files) => {
	// });
	if (req.method === "POST") {
		try {
			// Create Checkout Sessions from body params.
			const session = await stripee.checkout.sessions.create({
				payment_method_types: ["card"],
				line_items: [
					{
						price_data: {
							unit_amount: data.get("price") * 100,
							currency: "inr",
							product_data: {
								name: `@${data.get("username")} Ghost Writing ${data.get(
									"noOfPages"
								)} pages`
							}
						},
						quantity: 1
					}
				],
				shipping_options: [
					{
						shipping_rate:
							data.get("collegePapers") === "Yes"
								? "shr_1Nbi4ySJ4tqp4Zhcm3PRImfl"
								: "shr_1NbiTsSJ4tqp4Zhcv14uUiwO"
					}
				],
				shipping_address_collection: {
					allowed_countries: ["IN"]
				},
				mode: "payment",
				success_url: `http://localhost:5000/ghostwriting/?success=true&session_id={CHECKOUT_SESSION_ID}&product=@${data.get(
					"username"
				)} Ghost Writing ${data.get("noOfPages")} pages&id=${data.get("id")}`,
				cancel_url: "http://localhost:5000/ghostwriting/?canceled=true"
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
