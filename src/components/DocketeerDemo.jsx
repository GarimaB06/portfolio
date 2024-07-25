import React from "react";
import { DocketeerContent } from "./Content";
import Flickity from "react-flickity-component";
import useWindowDimensions from "./useWindowDimenstions";
import { flickityOptions } from "./Content";

const DocketeerDemo = () => {
	const { isMobile } = useWindowDimensions();
	return (
		<>
			{isMobile ? (
				<div className="mobile-view-project-demo project-section">
					{DocketeerContent.map((contentItem, index) => (
						<div key={index} className="mobile-view-item-wrapper">
							<img
								className="project-images"
								src={contentItem.image}
								alt={`docketeer-${index + 1}`}
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
									width: "110%",
									height: "auto",
									justifyContent: "center",
									padding: "0 0 0 0",
									position: "relative",
								}}
							>
								<iframe
									src="https://player.vimeo.com/video/851975342?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
									allow="autoplay; fullscreen; picture-in-picture"
									title="Docketeer 9.0 - Metrics Display Demo"
								></iframe>
							</div>
							<script src="https://player.vimeo.com/api/player.js"></script>
						</div>
						{DocketeerContent.map((contentItem, index) => (
							<div key={index} className="carousel-item-wrapper">
								<img
									className="project-images"
									src={contentItem.image}
									alt={`docketeer-${index + 1}`}
								/>
							</div>
						))}
					</Flickity>
				</div>
			)}
		</>
	);
};

export default DocketeerDemo;
