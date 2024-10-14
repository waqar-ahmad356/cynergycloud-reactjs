import React from "react";
import "./Footer.css"; // Importing the CSS file for styling the footer
import logo from "../../assets/logo.png"; // Importing the logo image
import linkedin from "../../assets/linkedin.png"; // Importing the LinkedIn icon
import phone from "../../assets/phone2.png"; // Importing the phone icon
import location from "../../assets/Location.png"; // Importing the location icon
import info from "../../assets/info.png"; // Importing the info icon

// Footer component
const Footer = () => {
  return (
    <div className="footer-section">
      {/* Main footer container */}
      <div className="footer">
        
        {/* Left section of the footer containing the logo and a tagline */}
        <div className="footer-left">
          <div className="footer-left-head">
            <img src={logo} alt="Company Logo" /> {/* Company logo */}
            <p className="mb-0">
              Empower Your Team to Communicate, Collaborate, and Create—All in
              One Place!
            </p> {/* Tagline */}
          </div>
          <img src={linkedin} alt="LinkedIn Logo" /> {/* LinkedIn icon */}
        </div>
        
        {/* Center section with quick links */}
        <div className="footer-center">
          <h2>Quick Links</h2> {/* Section heading */}
          <ul className="ps-0"> {/* Unordered list for quick links */}
            <li>About Us</li>
            <li>Testimonials</li>
            <li>Pricing</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Right section with contact information */}
        <div className="footer-right">
          <h2>Contact</h2> {/* Section heading */}
          <div className="cont-info"> {/* Contact info container */}
            
            {/* Contact info item 1: email */}
            <div>
              <img src={info} alt="Email Icon" /> {/* Email icon */}
              <p>info@synergycloud.com</p> {/* Email address */}
            </div>
            
            {/* Contact info item 2: phone number */}
            <div>
              <img src={phone} alt="Phone Icon" /> {/* Phone icon */}
              <p>650-285-9974</p> {/* Phone number */}
            </div>
            
            {/* Contact info item 3: location */}
            <div>
              <img src={location} alt="Location Icon" /> {/* Location icon */}
              <p>110 Nottingham Street Boston MA 02090</p> {/* Address */}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer; // Exporting the Footer component for use in other parts of the app
