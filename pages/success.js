import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BsBagCheckFill } from "react-icons/bs";
import { runFireworks } from "../lib/utils";

import { useStateContext } from "../context/StateContext";
import { Button } from "react-bootstrap";

const Success = () => {
	const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

	useEffect(() => {
		localStorage.clear();
		setCartItems([]);
		setTotalPrice(0);
		setTotalQuantities(0);
		runFireworks();
	}, []);

	return (
		<div className="success-wrapper">
			<div className="success">
				<p className="icon">
					<BsBagCheckFill />
				</p>
				<h2>Thank You For Your Order</h2>
				<p className="email-msg"> Check Your E-mail for Receipt</p>
				<p className="description">
					If You have any questions please e-mail at:
					<a className="email" href="mailto:order@example.com">
						help@studiomo.se
					</a>
				</p>

				<Link href="/">
					<Button type="button" width="300px" className="bg-dark text-light">
						Continue Shopping
					</Button>
				</Link>
			</div>
		</div>
	);
};

export default Success;
