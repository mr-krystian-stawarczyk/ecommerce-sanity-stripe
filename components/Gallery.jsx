import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Gallery = () => {
	return (
		<Container fluid className="gallery ">
			<Row className="text-center align-items-md-center justify-content-md-center ">
				<Col md={8} className="">
					<Card className="border-0 my-5">
						<Card.Title>Gallery</Card.Title>
					</Card>
				</Col>
			</Row>

			<Row className="justify-content-md-center ">
				<Col md={10} className="mx-2 my-2 ">
					<Card className=" rounded shadow-lg  border-0">
						<Card.Img
							variant="top"
							src="/assets/gl1.jpg"
							style={{ maxHeight: "800px" }}
							className="rounded"
						/>
					</Card>
				</Col>
				<Col md={5} className="mx-2 my-2">
					<Card className=" rounded shadow-lg border-0">
						<Card.Img
							variant="top"
							src="/assets/gl2.jpg"
							style={{ maxHeight: "700px" }}
							className="rounded"
						/>
					</Card>
				</Col>
				<Col md={5} className="mx-2 my-2">
					<Card className=" rounded shadow-lg  border-0">
						<Card.Img
							variant="top"
							src="/assets/gl3.jpg"
							style={{ maxHeight: "700px" }}
							className="rounded"
						/>
					</Card>
				</Col>
				<Col md={5} className="mx-2 my-2">
					<Card className=" rounded shadow-lg border-0">
						<Card.Img variant="top" src="/assets/gl4.jpg" className="rounded" />
					</Card>
				</Col>
				<Col md={5} className="mx-2 my-2">
					<Card className=" rounded shadow-lg border-0">
						<Card.Img variant="top" src="/assets/gl5.jpg" className="rounded" />
					</Card>
				</Col>
			</Row>
			<Row className="justify-content-md-center">
				<Col md={10} className="mx-2 my-2">
					<Card className=" rounded shadow-lg border-0">
						<Card.Img
							variant="top"
							src="/assets/gl6.jpg"
							style={{ maxHeight: "800px" }}
							className="rounded"
						/>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default Gallery;
