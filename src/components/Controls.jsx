// src/components/Controls.jsx
import React from "react";
import "./Controls.css";
const Controls = ({
  onRandomize,
  onBubbleSort,
  onMergeSort,
  onQuickSort,
  onSpeedChange,
  onSizeChange,
  arraySize,
  speed,
  isSorting,
}) => {
  return (
    <div className="controls-container">
      <button onClick={onRandomize} disabled={isSorting}>
        Mezclar
      </button>
      <button onClick={onBubbleSort} disabled={isSorting}>
        Ordenamiento Burbuja
      </button>
      <button onClick={onMergeSort} disabled={isSorting}>
        Ordenamiento por mezcla
      </button>
      <button onClick={onQuickSort} disabled={isSorting}>
        Quicksort
      </button>
      <label>
        Tamaño:
        <input
          type="range"
          min="10"
          max="100"
          value={arraySize}
          onChange={onSizeChange}
          disabled={isSorting}
        />
      </label>
      <label>
        Velocidad:
        <input
          type="range"
          min="1"
          max="100"
          value={speed}
          onChange={onSpeedChange}
          disabled={isSorting}
        />
      </label>
    </div>
  );
};

export default Controls;
