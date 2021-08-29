/**
 * Problem Statement :
 * Write a function bubbleSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest.
 */

function bubbleSort(array) {
  for (let it = 0; it < array.length; it++) {
    let swapped = false;
    for (let jt = it + 1; jt < array.length; jt++) {
      if (array[it] >= array[jt]) {
        swapped = true;
        [array[it], array[jt]] = [array[jt], array[it]];
      }
    }
    if (!swapped) break;
  }
  return array;
}

console.log(bubbleSort([10, 9, 2, 1, 3, 2, 5, 12, 11, 48, 21, 13, 121, 344, 21, 3, 1, 5, 0, -10]));
console.log(bubbleSort([2, 1, 0]));