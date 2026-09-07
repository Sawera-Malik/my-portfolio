import React, { useState } from "react";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";
import emailjs from "emailjs-com";
import './contact.css';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // User input data
    const templateParams = {
      from_name: name,
      reply_to: email,
      message: message,
    };

    emailjs
      .send(
        "service_0tkefzs", 
        "template_uylti4s", 
        templateParams,
        "S5IirnN6HIr_Dq-_b" 
      )
      .then(
        (response) => {
          console.log(
            "Email sent successfully:",
            response.status,
            response.text
          );
          alert("Your message has been sent!");
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.error("Failed to send email:", error);
          alert("Failed to send your message. Please try again.");
        }
      );
  };

  return (
    <div className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-head">Contact Me</div>
        <div className="contact-sec">
          <div className="contact-detail">
            <h3
              className="contact-detail-head"
            >
              Let's Talk
            </h3>
            <p>
              I'm open to discussing web development projects or partnership
              opportunities.
            </p>
            <div className="contact-email">
              <FaEnvelope className="email-icon" />
              <a
                href="mailto:saweram693@gmail.com"
                className="email"
              >
                saweram693@gmail.com
              </a>
            </div>
            <div className="contact-phone">
              <FaPhone className="phone-icon" />
              <span>+92-3201778498</span>
            </div>
            <div className="contact-address">
              <FaMapMarkedAlt className="address-icon" />
              <span>Samma Satta, Bahawalpur</span>
            </div>
          </div>
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="form-label">
                  Your Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-input"
                  placeholder="Enter Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-input"
                  placeholder="Enter Your Email"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="form-input"
                  rows="5"
                  placeholder="Enter Your Message"
                  required
                />
              </div>
              <button
                type="submit"
                className="form-btn"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
