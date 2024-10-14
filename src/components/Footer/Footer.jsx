import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import linkedin from "../../assets/linkedin.png";
import phone from "../../assets/phone2.png";
import location from "../../assets/Location.png";
import info from "../../assets/info.png";

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="footer">
        <div className="footer-left">
          <div className="footer-left-head">
            <img src={logo} alt="" />
            <p className="mb-0">
              Empower Your Team to Communicate, Collaborate, and Create—All in
              One Place!
            </p>
          </div>
          <img src={linkedin} alt="" />
        </div>
        <div className="footer-center">
          <h2>Quick Links</h2>
          <ul className="ps-0">
            <li>About Us</li>
            <li>Testimonials</li>
            <li>Pricing</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="footer-right">
          <h2>Contact</h2>
          <div className="cont-info">
            <div>
              <img src={info} alt="" />
              <p>info@synergycloud.com</p>
            </div>
            <div>
              <img src={phone} alt="" />
              <p>650-285-9974</p>
            </div>
            <div>
              <img src={location} alt="" />
              <p>110 Nottingham Street Boston MA 02090</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
