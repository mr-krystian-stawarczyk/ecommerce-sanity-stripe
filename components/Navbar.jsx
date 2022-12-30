import React from "react";
import Link from "next/link";

import { Cart } from "./";
import { useStateContext } from "../context/StateContext";

import { AiOutlineShopping } from "react-icons/ai";
import { BsTools } from "react-icons/bs";
import { Container, Button } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavbarComp = () => {
	const { showCart, setShowCart, totalQuantities } = useStateContext();
	return (
		<Navbar
			bg="dark"
			variant="dark"
			expand="lg"
			fixed="top"
			style={{
				height: "70px",
			}}
			className=" rounded  my-3 mx-5"
		>
			<Container>
				<Navbar.Brand href="/">
					<BsTools className="m-2 text-danger" />
					<span>Square Style</span>
				</Navbar.Brand>
				<Nav className="justify-content-center">
					<Nav.Link href="/">Home</Nav.Link>
					<Nav.Link href="/about">About</Nav.Link>
					<Nav.Link href="/work">Work</Nav.Link>
					<Nav.Link href="/contact">Contact</Nav.Link>
				</Nav>

				<Button
					type="button"
					className="cart-icon mb-5 "
					onClick={() => setShowCart(true)}
					style={{ width: "60px" }}
				>
					<AiOutlineShopping />
					<span className="cart-item-qty">{totalQuantities}</span>
				</Button>
				{showCart && <Cart />}
			</Container>
		</Navbar>
	);
};

export default NavbarComp;
