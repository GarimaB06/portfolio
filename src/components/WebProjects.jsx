import React from "react";
import { DocketeerContent, BookcaseContent, PetParentContent } from "./Content";

const WebProjects = () => {
	console.log(DocketeerContent[0].image);
	return (
		<section className="projects-demo">
			<div className="project-section">
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

			<div className="project-section">
				<img
					className="project-images"
					src={BookcaseContent[0].image}
					alt="bookcase-1"
				/>
				<img
					className="project-images"
					src={BookcaseContent[1].image}
					alt="bookcase-2"
				/>
				<img
					className="project-images"
					src={BookcaseContent[2].image}
					alt="bookcase-3"
				/>
				<img
					className="project-images"
					src={BookcaseContent[3].image}
					alt="bookcase-4"
				/>
			</div>

			<div className="project-section">
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
		</section>
	);
};

export default WebProjects;
