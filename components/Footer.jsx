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
				<a href="https://www.instagram.com/studio_mo_m/">
					{" "}
					<AiFillInstagram className="hover" />
				</a>

				<a>
					<FaTiktok className="hover" />
				</a>
				<a>
					<AiOutlineFacebook className="hover" />
				</a>
			</p>
			<p>2023 Studio Mo® All Rights Reserved</p>
		</div>
	);
}

export default Footer;
