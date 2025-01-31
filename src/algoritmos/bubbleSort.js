// src/algoritmos/bubbleSort.js
export async function bubbleSort(
  array,
  updateArray,
  speedRef,
  updateHighlight
) {
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  for (let i = 0; i < array.length; i++) {
    let swapped = false;

    for (let j = 0; j < array.length - i - 1; j++) {
      updateHighlight([j, j + 1]);
      await sleep(100 - speedRef.current);

      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        updateArray([...array]);
        swapped = true;
        await sleep(100 - speedRef.current);
      }

      updateHighlight([]);
    }

    if (!swapped) {
      break;
    }
  }
}
