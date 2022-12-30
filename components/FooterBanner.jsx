import React from "react";
import Link from "next/link";

import { urlFor } from "../lib/client";
import {
	Container,
	Row,
	Col,
	Card,
	InputGroup,
	Form,
	Button,
	Image,
} from "react-bootstrap";

const FooterBanner = ({
	footerBanner: {
		discount,
		largeText1,
		largeText2,
		saleTime,
		smallText,
		midText,
		product,
		buttonText,
		image,
		desc,
	},
}) => {
	return (
		<Container>
			<Row className="bg-dark text-light align-items-md-center justify-content-md-center rounded py-3 my-5">
				<Col md={3}>
					<p>{discount}</p>
					<h3>{largeText1}</h3>
					<h3>{largeText2}</h3>
					<p>{saleTime}</p>
				</Col>
				<Col md={4}>
					<img
						className="bg-primary rounded-circle"
						src={urlFor(image)}
						alt="Footer"
						style={{ maxWidth: "300px", maxHeight: "300px" }}
					/>
				</Col>
				<Col md={3}>
					<p>{smallText}</p>
					<h3>{midText}</h3>
					<p>{desc}</p>
					<Link href={`/product/${product}`}>
						<Button type="button">{buttonText}</Button>
					</Link>
				</Col>
			</Row>
		</Container>
	);
};

export default FooterBanner;
