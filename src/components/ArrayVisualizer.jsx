// src/components/ArrayVisualizer.jsx
import React from "react";
import "./ArrayVisualizer.css"; // Importando la hoja de estilo

const ArrayVisualizer = ({ array, highlightedIndices }) => {
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
            backgroundColor: highlightedIndices.includes(idx) ? "red" : "blue",
          }}
        ></div>
      ))}
    </div>
  );
};

export default ArrayVisualizer;
