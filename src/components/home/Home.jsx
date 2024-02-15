import React from "react";
import Banner from "./banner/banner";
import NosServices from "./nosService/NosServices";
import DowloadApp from "./telecharger-app/DowloadApp";
import About from "./apropos/About";
import Marche from "./marche/Marche";

const Home = () => {
  return (
    <main className="home">
      <Banner />
      <About />
      <NosServices />
      <Marche />
      <DowloadApp />
    </main>
  );
};

export default Home;
