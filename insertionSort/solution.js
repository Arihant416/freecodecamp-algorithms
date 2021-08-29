/**
 * Problem Statement:
 * Write a function insertionSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest.
*/

function insertionSort(list) {
  for (let i = 1; i < list.length; i++) {
    let key = list[i], j = i - 1;
    while (j >= 0 && list[j] > key) {
      list[j + 1] = list[j];
      j--;
    }
    list[j + 1] = key;
  }
  console.log(list);
  // return list;
}

insertionSort([10, 9, 2, 1, 3, 2, 5, 12, 11, 48, 21, 13, 121, 344, 21, 3, 1, 5, 0, -10]);
insertionSort([0, 3, 1, 5, 1, 4, 2, 5, -1]);