import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header_container container">
        <div className="header_content content">
          <div className="logo-container">
            <div className="logo">IA-Covoitutage</div>
          </div>
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
                <button className="contact-btn">Nous contactez</button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
