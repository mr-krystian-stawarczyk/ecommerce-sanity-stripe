import React from "react";
import {
	Container,
	Row,
	Col,
	Card,
	InputGroup,
	Form,
	Button,
	Image,
} from "react-bootstrap";
function canceled() {
	return (
		<Container>
			<Row className="my-5 rounded">
				<Col md={7} sm className="  my-5 ">
					<Card
						style={{
							alignItems: "center",
							justifyContent: "center",
							border: "none",
						}}
						className="bg-transparent  pt-5"
					>
						<Card.Body>
							<Card.Title
								style={{
									fontSize: "5vw",
									lineHeight: "98%",

									fontWeight: "bold",
								}}
							>
								Your Order Is Canceled Something Went Wrong
							</Card.Title>

							<Card.Text style={{}}>
								Please Check All the details about Your canceled order
							</Card.Text>
							<Col className="btn-group ">
								<InputGroup
									className="mb-3 "
									style={{ width: "160px", height: "50px" }}
								>
									<Button href="/" className="bg-dark">
										{" "}
										Home
									</Button>
								</InputGroup>
							</Col>
						</Card.Body>
					</Card>
				</Col>
				<Col md={5} sm className="mx-auto my-auto ">
					<Image
						src="/assets/canceled.jpg"
						alt="me"
						width="350"
						height="350"
						className="rounded"
					/>
				</Col>
			</Row>
		</Container>
	);
}

export default canceled;
