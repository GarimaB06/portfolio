import React from "react";
import { BookcaseContent } from "./Content";

const BookCaseDemo = () => {
	return (
		<div className="bookcase-demo project-section">
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
	);
};

export default BookCaseDemo;
