import React from "react";
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

function AboutMe() {
	return (
		<>
			<Container
				fluid
				className=" text-dark  mt-5 mb-5 pb-5 pt-5 rounded"
				id="section3"
			>
				<Row style={{ alignItems: "center", justifyContent: "center" }}>
					<Col md={4} sm className="mx-auto my-auto ">
						<Image
							src="/assets/pexels-craig-adderley-1670045.jpg"
							alt="me"
							width="450"
							height="350"
							className="rounded ml-"
						/>
					</Col>
					<Col md={6} sm className="mx-auto my-auto ">
						<Card
							style={{
								alignItems: "center",
								justifyContent: "center",
								border: "none",
							}}
							className="bg-transparent text-white pt-5"
						>
							<Card.Body>
								<Card.Title
									style={{
										fontSize: "4vw",
										lineHeight: "98%",

										fontWeight: "bold",
									}}
								>
									Welcome on My site <br></br>I will create every furniture for
									U
								</Card.Title>

								<Card.Text>
									Welcome to our furniture creator shop! Here, you can design
									and customize your own unique pieces of furniture to fit your
									personal style and space. Our team of skilled craftsmen will
									work with you to bring your vision to life. Whether you have a
									specific design in mind or just a general idea of what you're
									looking for, we can help you create the perfect piece.
								</Card.Text>

								<Button href="/about" vartiant="secondary">
									About Me
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
