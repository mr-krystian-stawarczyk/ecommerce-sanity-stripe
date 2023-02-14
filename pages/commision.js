import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Head from "next/head";
function Commision() {
	return (
		<Container fluid className="justify-content-md-center  rounded mt-5">
			<Head>
				<title>Commision</title>
			</Head>
			<Row className="text-center  rounded">
				<Col className="my-5">
					<Card className="border-0 bg-transparent my-5">
						<Card.Title>
							Studio Mo offers customized commission works. In dialogue with
							clients we makes special orders on desired dimensions, series and
							tone.
						</Card.Title>
						<Card.Text>
							Her artworks are defined by sculptures and three-dimensional
							patterns that represent a simplicity that is timeless,
							minimalistic yet with a tactile texture. Exhibited below is a
							collection of artworks and selected series.
						</Card.Text>
					</Card>
					<Row style={{ justifyContent: "center" }}>
						<Button
							className="bg-dark text-light shadow-lg mb-5"
							href="/contact"
						>
							Enquire for more information
						</Button>
					</Row>
				</Col>
			</Row>

			<Row className="justify-content-md-center">
				<Col md={10} className="mx-2 my-4 ">
					<Card className=" rounded">
						<Card.Img
							variant="top"
							src="/assets/gl9.jpg"
							style={{ maxHeight: "900px" }}
							className="rounded shadow-lg"
						/>
					</Card>
				</Col>

				<Row className="justify-content-md-center">
					<Col md={5} className="mx-2 my-2">
						<Card className=" rounded ">
							<Card.Img
								variant="top"
								src="/assets/gl7.jpg"
								className="rounded shadow-lg"
							/>
						</Card>
					</Col>
					<Col md={5} className="mx-2 my-2">
						<Card className="rounded ">
							<Card.Img
								variant="top"
								src="/assets/gl8.jpg"
								className="rounded shadow-lg"
							/>
						</Card>
					</Col>

					<Row className="justify-content-md-center">
						<Col md={5} className="mx-2 my-2">
							<Card className=" rounded">
								<Card.Img
									variant="top"
									src="/assets/gl12.jpg"
									className="rounded shadow-lg"
								/>
							</Card>
						</Col>
						<Col md={5} className="mx-2 my-2">
							<Card className=" rounded">
								<Card.Img
									variant="top"
									src="/assets/gl11.jpg"
									style={{ maxHeight: "750px" }}
									className="rounded shadow-lg"
								/>
							</Card>
						</Col>{" "}
					</Row>
					<Row
						className="justify-content-md-center text-center"
						style={{
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<Col md={5} className="mx-2 my-2">
							<Card className=" rounded">
								<Card.Img
									variant="top"
									src="/assets/gl13.jpg"
									className="rounded shadow-lg"
								/>
							</Card>
						</Col>{" "}
						<Col md={5} className="mx-2 my-2">
							<Card className=" rounded border-0 ">
								<Card.Body>
									<Card.Title>
										Studio Mo closely collaborates with a frame workshop if you
										wish to have the painting framed.
									</Card.Title>
									<Card.Text>
										However, the artworks are also beautiful without a frame.
										The frame is painted with a white glaze that keeps the wood
										structure.
									</Card.Text>
									<Button
										href="/shop"
										className="bg-dark text-light hover shadow-lg"
										style={{ maxWidth: "150px" }}
									>
										Shop
									</Button>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Row>
			</Row>
		</Container>
	);
}

export default Commision;
