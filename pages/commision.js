import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function Commision() {
	return (
		<Container fluid className="justify-content-md-center  rounded mt-5">
			<Row className="text-center  rounded">
				<Col className="my-5">
					<Card className="border-0 bg-transparent ">
						<Card.Title>
							Studio Ro offers customized commission works. In dialogue with
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
						<Button className="bg-dark" href="/contact">
							Enquire for more information
						</Button>
					</Row>
				</Col>
			</Row>

			<Row className="justify-content-md-center">
				<Col md={10} className="mx-2 my-2 ">
					<Card className=" rounded">
						<Card.Img
							variant="top"
							src="/assets/gl9.jpg"
							style={{ maxHeight: "900px" }}
						/>
					</Card>
				</Col>

				<Row className="justify-content-md-center">
					<Col md={5} className="mx-2 my-2">
						<Card className=" rounded ">
							<Card.Img variant="top" src="/assets/gl7.jpg" />
						</Card>
					</Col>
					<Col md={5} className="mx-2 my-2">
						<Card className=" rounded ">
							<Card.Img variant="top" src="/assets/gl8.jpg" />
						</Card>
					</Col>

					<Row className="justify-content-md-center">
						<Col md={5} className="mx-2 my-2">
							<Card className=" rounded">
								<Card.Img variant="top" src="/assets/gl12.jpg" />
							</Card>
						</Col>
						<Col md={5} className="mx-2 my-2">
							<Card className=" rounded">
								<Card.Img
									variant="top"
									src="/assets/gl11.jpg"
									style={{ maxHeight: "590px" }}
								/>
							</Card>
						</Col>{" "}
					</Row>
					<Row
						className="justify-content-md-center"
						style={{
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<Col md={5} className="mx-2 my-2">
							<Card className=" rounded">
								<Card.Img variant="top" src="/assets/gl13.jpg" />
							</Card>
						</Col>{" "}
						<Col md={5} className="mx-2 my-2">
							<Card className=" rounded border-0 ">
								<Card.Body>
									<Card.Text style={{ fontWeight: "bold" }}>
										Studio Ro closely collaborates with a frame workshop if you
										wish to have the painting framed. However, the artworks are
										also beautiful without a frame. The frame is painted with a
										white glaze that keeps the wood structure.
									</Card.Text>
									<Button href="/shop" className="bg-dark hover">
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
