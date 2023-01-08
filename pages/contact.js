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
import { BsFacebook, BsInstagram, BsSnapchat, BsTwitter } from "react-icons/bs";

import { AiFillPhone, AiOutlineMail } from "react-icons/ai";
import { BiCurrentLocation } from "react-icons/bi";
import { urlFor } from "../lib/client";

const Contact = () => {
	return (
		<Container
			className=" rounded"
			style={{
				paddingBottom: "3rem",
			}}
		>
			<Row className=" rounded my-5 py-5" style={{ height: "100vh" }}>
				{" "}
				<Col md={6} sm className="mx-auto my-auto ">
					<Card
						style={{
							alignItems: "center",
							justifyContent: "center",
							border: "none",
						}}
						className="  pt-5"
					>
						<Card.Body>
							<Card.Title
								style={{
									fontSize: "5vw",
									lineHeight: "98%",

									fontWeight: "bold",
								}}
							>
								Contact
							</Card.Title>

							<Card.Text>Telephone, Email, Adress</Card.Text>
							<Col className="btn-group "></Col>
						</Card.Body>
					</Card>
				</Col>
				<Col md={6} sm className="mx-auto my-auto  ">
					<Row className="mb-4">
						<h3>
							<AiFillPhone style={{ fontSize: "2rem" }} />
							Phone:(00)345-453-443
						</h3>
						<h6>Usually We are avaible everyday from 9 - 18</h6>
					</Row>
					<Row className="mb-4">
						<h3>
							<AiOutlineMail style={{ fontSize: "2rem" }} />
							Email:shop@mail.com
						</h3>
						<h6>We try to respond as soon as possible - within 3 hours</h6>
					</Row>
					<Row className="mb-4">
						<h3>
							<BiCurrentLocation style={{ fontSize: "2rem" }} />
							Adress: Mimi 128 45-221 Hage
						</h3>
						<h6>Come and meet our lovely team everyday!</h6>
					</Row>
				</Col>
			</Row>

			<Row className="  mt-5 pt-5">
				<Col
					md={6}
					sm
					className="mx-auto my-auto  "
					style={{ fontSize: "7rem" }}
				>
					<BsFacebook className="mx-3 rounded p-2" />
					<BsInstagram className="mx-3  rounded p-2" />
					<BsSnapchat className="mx-3  rounded p-2" />
					<BsTwitter className="mx-3  rounded p-2" />
				</Col>
				<Col md={6} sm className="mx-auto my-auto ">
					<Card
						style={{
							alignItems: "center",
							justifyContent: "center",
							border: "none",
						}}
						className="  pt-5"
					>
						<Card.Body>
							<Card.Title
								style={{
									fontSize: "5vw",
									lineHeight: "98%",

									fontWeight: "bold",
								}}
							>
								Or Follow Us Online
							</Card.Title>

							<Card.Text>Instagram, Twitter, Facebook, Snapchat</Card.Text>
							<Col className="btn-group ">
								<InputGroup
									className="mb-3 "
									style={{ width: "160px", height: "50px" }}
								>
									<Button href="/" className="bg-dark">
										{" "}
										Home
									</Button>
								</InputGroup>
							</Col>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default Contact;
