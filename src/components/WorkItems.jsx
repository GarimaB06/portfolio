import React from "react";
import { Link } from "react-router-dom";

const WorkItems = ({ item }) => {
	console.log(item)
	return (
		<div  
		
		className={item.title === "Comix One" ? "comix-work-card" : "work-card"} 
		key={item.id}>
			<h3 className="work-title">{item.title}</h3>
			<p className="stack-parent">
				{item.stack.map((stackItem, index) => (
					<span key={index} className="stack-item">
						&#x2022; {stackItem}{" "}
					</span>
				))}
			</p>
			<img 
				src={item.image} 
				alt={item.title}
				className={item.title === "Comix One" ? "comix-work-image" : "work-image"} 
			/>
			<div className="demo-links">
				{item.vercel ? (
					<a href={item.vercel} target="_blank" rel="noopener noreferrer" className="demo-item">
						Demo
						<i className="bx bx-right-arrow-alt work__button-icon"></i>
					</a>
				) : (
					<Link to={item.route} className="demo-item">
						Demo
						<i className="bx bx-right-arrow-alt work__button-icon"></i>
					</Link>
				)}
					<a href={item.title === "Comix One" ? item.appStore : item.github} target="_blank" rel="noopener noreferrer" className="demo-item">
					{item.title === "Comix One" ? "App Store" : item.github && "GitHub"}
					{((item.title === "Comix One") || item.github) && (
					<i className="bx bx-right-arrow-alt work__button-icon"></i>
					)}
					</a>
			</div>
		</div>
	);
};

export default WorkItems;
