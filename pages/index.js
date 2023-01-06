import React from "react";
import { client } from "../lib/client";
import {
	Product,
	FooterBanner,
	HeroBanner,
	AboutMe,
	Gallery,
} from "../components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
const Home = ({ products, bannerData }) => {
	return (
		<>
			<AboutMe />
			<Gallery />
		</>
	);
};

export const getServerSideProps = async () => {
	const query = '*[_type == "product"]';
	const products = await client.fetch(query);

	const bannerQuery = '*[_type == "banner"]';
	const bannerData = await client.fetch(bannerQuery);

	return {
		props: { products, bannerData },
	};
};

export default Home;
