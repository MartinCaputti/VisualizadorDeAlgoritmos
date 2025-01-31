// src/algoritmos/selectionSort.js
export async function selectionSort(
  array,
  updateArray,
  speedRef,
  updateHighlight
) {
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  for (let i = 0; i < array.length - 1; i++) {
    let minIdx = i;

    for (let j = i + 1; j < array.length; j++) {
      updateHighlight([i, j]);
      await sleep(100 - speedRef.current);

      if (array[j] < array[minIdx]) {
        minIdx = j;
      }

      updateHighlight([]);
    }

    if (minIdx !== i) {
      [array[i], array[minIdx]] = [array[minIdx], array[i]];
      updateArray([...array]);
      await sleep(100 - speedRef.current);
    }
  }
}
