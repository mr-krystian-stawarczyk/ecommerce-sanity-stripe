import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import Head from "next/head";
function faq() {
	return (
		<Container className="mt-5 p-5 galleryBg" fluid>
			<Head>
				<title>Faq</title>
			</Head>
			<Container>
				<Row className="justify-content-center text-center">
					<Col md={8}>
						<h1 className="m-2">General</h1>
						<Accordion>
							<Accordion.Item eventKey="0">
								<Accordion.Header>Can I make custom order?</Accordion.Header>
								<Accordion.Body>
									Yes, you can make a custom order. Write an inquiry to
									shop@studiomo.com. You will receive a quote, available sizes
									and colors of the artwork.
								</Accordion.Body>
							</Accordion.Item>
							<Accordion.Item eventKey="1">
								<Accordion.Header>
									How long does it take to complete a custom order?
								</Accordion.Header>
								<Accordion.Body>
									It depends on how many orders we currently have and what you
									want to order. Always ask by email for current processing
									times.
								</Accordion.Body>
							</Accordion.Item>
							<Accordion.Item eventKey="2">
								<Accordion.Header>
									What colors of paintings can i order?
								</Accordion.Header>
								<Accordion.Body>
									Orders are usually delivered in natural earth colors: white,
									grey, beige and black. For more demanding interiors, we can
									make orders in selected colors from the NCS palette.
								</Accordion.Body>
							</Accordion.Item>
							<Accordion.Item eventKey="3">
								<Accordion.Header>
									Is it possible to return a purchase?
								</Accordion.Header>
								<Accordion.Body>
									No, it is not possible to return a purchase. Every artwork is
									unique and individually crafted. We have a non-return and
									non-refundable policy, it is stated in the conditions and
									therms.
								</Accordion.Body>
							</Accordion.Item>

							<Accordion.Item eventKey="5">
								<Accordion.Header>
									What materials are you working with?
								</Accordion.Header>
								<Accordion.Body>
									It depends on the artwork you choose. We always use
									high-quality linen canvas and an unique mix of gypsum and
									other media.
								</Accordion.Body>
							</Accordion.Item>
						</Accordion>
						<Accordion>
							<h1 className="m-5">Shipping</h1>
							<Accordion.Item eventKey="0">
								<Accordion.Header>Do you ship worldwide?</Accordion.Header>
								<Accordion.Body>
									Yes, worldwide shipping is available. We ship from the studio
									in Linkoping, Sweden via DHL, the shipment is registered,
									after ordering you receive a tracking link. Please note that
									additional fees and duties may apply depending on the
									destination country.
								</Accordion.Body>
							</Accordion.Item>
							<Accordion.Item eventKey="1">
								<Accordion.Header>
									How much does a work of art usually weigh?
								</Accordion.Header>
								<Accordion.Body>
									The weight depends on the type of artwork and its size. Size
									small, weight max. 3kg Medium size, max weight. 7kg Large
									size, max weight 12kg
								</Accordion.Body>
							</Accordion.Item>
							<Accordion.Item eventKey="2">
								<Accordion.Header>
									How much does the shipment cost?
								</Accordion.Header>
								<Accordion.Body>
									Within Sweden: 15-25 EUR depending on package size Within the
									EU (incl. UK, Norway, Switzerland): 25-45 EUR depending on
									package size Worldwide: 50-90 EUR depending on the package
									size
								</Accordion.Body>
							</Accordion.Item>
						</Accordion>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}

export default faq;
