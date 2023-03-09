import React from "react";
import Social from "./Social";
import Data from "./Data";
import '../styles/home.scss'
import ScrollDown from "./Scroll";

const Home = () => {
    return (
        <section className="home section" id="home">
            <div className="home-container">
                <div className="home-content">
                    <Social/>
                    <Data/>
                </div>
                <ScrollDown/>
            </div>
        </section>
    )
}

export default Home