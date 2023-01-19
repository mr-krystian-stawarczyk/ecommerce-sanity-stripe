import React, { useEffect, useState } from "react";

function Typewriter() {
	const text =
		"“An artist is someone who produces items that people don't need to have, but - for some reason – thinks it would be a good idea to give them to them.” – Andy Warhol";
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
			<span style={{ padding: "3rem" }}>{text.substring(0, currentIndex)}</span>
		</>
	);
}

export default Typewriter;
