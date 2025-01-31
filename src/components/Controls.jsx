import React from "react";
import "./Controls.css"; // Importando la hoja de estilo

const Controls = ({
  onRandomize,
  onBubbleSort,
  onMergeSort,
  onQuickSort,
  onSelectionSort,
  onInsertionSort,
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
        Ordenamiento por Mezcla
      </button>
      <button onClick={onQuickSort} disabled={isSorting}>
        Quicksort
      </button>
      <button onClick={onSelectionSort} disabled={isSorting}>
        Ordenamiento por Selección
      </button>
      <button onClick={onInsertionSort} disabled={isSorting}>
        Ordenamiento por Inserción
      </button>
      <label>
        Tamaño ({arraySize} barras):
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
        Velocidad ({100 - speed} ms):
        <input
          type="range"
          min="1"
          max="100"
          value={speed}
          onChange={onSpeedChange} // Permitir cambios de velocidad mientras se ejecuta
        />
      </label>
    </div>
  );
};

export default Controls;
