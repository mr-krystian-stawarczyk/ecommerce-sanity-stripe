import React from "react";
import Link from "next/link";

import { Cart } from "./";
import { useStateContext } from "../context/StateContext";

import { AiOutlineShopping } from "react-icons/ai";

import { Container, Button, Form } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavbarComp = () => {
	const { showCart, setShowCart, totalQuantities } = useStateContext();
	return (
		<Navbar
			expand="lg"
			fixed="top"
			style={{
				height: "70px",
			}}
			className="  bg-white"
		>
			<Container>
				<Navbar.Brand href="/">
					<h4>Studio Mo®</h4>
				</Navbar.Brand>

				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse
					id="basic-navbar-nav"
					className="bg-white rounded justify-content-end"
					style={{
						height: "70px",
					}}
				>
					<Nav>
						<Nav.Link as={Link} href="/" className="mx-2">
							Home
						</Nav.Link>
						<Nav.Link as={Link} href="/shop" className="mx-2">
							Shop
						</Nav.Link>
						<Nav.Link as={Link} href="/commision" className="mx-2">
							Commision
						</Nav.Link>
						<Nav.Link as={Link} href="/contact" className="mx-2">
							Contact
						</Nav.Link>
						<Nav.Link as={Link} href="/faq" className="mx-2">
							Faq
						</Nav.Link>{" "}
					</Nav>

					<Button
						type="button"
						className="cart-icon mb-5 bg-dark "
						onClick={() => setShowCart(true)}
						style={{ width: "50px" }}
					>
						<AiOutlineShopping />
						<span className="cart-item-qty">{totalQuantities}</span>
					</Button>

					{showCart && <Cart />}
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavbarComp;
