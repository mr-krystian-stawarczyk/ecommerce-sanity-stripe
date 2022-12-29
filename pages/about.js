import React from "react";
import { Container, Row, Col, Card, InputGroup, Form } from "react-bootstrap";

import Image from "next/image";

function About() {
	return (
		<>
			<Container
				fluid
				className=" text-dark pt-5 rounded"
				id="section3"
				style={{ backgroundColor: "rgb(120, 0, 22)", height: "100vh" }}
			>
				<Row>
					<Col md={7} sm className="mx-auto my-auto mt-5 pt-5">
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
										fontSize: "5vw",
										lineHeight: "98%",
										color: "rgb(233, 192, 233)",
										fontWeight: "bold",
									}}
								>
									Want to Know More about US ?
								</Card.Title>

								<Card.Text
									style={{
										fontSize: "2vw",

										color: "rgb(233, 192, 233)",
									}}
								>
									Bring the best experiences for Your Home
								</Card.Text>
								<Col className="btn-group ">
									<InputGroup
										className="mb-3 "
										style={{ width: "160px", height: "50px" }}
									>
										<Form.Control
											placeholder="linktr.ee/yourname"
											aria-label="Username"
											aria-describedby="basic-addon1"
										/>
									</InputGroup>
								</Col>
							</Card.Body>
						</Card>
					</Col>
					<Col md={5} sm className="mx-auto my-auto mt-5 pt-5">
						<Image
							src="/assets/2336-011-017-400-0003-p1.jpg"
							alt="me"
							width="250"
							height="250"
						/>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default About;
