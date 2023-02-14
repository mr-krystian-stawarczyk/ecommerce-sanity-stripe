import React, { useEffect } from "react";
import { StateContext } from "../context/StateContext";
import { useRouter } from "next/router";
import { initGA, logPageView } from "../lib/analytics";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import { Layout } from "../components";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
	useEffect(() => {
		require("bootstrap/dist/js/bootstrap.bundle.min.js");
	}, []);
	const router = useRouter();

	useEffect(() => {
		initGA();
		logPageView();
		router.events.on("routeChangeComplete", logPageView);
	}, []);

	return (
		<StateContext>
			<Layout>
				<Toaster />
				<Component {...pageProps} />
			</Layout>
		</StateContext>
	);
}
