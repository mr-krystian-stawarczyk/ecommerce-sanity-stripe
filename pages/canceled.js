import React from "react";
import {
	Container,
	Row,
	Col,
	Card,
	InputGroup,
	Button,
	Image,
} from "react-bootstrap";
function canceled() {
	return (
		<Container className="mt-5">
			<Row className="mt-5 rounded justify-content-md-center">
				<Col md={7} sm className="  my-5 ">
					<Card
						style={{
							border: "none",
						}}
						className="bg-transparent text-center  pt-5"
					>
						<Card.Body>
							<Card.Title>
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
									<Button href="/" className="bg-light text-dark shadow-lg">
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
