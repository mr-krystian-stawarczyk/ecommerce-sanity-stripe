import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

function faq() {
	return (
		<Container className="mt-5 pt-5">
			<Container>
				<Row>
					<Col md={6}>
						<Accordion>
							<h1>General</h1>
							<Accordion.Item eventKey="0">
								<Accordion.Header>
									WHICH DIFFERENT ARTWORKS CAN I ORDER?
								</Accordion.Header>
								<Accordion.Body>
									Please have a look at Anette’s Instagram under ”Highlights”,
									there you can see examples on patterns Anette have worked
									with. Anette’s artworks are defined by sculptures and
									three-dimensional minimalist patterns that makes each artwork
									unique and individual. Anette continuously experiments with
									new colours and subtle patterns. The patterns are given
									simplistic and descriptive names in line with her sources of
									inspiration, such as Vertical, Dune, Wave, Line etc. Each
									artwork will be unique, lines and patterns will never be
									exactly the same.
								</Accordion.Body>
							</Accordion.Item>
							<Accordion.Item eventKey="1">
								<Accordion.Header>CAN I MAKE A CUSTOM ORDER?</Accordion.Header>
								<Accordion.Body>
									Anette takes custom orders. Please contact her by email at
									art@anettehallback.com to get the artwork catalogue where the
									price list is included. There you can also see the different
									measurements Anette work with. All orders will have to be made
									in centimeters measurement.
								</Accordion.Body>
							</Accordion.Item>
							<Accordion.Item eventKey="2">
								<Accordion.Header>
									WHICH COLORS CAN I ORDER IN?
								</Accordion.Header>
								<Accordion.Body>
									Anette’s artworks are usually made in sober and nature
									inspired white or off-white colours but the artworks can be
									custom ordered in any colour via an optional NCS code colour.
								</Accordion.Body>
							</Accordion.Item>
							<Accordion.Item eventKey="3">
								<Accordion.Header>
									CAN I ADD A FRAME TO THE PAINTINGS?
								</Accordion.Header>
								<Accordion.Body>
									Anette collaborates with a frame workshop and it's possible to
									add a frame to the painting. The paintings are beautiful both
									with and without a frame.
								</Accordion.Body>
							</Accordion.Item>
							<Accordion.Item eventKey="4">
								<Accordion.Header>Accordion Item #2</Accordion.Header>
								<Accordion.Body>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud exercitation ullamco
									laboris nisi ut aliquip ex ea commodo consequat. Duis aute
									irure dolor in reprehenderit in voluptate velit esse cillum
									dolore eu fugiat nulla pariatur. Excepteur sint occaecat
									cupidatat non proident, sunt in culpa qui officia deserunt
									mollit anim id est laborum.
								</Accordion.Body>
							</Accordion.Item>
							<Accordion.Item eventKey="5">
								<Accordion.Header>
									HOW CAN I FIND THE PRICE LIST?
								</Accordion.Header>
								<Accordion.Body>
									You can find the prices in the Shop page or by contacting
									Anette via email at art@anettehallback.com to get the artwork
									catalogue where the price list is included.
								</Accordion.Body>
							</Accordion.Item>
							<Accordion.Item eventKey="6">
								<Accordion.Header>
									WHAT MATERIALS ARE YOU WORKING WITH?
								</Accordion.Header>
								<Accordion.Body>
									All artworks are made on fine high-quality linen canvas and
									the material used is a plaster mix in either a white or
									off-white colour.
								</Accordion.Body>
							</Accordion.Item>
							<Accordion.Item eventKey="7">
								<Accordion.Header>
									HOW DO I MAKE SIMILAR ART MYSELF / CAN YOU SHARE INSTRUCTIONS
									FOR THE TECHNIQUES YOU USE?
								</Accordion.Header>
								<Accordion.Body>
									The material is a plaster mix-recipe that Anette came up with
									after much experimentation and many failures. Having spent
									years testing as well as refining these techniques, Anette
									will not share any instructions for how to copy the artworks,
									please respect this.
								</Accordion.Body>
							</Accordion.Item>
							<Accordion.Item eventKey="8">
								<Accordion.Header>
									IS IT POSSIBLE TO RETURN A PURCHASE?
								</Accordion.Header>
								<Accordion.Body>
									No, it is not possible to return a purchase. We have a
									non-return and non-refundable policy. Every artwork is unique
									and individually crafted.
								</Accordion.Body>
							</Accordion.Item>
						</Accordion>
					</Col>
					<Col md={6}>
						<Accordion>
							<h1>Shipping</h1>
							<Accordion.Item eventKey="0">
								<Accordion.Header>DO YOU SHIP WORLDWIDE?</Accordion.Header>
								<Accordion.Body>
									We ship worldwide with DHL. All orders are traceable and
									reliable shipping delivery are available from our studio in
									Gothenburg, Sweden with a flat shipping fee depending on
									country. You will get an email with a tracking link to follow
									the package as soon the package leaves the studio. Some orders
									may be subject to local taxes and import duties. Since we are
									unable to calculate these charges, shipping from Anette
									Hallbäck does not cover these expenses.
								</Accordion.Body>
							</Accordion.Item>
							<Accordion.Item eventKey="1">
								<Accordion.Header>
									HOW MUCH IS THE SHIPPING FEE?
								</Accordion.Header>
								<Accordion.Body>
									Within Sweden: 15-25 EUR depending on package size Within the
									EU (incl. UK, Norway, Switzerland): 25-45 EUR depending on
									package size Export world wide: 50-90 EUR depending on the
									package size
								</Accordion.Body>
							</Accordion.Item>
							<Accordion.Item eventKey="2">
								<Accordion.Header>
									I WANT TO ORDER A LARGE ARTWORK; HOW DO I ENSURE THE ART IS
									SAFELY SHIPPED?
								</Accordion.Header>
								<Accordion.Body>
									For the larger artworks, Anette and her team build a
									custom-made wooden box for a safe shipping. Should an artwork
									be damage on arrival, please make a note of any external
									damage on the parcel and notify the driver and contact us
									right away at art@anettehallback.com
								</Accordion.Body>
							</Accordion.Item>
							<Accordion.Item eventKey="3">
								<Accordion.Header>
									HOW MUCH DOES AN ARTWORK TYPICALLY WEIGH?
								</Accordion.Header>
								<Accordion.Body>
									Below you can find the approximate weight on some larger
									sizes. Vertical/ Line, 100 x 150 cm weight 12-14 kg Vertical/
									Line 100 x 120 cm weight 7-10 kg Vertical/ Line 50 x 70 cm
									weight 2-3 kg Vertical/ Line 24 x 30 cm weight 0,5-1 kg Dune
									100 x 150 cm, weight 17-18 kg Dune 100 x 120 cm, weight 13-14
									kg Dune 70 x 100 cm weight 7-8 kg Dune 50 x 70 cm weight 5-6
									kg Dune 30 x 30 cm weight 1-1,5 kg Wave 80 x 120 cm weight 10
									-12 kg Wave 70 x 100 cm weight 7-8 kg
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
