import React from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className="header">
      <div className="header_container container">
        <div className="header_content content">
          <a href="/" className="logo-container">
            <div className="logo">IA-Covoiturage</div>
          </a>
          <nav className="nav">
            <div className="nav_container">
              <div className="nav_content">
                <div className="nav_links">
                  <a href="/" className="link">
                    <div className="content">Acceuil</div>
                  </a>
                  <a href="/" className="link">
                    <div className="content">Nous Concernant</div>
                  </a>
                  <a href="/" className="link">
                    <div className="content">s'inscrire</div>
                  </a>
                </div>
                <div className="menu-betweem">
                  <FontAwesomeIcon icon={faBars} />
                </div>
                <button className="contact-btn">Nous-contactez</button>
              </div>
            </div>
          </nav>
          <div className="menu">
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
