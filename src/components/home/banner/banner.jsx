import React from "react";
import "./banner.css";

const banner = () => {
  return (
    <div className="banner">
      <div className="banner_contanier container">
        <div className="title">
          <h1>Aller n'importe où à n'importe quelle heure</h1>
        </div>
        <div className="text">
          <p>
            "TRAJET" est l'appli de mobilité tout-en-un. Soyez pris en charge
            par un chauffeur avec un service première classe en quelques minutes
            et profitez d'un trajet confortable où que vous alliez ; ou évitez
            les embouteillages avec l'une de nos trottinettes leader du marché.
          </p>
        </div>
        <a href="#">
          <button className="appli">Télécharger l'appli</button>
        </a>
      </div>
      <div className="vide"></div>
    </div>
  );
};

export default banner;
