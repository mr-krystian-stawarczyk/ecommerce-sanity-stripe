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
			<p>2023 Square Styling® All Rights Reserved</p>
			<p className="icons">
				<AiFillInstagram />
				<AiOutlineTwitter />
				<AiOutlineFacebook />
			</p>
			<Link href="/terms">Terms & Conditions</Link>
		</div>
	);
}

export default Footer;
