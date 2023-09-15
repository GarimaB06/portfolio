import React from "react";
import { DocketeerContent } from "./Content";
import Flickity from "react-flickity-component";

const flickityOptions = {
	initialIndex: 0,
};
const DocketeerDemo = () => {
	return (
		<div>
			<div className="carousel-item-wrapper">
				<img
					className="project-images"
					src={DocketeerContent[0].image}
					alt="docketeer-1"
				/>
			</div>
			<div className="carousel-item-wrapper">
				<img
					className="project-images"
					src={DocketeerContent[1].image}
					alt="docketeer-2"
				/>
			</div>
			<div className="carousel-item-wrapper">
				<img
					className="project-images"
					src={DocketeerContent[2].image}
					alt="docketeer-3"
				/>
			</div>
			<div className="carousel-item-wrapper">
				<img
					className="project-images"
					src={DocketeerContent[3].image}
					alt="docketeer-4"
				/>
			</div>
			<div className="carousel-item-wrapper">
				<img
					className="project-images"
					src={DocketeerContent[4].image}
					alt="docketeer-5"
				/>
			</div>
			<div className="carousel-item-wrapper">
				<img
					className="project-images"
					src={DocketeerContent[5].image}
					alt="docketeer-6"
				/>
			</div>
			<div className="carousel-item-wrapper">
				<img
					className="project-images"
					src={DocketeerContent[6].image}
					alt="docketeer-7"
				/>
			</div>
			<div className="carousel-item-wrapper vimeo-wrapper">
				<div
					style={{
						width: "100%",
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
		</div>
		// <Flickity
		// 	className={"carousel"} // default ''
		// 	elementType={"div"} // default 'div'
		// 	options={flickityOptions} // takes flickity options {}
		// 	disableImagesLoaded={false} // default false
		// 	reloadOnUpdate // default false
		// 	static // default false
		// >
		// 	<div className="carousel-item-wrapper">
		// 		<img
		// 			className="project-images"
		// 			src={DocketeerContent[0].image}
		// 			alt="docketeer-1"
		// 		/>
		// 	</div>
		// 	<div className="carousel-item-wrapper">
		// 		<img
		// 			className="project-images"
		// 			src={DocketeerContent[1].image}
		// 			alt="docketeer-2"
		// 		/>
		// 	</div>
		// 	<div className="carousel-item-wrapper">
		// 		<img
		// 			className="project-images"
		// 			src={DocketeerContent[2].image}
		// 			alt="docketeer-3"
		// 		/>
		// 	</div>
		// 	<div className="carousel-item-wrapper">
		// 		<img
		// 			className="project-images"
		// 			src={DocketeerContent[3].image}
		// 			alt="docketeer-4"
		// 		/>
		// 	</div>
		// 	<div className="carousel-item-wrapper">
		// 		<img
		// 			className="project-images"
		// 			src={DocketeerContent[4].image}
		// 			alt="docketeer-5"
		// 		/>
		// 	</div>
		// 	<div className="carousel-item-wrapper">
		// 		<img
		// 			className="project-images"
		// 			src={DocketeerContent[5].image}
		// 			alt="docketeer-6"
		// 		/>
		// 	</div>
		// 	<div className="carousel-item-wrapper">
		// 		<img
		// 			className="project-images"
		// 			src={DocketeerContent[6].image}
		// 			alt="docketeer-7"
		// 		/>
		// 	</div>
		// 	<div className="carousel-item-wrapper vimeo-wrapper">
		// 		<div
		// 			style={{
		// 				width: "100%",
		// 				justifyContent: "center",
		// 				padding: "0 0 0 0",
		// 				position: "relative",
		// 			}}
		// 		>
		// 			<iframe
		// 				src="https://player.vimeo.com/video/851975342?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
		// 				allow="autoplay; fullscreen; picture-in-picture"
		// 				title="Docketeer 9.0 - Metrics Display Demo"
		// 			></iframe>
		// 		</div>
		// 		<script src="https://player.vimeo.com/api/player.js"></script>
		// 	</div>
		// </Flickity>
	);
};
export default DocketeerDemo;
