// Importación de estilos CSS para la aplicación.
import "./App.css";

// Importación de varios componentes de la aplicación desde sus respectivas ubicaciones.
import Inicio from "./Componentes/Inicio";
import Acercade from "./Componentes/Acercade";
import Contacto from "./Componentes/Contacto";
import Footer from "./Componentes/Footer";
import Lugar from "./Componentes/Lugar";
import Navbar from "./Componentes/Navbar";
import Viaje from "./Componentes/Viaje";

// Definición del componente principal de la aplicación, llamado "App".
function App(){
    return(
        // Estructura JSX que renderiza varios componentes dentro de un contenedor <div>.
        <div className="App">
            <Inicio/>    
            <Acercade/>  
            <Viaje/>    
            <Lugar/>    
            <Contacto/>   
            <Footer/>    
        </div>
    );
}

// Exporta el componente principal "App" para que pueda ser utilizado en otros archivos.
export default App;
