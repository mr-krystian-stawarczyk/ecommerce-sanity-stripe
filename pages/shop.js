import React from "react";

import { client } from "../lib/client";
import { Product, Commision } from "../components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card } from "react-bootstrap";

const Shop = ({ products, bannerData }) => {
	return (
		<Container fluid>
			<Row className="mt-5 text-center">
				<Col className="mt-5 text-dark">
					<Card className="border-0">
						<Card.Title>
							"What is beautiful never dies, but comes in another beauty…"
						</Card.Title>
						<Card.Text>Thomas Bailey Aldrich</Card.Text>
					</Card>
				</Col>
			</Row>
			<Row className="m-5 text-center">
				<Col className="m-5">
					<Card className="border-0">
						<Card.Title>
							Exhibited below is a selection of available artworks and 3D
							objects crafted by hand in Studio Mo by Magdalena Lapinska.
						</Card.Title>
					</Card>
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
	const query = '*[_type == "product"] | order(createdAt desc)';
	const products = await client.fetch(query);

	const bannerQuery = '*[_type == "banner"]';
	const bannerData = await client.fetch(bannerQuery);

	return {
		props: { products, bannerData },
	};
};
export default Shop;
