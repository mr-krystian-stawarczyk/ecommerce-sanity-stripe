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

function About() {
	return (
		<>
			<Container fluid className=" text-dark pt-5 rounded mt-5">
				<Row>
					<Col md={7} sm className="mx-auto my-5 ">
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

										fontWeight: "bold",
									}}
								>
									Want to Know More about US ?
								</Card.Title>

								<Card.Text
									style={{
										fontSize: "2vw",
									}}
								>
									Im Miriam - Head of our Team. We Started company in 2010 and
									everyday is a new challanges.
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col md={5} sm className="mx-auto my-auto ">
						<Image
							src="/assets/pexels-andrea-piacquadio-733872.jpg"
							alt="me"
							width="250"
							height="250"
							className="rounded-circle"
						/>
					</Col>
				</Row>
				<Row className="my-5 rounded">
					<Col md={5} sm className="mx-auto my-auto ">
						<Image
							src="/assets/pexels-jeshootscom-834892.jpg"
							alt="me"
							width="350"
							height="350"
							className="rounded"
						/>
					</Col>
					<Col md={7} sm className="mx-auto my-5 ">
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

										fontWeight: "bold",
									}}
								>
									We offer a wide range of materials and finishes
								</Card.Title>

								<Card.Text style={{}}>
									Our team of skilled craftsmen will work with you to bring your
									vision to life. Whether you have a specific design in mind or
									just a general idea of what you're looking for, we can help
									you create the perfect piece.
								</Card.Text>
								<Col className="btn-group ">
									<InputGroup
										className="mb-3 "
										style={{ width: "160px", height: "50px" }}
									>
										<Button href="/contact"> Contact</Button>
									</InputGroup>
								</Col>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default About;
