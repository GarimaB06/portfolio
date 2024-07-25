import { useState, useEffect } from "react";

const useWindowDimensions = () => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const [windowHeight, setWindowHeight] = useState(window.innerHeight);
	const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

	useEffect(() => {
		const setDimensions = () => {
			const width = window.innerWidth;
			const height = window.innerHeight;
			setWindowWidth(width);
			setWindowHeight(height);
			setIsMobile(width < 768);
		};

		window.addEventListener("resize", setDimensions);

		return () => window.removeEventListener("resize", setDimensions);
	}, []);

	return { windowWidth, windowHeight, isMobile };
};

export default useWindowDimensions;
