// src/App.jsx
import React, { useState, useEffect } from "react";
import ArrayVisualizer from "./components/ArrayVisualizer";
import Controls from "./components/Controls";
import Description from "./components/Description";
import { bubbleSort } from "./algoritmos/bubbleSort";
import { mergeSort } from "./algoritmos/mergeSort";
import { quickSort } from "./algoritmos/quickSort";
import "./App.css"; // Importando la hoja de estilo

const App = () => {
  const [array, setArray] = useState([]);
  const [speed, setSpeed] = useState(50);
  const [arraySize, setArraySize] = useState(20);
  const [isSorting, setIsSorting] = useState(false);
  const [highlightedIndices, setHighlightedIndices] = useState([]);
  const [description, setDescription] = useState("");

  useEffect(() => {
    generateRandomArray();
  }, [arraySize]); // Generar un nuevo array cuando cambie el tamaño

  const generateRandomArray = () => {
    const newArray = Array.from(
      { length: arraySize },
      () => Math.floor(Math.random() * 100) + 1
    );
    setArray(newArray);
  };

  const handleBubbleSort = async () => {
    setDescription(
      "El algoritmo de ordenamiento burbuja compara pares adyacentes de elementos y los intercambia si están en el orden incorrecto. Este proceso se repite hasta que el array esté completamente ordenado."
    );
    setIsSorting(true);
    await bubbleSort([...array], setArray, speed, setHighlightedIndices);
    setIsSorting(false);
    setHighlightedIndices([]);
  };

  const handleMergeSort = async () => {
    setDescription(
      "El algoritmo de ordenamiento por mezcla divide el array en mitades, las ordena recursivamente, y luego mezcla los sub-arrays ordenados para producir un array completamente ordenado."
    );
    setIsSorting(true);
    const sortedArray = await mergeSort(
      [...array],
      setArray,
      speed,
      setHighlightedIndices
    );
    setArray(sortedArray);
    setIsSorting(false);
    setHighlightedIndices([]);
  };

  const handleQuickSort = async () => {
    setDescription(
      "El algoritmo Quicksort selecciona un pivote y reorganiza el array de manera que todos los elementos menores que el pivote estén a la izquierda y los mayores a la derecha. Luego aplica recursivamente el mismo proceso a los sub-arrays."
    );
    setIsSorting(true);
    await quickSort([...array], setArray, speed, setHighlightedIndices);
    setIsSorting(false);
    setHighlightedIndices([]);
  };

  const handleSpeedChange = (e) => {
    setSpeed(e.target.value);
  };

  const handleSizeChange = (e) => {
    setArraySize(e.target.value);
  };

  return (
    <div className="app-container">
      <h1>Sorting Algorithm Visualizer</h1>
      <ArrayVisualizer array={array} highlightedIndices={highlightedIndices} />
      <Controls
        onRandomize={generateRandomArray}
        onBubbleSort={handleBubbleSort}
        onMergeSort={handleMergeSort}
        onQuickSort={handleQuickSort}
        onSpeedChange={handleSpeedChange}
        onSizeChange={handleSizeChange}
        arraySize={arraySize}
        speed={speed}
        isSorting={isSorting}
      />
      <Description text={description} />
    </div>
  );
};

export default App;
