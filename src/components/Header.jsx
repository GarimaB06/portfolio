import React, { useState } from "react";
import "../styles/header.scss";
import { HashLink } from "react-router-hash-link"; 
import { navItems } from "./Content.jsx"; 

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const handleHomeClick = () => {
        window.location.href = "/#home"; 
    };

    return (
        <header className="header">
            <nav className="nav-container">
                <a href="#home" className="nav-logo" onClick={handleHomeClick}>
                    Garima
                </a>
                <div className={toggle ? "nav-menu" : "hide-menu"}>
                    <ul className="nav-list grid">
                        {navItems.map((item, index) => (
                            <li key={index} className="nav-item">
                                <HashLink to={`/${item.to}`} className="nav-link">
                                    <i className={`${item.iconClass} nav-icon`}></i>
                                    {item.text}
                                </HashLink>
                            </li>
                        ))}
                    </ul>
                    <i
                        className="uil uil-times nav-close"
                        onClick={() => setToggle(false)}
                    ></i>
                </div>
                <div className="nav-toggle" onClick={() => setToggle(!toggle)}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    );
};

export default Header;
