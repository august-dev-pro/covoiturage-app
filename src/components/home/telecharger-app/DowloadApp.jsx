import React from "react";
import "./application.css";

const DowloadApp = () => {
  return (
    <div className="application section">
      <div className="container_application container">
        <div className="content">
          <div className="left">
            <div className="title">
              <h2>
                Quelques secondes pour commander et quelques minutes pour
                arriver.
              </h2>
            </div>
            <div className="take">
              <p>Disponible pour les appareils iOS et Android.</p>
            </div>
            <div className="btn">
              <a href="#">Télécharger l'appli</a>
            </div>
          </div>
          <div className="right">
            <div className="image">
              <img src=".../../images/desktop.webp" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DowloadApp;
