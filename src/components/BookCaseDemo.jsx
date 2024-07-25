import React from "react";
import { BookcaseContent } from "./Content";
import Flickity from "react-flickity-component";
import useWindowDimensions from "./useWindowDimenstions";
import { flickityOptions } from "./Content";

const BookCaseDemo = () => {
	const { isMobile } = useWindowDimensions();
	return (
		<>
			{isMobile ? (
				<div className="mobile-view-project-demo project-section">
					{BookcaseContent.map((contentItem, index) => (
						<div key={index} className="mobile-view-item-wrapper">
							<img
								className="project-images"
								src={contentItem.image}
								alt={`bookcase-${index + 1}`}
							/>
						</div>
					))}
				</div>
			) : (
				<div className="project-section bookcase-demo">
					<Flickity
						className={"carousel"}
						elementType={"div"}
						options={flickityOptions}
						disableImagesLoaded={false}
						reloadOnUpdate
						static
					>
						{BookcaseContent.map((contentItem, index) => (
							<div key={index} className="carousel-item-wrapper">
								<img
									className="project-images"
									src={contentItem.image}
									alt={`bookcase-${index + 1}`}
								/>
							</div>
						))}
					</Flickity>
				</div>
			)}
		</>
	);
};

export default BookCaseDemo;
