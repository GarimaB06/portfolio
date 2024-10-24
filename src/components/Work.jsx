import React from "react";
import Projects from "./Projects";
import "../styles/projects-demo.scss";
const Work = () => {
	return (
		<section className="recommendations">
			<section className="work-section padding-top" id="portfolio">
				<h2 className="section-title">Portfolio</h2>
				<span className="section-subtitle">Most Recent Works</span>
				<Projects />
			</section>
		</section>
	);
};
export default Work;
