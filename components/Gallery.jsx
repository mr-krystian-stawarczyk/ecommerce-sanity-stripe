import React, { useState } from "react";
import { Container, Row, Col, Card, Carousel } from "react-bootstrap";

import Image from "next/image";
const Gallery = () => {
	return (
		<Container fluid className="justify-content-md-center  ">
			<Row className="text-center align-items-md-center justify-content-md-center">
				<Col md={8}>
					<h1 className="text-dark  rounded py-3 mb-5 hover ">Gallery</h1>
				</Col>
			</Row>
			<Row className="justify-content-md-center">
				<Col md={5} className="mx-2 my-2">
					<Card className="hover rounded">
						<Card.Img variant="top" src="/assets/gl2.jpg" />
						<Card.Body>
							<Card.Text>
								Some quick example text to build on the card title and make up
								the bulk of the card's content.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
				<Col md={5} className="mx-2 my-2">
					<Card className="hover rounded">
						<Card.Img variant="top" src="/assets/gl3.jpg" />
						<Card.Body>
							<Card.Text>
								Some quick example text to build on the card title and make up
								the bulk of the card's content.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>

				<Row className="justify-content-md-center">
					<Col md={10} className="mx-2 my-2 ">
						<Card className=" rounded hover">
							<Card.Img
								variant="top"
								src="/assets/gl1.jpg"
								style={{ maxHeight: "800px" }}
							/>
							<Card.Body>
								<Card.Text>
									Some quick example text to build on the card title and make up
									the bulk of the card's content.
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Row className="justify-content-md-center">
						<Col md={5} className="mx-2 my-2">
							<Card className="hover rounded">
								<Card.Img variant="top" src="/assets/gl4.jpg" />
								<Card.Body>
									<Card.Text>
										Some quick example text to build on the card title and make
										up the bulk of the card's content.
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
						<Col md={5} className="mx-2 my-2">
							<Card className="hover rounded">
								<Card.Img variant="top" src="/assets/gl5.jpg" />
								<Card.Body>
									<Card.Text>
										Some quick example text to build on the card title and make
										up the bulk of the card's content.
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					</Row>
					<Row className="justify-content-md-center">
						<Col md={10} className="mx-2 my-2">
							<Card className="hover rounded">
								<Card.Img
									variant="top"
									src="/assets/gl6.jpg"
									style={{ maxHeight: "800px" }}
								/>
								<Card.Body>
									<Card.Text>
										Some quick example text to build on the card title and make
										up the bulk of the card's content.
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Row>
			</Row>
		</Container>
	);
};

export default Gallery;
