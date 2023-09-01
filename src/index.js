// Importación de las bibliotecas necesarias.
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Importa el componente principal "App".

// Crea un "root" para renderizar la aplicación en el elemento con el id "root" en el DOM.
const root = ReactDOM.createRoot(document.getElementById("root"));

// Renderiza el componente principal "App" dentro del "root" creado.
root.render(
    <React.StrictMode>
        <App /> 
    </React.StrictMode>
);
