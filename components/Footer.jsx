import Link from "next/link";
import React from "react";
import {
	AiFillInstagram,
	AiOutlineTwitter,
	AiOutlineFacebook,
} from "react-icons/ai";

function Footer() {
	return (
		<div className="footer-container">
			<Link href="/terms">Terms & Conditions</Link>
			<p className="icons">
				<AiFillInstagram />
				<AiOutlineTwitter />
				<AiOutlineFacebook />
			</p>
			<p>2023 Square Styling® All Rights Reserved</p>
		</div>
	);
}

export default Footer;
