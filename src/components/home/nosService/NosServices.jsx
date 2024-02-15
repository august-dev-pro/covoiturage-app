import React from "react";
import "./service.css";

const NosServices = () => {
  return (
    <div className="service section">
      <div className="service_container container">
        <div className="name">
          <h2>Nos services</h2>
        </div>
        <div className="nos_services">
          <div className="card img_1">
            <div className="left">
              <h3 className="title">Trajet</h3>
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
                culpa.
              </p>
            </div>
            <div className="image">
              <img src=".../../images/rides.png" alt="" />
            </div>
          </div>

          <div className="card img_2">
            <div className="left">
              <h3 className="title">Livraison</h3>
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
                culpa.
              </p>
            </div>
            <div className="image">
              <img src=".../../images/delivery.png" alt="" />
            </div>
          </div>

          <div className="card img_3">
            <div className="left">
              <h3 className="title">Courses alimentaires</h3>
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
                culpa.
              </p>
            </div>
            <div className="image">
              <img src=".../../images/food.png" alt="" />
            </div>
          </div>

          <div className="card img_4">
            <div className="left">
              <h3 className="title">Autoportage</h3>
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
                culpa.
              </p>
            </div>
            <div className="image">
              <img src=".../../images/car-sharing.png" alt="" />
            </div>
          </div>

          <div className="card img_5">
            <div className="left">
              <h3 className="title">Micromobilité</h3>
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
                culpa.
              </p>
            </div>
            <div className="image">
              <img src=".../../images/micromobility.png" alt="" />
            </div>
          </div>

          <div className="card img_6">
            <div className="left">
              <h3 className="title">Business</h3>
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
                culpa.
              </p>
            </div>
            <div className="image">
              <img src=".../../images/business.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NosServices;
