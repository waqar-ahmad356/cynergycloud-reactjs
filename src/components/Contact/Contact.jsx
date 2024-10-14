import React from "react";
import "./Contact.css"; // Importing the CSS file for styling
import phone from "../../assets/phone.png"; // Importing phone image
import location from "../../assets/location2.png"; // Importing location image
import email from "../../assets/email.png"; // Importing email image

// Contact component definition
const Contact = () => {
  return (
    <div className="contact-section" id="contact">
      <div className="contact">
        
        {/* Contact Us section */}
        <div className="contact-us">
          <div className="contact-head">
            <h2>Contact Us</h2> {/* Section heading */}
            <p>Say something to start a live chat!</p> {/* Introductory text */}
          </div>

          {/* Contact information items */}
          <div className="contact-info">
            <div className="contact-info-item">
              <img src={phone} alt="" /> {/* Phone icon */}
              <p className="mb-0">+1012 3456 789</p> {/* Phone number */}
            </div>
            <div className="contact-info-item">
              <img src={email} alt="" /> {/* Email icon */}
              <p className="mb-0">demo@gmail.com</p> {/* Email address */}
            </div>
            <div className="contact-info-item">
              <img src={location} alt="" /> {/* Location icon */}
              <p className="mb-0">
                132 Dartmouth Street Boston, Massachusetts 02156 United States
              </p> {/* Physical address */}
            </div>
          </div>
        </div>

        {/* Contact form section */}
        <div class="container contact-container">
          <form class="custom-form">
            
            {/* First and Last Name Fields */}
            <div class="row mb-3">
              <div class="col-md-6">
                <label for="input1" class="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  class=" custom-input"
                  id="input1"
                  placeholder="Shaoor"
                />
              </div>
              <div class="col-md-6">
                <label for="input2" class="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  class="custom-input"
                  id="input2"
                  placeholder=""
                />
              </div>
            </div>

            {/* Email and Phone Number Fields */}
            <div class="row mb-3">
              <div class="col-md-6">
                <label
                  for="input3"
                  class="form-label"
                  style={{ color: "#8d8d8d" }}
                >
                  Email
                </label>
                <input
                  type="text"
                  class="custom-input"
                  id="input3"
                  placeholder=""
                />
              </div>
              <div class="col-md-6">
                <label for="input4" class="form-label">
                  Phone Number
                </label>
                <input
                  type="text"
                  class="custom-input"
                  id="input4"
                  placeholder="+92-3124700158"
                />
              </div>
            </div>

            {/* Message Text Area */}
            <div class="mb-3">
              <label
                for="textarea"
                class="form-label"
                style={{ color: "#8d8d8d" }}
              >
                Message
              </label>
              <textarea
                class="custom-input text-area mb-0"
                id="textarea"
                rows="1"
                placeholder="write your message"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div class="btn-container d-flex justify-content-end">
              <button type="submit" class="btn btn-msg">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact; // Exporting the component for use in other parts of the application
