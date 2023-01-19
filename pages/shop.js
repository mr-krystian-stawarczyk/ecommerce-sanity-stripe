import React from "react";

import { client } from "../lib/client";
import {
	Product,
	FooterBanner,
	HeroBanner,
	AboutMe,
	Interrested,
	Commision,
} from "../components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

const Shop = ({ products, bannerData }) => {
	return (
		<Container fluid>
			<Row className="products-heading">
				<Col className="mt-5 text-dark">
					<h2>"What is beautiful never dies, but comes in another beauty…"</h2>
					<h2
						style={{
							textAlign: "end",
							marginRight: "2rem",
						}}
					>
						Thomas Bailey Aldrich{" "}
					</h2>
				</Col>
			</Row>
			<Row className="m-5 text-center">
				<Col className="m-5">
					<h2>
						Exhibited below is a selection of available artworks and 3D objects
						crafted by hand in Studio Ro by Magdalena Lapinska.
					</h2>
				</Col>
			</Row>
			<Row>
				{products?.map((product) => (
					<Product key={product._id} product={product} />
				))}
			</Row>
			<Commision />
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
