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

const HeroBanner = ({ heroBanner }) => {
	return (
		<>
			<Container fluid className="  rounded  mt-5">
				<Row className="pt-5 ">
					<Col md={6} sm className="  rounded ">
						<Card
							style={{
								alignItems: "center",
								justifyContent: "center",
								border: "none",
							}}
							className=" pt-5 bg-transparent "
						>
							<Card.Body>
								<Card.Title
									style={{
										fontSize: "5vw",
										lineHeight: "98%",

										fontWeight: "bold",
									}}
								>
									{heroBanner.largeText1}
								</Card.Title>

								<Card.Text>{heroBanner.midText}</Card.Text>
								<Card.Text
									style={{
										fontSize: "2vw",
									}}
								>
									{heroBanner.smallText}
								</Card.Text>
								<Card.Text
									style={{
										fontSize: "2vw",
									}}
								>
									{heroBanner.desc}
								</Card.Text>

								<Link href={`/product/${heroBanner.product}`}>
									<Button className="bg-light text-dark" type="button">
										{heroBanner.buttonText}
									</Button>
								</Link>
							</Card.Body>
						</Card>
					</Col>
					<Col md={1}></Col>
					<Col md={5} sm>
						<Card className="border-0">
							<Card.Img
								className="rounded mt-5 ml-0 shadow-sm"
								src={urlFor(heroBanner.image)}
								alt="hero-img"
							/>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default HeroBanner;
