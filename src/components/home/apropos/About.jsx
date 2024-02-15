import React from "react";
import "./about.css";

const About = () => {
  return (
    <section className="section-apropos section">
      <div className="container-apropos container">
        <div className="content-apropos">
          <div className="children-apropos">
            <div className="apropos-title">
              <h2 className="title">À propos</h2>
            </div>
            <div className="texte-apropos">
              <p>
                Nous sommes ravis de vous accueillir sur notre plateforme de
                covoiturage dédiée à faciliter vos déplacements de manière
                économique, écologique et conviviale. Chez AI COVOITURAGE ,
                notre mission est de connecter les conducteurs avec des
                passagers partageant les mêmes trajets, afin de réduire les
                coûts de transport, l'empreinte carbone et de favoriser les
                rencontres entre voyageurs. Que vous soyez conducteur cherchant
                à rentabiliser vos trajets réguliers ou passager à la recherche
                d'une solution de transport flexible et abordable, notre
                plateforme vous offre la possibilité de trouver rapidement des
                compagnons de route adaptés à vos besoins.
              </p>
            </div>
          </div>
          <div className="children-apropos-image">
            <img src="../../../../../images/apropos.jpg" className="image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
