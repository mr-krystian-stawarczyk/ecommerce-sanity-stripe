import React from "react";

import { client } from "../lib/client";
import { Product, FooterBanner, HeroBanner, AboutMe } from "../components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

const Shop = ({ products, bannerData }) => {
	return (
		<Container>
			<HeroBanner heroBanner={bannerData.length && bannerData[0]} />

			<Row className="products-heading">
				<Col>
					<h2 className="text-dark">Best Selling Products</h2>
				</Col>
			</Row>
			<Row>
				{products?.map((product) => (
					<Product key={product._id} product={product} />
				))}
			</Row>
		</Container>
	);
};

export const getServerSideProps = async () => {
	const query = '*[_type == "product"]';
	const products = await client.fetch(query);

	const bannerQuery = '*[_type == "banner"]';
	const bannerData = await client.fetch(bannerQuery);

	return {
		props: { products, bannerData },
	};
};
export default Shop;
