import React from "react";
import {
	Container,
	Row,
	Col,
	Card,
	InputGroup,
	Form,
	Button,
} from "react-bootstrap";

import Image from "next/image";

function About() {
	return (
		<>
			<Container fluid className=" text-dark pt-5 rounded mt-5  h-100">
				<Row>
					<Col md={6} sm className="  rounded mt-5 ">
						<Card style={{ position: "sticky", top: "0" }}>
							<Card.Img
								src="/assets/Anette-Portratt4697svartvit-copy.jpg"
								alt="me"
							/>
						</Card>
					</Col>

					<Col md={6} sm className=" mt-5 ">
						<p>
							Next door to the barren rocks and the rugged landscape of the
							Bohuslän archipelago Anette works from her studio outside of
							Gothenburg. An interior designer by training and with many years
							of work experience from the fashion industry, Anette has a
							long-time passion for the visual craftsmanship of interior designs
							as well as architecture and the creative process has always been a
							critical part of Anette’s life. Since a few years Anette dedicates
							fully to her artistry and she has since hung her art with clients
							across the globe from Seoul to London, New York and Dubai.
						</p>
						<p>
							Through her art Anette explores colors and subtle patterns from
							Nordic nature as well as the Scandinavian heritage of minimalistic
							design. With a strict attention to detail and an experimenting
							mindset towards combinations of materials, her work balances a
							generous palette of impressions with a personal inclination
							towards the simple yet refined.{" "}
						</p>{" "}
						<p>
							Anette’s artworks are defined by sculptures and three-dimensional
							minimalist patterns that makes each artwork unique and individual.
							The patterns are given simplistic and descriptive names in line
							with her sources of inspiration.{" "}
						</p>
						<h6>INTERVIEW FROM ALIUM GALLERY, COPENHAGEN, DENMARK</h6>
						<p>NAME Anette</p>
						Hallbäck COUNTRY Sweden, Gothenburg
						<h6>CAREER</h6>
						<p>
							I started my career in the retail fashion industry. After some
							years I studied to become an interior designer and since
							graduating I worked as a stylist/interior designer. Being creative
							has always been an important part of my life and as long as I can
							remember I’ve always loved to draw and create things with my
							hands. For the last few years I’ve had the opportunity to spend
							the majority of my time making my art and working as an artist.
						</p>
						<h6>LARGER ACHIEVEMENTS</h6>
						<p>
							I am very proud of the attention my artworks have gained
							internationally both from individual clients and from large
							interior designer firms who have included my art in their
							projects. Today I have hung my art with clients across the globe
							from Seoul to London, New York and Dubai.
						</p>
						<h6> STYLE</h6>
						<p>
							My artworks are defined by sculptures and three-dimensional
							patterns. This make each artwork unique and individual. The
							patterns represent a simplicity that is timeless, minimalistic yet
							with a tactile texture.
						</p>
						<h6>WHAT DOES YOUR ARTWORKS AIM TO SAY OR DO?</h6>{" "}
						<p>
							I want my art to have a central role in my customers’ home and
							interior, it should create harmony and an austere feeling. I think
							the final touch for creating a beautiful home is adding art. I
							feel that my customer is longing for something handmade and
							unique.
						</p>{" "}
						<h6>WHERE DO YOU GO TO GET INSPIRED? </h6>{" "}
						<p>
							I find my inspiration in many things and situations but especially
							from the Scandinavian nature and sea. There I see my patterns
							form. Since I’ve worked with fashion before, I also find my
							inspiration there, in the nuances and colors that I want to work
							with.
						</p>
						<h6>AT WHAT STATE OF MIND IS YOUR ARTWORKS BEST CREATED?</h6>{" "}
						<p>
							To get into the ideal state of mind I need a calm day with plenty
							of time to get into a creative process. Then I can reflect on all
							the influences and impressions gathered and gain thrilling visions
							to experiment from. From there on many cups of coffee and
							atmospheric music supports the artistic process.
						</p>
						<h6>
							DOES YOUR ART PRACTICE HAVE ANY LIMITATIONS? GOOD OR BAD? DO YOU
							WORK AROUND THEM OR BREAK THEM DOWN?
						</h6>
						<p>
							ight now, I focus a lot on plaster as a material. I like how it
							carries my artistry by enabling me to create so many different
							shapes, forms and designs. Working with plaster have many
							limitations including the quick drying process and the clogging
							however with experience as well as experimentation I´ve learnt to
							work around these and incorporate the materials unique behaviours
							in the creative process.
						</p>{" "}
						<h6> WHO INFLUENCES YOUR ARTWORKS THE MOST?</h6>{" "}
						<p>
							With often raw abstract shapes and forms my artworks are more
							influenced by my impressions of environments and surroundings than
							by single individuals. Travels, both Nordic and further away,
							influences my artworks as I collect impressions from nature as
							well as from cultural objects. Impressions of the sea and the
							patterns it leaves behind on the beach, the structure and surface
							of stones polished over time by the Nordic climate, reeds and
							forests have all influenced my artworks. Buildings, architectural
							structures and sculptures further influences me as I seek to mimic
							and interpret the patterns.
						</p>{" "}
						<h6>WHERE IS THE IDEAL SPACE FOR YOUR ART TO BE EXPERIENCED?</h6>{" "}
						<p>
							Every artwork is unique and as such there is more than one ideal
							space. I seek for my art to contribute to an integrality and
							create an ensemble with the space where it is hung. Sometimes this
							is a harmonic room in an art exhibition with a lot of free space
							around and sometimes this is in a client’s home where my artwork
							complements the interior design.
						</p>
						<h6>HOW HAS YOUR ART PRACTICE DEVELOPED OVER TIME?</h6>
						<p>
							{" "}
							Over the years I’ve come to experiment a great deal with
							materials, techniques, patterns and colors. As I’ve gained in
							experience I’ve found that my art practice has become bolder.
							Right now, I am in a period of pervading patterns across large
							canvases and experimenting with colors in ways I have not done
							earlier.
						</p>
						<h6> HOW HAS YOUR ART PRACTICE DEVELOPED YOU AS A PERSON? </h6>
						<p>
							My art practice has enabled me to acquaint many interesting
							individuals as well as given me so much motivation and energy
							through meetings and travels. Further I find that, as my art
							practice has evolved and become bolder, so have I. I´ve grown more
							confident in expressing myself through my art and to experiment
							with my art in a freer way. Practicing my art has also taught me
							to find inspiration from new sources and to channelize the
							creative input into my artworks in new ways.
						</p>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default About;
