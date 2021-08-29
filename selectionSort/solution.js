/**
 * Problem Statement : Write a function selectionSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest.
 */

function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i;
    for (let j = i; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    [array[minIndex], array[i]] = [array[i], array[minIndex]];
  }
  console.log(array);
}

selectionSort([10, 9, 2, 1, 3, 2, 5, 12, 11, 48, 21, 13, 121, 344, 21, 3, 1, 5, 0, -10]);
selectionSort([0, 3, 1, 5, 1, 4, 2, 5, -1]);