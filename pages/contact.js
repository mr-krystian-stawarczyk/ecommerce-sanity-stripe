import React from "react";
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
import "bootstrap/dist/css/bootstrap.min.css";

import { AiFillPhone, AiOutlineMail } from "react-icons/ai";
import { BiCurrentLocation } from "react-icons/bi";

const Contact = () => {
	return (
		<Container
			className="bg-transparent rounded"
			style={{ marginTop: "6rem", paddingBottom: "3rem" }}
		>
			<Row
				className="justify-content-md-center text-light bg-dark rounded"
				style={{ fontSize: "3rem" }}
			>
				<Col md={4}>You Can Reach Us</Col>
			</Row>
			<Row
				className="justify-content-md-center text-light bg-dark rounded"
				style={{ fontSize: "2rem" }}
			>
				<Col md={4}>Everywhere - Everytime</Col>
			</Row>
			<Row className="justify-content-center my-3 mt-5">
				<Col md={3}>
					<Card
						style={{
							width: "18rem",
							alignItems: "center",
						}}
					>
						<AiFillPhone style={{ fontSize: "3rem" }} />

						<Card.Body>
							<Card.Title>Phone</Card.Title>
							<Card.Text>Usually We are avaible everyday from 9 - 18</Card.Text>
							<Button variant="primary">(00)345-453-443</Button>
						</Card.Body>
					</Card>
				</Col>{" "}
				<Col md={3}>
					<Card style={{ width: "18rem", alignItems: "center" }}>
						<AiOutlineMail style={{ fontSize: "3rem" }} />
						<Card.Body>
							<Card.Title>Email</Card.Title>
							<Card.Text>
								We try to respond as soon as possible - within 3 hours
							</Card.Text>
							<Button variant="primary">shop@mail.com</Button>
						</Card.Body>
					</Card>
				</Col>
				<Col md={3}>
					<Card style={{ width: "18rem", alignItems: "center" }}>
						<BiCurrentLocation style={{ fontSize: "3rem" }} />
						<Card.Body>
							<Card.Title>Adress</Card.Title>
							<Card.Text>Come and meet our lovely team everyday!</Card.Text>
							<Button variant="primary">Mimi 128 45-221 Hage</Button>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default Contact;
