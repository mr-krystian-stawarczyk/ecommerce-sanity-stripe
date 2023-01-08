import React, { useState } from "react";
import { Container, Row, Col, Card, Carousel } from "react-bootstrap";

import Image from "next/image";
const Gallery = () => {
	return (
		<Container fluid className="justify-content-md-center bg-dark rounded ">
			<Row className="text-center">
				<Col>
					<h1 className="text-light">Gallery</h1>
				</Col>
			</Row>
			<Row className="justify-content-md-center">
				<Col md={7} className="mx-2 my-2 ">
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

				<Row className="justify-content-md-center">
					<Col md={5} className="mx-2 my-2">
						<Card className="hover rounded">
							<Card.Img variant="top" src="/assets/gl1.jpg" />
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
							<Card.Img variant="top" src="/assets/gl2.jpg" />
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
								<Card.Img variant="top" src="/assets/gl3.jpg" />
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
								<Card.Img variant="top" src="/assets/gl4.jpg" />
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
								<Card.Img variant="top" src="/assets/gl1.jpg" />
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
			<Row className="justify-content-md-center mt-5 pt-5">
				<Col md={3}>
					<h1 className="text-light"> Slides Gallery</h1>{" "}
				</Col>
			</Row>
			<Row className="justify-content-md-center">
				<Col md={10}>
					<Carousel>
						<Carousel.Item>
							<img
								className="d-block w-100"
								src="/assets/gl1.jpg"
								alt="First slide"
							/>
							<Carousel.Caption>
								<h3>First slide label</h3>
								<p>
									Nulla vitae elit libero, a pharetra augue mollis interdum.
								</p>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<img
								className="d-block w-100"
								src="/assets/gl2.jpg"
								alt="Second slide"
							/>

							<Carousel.Caption>
								<h3>Second slide label</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<img
								className="d-block w-100"
								src="/assets/gl3.jpg"
								alt="Third slide"
							/>

							<Carousel.Caption>
								<h3>Third slide label</h3>
								<p>
									Praesent commodo cursus magna, vel scelerisque nisl
									consectetur.
								</p>
							</Carousel.Caption>
						</Carousel.Item>
					</Carousel>
				</Col>
			</Row>
		</Container>
	);
};

export default Gallery;
