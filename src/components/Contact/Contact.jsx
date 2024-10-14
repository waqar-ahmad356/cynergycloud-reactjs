import React from "react";
import "./Contact.css";
import phone from "../../assets/phone.png";
import location from "../../assets/location2.png";
import email from "../../assets/email.png";

const Contact = () => {
  return (
    <div className="contact-section" id="contact">
      <div className="contact">
        <div className="contact-us">
          <div className="contact-head">
            <h2>Contact Us</h2>
            <p>Say something to start a live chat!</p>
          </div>
          <div className="contact-info">
            <div className="contact-info-item">
              <img src={phone} alt="" />
              <p className="mb-0">+1012 3456 789</p>
            </div>
            <div className="contact-info-item">
              <img src={email} alt="" />
              <p className="mb-0">demo@gmail.com</p>
            </div>
            <div className="contact-info-item">
              <img src={location} alt="" />
              <p className="mb-0">
                132 Dartmouth Street Boston, Massachusetts 02156 United States
              </p>
            </div>
          </div>
        </div>
        <div class="container contact-container">
          <form class="custom-form">
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

            <div class="btn-container d-flex  justify-content-end">
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

export default Contact;
