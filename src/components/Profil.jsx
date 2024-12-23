import React from "react";

function Profil() {
  const containerStyle = {
    padding: "2rem",
    background: "linear-gradient(to right, #141e30, #243b55)",
    color: "#fff",
    textAlign: "center",
    borderRadius: "15px",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.5)",
  };

  const titleStyle = {
    fontSize: "2.5rem",
    fontWeight: "bold",
    letterSpacing: "1px",
    color: "#00c6ff",
    textShadow: "0 4px 8px rgba(0, 198, 255, 0.4)",
    marginBottom: "2rem",
  };

  const contentStyle = {
    maxWidth: "600px",
    margin: "0 auto",
    fontSize: "1.1rem",
    lineHeight: "1.8",
  };

  const cardContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "1.5rem",
    justifyContent: "center",
    marginTop: "2rem",
  };

  const cardStyle = {
    background: "linear-gradient(145deg, #243b55, #141e30)",
    borderRadius: "15px",
    boxShadow:
      "0 10px 15px rgba(0, 0, 0, 0.3), inset 0 -3px 8px rgba(0, 0, 0, 0.4)",
    padding: "1.5rem",
    color: "#fff",
    width: "300px",
    transition: "transform 0.4s ease, box-shadow 0.4s ease",
  };

  const cardHoverStyle = {
    transform: "perspective(1000px) rotateY(10deg) rotateX(-10deg)",
    boxShadow: "0 20px 30px rgba(0, 0, 0, 0.5)",
  };

  return (
    <section id="profil" style={containerStyle}>
      <h2 style={titleStyle}>Profile</h2>
      <div style={contentStyle}>
        <p>
          Welcome to our programming club! We are a dynamic community of
          enthusiastic coders passionate about learning, innovation, and
          collaboration. Together, we explore the endless possibilities of
          programming and empower each other to achieve excellence.
        </p>
      </div>
      <div style={cardContainerStyle}>
        <div
          style={cardStyle}
          onMouseEnter={(e) => Object.assign(e.target.style, cardHoverStyle)}
          onMouseLeave={(e) => Object.assign(e.target.style, cardStyle)}
        >
          <h3>What We Do</h3>
          <p>
            Engage in coding workshops, hackathons, project collaborations, and
            inspiring discussions to boost your skills and creativity.
          </p>
        </div>
        <div
          style={cardStyle}
          onMouseEnter={(e) => Object.assign(e.target.style, cardHoverStyle)}
          onMouseLeave={(e) => Object.assign(e.target.style, cardStyle)}
        >
          <h3>Our Mission</h3>
          <p>
            To create an inclusive environment where members can thrive,
            innovate, and shape the future of technology together.
          </p>
        </div>
        <div
          style={cardStyle}
          onMouseEnter={(e) => Object.assign(e.target.style, cardHoverStyle)}
          onMouseLeave={(e) => Object.assign(e.target.style, cardStyle)}
        >
          <h3>Join Us</h3>
          <p>
            Be part of an exciting journey filled with learning, growth, and
            opportunities. Let’s code the future together!
          </p>
        </div>
      </div>
    </section>
  );
}

export default Profil;
