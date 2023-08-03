import React from "react";
import { DocketeerContent } from "./Content";

const DocketeerDemo = () => {
	return (
		<div className="docketeer-demo project-section">
			<img
				className="project-images"
				src={DocketeerContent[0].image}
				alt="docketeer-1"
			/>
			<img
				className="project-images"
				src={DocketeerContent[1].image}
				alt="docketeer-2"
			/>
			<img
				src={DocketeerContent[2].image}
				alt="docketeer-3"
				className="project-images"
			/>
			<img
				src={DocketeerContent[3].image}
				alt="docketeer-4"
				className="project-images"
			/>
			<img
				src={DocketeerContent[4].image}
				alt="docketeer-5"
				className="project-images"
			/>
			<img
				src={DocketeerContent[5].image}
				alt="docketeer-6"
				className="project-images"
			/>
			<img
				src={DocketeerContent[6].image}
				alt="docketeer-7"
				className="project-images"
			/>
		</div>
	);
};
export default DocketeerDemo;
