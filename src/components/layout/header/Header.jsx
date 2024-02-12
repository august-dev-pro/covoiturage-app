import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="header_container container">
        <div className="header_content content">
          <div className="logo-container">
            <div className="logo">IA-Covoitutage</div>
            <nav className="nav">
              <div className="nav_container">
                <div className="nav_content">
                  <div className="nav_links">
                    <a href="/" className="link">
                      <div className="content">home</div>
                    </a>
                    <a href="/" className="link">
                      <div className="content">Nous Concernant</div>
                    </a>
                    <a href="/" className="link">
                      <div className="content">home</div>
                    </a>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
