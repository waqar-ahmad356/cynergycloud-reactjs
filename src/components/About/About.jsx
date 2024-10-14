import React from "react";
import "./About.css"; // Importing the CSS file for styling
import about_img from '../../assets/right.png'; // Importing the image to be used in the component

// About component definition
const About = () => {
  return (
    <div className="about-section">
      <div className="about ">
        {/* Image section */}
        <div className="about-img ">
          <img src={about_img} alt=""/> {/* Displaying the image */}
        </div>
        
        {/* Content section */}
        <div className="about-content">
          <h2 className="mb-0">About Us</h2> {/* Section title */}
          <p className="mb-0">
            {/* Description text */}
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

export default About; // Exporting the component for use in other parts of the application
