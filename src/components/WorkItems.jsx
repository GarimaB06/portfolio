import React from "react";
import { Link } from "react-router-dom";

const WorkItems = ({ item }) => {
	return (
		<>
			<div className="work-card" key={item.id}>
				<img src={item.image} alt="" className="work-image" />
				<h3 className="work-title">{item.title}</h3>
			</div>
			<div>
				<Link to="/docketeer">
					Docketeer
					<i className="bx bx-right-arrow-alt work__button-icon"></i>
				</Link>
				<Link to="/bookcase">
					MyBookcase
					<i className="bx bx-right-arrow-alt work__button-icon"></i>
				</Link>
				<Link to="/petparent">
					Pet Parent
					<i className="bx bx-right-arrow-alt work__button-icon"></i>
				</Link>
			</div>
			<div></div>
		</>
	);
};

export default WorkItems;
