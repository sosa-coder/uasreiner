import React, { useState } from "react";

function Keanggotaan() {
  // State untuk menyimpan data pendaftaran
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // Fungsi untuk menangani perubahan input
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") setName(value);
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
  };

  // Fungsi untuk menangani pengiriman form
  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && email && password) {
      // Biasanya, data akan dikirim ke server atau database di sini
      setMessage(`Pendaftaran berhasil! Selamat datang, ${name}!`);
    } else {
      setMessage("Harap isi semua field.");
    }
  };

  const sectionStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "linear-gradient(135deg, #6a1b9a, #ff4081)",
    position: "relative",
    overflow: "hidden",
  };

  const containerStyle = {
    textAlign: "center",
    background: "rgba(0, 0, 0, 0.6)",
    borderRadius: "15px",
    padding: "40px",
    boxShadow: "0 10px 40px rgba(0, 0, 0, 0.5)",
    transform: "rotateX(10deg) rotateY(10deg)",
    transition: "all 0.3s ease",
    backdropFilter: "blur(10px)",
  };

  const titleStyle = {
    fontFamily: "'Orbitron', sans-serif",
    fontSize: "3em",
    color: "#fff",
    textTransform: "uppercase",
    letterSpacing: "3px",
    textShadow:
      "0px 4px 6px rgba(0, 0, 0, 0.6), 0px 2px 10px rgba(255, 255, 255, 0.2)",
    marginBottom: "20px",
  };

  const inputStyle = {
    padding: "10px",
    fontSize: "1em",
    margin: "10px 0",
    borderRadius: "5px",
    border: "1px solid #ddd",
    width: "80%",
  };

  const buttonStyle = {
    padding: "10px 20px",
    backgroundColor: "#ff4081",
    border: "none",
    color: "#fff",
    fontSize: "1.1em",
    cursor: "pointer",
    borderRadius: "5px",
    marginTop: "20px",
  };

  const messageStyle = {
    marginTop: "20px",
    color: "#fff",
    fontSize: "1.2em",
    fontWeight: "bold",
  };

  return (
    <section id="keanggotaan" style={sectionStyle}>
      <div style={containerStyle} className="keanggotaan-container">
        <h2 style={titleStyle}>Keanggotaan</h2>
        <p style={{ color: "#fff" }}>
          Become a member and unlock exclusive workshops, events, and resources.
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="Nama"
            style={inputStyle}
            required
          />
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Email"
            style={inputStyle}
            required
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="Password"
            style={inputStyle}
            required
          />
          <button type="submit" style={buttonStyle}>
            Daftar
          </button>
        </form>
        {message && <p style={messageStyle}>{message}</p>}
      </div>
    </section>
  );
}

export default Keanggotaan;
