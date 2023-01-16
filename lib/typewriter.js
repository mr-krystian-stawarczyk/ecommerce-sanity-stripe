import React, { useEffect, useState } from "react";

function Typewriter() {
	const text =
		"Somewhere near Linkoping, in southern Sweden, Magdalena Lapinska creates and pursues her passions in her Studio Ro.A construction engineer by education, an interior designer and stylist by passion. A great enthusiast of good design, architecture and minimalism in every edition. In interior design, he successfully uses his own paintings, sculptures and handmade lamps. Inspired by the beauty and raw nature of Scandinavian nature, she creates unique, structural paintings and 3D objects, experimenting with various techniques. Magdalena wants to share this art with you on this website.";

	const delay = 80; // milliseconds
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const intervalId = setInterval(() => {
			if (currentIndex < text.length) {
				setCurrentIndex(currentIndex + 1);
			} else {
				clearInterval(intervalId);
			}
		}, delay);

		return () => clearInterval(intervalId);
	}, [currentIndex]);

	return (
		<>
			<span>{text.substring(0, currentIndex)}</span>
		</>
	);
}

export default Typewriter;
