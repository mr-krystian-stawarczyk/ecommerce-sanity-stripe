import Link from "next/link";
import React from "react";
import {
	AiFillInstagram,
	AiOutlineTwitter,
	AiOutlineFacebook,
} from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
function Footer() {
	return (
		<div className="footer-container">
			<Link href="/terms">Terms & Conditions</Link>
			<p className="icons">
				<AiFillInstagram className="hover" />
				<FaTiktok className="hover" />
				<AiOutlineFacebook className="hover" />
			</p>
			<p>2023 Studio Ro® All Rights Reserved</p>
		</div>
	);
}

export default Footer;
