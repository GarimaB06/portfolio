import React from "react";
import { HelpdeskContent } from "./Content";
import Flickity from "react-flickity-component";
import "../styles/projects-demo.scss";
import { flickityOptions } from "./Content";
import useWindowDimensions from "./useWindowDimenstions";

const HelpdeskDemo = () => {
	const { isMobile } = useWindowDimensions();
	return (
		<>
			{isMobile === true ? (
				<div className="mobile-view-project-demo project-section">
					{HelpdeskContent.map((contentItem, index) => (
						<div className="mobile-view-item-wrapper">
							<img
								className="project-images"
								src={contentItem.image}
								alt={`helpdesk-${index + 1}`}
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
						{HelpdeskContent.map((contentItem, index) => (
							<div className="carousel-item-wrapper">
								<img
									className="project-images"
									src={contentItem.image}
									alt={`helpdesk-${index + 1}`}
								/>
							</div>
						))}
					</Flickity>
				</div>
			)}
		</>
	);
};

export default HelpdeskDemo;
