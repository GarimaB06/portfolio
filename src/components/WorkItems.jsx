import React from "react";
import { Link } from "react-router-dom";

const WorkItems = ({ item }) => {
	return (
		<>
			<div className="work-card" key={item.id}>
				<img src={item.image} alt="" className="work-image" />
				<h3 className="work-title">{item.title}</h3>
				<Link to={item.route}>
					Click to view more
					<i className="bx bx-right-arrow-alt work__button-icon"></i>
				</Link>
<<<<<<< HEAD
				<a href={item.github} rel="noopener noreferrer">
					GitHub
					<i className="bx bx-right-arrow-alt work__button-icon"></i>
				</a>
=======
				<Link>
					<a href={item.github} rel="noopener noreferrer">
						GitHub
						<i className="bx bx-right-arrow-alt work__button-icon"></i>
					</a>
				</Link>
>>>>>>> e2c9f72 (material playground code)
			</div>
		</>
	);
};

export default WorkItems;
