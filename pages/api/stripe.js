import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
	if (req.method === "POST") {
		try {
			const params = {
				submit_type: "pay",
				mode: "payment",
				payment_method_types: ["card"],
				shipping_address_collection: {
					allowed_countries: [
						"US",
						"CA",
						"MX",
						"PT",
						"ES",
						"FR",
						"IE",
						"GB",
						"DE",
						"NO",
						"SE",
						"PL",
						"FI",
						"CZ",
						"AT",
						"CH",
						"IT",
						"HU",
						"BA",
						"UA",
						"TR",
						"GR",
					],
				},
				billing_address_collection: "auto",
				shipping_options: [
					{ shipping_rate: "shr_1MWGzKLBlgnjtmbjf43I2i4A" },
					{ shipping_rate: "shr_1MWGzzLBlgnjtmbj5Kcjjuac" },
					{ shipping_rate: "shr_1MWH4lLBlgnjtmbj8acNAavS" },
				],

				line_items: req.body.map((item) => {
					const img = item.image[0].asset._ref;
					const newImage = img
						.replace(
							"image-",
							"https://cdn.sanity.io/images/t1jn10xi/production/"
						)
						.replace("-jpg", ".jpg");

					return {
						price_data: {
							currency: "eur",
							product_data: {
								name: item.name,
								images: [newImage],
							},
							unit_amount: item.price * 100,
						},
						adjustable_quantity: {
							enabled: true,
							minimum: 1,
						},
						quantity: item.quantity,
					};
				}),
				success_url: `${req.headers.origin}/success`,
				cancel_url: `${req.headers.origin}/canceled`,
			};

			// Create Checkout Sessions from body params.
			const session = await stripe.checkout.sessions.create(params);

			res.status(200).json(session);
		} catch (err) {
			res.status(err.statusCode || 500).json(err.message);
		}
	} else {
		res.setHeader("Allow", "POST");
		res.status(405).end("Method Not Allowed");
	}
}
