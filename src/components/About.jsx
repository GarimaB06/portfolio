import React from "react";
import CV from "../cv/cv.pdf";

const About = () => {
	return (
		<section className="about-section padding-top" id="about">
			<h2 className="section-title">About Me</h2>
			<span className="section-subtitle">My Introduction</span>
			<div className="about-container about-section">
				<div className="about-img"></div>
				<div className="about-data">
					<p className="about-para">
						I bring pixels to life as dynamic and engaging user experiences.
						Currently seeking an opportunity to join a dynamic and passionate
						team where I can leverage my skills and experience to build
						outstanding products and take ownership of key features. Beyond my
						technical expertise, I'm deeply committed to maintaining a healthy
						work-life balance. When I'm not coding, I like to explore the world
						of movement through dance, yoga, and new fitness classes.
					</p>
				</div>
				<a href={CV} className="button">
					Click Here to Download CV
				</a>
			</div>
		</section>
	);
};

export default About;
