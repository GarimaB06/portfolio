import React from "react";
import "../styles/header.scss"
const Header = () => {
    return (
        <header className="header">
            <nav className="nav_container">
                <a href="index.html" className="nav-logo">Garima</a>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" className="nav-link">
                                <i className="uil uil-estate nav__icon"></i>Home 
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className="nav-link">
                                <i className="uil uil-user nav__icon"></i>About 
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" className="nav-link">
                                <i className="uil uil-file-alt nav__icon"></i>Skills 
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#portfolio" className="nav-link">
                                <i className="uil uil-scenery nav__icon"></i>Portfolio 
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#contact" className="nav-link">
                                <i className="uil uil-message nav__icon"></i>Contact
                            </a>
                        </li>
                    </ul>
                </nav>
        </header>
    )
}

export default Header