// src/algoritmos/quickSort.js
export async function quickSort(array, updateArray, speed, updateHighlight) {
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // Función para particionar el array alrededor de un pivote
  const partition = async (low, high) => {
    let pivot = array[high]; // Elegir el último elemento como pivote
    let i = low - 1; // Índice del elemento más pequeño

    for (let j = low; j < high; j++) {
      updateHighlight([j, high]); // Resaltar el elemento actual y el pivote
      await sleep(100 - speed);

      if (array[j] < pivot) {
        i++;
        [array[i], array[j]] = [array[j], array[i]];
        updateArray([...array]);
        await sleep(100 - speed);
      }

      updateHighlight([]); // Restablecer los resaltados
    }

    [array[i + 1], array[high]] = [array[high], array[i + 1]];
    updateArray([...array]);
    await sleep(100 - speed);

    return i + 1; // Retornar el índice del pivote
  };

  // Función recursiva para aplicar Quick Sort
  const quickSortRecursive = async (low, high) => {
    if (low < high) {
      const pi = await partition(low, high);

      // Ordenar recursivamente las sub-partes
      await quickSortRecursive(low, pi - 1);
      await quickSortRecursive(pi + 1, high);
    }
  };

  await quickSortRecursive(0, array.length - 1);
}

/*Explicación:
partition: Esta función organiza el array de modo que todos los elementos menores que el pivote están a la izquierda y todos los mayores a la derecha. Luego devuelve la posición final del pivote.

quickSortRecursive: Esta función aplica recursivamente Quick Sort al sub-array izquierdo y derecho del pivote.

Resaltado y Pausas: Se utilizan updateHighlight y sleep para resaltar los elementos que se están comparando y pausar la ejecución, lo cual mejora la visualización.*/
