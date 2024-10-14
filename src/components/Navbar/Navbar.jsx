import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";

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
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a href="#testimonials">Testimonials</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className={`nav-signup ${isMobileMenuOpen ? "open" : ""}`}>
          <ul className="mb-0">
            <li className="login">
              <a href="#login">Login</a>
            </li>
            <li className="btn btn-primary">
              <a href="#signup" className="text-white">
                Sign Up
              </a>
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
