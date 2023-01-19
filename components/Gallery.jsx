import React, { useState } from "react";
import { Container, Row, Col, Card, Carousel } from "react-bootstrap";

import Image from "next/image";
const Gallery = () => {
	return (
		<Container fluid className="justify-content-md-center ">
			<Row className="text-center align-items-md-center justify-content-md-center">
				<Col md={8}>
					<h1 className="text-dark  rounded py-3 mb-5  ">Gallery</h1>
				</Col>
			</Row>
			<Row className="justify-content-md-center ">
				<Col md={5} className="mx-2 my-2">
					<Card className=" rounded  border-0">
						<Card.Img
							variant="top"
							src="/assets/gl2.jpg"
							style={{ maxHeight: "600px" }}
						/>
					</Card>
				</Col>
				<Col md={5} className="mx-2 my-2">
					<Card className=" rounded  border-0">
						<Card.Img
							variant="top"
							src="/assets/gl3.jpg"
							style={{ maxHeight: "600px" }}
						/>
					</Card>
				</Col>

				<Row className="justify-content-md-center">
					<Col md={10} className="mx-2 my-2 ">
						<Card className=" rounded   border-0">
							<Card.Img
								variant="top"
								src="/assets/gl1.jpg"
								style={{ maxHeight: "800px" }}
							/>
						</Card>
					</Col>
					<Row className="justify-content-md-center">
						<Col md={5} className="mx-2 my-2">
							<Card className=" rounded  border-0">
								<Card.Img variant="top" src="/assets/gl4.jpg" />
							</Card>
						</Col>
						<Col md={5} className="mx-2 my-2">
							<Card className=" rounded  border-0">
								<Card.Img variant="top" src="/assets/gl5.jpg" />
							</Card>
						</Col>
					</Row>
					<Row className="justify-content-md-center">
						<Col md={10} className="mx-2 my-2">
							<Card className=" rounded  border-0">
								<Card.Img
									variant="top"
									src="/assets/gl6.jpg"
									style={{ maxHeight: "800px" }}
								/>
							</Card>
						</Col>
					</Row>
				</Row>
			</Row>
		</Container>
	);
};

export default Gallery;
