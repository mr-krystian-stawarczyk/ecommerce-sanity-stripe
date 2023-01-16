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
import { Container, Row, Col, Button, Card } from "react-bootstrap";

const ProductDetails = ({ product, products }) => {
	const { image, name, details, price } = product;

	const [index, setIndex] = useState(0);

	const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

	const handleBuyNow = () => {
		onAdd(product, qty);
		setShowCart(true);
	};
	return (
		<Container className="mt-5 " fluid>
			<Row className="pt-5 galleryBg pb-5">
				<Col md={6} className="ml-2">
					<Row>
						<Card className="border-0 p-0 m-2 hover">
							<Card.Img
								src={urlFor(image && image[index])}
								className="rounded p-3"
								style={{ maxHeight: "500px" }}
							></Card.Img>
						</Card>
					</Row>
					<Row>
						<Col md={5} className="m-2 p-2">
							{image?.map((item, i) => (
								<img
									onMouseEnter={() => setIndex(i)}
									key={i}
									src={urlFor(item)}
									className={
										i === index
											? "small-image selected-image hover"
											: "small-image hover"
									}
								/>
							))}
						</Col>
					</Row>
				</Col>
				<Col md={6}>
					<Col className="product-detail-desc text-dark ">
						<h1> {name}</h1>

						<h4>Details:</h4>
						<p>{details}</p>
						<p className="price">€{price}</p>
						<Col className="quantity">
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
						</Col>
						<Row>
							<Col className="buttons">
								<Button
									type="button"
									className="add-to-cart bg-dark"
									onClick={() => onAdd(product, qty)}
								>
									Add to cart
								</Button>
								<Button
									type="button"
									className="buy-now bg-dark"
									onClick={handleBuyNow}
								>
									Buy Now
								</Button>
							</Col>
						</Row>
					</Col>
				</Col>
			</Row>

			<Row className="mt-3">
				<h2 className="text-dark text-center mb-5 mt-5"> You may also like</h2>
				{products.map((item) => (
					<Product key={item._id} product={item} />
				))}
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
