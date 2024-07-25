import React from "react";
import { CinemaScapeContent } from "./Content";
import Flickity from "react-flickity-component";
import useWindowDimensions from "./useWindowDimenstions";
import { flickityOptions } from "./Content";

const CinemaScapeDemo = () => {
	const { isMobile } = useWindowDimensions();
	return (
		<>
			{isMobile ? (
				<div className="mobile-view-project-demo project-section">
					{CinemaScapeContent.map((contentItem, index) => (
						<div key={index} className="mobile-view-item-wrapper">
							<img
								className="project-images"
								src={contentItem.image}
								alt={`cinemascape-${index + 1}`}
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
						{CinemaScapeContent.map((contentItem, index) => (
							<div key={index} className="carousel-item-wrapper">
								<img
									className="project-images"
									src={contentItem.image}
									alt={`cinemascape-${index + 1}`}
								/>
							</div>
						))}
					</Flickity>
				</div>
			)}
		</>
	);
};

export default CinemaScapeDemo;
