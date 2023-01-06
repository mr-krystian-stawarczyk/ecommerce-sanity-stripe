import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

import Image from "next/image";
const Gallery = () => {
	return (
		<Container className="justify-content-md-center">
			<Row className="text-center">
				<Col>
					<h1>Gallery</h1>
				</Col>
			</Row>
			<Row className="justify-content-md-center">
				<Col className="mx-2 my-2">
					<Card>
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
					<Col md={6} className="mx-2 my-2">
						<Card>
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
						<Card>
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
							<Card>
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
							<Card>
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
						<Col className="mx-2 my-2">
							<Card>
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
		</Container>
	);
};

export default Gallery;
