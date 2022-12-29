import React from "react";
import { StateContext } from "../context/StateContext";
import { Layout } from "../components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Toaster } from "react-hot-toast";

import "../styles/globals.css";

export default function App({ Component, pageProps }) {
	return (
		<StateContext>
			<Layout>
				<Toaster />
				<Component {...pageProps} />
			</Layout>
		</StateContext>
	);
}
