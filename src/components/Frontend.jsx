import React from "react";
import { FRONTEND_SKILLS } from "./Content";

const Frontend = () => {
	return (
		<div className="skills-content">
			<h3 className="skills-title">Frontend Stack</h3>
			<div className="skills-box">
				<div className="skills-group">
					<div className="skills-data">
						{FRONTEND_SKILLS.map((skill, index) => (
							<div key={index}>
								<h3 className="skills-name">
									<i className="bx bx-badge-check"></i>
									{skill}
								</h3>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Frontend;
