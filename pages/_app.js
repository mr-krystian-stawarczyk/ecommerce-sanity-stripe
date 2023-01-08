import React, { useEffect } from "react";
import { StateContext } from "../context/StateContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import { Layout } from "../components";

import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
	useEffect(() => {
		require("bootstrap/dist/js/bootstrap.bundle.min.js");
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
