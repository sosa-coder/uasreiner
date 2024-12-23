import React, { useState } from "react";
import { FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";

function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted!");
  };

  return (
    <section id="contact" className="contact-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your Message"
            rows="4"
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-button">
          Send Message
        </button>
      </form>

      <div className="social-media">
        <h3>Follow Us</h3>
        <div className="icons">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="icon twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="icon instagram"
          >
            <FaInstagram />
          </a>
          <a href="mailto:example@example.com" className="icon email">
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* CSS Styles */}
      <style jsx>{`
        /* CSS untuk ContactUs */
        #contact {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          background: linear-gradient(135deg, #1a237e, #f50057);
          color: #fff;
          padding: 50px;
          box-sizing: border-box;
        }

        h2 {
          font-family: "Orbitron", sans-serif;
          font-size: 3em;
          margin-bottom: 20px;
          text-transform: uppercase;
          letter-spacing: 3px;
          text-shadow: 0px 4px 6px rgba(0, 0, 0, 0.5),
            0px 2px 10px rgba(255, 255, 255, 0.2);
        }

        .contact-form {
          background: rgba(0, 0, 0, 0.6);
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(5px);
          transform: rotateX(5deg) rotateY(5deg);
          transition: all 0.3s ease;
        }

        .contact-form:hover {
          transform: rotateX(0deg) rotateY(0deg) scale(1.05);
        }

        .form-group {
          margin-bottom: 20px;
        }

        input,
        textarea {
          width: 100%;
          padding: 15px;
          margin-top: 10px;
          border-radius: 10px;
          border: 1px solid #ddd;
          background: #333;
          color: #fff;
          font-size: 1em;
          box-sizing: border-box;
          transition: background 0.3s ease;
        }

        input:focus,
        textarea:focus {
          background: #f50057;
          outline: none;
        }

        .submit-button {
          padding: 15px 25px;
          background: #ff4081;
          border: none;
          color: #fff;
          font-size: 1.2em;
          font-weight: bold;
          border-radius: 50px;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .submit-button:hover {
          background: #e040fb;
        }

        .social-media {
          margin-top: 40px;
          text-align: center;
        }

        .social-media h3 {
          font-family: "Orbitron", sans-serif;
          font-size: 2em;
          margin-bottom: 20px;
        }

        .icons {
          display: flex;
          justify-content: center;
          gap: 20px;
        }

        .icon {
          font-size: 2.5em;
          color: #fff;
          transition: transform 0.3s ease, color 0.3s ease;
        }

        .icon:hover {
          transform: scale(1.2);
          color: #f50057;
        }

        .icon.twitter:hover {
          color: #1da1f2;
        }

        .icon.instagram:hover {
          color: #e1306c;
        }

        .icon.email:hover {
          color: #d44638;
        }
      `}</style>
    </section>
  );
}

export default ContactUs;
