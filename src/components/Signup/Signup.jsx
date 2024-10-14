import React from "react";
import "./Signup.css";
import signup_img from "../../assets/Gif for synergy 1.png"; // Ensure the correct path

const Signup = () => {
  return (
    <div className="signup-section">
      <div className="signup-content">
        {/* Signup Form Section */}
        <div className="signup-form">
        <h2 className="mb-5">Sign Up</h2>
          <form>
            <div className="mb-3">
            <label className="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
               
              />
            </div>
            <div className="mb-3">
            <label className="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
               
              />
            </div>
            <div className="mb-3">
            <label className="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
               
              />
            </div>
            <button type="submit" className="signup-btn " >
              Create Account
            </button>
          </form>
          
        </div>

        {/* Image Section */}
        <div className="signup-img">
          <img src={signup_img} className="img-fluid" alt="Signup Visual" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
