// src/components/ArrayVisualizer.jsx
import React from "react";
import "./ArrayVisualizer.css"; // Importando la hoja de estilo

const ArrayVisualizer = ({ array, highlightedIndices }) => {
  const calculateColor = (value) => {
    const minColor = 200; // Color más claro (RGB: 200, 200, 255)
    const maxColor = 50; // Color más oscuro (RGB: 50, 50, 255)
    const colorValue = minColor + ((maxColor - minColor) * value) / 100;
    return `rgb(${colorValue}, ${colorValue}, 255)`; // Gradiente de azul claro a azul oscuro
  };

  if (!array || array.length === 0) {
    return <div className="array-container">Array vacío o no definido</div>;
  }

  return (
    <div className="array-container">
      {array.map((value, idx) => (
        <div
          key={idx}
          className="array-bar"
          style={{
            height: `${value * 5}px`, // Multiplicar para mejor visibilidad
            backgroundColor: highlightedIndices.includes(idx)
              ? "red"
              : calculateColor(value),
          }}
        ></div>
      ))}
    </div>
  );
};

export default ArrayVisualizer;
