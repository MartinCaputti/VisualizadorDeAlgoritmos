// src/algoritmos/bubbleSort.js
export async function bubbleSort(array, updateArray, speed, updateHighlight) {
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  for (let i = 0; i < array.length; i++) {
    let swapped = false; // Indica si hubo un intercambio

    for (let j = 0; j < array.length - i - 1; j++) {
      // Resalta las barras que se están comparando
      updateHighlight([j, j + 1]);
      await sleep(100 - speed);

      if (array[j] > array[j + 1]) {
        // Intercambia los elementos si están en el orden incorrecto
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        updateArray([...array]);
        swapped = true; // Marca que hubo un intercambio
        await sleep(100 - speed);
      }

      // Restablece los resaltados
      updateHighlight([]);
    }

    // Si no hubo intercambios en la pasada, el array ya está ordenado
    if (!swapped) {
      break;
    }
  }
}
