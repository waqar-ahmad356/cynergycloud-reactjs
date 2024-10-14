import React from "react";
import "./Hero.css";
import arrow from "../../assets/arrow.png";
import desktop from "../../assets/desktop-app.png";
import Autotyping from "../AutoTyping/Autotyping";

const Hero = () => {
  return (
    <div className="hero-section" id="hero">
      <div className="hero-content">
        <h2>
          Unlock Seamless  <Autotyping/>  with SynergyCloud:<br/> Where Teams Connect and Ideas
          Flourish!
        </h2>
        <p>
          Empower Your Team to Communicate, Collaborate, and Create—All in One
          Place!
        </p>
        <div className="start-btn">
          <a href="#">Start For Free</a>
          <img src={arrow} alt="" />
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center img">
        <img src={desktop} alt="" className="img-fluid img-fluid1" />
      </div>
    </div>
  );
};

export default Hero;
