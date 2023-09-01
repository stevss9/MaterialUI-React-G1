/*###########################
Hecho por Steveen Sinchiguano
Programacion Integrativa
Unidad 3
Material UI - React
###########################*/

import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const Acercade = () => {
    return (
      <div className="about-section-container">
        {/* Contenedor de la imagen de fondo */}
        <div className="about-background-image-container">
          <img src={AboutBackground} alt="Background" />
        </div>
  
        {/* Contenedor de la imagen */}
        <div className="about-section-image-container">
          <img src={AboutBackgroundImage} alt="About Background Image" />
        </div>
  
        {/* Contenedor de texto */}
        <div className="about-section-text-container">
          <p className="primary-subheading">Ecuador potencia turística</p>
          <h1 className="primary-heading">
            El Panecillo: Un Mirador Emblemático de Quito
          </h1>
          <p className="primary-text">
            El Panecillo es una elevación natural de 3.000 metros sobre el nivel del mar, ubicada en el corazón de la ciudad de Quito, capital de Ecuador. Es un atractivo turístico imperdible en esta hermosa ciudad.
          </p>
          <p className="primary-text">
            Gracias a su ubicación estratégica, El Panecillo se ha convertido en el mirador natural más importante de la ciudad. Desde aquí, los visitantes pueden apreciar la distribución urbana de Quito, su centro histórico y las vistas panorámicas hacia el norte y sur.
          </p>
          <div className="about-buttons-container">
            <button className="secondary-button" style={{ backgroundColor: 'red', color: 'white' }}>Leer Más</button>
            <button className="watch-video-button" >
              <BsFillPlayCircleFill /> Ver Video
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Acercade;