import React from "react";
import "./style-marche.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileShield,
  faHandHoldingDollar,
  faTruckPickup,
  faUserShield,
} from "@fortawesome/free-solid-svg-icons";
const Marche = () => {
  return (
    <section className="section-ça-marche">
      <div className="container-ça-marche">
        <div className="content-ça-marche">
          <div className="children-one">
            <div className="title">
              <h2> Comment </h2>
            </div>
            <div className="texte">
              <h3>ça marche?</h3>
            </div>
          </div>
          <div className="children-two">
            <div className="children-two_inner_orange">
              <div className="inner-icon">
                <FontAwesomeIcon icon={faFileShield} className="icon-one" />
              </div>
              <div className="icon-title">
                <h4> S'enregistrer</h4>
              </div>
              <div className="inner-detail">
                <p>
                  Simple et rapide Inscrivez-vous en utilisant seulement votre
                  adresse e-mail.
                </p>
              </div>
            </div>
            <div className="children-two_inner">
              <div className="inner-icon">
                <FontAwesomeIcon icon={faUserShield} className="icon-two" />
              </div>
              <div className="icon-title">
                <h4> Se connecter</h4>
              </div>
              <div className="inner-detail">
                <p>Connectez-vous à votre compte pour réserver votre trajet</p>
              </div>
            </div>
            <div className="children-two_inner_orange">
              <div className="inner-icon">
                <FontAwesomeIcon icon={faTruckPickup} className="icon-one" />
              </div>
              <div className="icon-title">
                <h4>Ajouter vos trajets</h4>
              </div>
              <div className="inner-detail">
                <p>
                  Maintenant que votre profil est complété, vous pouvez créer
                  vos trajets.
                </p>
              </div>
            </div>
            <div className="children-two_inner">
              <div className="inner-icon">
                <FontAwesomeIcon
                  icon={faHandHoldingDollar}
                  className="icon-two"
                />
              </div>
              <div className="icon-title">
                <h4>Réserver vos courses</h4>
              </div>
              <div className="inner-detail">
                <p>Réserver instantanément votre course sans prise de tête </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Marche;
