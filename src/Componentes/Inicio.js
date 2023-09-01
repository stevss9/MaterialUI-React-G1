/*###########################
Hecho por Steveen Sinchiguano
Programacion Integrativa
Unidad 3
Material UI - React
###########################*/

/*By: @Stevss_ */
import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Inicio = () => {
  return (
    <div className="home-container">
      <Navbar />

      {/* Contenedor del banner */}
      <div className="home-banner-container">
        {/* Contenedor de la imagen de fondo */}
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="Banner Background" />
        </div>

        {/* Sección de texto */}
        <div className="home-text-section">
          <h1 className="primary-heading">
            Ecuador Travel - Turismo en Ecuador
          </h1>
          <p className="primary-text">
            Les presenta los mejores lugares turísticos de Ecuador, una amplia gama de turismo y aventura
            construido en el sitio perfecto. Ecuador es uno de los países que dispone de cientos de destinos
            turísticos, desde la sierra, costa, oriente y su región insular, obtendrán el mejor destino
            turístico para visitar.
          </p>
          
          {/* Botón de visita */}
          <button className="primary-button" style={{ backgroundColor: 'red', color: 'white' }}>
            Visitar Lugares <FiArrowRight />
          </button>
        </div>

        {/* Sección de imagen */}
        <div className="home-image-section">
          <img src={BannerImage} alt="Banner Image" />
        </div>
      </div>
    </div>
  );
};

export default Inicio;