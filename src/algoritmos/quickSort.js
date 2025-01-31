// src/algoritmos/quickSort.js
export async function quickSort(array, updateArray, speedRef, updateHighlight) {
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const partition = async (low, high) => {
    let pivot = array[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
      updateHighlight([j, high]);
      await sleep(100 - speedRef.current);

      if (array[j] < pivot) {
        i++;
        [array[i], array[j]] = [array[j], array[i]];
        updateArray([...array]);
        await sleep(100 - speedRef.current);
      }

      updateHighlight([]);
    }

    [array[i + 1], array[high]] = [array[high], array[i + 1]];
    updateArray([...array]);
    await sleep(100 - speedRef.current);

    return i + 1;
  };

  const quickSortRecursive = async (low, high) => {
    if (low < high) {
      const pi = await partition(low, high);

      await quickSortRecursive(low, pi - 1);
      await quickSortRecursive(pi + 1, high);
    }
  };

  if (array && array.length > 0) {
    await quickSortRecursive(0, array.length - 1);
    updateArray([...array]);
  }
}
