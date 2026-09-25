import { useState } from "react";
import WorkItems from "./WorkItems";
import { ProjectsContent, ProjectsNav } from "./Content";

const Projects = () => {
	const [item, setItem] = useState({ name: "all" });
	const [active, setActive] = useState(0);

	const projects =
		item.name === "all"
			? ProjectsContent
			: ProjectsContent.filter((project) => project.category === item.name);

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
