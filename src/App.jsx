import React, { useState, useEffect, useRef } from "react";
import ArrayVisualizer from "./components/ArrayVisualizer";
import Controls from "./components/Controls";
import Description from "./components/Description";
import { bubbleSort } from "./algoritmos/bubbleSort";
import { mergeSort } from "./algoritmos/mergeSort";
import { quickSort } from "./algoritmos/quickSort";
import { selectionSort } from "./algoritmos/selectionSort";
import { insertionSort } from "./algoritmos/InsertionSort";
import "./App.css"; // Importando la hoja de estilo

const App = () => {
  const [array, setArray] = useState([]);
  const [speed, setSpeed] = useState(50);
  const [arraySize, setArraySize] = useState(20);
  const [isSorting, setIsSorting] = useState(false);
  const [highlightedIndices, setHighlightedIndices] = useState([]);
  const [description, setDescription] = useState("");

  const speedRef = useRef(speed); // Usamos useRef para mantener una referencia mutable de la velocidad

  useEffect(() => {
    generateRandomArray();
  }, [arraySize]); // Generar un nuevo array cuando cambie el tamaño

  useEffect(() => {
    speedRef.current = speed; // Actualizar la referencia cada vez que cambie el valor de speed
  }, [speed]);

  const generateRandomArray = () => {
    const newArray = Array.from(
      { length: arraySize },
      () => Math.floor(Math.random() * 100) + 1
    );
    setArray(newArray);
  };

  const handleBubbleSort = async () => {
    setDescription(
      "El algoritmo de ordenamiento burbuja compara pares adyacentes de elementos y los intercambia si están en el orden incorrecto. Este proceso se repite hasta que el array esté completamente ordenado. Es uno de los algoritmos más simples, pero también uno de los menos eficientes para grandes conjuntos de datos debido a su complejidad O(n^2)."
    );
    setIsSorting(true);
    await bubbleSort([...array], setArray, speedRef, setHighlightedIndices);
    setIsSorting(false);
    setHighlightedIndices([]);
  };

  const handleMergeSort = async () => {
    setDescription(
      "El algoritmo de ordenamiento por mezcla es un algoritmo eficiente basado en el enfoque divide y vencerás. Divide el array en mitades, las ordena recursivamente, y luego mezcla los sub-arrays ordenados para producir un array completamente ordenado. Su complejidad es O(n log n), lo que lo hace mucho más eficiente que el ordenamiento burbuja para grandes conjuntos de datos."
    );
    setIsSorting(true);
    await mergeSort([...array], setArray, speedRef, setHighlightedIndices);
    setIsSorting(false);
    setHighlightedIndices([]);
  };

  const handleQuickSort = async () => {
    setDescription(
      "El algoritmo Quicksort selecciona un pivote y reorganiza el array de manera que todos los elementos menores que el pivote estén a la izquierda y los mayores a la derecha. Luego aplica recursivamente el mismo proceso a los sub-arrays. Es uno de los algoritmos de ordenamiento más eficientes con una complejidad promedio de O(n log n). Sin embargo, en el peor caso puede llegar a ser O(n^2), aunque esto es raro en la práctica."
    );
    setIsSorting(true);
    await quickSort([...array], setArray, speedRef, setHighlightedIndices);
    setIsSorting(false);
    setHighlightedIndices([]);
  };

  const handleSelectionSort = async () => {
    setDescription(
      "El algoritmo de ordenamiento por selección trabaja seleccionando repetidamente el elemento menor (o mayor) de la porción no ordenada del array y moviéndolo al principio. Su complejidad es O(n^2) en el peor caso, lo que lo hace menos eficiente para grandes conjuntos de datos."
    );
    setIsSorting(true);
    await selectionSort([...array], setArray, speedRef, setHighlightedIndices);
    setIsSorting(false);
    setHighlightedIndices([]);
  };

  const handleInsertionSort = async () => {
    setDescription(
      "El algoritmo de ordenamiento por inserción funciona construyendo una porción ordenada del array, insertando cada nuevo elemento en su posición correcta. Es eficiente para arrays pequeños o casi ordenados, con una complejidad promedio de O(n^2)."
    );
    setIsSorting(true);
    await insertionSort([...array], setArray, speedRef, setHighlightedIndices);
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
      <h1>Visualizador de Algoritmos de Ordenamiento</h1>
      <ArrayVisualizer array={array} highlightedIndices={highlightedIndices} />
      <Controls
        onRandomize={generateRandomArray}
        onBubbleSort={handleBubbleSort}
        onMergeSort={handleMergeSort}
        onQuickSort={handleQuickSort}
        onSelectionSort={handleSelectionSort}
        onInsertionSort={handleInsertionSort}
        onSpeedChange={handleSpeedChange}
        onSizeChange={handleSizeChange}
        arraySize={arraySize}
        speed={speed}
        isSorting={isSorting}
      />
      <Description text={description} />
      <div className="credits">
        Creado por:&nbsp;
        <a href="https://martincaputti.com" target="_blank">
          Martin Caputti
        </a>
      </div>
    </div>
  );
};

export default App;
