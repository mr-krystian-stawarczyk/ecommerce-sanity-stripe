import React from "react";
import Link from "next/link";
import { Container, Row, Col, Card } from "react-bootstrap";
import { urlFor } from "../lib/client";

const Product = ({ product: { image, name, slug, price } }) => {
	return (
		<Col md={6}>
			<Link href={`/product/${slug.current}`}>
				<Card className="hover">
					<Card.Img src={urlFor(image && image[0])} />
					<Card.Text>{name}</Card.Text>
					<Card.Text>{price}</Card.Text>
				</Card>
			</Link>
		</Col>
	);
};

export default Product;
