import React, { useEffect, useState } from "react";
import { ProjectsContent } from "./Content";
import { ProjectsNav } from "./Content";
import WorkItems from "./WorkItems";

const Projects = () => {
	const [item, setItem] = useState({ name: "all" });
	const [projects, setProjects] = useState([]);
	const [active, setActive] = useState(0);

	useEffect(() => {
		if (item.name === "all") {
			setProjects(ProjectsContent);
		} else {
			const newProjects = ProjectsContent.filter((project) => {
				return project.category === item.name;
			});
			setProjects(newProjects);
		}
	}, [item]);

	const handleClick = (e, index) => {
		setItem({ name: e.target.textContent });
		setActive(index);
	};

	return (
		<>
			<div className="work-filters">
				{ProjectsNav.map((item, index) => {
					return (
						<span
							onClick={(e) => {
								handleClick(e, index);
							}}
							className={`${active === index ? "active-work" : ""} work-item`}
							key={index}
						>
							{item.name}
						</span>
					);
				})}
			</div>
			<div>
				<div className="work-container container grid">
					{projects.map((item) => {
						return <WorkItems item={item} key={item.id} />;
					})}
				</div>
			</div>
		</>
	);
};

export default Projects;
