import React from "react";

const WorkItems = ({ item }) => {
	return (
		<div className="work-card" key={item.id}>
			<img src={item.image} alt="" className="work-image" />
			<h3 className="work-title">{item.title}</h3>
			<a href="#projects-demo" className="work-button">
				Click to Learn More
				<i className="bx bx-right-arrow-alt work__button-icon"></i>
			</a>
		</div>
	);
};

export default WorkItems;
