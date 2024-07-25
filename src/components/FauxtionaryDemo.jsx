import React from "react";
import { FauxtionaryContent } from "./Content";
import Flickity from "react-flickity-component";
import useWindowDimensions from "./useWindowDimenstions";
import { flickityOptions } from "./Content";

const FauxtionaryDemo = () => {
	const { isMobile } = useWindowDimensions();
	return (
		<>
			{isMobile ? (
				<div className="mobile-view-project-demo project-section">
					{FauxtionaryContent.map((contentItem, index) => (
						<div key={index} className="mobile-view-item-wrapper">
							<img
								className="project-images"
								src={contentItem.image}
								alt={`fauxtionary-${index + 1}`}
							/>
						</div>
					))}
				</div>
			) : (
				<div className="project-section docketeer-demo">
					<Flickity
						className={"carousel"}
						elementType={"div"}
						options={flickityOptions}
						disableImagesLoaded={false}
						reloadOnUpdate
						static
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
						{FauxtionaryContent.map((contentItem, index) => (
							<div key={index} className="carousel-item-wrapper">
								<img
									className="project-images"
									src={contentItem.image}
									alt={`fauxtionary-${index + 1}`}
								/>
							</div>
						))}
					</Flickity>
				</div>
			)}
		</>
	);
};

export default FauxtionaryDemo;
