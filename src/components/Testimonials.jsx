import React from "react";
import { RecoData } from "./RecoData";
import ScrollDown from "./Scroll";


const Testimonials = () => {
    return (
        <div>
        <ScrollDown/>
       <section className="testimonials container section">
        <h2 className="section-title">Recommendations</h2>
        <span className="section-subtitle"></span>
        <div className="testimonial-container">
            {RecoData.map((obj) => {
                return(
                    <div className="testimonial-card" key={obj.id}>
                        <img src={obj.image} alt="" className="testimonial-image" />
                        <div className="testimonial-text">
                        <h3 className="testimonial-name">{obj.title}
                        <span className="testimonial-subtitle">{obj.subtitle}</span>
                        </h3>
                        <p className="testimonial-date">{obj.date}                        
                        <span className="testimonial-relationship">{obj.relationship}</span>
                        </p>
                        <p className="testimonial-desription">{obj.description}</p>
                        </div>
                    </div>
                )
            })}

        </div>
       </section>
        </div>
    )
}

export default Testimonials