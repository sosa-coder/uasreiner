import React, { useEffect, useRef } from "react";
import fotoKegiatan1 from "../assets/foto kegiatan 1.jpg";
import fotoKegiatan2 from "../assets/foto kegiatan 2.jpg";
import fotoKegiatan3 from "../assets/foto kegiatan 3.jpg";
import fotoKegiatan4 from "../assets/foto kegiatan 4.jpg";
import fotoKegiatan5 from "../assets/foto kegiatan 5.jpg";
import fotoKegiatan6 from "../assets/foto kegiatan 6.jpg";
import "./galeri.css";

function Galeri() {
  const galleryRef = useRef(null);
  const images = [
    fotoKegiatan1,
    fotoKegiatan2,
    fotoKegiatan3,
    fotoKegiatan4,
    fotoKegiatan5,
    fotoKegiatan6,
  ];

  useEffect(() => {
    let currentIndex = 0;

    const slideInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
      const gallery = galleryRef.current;
      gallery.style.transform = `translateX(-${currentIndex * 320}px)`;
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [images.length]);

  return (
    <section id="galeri">
      <h2>Gallery</h2>
      <div className="gallery" ref={galleryRef}>
        {images.map((img, index) => (
          <div className="gallery-item" key={index}>
            <img src={img} alt={`Event ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Galeri;
