import React from 'react';
import Button from '../components/common/BasicButtons'; // Asegúrate de que la ruta sea correcta según la estructura de tu proyecto
import '../styles/MenuPage.css'; // Importando la hoja de estilos

const MenuPage = () => {
  // ...
  return (
    <div className="container"> {/* Aplicando la clase container */}
      <h1>Bienvenido a Nuestra Biblioteca</h1>
      <Button /> {/* Usando el componente Button */}
      {/* Más contenido o componentes según sea necesario */}
    </div>
  );
};

export default MenuPage;
