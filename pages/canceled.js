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
		<Row className="my-5 rounded">
			<Col md={7} sm className="  my-5 ">
				<Card
					style={{
						alignItems: "center",
						justifyContent: "center",
						border: "none",
					}}
					className="bg-transparent text-white pt-5"
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
								<Button href="/"> Home</Button>
							</InputGroup>
						</Col>
					</Card.Body>
				</Card>
			</Col>
			<Col md={5} sm className="mx-auto my-auto ">
				<Image
					src="/assets/2336-011-017-400-0003-p1.jpg"
					alt="me"
					width="350"
					height="350"
					className="rounded"
				/>
			</Col>
		</Row>
	);
}

export default canceled;
