import React, { useState, useEffect } from "react";
import { FauxtionaryContent } from "./Content";
import Flickity from "react-flickity-component";

const flickityOptions = {
	initialIndex: 0,
};

const FauxtionaryDemo = () => {
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
							src={FauxtionaryContent[0].image}
							alt="fauxtionary-1"
						/>
					</div>
					<div className="mobile-view-item-wrapper">
						<img
							className="project-images"
							src={FauxtionaryContent[1].image}
							alt="fauxtionary-2"
						/>
					</div>
					<div className="mobile-view-item-wrapper">
						<img
							className="project-images"
							src={FauxtionaryContent[2].image}
							alt="fauxtionary-3"
						/>
					</div>
					<div className="mobile-view-item-wrapper">
						<img
							className="project-images"
							src={FauxtionaryContent[3].image}
							alt="fauxtionary-4"
						/>
					</div>
					<div className="mobile-view-item-wrapper">
						<img
							className="project-images"
							src={FauxtionaryContent[4].image}
							alt="fauxtionary-5"
						/>
					</div>
					<div className="mobile-view-item-wrapper">
						<img
							className="project-images"
							src={FauxtionaryContent[5].image}
							alt="fauxtionary-6"
						/>
					</div>
					<div className="mobile-view-item-wrapper">
						<img
							className="project-images"
							src={FauxtionaryContent[6].image}
							alt="fauxtionary-7"
						/>
					</div>
				</div>
			) : (
				<div className="project-section docketeer-demo">
					<Flickity
						className={"carousel"} // default ''
						elementType={"div"} // default 'div'
						options={flickityOptions} // takes flickity options {}
						disableImagesLoaded={false} // default false
						reloadOnUpdate // default false
						static // default false
					>
						<div className="carousel-item-wrapper vimeo-wrapper">
							<div
								style={{
									width: "180%",
									height: "auto",
									justifyContent: "center",
									padding: "0 0 0 0",
									position: "relative",
								}}
							>
								<iframe
									src="https://player.vimeo.com/video/874112493?badge=0&amp;autopause=0&amp;quality_selector=1&amp;progress_bar=1&amp;player_id=0&amp;app_id=58479"
									allow="autoplay; fullscreen; picture-in-picture"
									title="Fauxtionary - UI Demo"
								></iframe>
							</div>
							<script src="https://player.vimeo.com/api/player.js"></script>
						</div>
						<div className="carousel-item-wrapper">
							<img
								className="project-images"
								src={FauxtionaryContent[0].image}
								alt="fauxtionary-1"
							/>
						</div>
						<div className="carousel-item-wrapper">
							<img
								className="project-images"
								src={FauxtionaryContent[1].image}
								alt="fauxtionary-2"
							/>
						</div>
						<div className="carousel-item-wrapper">
							<img
								className="project-images"
								src={FauxtionaryContent[2].image}
								alt="fauxtionary-3"
							/>
						</div>
						<div className="carousel-item-wrapper">
							<img
								className="project-images"
								src={FauxtionaryContent[3].image}
								alt="fauxtionary-4"
							/>
						</div>
						<div className="carousel-item-wrapper">
							<img
								className="project-images"
								src={FauxtionaryContent[4].image}
								alt="fauxtionary-5"
							/>
						</div>
						<div className="carousel-item-wrapper">
							<img
								className="project-images"
								src={FauxtionaryContent[5].image}
								alt="fauxtionary-6"
							/>
						</div>
						<div className="carousel-item-wrapper">
							<img
								className="project-images"
								src={FauxtionaryContent[6].image}
								alt="fauxtionary-7"
							/>
						</div>
					</Flickity>
				</div>
			)}
		</>
	);
};
export default FauxtionaryDemo;
