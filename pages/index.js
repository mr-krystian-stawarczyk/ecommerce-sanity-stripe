import React from "react";
import { client } from "../lib/client";
import { Product, FooterBanner, HeroBanner, AboutMe } from "../components";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = ({ products, bannerData }) => {
	return (
		<div>
			<HeroBanner heroBanner={bannerData.length && bannerData[0]} />
			<AboutMe />
			<div className="products-heading">
				<h2>Best Selling Products</h2>
				<p>Furnitures of many variations</p>
			</div>

			<div className="products-container">
				{products?.map((product) => (
					<Product key={product._id} product={product} />
				))}
			</div>
			<FooterBanner footerBanner={bannerData && bannerData[0]} />
		</div>
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
