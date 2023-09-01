/*###########################
Hecho por Steveen Sinchiguano
Programacion Integrativa
Unidad 3
Material UI - React
###########################*/

import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Lugar = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Experiencias de nuestros Viajeros</p>
        <h1 className="primary-heading">Lo que dicen nuestros clientes</h1>
        <p className="primary-text">
        Aquí puedes encontrar los testimonios de algunos de nuestros clientes, quienes ya han tenido la oportunidad de explorar los destinos más asombrosos de mi hermoso Ecuador.
        </p>
      </div>
      <div className="testimonial-section-bottom">
      <img src={ProfilePic} alt="" style={{ width: '200px' }} />
        <p>
        "Visitar una de las Islas Galápagos fue la experiencia más increíble de mi vida. No hay palabras para describir la belleza natural y la vida silvestre única que pude presenciar."
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Steveen Moreira</h2>
      </div>
    </div>
  );
};

export default Lugar;
