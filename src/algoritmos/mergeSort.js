// src/algoritmos/mergeSort.js
export async function mergeSort(array, updateArray, speed, updateHighlight) {
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const merge = async (left, right, start, mid, end) => {
    let sortedArray = [];
    let i = 0,
      j = 0;

    while (i < left.length && j < right.length) {
      updateHighlight([start + i, mid + 1 + j]);
      await sleep(100 - speed);

      if (left[i] < right[j]) {
        sortedArray.push(left[i]);
        i++;
      } else {
        sortedArray.push(right[j]);
        j++;
      }
    }

    while (i < left.length) {
      sortedArray.push(left[i]);
      i++;
    }

    while (j < right.length) {
      sortedArray.push(right[j]);
      j++;
    }

    for (let k = start; k <= end; k++) {
      array[k] = sortedArray[k - start];
      updateArray([...array]);
      updateHighlight([k]);
      await sleep(100 - speed);
    }

    updateHighlight([]);
  };

  const mergeSortRecursive = async (start, end) => {
    if (start >= end) return;

    const mid = Math.floor((start + end) / 2);

    await mergeSortRecursive(start, mid);
    await mergeSortRecursive(mid + 1, end);

    await merge(
      array.slice(start, mid + 1),
      array.slice(mid + 1, end + 1),
      start,
      mid,
      end
    );
  };

  // Aseguramos que el array no esté vacío
  if (array && array.length > 0) {
    await mergeSortRecursive(0, array.length - 1);
  }
}
