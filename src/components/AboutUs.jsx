import React from "react";

function AboutUs() {
  return (
    <>
      <section id="aboutus" className="aboutus-container">
        <h2>About Us</h2>
        <p className="intro-text">Apa itu UMNPC?</p>
        <p className="description">
          Perkumpulan mahasiswa yang berfokus pada pengembangan kemampuan logika
          dan pemrograman untuk mempersiapkan anggotanya berkompetisi dalam
          ajang Competitive Programming.
        </p>

        <p className="philosophy-title">Filosofi logo</p>
        <p className="philosophy-text">
          Lumba - lumba: Karena hewan pintar dan mampu untuk menerima ilmu baru.
        </p>
        <p className="philosophy-text">
          Logo UMN: Karena kita berasal dari UMN, sejalan dengan filosofi UMN
          yaitu universal.
        </p>

        {/* CSS Styles */}
        <style jsx>{`
          #aboutus {
            background: linear-gradient(135deg, #2a5298, #1e3c72);
            color: #fff;
            padding: 60px 20px;
            text-align: center;
            box-sizing: border-box;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
            transform-style: preserve-3d;
            perspective: 1200px;
            margin: 40px auto;
            width: 80%;
          }

          h2 {
            font-family: "Orbitron", sans-serif;
            font-size: 3.5em;
            margin-bottom: 30px;
            text-transform: uppercase;
            letter-spacing: 5px;
            text-shadow: 0px 4px 6px rgba(0, 0, 0, 0.5),
              0px 2px 10px rgba(255, 255, 255, 0.2);
          }

          .intro-text {
            font-size: 1.6em;
            margin: 20px 0;
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: 2px;
            animation: fadeIn 2s ease-in-out;
          }

          .description {
            font-size: 1.3em;
            margin-bottom: 30px;
            line-height: 1.6;
            opacity: 0.9;
          }

          .philosophy-title {
            font-size: 1.8em;
            margin-top: 30px;
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: 3px;
            text-decoration: underline;
            animation: fadeIn 2s ease-in-out;
          }

          .philosophy-text {
            font-size: 1.3em;
            margin: 10px 0;
            line-height: 1.6;
            animation: fadeIn 2s ease-in-out;
          }

          @keyframes fadeIn {
            0% {
              opacity: 0;
              transform: translateY(-50px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @media (max-width: 768px) {
            #aboutus {
              width: 90%;
              padding: 40px 15px;
            }

            h2 {
              font-size: 2.5em;
            }

            .intro-text {
              font-size: 1.4em;
            }

            .description,
            .philosophy-text {
              font-size: 1.1em;
            }
          }
        `}</style>
      </section>
    </>
  );
}

export default AboutUs;
