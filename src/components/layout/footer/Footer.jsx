import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMailForward,
  faMessage,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container container">
        <div className="footer_content content">
          <div className="content1">
            <a href="/" className="logo-container">
              <div className="logo">IA-Covoiturage</div>
            </a>
            <div className="links-call_actions">
              <div className="title">dashboard</div>
              <div className="nav-links">
                <div>
                  <a href="#" className="chield">
                    <div className="chield_content">acceuil</div>
                  </a>
                  <a href="#" className="chield">
                    <div className="chield_content">a propos de nous</div>
                  </a>
                  <a href="#" className="chield">
                    <div className="chield_content">Nous-contactez</div>
                  </a>
                </div>
                <div>
                  <a href="#" className="chield">
                    <div className="chield_content">s'inscrire</div>
                  </a>
                  <a href="#" className="chield">
                    <div className="chield_content">se connecter</div>
                  </a>
                  <a href="#" className="chield">
                    <div className="chield_content">IA-covoiyurage</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="image-aside">
            <div className="contact">
              <a href="#" className="chield">
                <div className="icon">
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <div className="content">+225 057 477 588 9 C'ote d'Ivoire</div>
              </a>
              <a href="#" className="chield">
                <div className="icon">
                  <FontAwesomeIcon icon={faMessage} />
                </div>
                <div className="content">IACovoiturage@gmail.com</div>
              </a>
              <a href="#" className="chield">
                <div className="icon">
                  <FontAwesomeIcon icon={faFacebook} />
                </div>
                <div className="content">nous suivre sur facebook</div>
              </a>
              <a href="#" className="chield">
                <div className="icon">
                  <FontAwesomeIcon icon={faInstagram} />
                </div>
                <div className="content">Instagram</div>
              </a>
            </div>

            <div className="content">
              <img src="../../../../images/desktop.webp" alt="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
