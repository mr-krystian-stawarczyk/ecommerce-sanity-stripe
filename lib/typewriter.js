import React, { useEffect, useState } from "react";

function Typewriter() {
	const text =
		"Welcome to our furniture creator shop! Here, you can design  and customize your own unique pieces of furniture to fit your personal style and space. Our team of skilled craftsmen will work with you to bring your vision to life. Whether you have a specific design in mind or just a general idea of what you're looking for, we can help you create the perfect piece.";

	const delay = 50; // milliseconds
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
		<div>
			<p>{text.substring(0, currentIndex)}</p>
		</div>
	);
}

export default Typewriter;
