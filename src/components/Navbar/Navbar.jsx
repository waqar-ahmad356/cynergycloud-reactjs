import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import {Link} from 'react-scroll'

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="navbar1">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className={`nav-menu ${isMobileMenuOpen ? "open" : ""}`}>
          <ul className="mb-0">
            <li>
              <Link to="about" smooth={true} offset={-100} duration={100}>About Us</Link>
            </li>
            <li>
              <Link to="pricing" smooth={true} offset={-30} duration={100}>Pricing</Link>
            </li>
            <li>
              <Link to="testimonials" smooth={true} offset={-80} duration={100}>Testimonials</Link>
            </li>
            <li>
              <Link to="contact" smooth={true} offset={-5} duration={100}>Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className={`nav-signup ${isMobileMenuOpen ? "open" : ""}`}>
          <ul className="mb-0">
            <li className="login">
              <a href="#login">Login</a>
            </li>
            <li className="btn btn-primary">
              <Link to="signup" smooth={true} offset={0} duration={100} className="text-white">
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
        <div className="mobile-toggle" onClick={toggleMobileMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
