import React, { useEffect } from "react";
import {
	Container,
	Row,
	Col,
	Card,
	InputGroup,
	Form,
	Button,
} from "react-bootstrap";

import Image from "next/image";
import Typewriter from "../lib/typewriter";

function AboutMe() {
	return (
		<>
			<Container
				fluid
				className="  mt-5 pt-1 rounded "
				style={{ height: "100vh" }}
			>
				<Row
					style={{
						alignItems: "center",
						justifyContent: "center",
					}}
					className="mt-5 "
				>
					<Col md={6} sm className="mx-auto my-auto mt-5">
						<Card>
							<Card.Img src="/assets/hd1.jpg" />
						</Card>
					</Col>
					<Col md={6} sm className="mx-auto my-auto mt-5">
						<Card
							style={{
								alignItems: "center",
								justifyContent: "center",
								border: "none",
							}}
							className="bg-transparent pt-5"
						>
							<Card.Body>
								<Card.Title
									style={{
										fontSize: "4vw",
										lineHeight: "98%",

										fontWeight: "bold",
									}}
								>
									Welcome, <br></br>I will create every Furniture for You
								</Card.Title>

								<Typewriter />

								<Button href="/shop" className="bg-light text-dark shadow-lg">
									Shop
								</Button>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default AboutMe;
