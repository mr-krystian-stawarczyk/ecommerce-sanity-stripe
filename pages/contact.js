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
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";

import { AiOutlineMail } from "react-icons/ai";

import { urlFor } from "../lib/client";

const Contact = () => {
	return (
		<Container fluid className=" rounded galleryBg">
			<Row className=" rounded my-5 py-5">
				<Col md={6} className="mt-5 pt-5">
					<Card
						style={{
							alignItems: "center",
							justifyContent: "center",
							border: "none",
						}}
						className="bg-transparent  pt-5"
					>
						<Card.Body className="text-center">
							<Card.Title>Contact</Card.Title>
							<Card.Text className="my-5">
								<span
									className="my-3"
									style={{ fontWeight: "bold", fontSize: "2rem" }}
								>
									<AiOutlineMail style={{ fontSize: "3rem" }} />
									studio.mo@mail.com
								</span>
								<br></br>
								<span>
									We try to respond as soon as possible - within 3 hours
								</span>
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
				<Col md={6} className="align-items-center justify-content-center">
					<Row className="  mt-5 pt-5">
						<Card
							style={{
								alignItems: "center",
								justifyContent: "center",
								border: "none",
							}}
							className=" bg-transparent pt-5"
						>
							<Card.Body className="justify-content-md-center align-items-md-center text-center">
								<Card.Title>Follow Us Online</Card.Title>

								<Card.Text style={{ fontSize: "3rem" }} className="text-center">
									<a>
										<BsFacebook className="mx-3 rounded p-2  hover" />
									</a>
									<a href="https://www.instagram.com/studio_mo_m/">
										<BsInstagram className="mx-3  rounded p-2  hover" />
									</a>
									<a>
										<FaTiktok className="mx-3  rounded   hover" />
									</a>
								</Card.Text>
							</Card.Body>
							<Button
								href="/"
								className="bg-light text-dark shadow-lg "
								style={{ maxWidth: "150px" }}
							>
								Home
							</Button>
						</Card>
					</Row>
				</Col>
			</Row>
		</Container>
	);
};

export default Contact;
