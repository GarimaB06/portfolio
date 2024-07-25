import React, { useState, useEffect } from "react";
import { CinemaScapeContent } from "./Content";
import Flickity from "react-flickity-component";
import "../styles/projects-demo.scss";

const flickityOptions = {
	initialIndex: 0,
};

const CinemaScapeDemo = () => {
	const [isMobile, setIsMobile] = useState(false);
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const [windowHeight, setWindowHeight] = useState(window.innerHeight);

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
				<div className="mobile-view-project-demo project-section">
					<div className="mobile-view-item-wrapper">
						<img
							className="project-images"
							src={CinemaScapeContent[0].image}
							alt="cinemascape-1"
						/>
					</div>
					<div className="mobile-view-item-wrapper">
						<img
							className="project-images"
							src={CinemaScapeContent[1].image}
							alt="cinemascape-2"
						/>
					</div>
					<div className="mobile-view-item-wrapper">
						<img
							className="project-images"
							src={CinemaScapeContent[2].image}
							alt="cinemascape-3"
						/>
					</div>
					<div className="mobile-view-item-wrapper">
						<img
							className="project-images"
							src={CinemaScapeContent[3].image}
							alt="cinemascape-4"
						/>
					</div>
				</div>
			) : (
				<div className="project-section">
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
								src={CinemaScapeContent[0].image}
								alt="cinemascape-1"
							/>
						</div>
						<div className="carousel-item-wrapper">
							<img
								className="project-images"
								src={CinemaScapeContent[1].image}
								alt="cinemascape-2"
							/>
						</div>
						<div className="carousel-item-wrapper">
							<img
								className="project-images"
								src={CinemaScapeContent[2].image}
								alt="cinemascape-3"
							/>
						</div>
						<div className="carousel-item-wrapper">
							<img
								className="project-images"
								src={CinemaScapeContent[3].image}
								alt="cinemascape-4"
							/>
						</div>
					</Flickity>
				</div>
			)}
		</>
	);
};

export default CinemaScapeDemo;
