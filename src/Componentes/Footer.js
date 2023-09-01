/*###########################
Hecho por Steveen Sinchiguano
Programacion Integrativa
Unidad 3
Material UI - React
###########################*/

import React from "react";
import Logo from "../Assets/Logo.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      {/* Sección uno del pie de página */}
      <div className="footer-section-one">
        {/* Contenedor del logo */}
        <div className="footer-logo-container">
          <img src={Logo} alt="Logo" />
        </div>
        
        {/* Iconos de redes sociales */}
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      
      {/* Sección dos del pie de página */}
      <div className="footer-section-two">
        {/* Columna de enlaces */}
        <div className="footer-section-columns">
          <span>Destinos</span>
          <span>Viajes</span>
          <span>Lugares Turísticos</span>
          <span>Hoteles</span>
          <span>Contactanos</span>
          <span>Ayuda</span>
        </div>
        
        {/* Columna de información de contacto */}
        <div className="footer-section-columns">
          <span>+593 987 654 321</span>
          <span>universidadespe@espe.edu.ec</span>
          <span>universidadespesd@espe.edu.ec</span>
          <span>universidadespematriz@espe.edu.ec</span>
        </div>
        
        {/* Columna de enlaces adicionales */}
        <div className="footer-section-columns">
          <span>Términos & Condiciones</span>
          <span>Políticas y Privacidad</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
