import React, { useEffect } from "react";
import logo from "../assets/Logo.png";
import "./Header.css";

function Header() {
  useEffect(() => {
    const handleSmoothScroll = (event) => {
      const targetId = event.target.getAttribute("href").slice(1); // Ambil ID target
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        event.preventDefault();
        const headerHeight = document.querySelector("header").offsetHeight;
        const elementPosition = targetElement.offsetTop - headerHeight;

        window.scrollTo({
          top: elementPosition,
          behavior: "smooth",
        });
      }
    };

    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((link) =>
      link.addEventListener("click", handleSmoothScroll)
    );

    return () => {
      navLinks.forEach((link) =>
        link.removeEventListener("click", handleSmoothScroll)
      );
    };
  }, []);

  return (
    <header>
      <div className="logo-container">
        <a href="#home" className="logo-link">
          <img src={logo} alt="Logo" className="logo" />
          <span className="logo-text">UMN PC</span>
        </a>
      </div>
      <nav>
        <a href="#galeri" className="nav-link">
          Gallery
        </a>
        <a href="#profil" className="nav-link">
          Profile
        </a>
        <a href="#kegiatan" className="nav-link">
          Kegiatan
        </a>
        <a href="#faq" className="nav-link">
          FAQ
        </a>
        <a href="#keanggotaan" className="nav-link">
          Keanggotaan
        </a>
        <a href="#kontributor" className="nav-link">
          Kontributor
        </a>
        <a href="#contact" className="nav-link">
          Contact Us
        </a>
      </nav>
    </header>
  );
}

export default Header;
