import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function Commision() {
	return (
		<Container
			fluid
			className=" rounded "
			style={{
				paddingBottom: "3rem",
			}}
		>
			<Row className=" rounded  mt-5 pt-5">
				<Col md={6} sm className="mx-auto my-auto  ">
					<video
						autoPlay
						loop
						muted
						style={{ maxWidth: "700px", maxHeight: "700px" }}
						className="rounded"
					>
						<source src="/assets/videoBg.mp4" />
					</video>
				</Col>
				<Col md={6} sm className="mx-auto my-auto ">
					<Card
						style={{
							alignItems: "center",
							justifyContent: "center",
							border: "none",
						}}
						className="bg-transparent  pt-5"
					>
						<Card.Body className="">
							<Card.Title
								style={{
									fontSize: "4vw",
									lineHeight: "98%",

									fontWeight: "bold",
								}}
							>
								Looking For Something Unique ?
							</Card.Title>

							<Card.Text>See what We can do fo You</Card.Text>
							<Col className="btn-group "></Col>

							<Button className="bg-dark" href="/commision">
								Commision
							</Button>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default Commision;
