import React, { useState } from "react";

import { Product } from "../../components";
import { urlFor, client } from "../../lib/client";
import {
	AiOutlineMinus,
	AiOutlinePlus,
	AiFillStar,
	AiOutlineStar,
} from "react-icons/ai";

import { useStateContext } from "../../context/StateContext";
import { Container, Row, Col } from "react-bootstrap";

const ProductDetails = ({ product, products }) => {
	const { image, name, details, price } = product;

	const [index, setIndex] = useState(0);

	const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

	const handleBuyNow = () => {
		onAdd(product, qty);
		setShowCart(true);
	};
	return (
		<Container>
			<Row>
				<Col>
					<div style={{ marginTop: "6rem" }}>
						<div className="product-detail-container">
							<div>
								<div className="image-container">
									<img
										src={urlFor(image && image[index])}
										className="product-detail-image"
									/>
								</div>
								<div className="small-images-container">
									{image?.map((item, i) => (
										<img
											onMouseEnter={() => setIndex(i)}
											key={i}
											src={urlFor(item)}
											className={
												i === index
													? "small-image selected-image"
													: "small-image"
											}
										/>
									))}
								</div>
							</div>

							<div className="product-detail-desc text-dark">
								<h1> {name}</h1>
								<div className="reviews">
									<div>
										<AiFillStar />
										<AiFillStar />
										<AiFillStar />
										<AiFillStar />
										<AiOutlineStar />
									</div>
									<p>(20)</p>
								</div>
								<h4>Details:</h4>
								<p>{details}</p>
								<p className="price">${price}</p>
								<div className="quantity">
									<h3>Quantity:</h3>
									<p className="quantity-desc">
										<span className="minus" onClick={decQty}>
											<AiOutlineMinus />
										</span>
										<span className="num">{qty}</span>
										<span className="plus" onClick={incQty}>
											<AiOutlinePlus />
										</span>
									</p>
								</div>

								<div className="buttons">
									<button
										type="button"
										className="add-to-cart"
										onClick={() => onAdd(product, qty)}
									>
										Add to cart
									</button>
									<button
										type="button"
										className="buy-now"
										onClick={handleBuyNow}
									>
										Buy Now
									</button>
								</div>
							</div>
						</div>

						<div>
							<h2 className="text-dark text-center mb-5"> You may also like</h2>

							<Container>
								<Row>
									{products.map((item) => (
										<Col className="d-flex " md={3}>
											<Product key={item._id} product={item} />{" "}
										</Col>
									))}
								</Row>
							</Container>
						</div>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export const getStaticPaths = async () => {
	const query = `*[_type == "product"] {
      slug {
        current
      }
    }`;

	const products = await client.fetch(query);

	const paths = products.map((product) => ({
		params: {
			slug: product.slug.current,
		},
	}));

	return {
		paths,
		fallback: "blocking",
	};
};

export const getStaticProps = async ({ params: { slug } }) => {
	const query = `*[_type == "product" && slug.current == '${slug}'][0]`;

	const product = await client.fetch(query);
	const productsQuery = `*[_type == "product"]`;

	const products = await client.fetch(productsQuery);

	console.log(product);

	return {
		props: { products, product },
	};
};

export default ProductDetails;
