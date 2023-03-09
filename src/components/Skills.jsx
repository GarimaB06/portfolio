import React from "react";
import Frontend from "./Frontend";
import Backend from "./Backend";

const Skills = () => {
    return (
        <section className="skills-section" id="skills">
            <h2 className="section-title">Skills</h2>
            <span className="section-subtitle">My Tech Stack</span>
            <div className="skills-container">
                <Frontend/>
                <Backend/>
            </div>
        </section>
    )
}

export default Skills