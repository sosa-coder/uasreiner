import React from "react";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import Galeri from "./components/Galeri";
import Profil from "./components/Profil";
import Kegiatan from "./components/Kegiatan"; // Menambahkan Kegiatan
import FAQ from "./components/FAQ";
import Keanggotaan from "./components/Keanggotaan";
import Kontributor from "./components/Kontributor";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <div>
      <Header />
      <AboutUs />
      <Galeri />
      <Profil />
      <Kegiatan /> {/* Menambahkan Komponen Kegiatan */}
      <FAQ />
      <Keanggotaan />
      <Kontributor />
      <ContactUs />
    </div>
  );
}

export default App;
