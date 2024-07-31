import React from "react";
import { Link } from "react-router-dom";

const WorkItems = ({ item }) => {
	return (
		<>
			<div className="work-card" key={item.id}>
				<h3 className="work-title">{item.title}</h3>
				<p className="stack-parent">
					{item.stack.map((stackItem, index) => (
						<span className="stack-item">&#x2022; {stackItem} </span>
					))}
				</p>
				<img src={item.image} alt="" className="work-image" />
				<div className="demo-links">
					{item.vercel ? (
						<Link to={item.vercel} className="demo-item">
							Demo
							<i className="bx bx-right-arrow-alt work__button-icon"></i>
						</Link>
					) : (
						<Link to={item.route} className="demo-item">
							Demo
							<i className="bx bx-right-arrow-alt work__button-icon"></i>
						</Link>
					)}
					<a href={item.github} rel="noopener noreferrer" className="demo-item">
						GitHub
						<i className="bx bx-right-arrow-alt work__button-icon"></i>
					</a>
				</div>
			</div>
		</>
	);
};

export default WorkItems;
