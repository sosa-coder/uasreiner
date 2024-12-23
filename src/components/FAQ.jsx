import React from "react";
import "../styles.css"; // Jalur relatif ke styles.css

function FAQ() {
  return (
    <section id="faq" className="faq-container">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        <div className="faq-item">
          <p className="faq-question">
            <strong>Q: What is the purpose of this website?</strong>
          </p>
          <p className="faq-answer">
            A: This website is designed to connect members, share knowledge, and
            provide resources for programming enthusiasts.
          </p>
        </div>

        <div className="faq-item">
          <p className="faq-question">
            <strong>Q: How can I reset my password?</strong>
          </p>
          <p className="faq-answer">
            A: You can reset your password by clicking on the "Forgot Password"
            link on the login page and following the instructions.
          </p>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
