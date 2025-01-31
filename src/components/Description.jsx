// src/components/Description.jsx
import React from "react";
import "./Description.css"; // Puedes agregar estilos aquí

const Description = ({ text }) => {
  return (
    <div className="description-container">
      <p>{text}</p>
    </div>
  );
};

export default Description;
