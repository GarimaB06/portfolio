// import React, { useEffect, useState } from "react";
// import WorkItems from "./WorkItems";
// import { ProjectsContent, ProjectsNav } from "./Content";

// const Projects = () => {
// 	const [item, setItem] = useState({ name: "all" });
// 	const [projects, setProjects] = useState([]);
// 	const [active, setActive] = useState(0);

// 	useEffect(() => {
// 		if (item.name === "all") {
// 			setProjects(ProjectsContent);
// 		} else {
// 			const newProjects = ProjectsContent.filter((project) => {
// 				return project.category === item.name;
// 			});
// 			setProjects(newProjects);
// 		}
// 	}, [item]);

// 	const handleClick = (e, index) => {
// 		setItem({ name: e.target.textContent });
// 		setActive(index);
// 	};

// 	return (
// 		<>
// 			<div className="work-filters">
// 				{ProjectsNav.map((item, index) => {
// 					return (
// 						<span
// 							onClick={(e) => {
// 								handleClick(e, index);
// 							}}
// 							className={`${active === index ? "active-work" : ""} work-item`}
// 							key={index}
// 						>
// 							{item.name}
// 						</span>
// 					);
// 				})}
// 			</div>
// 			<div>
// 				<div className="work-container container grid">
// 					{projects.map((item) => {
// 						<React.Fragment key={`${item.id}`}>
// 							return <WorkItems item={item} />;
// 						</React.Fragment>;
// 					})}
// 				</div>
// 			</div>
// 		</>
// 	);
// };

// export default Projects;

import React, { useEffect, useState } from "react";
import WorkItems from "./WorkItems";
import { ProjectsContent, ProjectsNav } from "./Content";

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
						return <WorkItems key={item.id} item={item} />;
					})}
				</div>
			</div>
		</>
	);
};

export default Projects;
