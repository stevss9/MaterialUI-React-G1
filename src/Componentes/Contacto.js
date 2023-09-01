/*###########################
Hecho por Steveen Sinchiguano
Programacion Integrativa
Unidad 3
Material UI - React
###########################*/

import React from "react";

const Contacto = () => {
  return (
    <div className="contact-page-wrapper">
      {/* Títulos */}
      <h1 className="primary-heading">¿Necesitas una guía más completa?</h1>
      <h1 className="primary-heading">Estamos aquí para ayudarte</h1>

      {/* Formulario de contacto */}
      <div className="contact-form-container">
        {/* Campo de entrada de correo */}
        <input type="text" placeholder="sjsinchiguano@espe.edu.ec*" />

        {/* Botón de envío */}
        <button className="secondary-button" style={{ backgroundColor: 'red', color: 'white' }}>Enviar</button>
      </div>
    </div>
  );
};

export default Contacto;