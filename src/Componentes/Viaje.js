/*###########################
Hecho por Steveen Sinchiguano
Programacion Integrativa
Unidad 3
Material UI - React
###########################*/

import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import BannerBackground from "../Assets/home-banner-background.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Viaje = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Descubre Destinos",
      text: "Explora una variedad de destinos turísticos en Ecuador. Desde playas exquisitas hasta majestuosas montañas, tenemos opciones para todos los gustos y preferencias.",
    },
    {
      image: ChooseMeals,
      title: "Planifica tu Viaje",
      text: "Personaliza tu aventura. Elige cómo deseas viajar, ya sea explorando la naturaleza, sumergiéndote en la cultura local o disfrutando de emocionantes actividades.",
    },
    {
      image: DeliveryMeals,
      title: "Experiencia Inolvidable",
      text: "Vive momentos memorables. Te garantizamos una experiencia inolvidable mientras te sumerges en la belleza y diversidad que ofrece Ecuador.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      {/* Agrega la imagen BannerBackground */}
      <div className="home-bannerImage-container">
        <img src={BannerBackground} alt="Banner Background" />
      </div>
      
      {/* Sección superior */}
      <div className="work-section-top">
        <p className="primary-subheading">Descubre el Ecuador</p>
        <h1 className="primary-heading">Explora Nuestros Destinos</h1>
        <p className="primary-text">
          Sumérgete en la belleza y la riqueza de los lugares turísticos que Ecuador tiene para ofrecer. Desde maravillas naturales hasta culturas únicas, aquí encontrarás algo para cada viajero.
        </p>
      </div>
      
      {/* Sección inferior */}
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            {/* Imagen del paso */}
            <div className="info-boxes-img-container">
              <img src={data.image} alt={data.title} />
            </div>
            
            {/* Título del paso */}
            <h2>{data.title}</h2>
            
            {/* Descripción del paso */}
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Viaje;
