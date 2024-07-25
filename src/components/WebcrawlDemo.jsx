import React from "react";
import { WebcrawlContent } from "./Content";
import Flickity from "react-flickity-component";
import "../styles/projects-demo.scss";
import useWindowDimensions from "./useWindowDimenstions";
import { flickityOptions } from "./Content";

const WebcrawlDemo = () => {
	const { isMobile } = useWindowDimensions();
	return (
		<>
			{isMobile === true ? (
				<div className="mobile-view-project-demo project-section">
					{WebcrawlContent.map((contentItem, index) => (
						<div className="mobile-view-item-wrapper">
							<img
								className="project-images"
								src={contentItem.image}
								alt={`Webcrawl-${index + 1}`}
							/>
						</div>
					))}
				</div>
			) : (
				<div className="project-section">
					<Flickity
						className={"carousel"}
						elementType={"div"}
						options={flickityOptions}
						disableImagesLoaded={false}
						reloadOnUpdate
						static
					>
						{WebcrawlContent.map((contentItem, index) => (
							<div className="carousel-item-wrapper">
								<img
									className="project-images"
									src={contentItem.image}
									alt={`Webcrawl-${index + 1}`}
								/>
							</div>
						))}
					</Flickity>
				</div>
			)}
		</>
	);
};

export default WebcrawlDemo;
