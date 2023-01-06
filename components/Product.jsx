import React from "react";
import Link from "next/link";

import { urlFor } from "../lib/client";

const Product = ({ product: { image, name, slug, price } }) => {
	return (
		<Link href={`/product/${slug.current}`}>
			<img src={urlFor(image && image[0])} width={250} height={250} />
			<p className="product-name">{name}</p>
			<p className="product-price">${price}</p>
		</Link>
	);
};

export default Product;
