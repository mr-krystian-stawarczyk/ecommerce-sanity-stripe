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
import { urlFor } from "../lib/client";

function AboutMe() {
	return (
		<>
			<Container
				fluid
				className="  mt-5 pt-1 rounded "
				style={{
					height: "100vh",
				}}
			>
				<Row
					style={{
						alignItems: "center",
						justifyContent: "center",
					}}
					className="mt-5 "
				>
					<Col md={5} sm className="mx-auto my-auto mt-5 ">
						<Card>
							<Card.Img src="/assets/hd1.jpg" className="shadow-lg" />
						</Card>
					</Col>
					<Col md={6} sm className=" ">
						<Card
							style={{
								border: "none",
							}}
							className="bg-transparent "
						>
							<Card.Body className="text-center">
								<Card.Title
									style={{
										fontWeight: "bold",
									}}
								>
									<h5>
										Somewhere near Linkoping, in southern Sweden, Magdalena
										Lapinska creates and pursues her passions in her Studio Ro.
									</h5>{" "}
									<br></br>
									<h5>
										A construction engineer by education, an interior designer
										and stylist by passion, great enthusiast of good design,
										architecture and minimalism in every edition. In interior
										design, he successfully uses his own paintings, sculptures
										and handmade lamps.
									</h5>
									<br></br>{" "}
									<h5>
										Inspired by the beauty and raw nature of Scandinavian
										nature, she creates unique, structural paintings and 3D
										objects, experimenting with various techniques. Magdalena
										wants to share this art with you on this website.
									</h5>
								</Card.Title>
								<Card.Text className="mt-5">
									<Typewriter />
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>{" "}
		</>
	);
}

export default AboutMe;
