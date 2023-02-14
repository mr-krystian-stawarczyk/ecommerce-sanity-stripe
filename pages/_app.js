import React, { useEffect } from "react";
import { StateContext } from "../context/StateContext";
import { useRouter } from "next/router";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import { Layout } from "../components";
import { Toaster } from "react-hot-toast";
import Script from "next/script";
import * as ga from "../lib/google-analytics";
export default function App({ Component, pageProps }) {
	useEffect(() => {
		require("bootstrap/dist/js/bootstrap.bundle.min.js");
	}, []);

	const router = useRouter();

	useEffect(() => {
		const handleRouteChange = (url) => {
			ga.pageview(url);
		};

		router.events.on("routeChangeComplete", handleRouteChange);
		return () => {
			router.events.off("routeChangeComplete", handleRouteChange);
		};
	}, [router.events]);

	return (
		<StateContext>
			<Layout>
				<Script
					src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_ID}`}
					strategy="afterInteractive"
				/>
				<Script id="google-analytics-script" strategy="afterInteractive">
					{`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', '${process.env.GOOGLE_ANALYTICS_ID}');`}
				</Script>
				<Toaster />
				<Component {...pageProps} />
			</Layout>
		</StateContext>
	);
}
