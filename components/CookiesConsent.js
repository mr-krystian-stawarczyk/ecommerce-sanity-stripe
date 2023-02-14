import React from "react";
import { hasCookie, setCookie } from "cookies-next";
import { Button, Col, Row } from "react-bootstrap";

const CookieConsent = (props) => {
	const [showConsent, setShowConsent] = React.useState(true);

	React.useEffect(() => {
		setShowConsent(hasCookie("localConsent"));
	}, []);

	const acceptCookie = () => {
		setShowConsent(true);
		setCookie("localConsent", "true", {});
	};

	if (showConsent) {
		return null;
	}

	return (
		<Row className="justify-content-center text-center sticky">
			<Col className="bg-dark rounded my-2 mx-2">
				<Col className="fixed inset-0 bg-slate-700 bg-opacity-70">
					<Col className="fixed bottom-0 left-0 right-0 my-2 flex items-center justify-between px-4 py-8 bg-gray-100">
						<Row>
							<span className="text-light text-base mr-16">
								This website uses cookies to improve user experience. By using
								our website you consent to all cookies in accordance with our
								Cookie Policy.
							</span>
						</Row>

						<Button
							className="bg-secondary my-2 py-2 px-8 rounded text-white"
							onClick={() => acceptCookie()}
						>
							Accept
						</Button>
					</Col>
				</Col>
			</Col>
		</Row>
	);
};

export default CookieConsent;
