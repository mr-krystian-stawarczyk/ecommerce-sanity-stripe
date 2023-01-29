import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function Interrested() {
	return (
		<Container
			fluid
			className=" rounded "
			style={{
				paddingBottom: "3rem",
			}}
		>
			<Row className=" rounded  mt-5 pt-5">
				<Col md={6} sm className="">
					<Card
						style={{
							alignItems: "center",
							justifyContent: "center",
							border: "none",
						}}
						className="bg-transparent  pt-5 text-center"
					>
						<Card.Body className="">
							<Card.Title>Interrested ?</Card.Title>

							<Card.Text>Discover More!</Card.Text>

							<Button
								className="bg-dark text-light shadow-lg "
								href="/shop"
								style={{ maxWidth: "150px" }}
							>
								Shop
							</Button>
							<Button
								className="bg-dark text-light shadow-lg"
								href="/commision"
								style={{ maxWidth: "150px" }}
							>
								Commision
							</Button>
						</Card.Body>
					</Card>
				</Col>
				<Col md={4} className="videoBg">
					<video
						autoPlay
						loop
						muted
						style={{
							maxWidth: "700px",
							maxHeight: "700px",
						}}
						className="rounded videoBg mx-5"
					>
						<source src="/assets/videoBg.mp4" />
					</video>
				</Col>
			</Row>
		</Container>
	);
}

export default Interrested;
