import React, { useEffect, useState } from "react";
import { BookcaseContent } from "./Content";
import Flickity from "react-flickity-component";

const flickityOptions = {
	initialIndex: 0,
};

const BookCaseDemo = () => {
	const [isMobile, setIsMobile] = useState(false);
	const [windowWidth, setWindowWidth] = useState(0);
	const [windowHeight, setWindowHeight] = useState(0);

	useEffect(() => {
		const setDimensions = () => {
			const width = window.innerWidth;
			const height = window.innerHeight;
			setWindowWidth(width);
			setWindowHeight(height);
		};
		window.addEventListener("resize", setDimensions);
		return () => window.removeEventListener("resize", setDimensions);
	}, []);

	useEffect(() => {
		const detectWidthAndHeight = () => {
			if (windowWidth < 768) {
				setIsMobile(true);
			} else {
				setIsMobile(false);
			}
		};
		detectWidthAndHeight();
	}, [windowWidth, windowHeight]);

	return (
		<>
			{isMobile === true ? (
				<div className="bookcase-demo project-section">
					<div className="project-images-mobile-view">
						<img
							className="project-images"
							src={BookcaseContent[0].image}
							alt="bookcase-1"
						/>
					</div>
					<div className="project-images-mobile-view">
						<img
							className="project-images"
							src={BookcaseContent[1].image}
							alt="bookcase-2"
						/>
					</div>
					<div className="project-images-mobile-view">
						<img
							className="project-images"
							src={BookcaseContent[2].image}
							alt="bookcase-3"
						/>
					</div>
					<div className="project-images-mobile-view">
						<img
							className="project-images"
							src={BookcaseContent[3].image}
							alt="bookcase-4"
						/>
					</div>
				</div>
			) : (
				<div className="bookcase-demo project-section">
					<Flickity
						className={"carousel"} // default ''
						elementType={"div"} // default 'div'
						options={flickityOptions} // takes flickity options {}
						disableImagesLoaded={false} // default false
						reloadOnUpdate // default false
						static // default false
					>
						<div className="carousel-item-wrapper">
							<img
								className="project-images"
								src={BookcaseContent[0].image}
								alt="bookcase-1"
							/>
						</div>
						<div className="carousel-item-wrapper">
							<img
								className="project-images"
								src={BookcaseContent[1].image}
								alt="bookcase-2"
							/>
						</div>
						<div className="carousel-item-wrapper">
							<img
								className="project-images"
								src={BookcaseContent[2].image}
								alt="bookcase-3"
							/>
						</div>
						<div className="carousel-item-wrapper">
							<img
								className="project-images"
								src={BookcaseContent[3].image}
								alt="bookcase-4"
							/>
						</div>
					</Flickity>
				</div>
			)}
		</>
	);
};

export default BookCaseDemo;
