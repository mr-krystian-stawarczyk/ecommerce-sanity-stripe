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
					<Col md={5} sm className="mx-auto my-auto mt-5 hover">
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
							<Card.Body>
								<Card.Title
									style={{
										fontSize: "2vw",

										fontWeight: "bold",
									}}
								>
									<span>
										"An artist is someone who produces items that people don't
										need to have, but - for some reason – thinks it would be a
										good idea to give them to them" - Andy Warhol
									</span>
								</Card.Title>
								<Card.Text>
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
