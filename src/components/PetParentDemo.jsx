import React from "react";
import { PetParentContent } from "./Content";

const PetParentDemo = () => {
	return (
		<div className="petparent-demo project-section">
			<img
				className="project-images"
				src={PetParentContent[0].image}
				alt="petparent-1"
			/>
			<img
				className="project-images"
				src={PetParentContent[1].image}
				alt="petparent-2"
			/>
			<img
				className="project-images"
				src={PetParentContent[2].image}
				alt="petparent-3"
			/>
			<img
				className="project-images"
				src={PetParentContent[3].image}
				alt="petparent-4"
			/>
		</div>
	);
};

export default PetParentDemo;
