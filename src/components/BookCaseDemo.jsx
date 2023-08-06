import React from "react";
import { BookcaseContent } from "./Content";
import Flickity from "react-flickity-component";

const flickityOptions = {
	initialIndex: 0,
};

const BookCaseDemo = () => {
	return (
		<div className="bookcase-demo project-section">
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
						src={BookcaseContent[0].image}
						alt="bookcase-1"
					/>
				</div>
				<div className="carousel-item-wrapper">
					<img
						className="project-images"
						src={BookcaseContent[1].image}
						alt="bookcase-2"
					/>
				</div>
				<div className="carousel-item-wrapper">
					<img
						className="project-images"
						src={BookcaseContent[2].image}
						alt="bookcase-3"
					/>
				</div>
				<div className="carousel-item-wrapper">
					<img
						className="project-images"
						src={BookcaseContent[3].image}
						alt="bookcase-4"
					/>
				</div>
			</Flickity>
		</div>
	);
};

export default BookCaseDemo;
