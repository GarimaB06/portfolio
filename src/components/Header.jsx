import React, { useState } from "react";
import "../styles/header.scss";
import { HashLink } from "react-router-hash-link";
const Header = () => {
	const [Toggle, showMenu] = useState(false);

	return (
		<header className="header">
			<nav className="nav-container">
				{/* <a href="index.html" className="nav-logo">
					Garima
				</a> */}
				<HashLink to="#home" className="nav-logo">
					Garima
				</HashLink>
				<div className={Toggle ? "hide-menu" : "nav-menu"}>
					<ul className="nav-list grid">
						<li className="nav-item">
							<HashLink to="/#home" className="nav-link">
								<i className="uil uil-estate nav-icon"></i>Home
							</HashLink>
						</li>
						<li className="nav-item">
							<HashLink to="/#about" className="nav-link">
								<i className="uil uil-estate nav-icon"></i>About
							</HashLink>
						</li>
						<li className="nav-item">
							<HashLink to="/#skills" className="nav-link">
								<i className="uil uil-estate nav-icon"></i>Skills
							</HashLink>
						</li>

						<li className="nav-item">
							<HashLink to="/#portfolio" className="nav-link">
								<i className="uil uil-estate nav-icon"></i>Portfolio
							</HashLink>
						</li>

						<li className="nav-item">
							<HashLink to="/#contact" className="nav-link">
								<i className="uil uil-estate nav-icon"></i>Contact
							</HashLink>
						</li>
					</ul>
					<i
						className="uil uil-times nav-close"
						onClick={() => showMenu(!Toggle)}
					></i>
				</div>
				<div className="nav-toggle" onClick={() => showMenu(!Toggle)}>
					<i className="uil uil-apps"></i>
				</div>
			</nav>
		</header>
	);
};

export default Header;
