import React from "react";
import "./About.css";
import about_img from '../../assets/right.png';

const About = () => {
  return (
    <div className="about-section">
      <div className="about ">
        <div className="about-img ">
          <img src={about_img} alt=""/>
        </div>
        <div className="about-content">
          <h2 className="mb-0">About Us</h2>
          <p className="mb-0">
            At SynergyCloud, we believe that seamless communication is the
            backbone of productive teams. Designed for the modern workplace, our
            platform fosters real-time collaboration, efficient communication,
            and organized workflows. Whether your team is remote, hybrid, or
            in-office, we make staying connected effortless.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
