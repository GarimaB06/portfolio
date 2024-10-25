import React from "react";
import Flickity from "react-flickity-component";
import "../styles/projects-demo.scss";
import useWindowDimensions from "./useWindowDimenstions";
import { flickityOptions } from "./Content";
import { ComixAppContent } from "./Content";

const ComixAppDemo = () => {
	const { isMobile } = useWindowDimensions();
	return (
		<>
			{isMobile === true ? (
				<div className="mobile-view-project-demo project-section">
					{ComixAppContent.map((contentItem, index) => (
						<div className="mobile-view-item-wrapper" key={index}>
							<img
								className="comix-project-images-mobile"
								src={contentItem.image}
								alt={`ComixAppContent-${index + 1}`}
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
						{ComixAppContent.map((contentItem, index) => (
							<div className="carousel-item-wrapper" key={index}>
								<img
									className="comix-project-images"
									src={contentItem.image}
									alt={`ComixAppContent-${index + 1}`}
								/>
							</div>
						))}
					</Flickity>
				</div>
			)}
		</>
	);
};

export default ComixAppDemo;
