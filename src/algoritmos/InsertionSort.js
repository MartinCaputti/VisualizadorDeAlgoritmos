// src/algoritmos/insertionSort.js
export async function insertionSort(
  array,
  updateArray,
  speedRef,
  updateHighlight
) {
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  for (let i = 1; i < array.length; i++) {
    let key = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > key) {
      updateHighlight([j, j + 1]);
      await sleep(100 - speedRef.current);

      array[j + 1] = array[j];
      updateArray([...array]);
      j--;
    }

    array[j + 1] = key;
    updateArray([...array]);
    await sleep(100 - speedRef.current);
    updateHighlight([]);
  }
}
