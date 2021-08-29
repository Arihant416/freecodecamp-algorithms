/**
 * Problem statement :
 * Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.
 * You may use multiple pairs that have the same numeric elements but different indices.
 * Each pair should use the lowest possible available indices.
 * Once an element has been used it cannot be reused to pair with another element.
 * For instance, pairwise([1, 1, 2], 3) creates a pair [2, 1] using the 1 at index 0 rather than the 1 at index 1, because 0+2 < 1+2.
 * For example pairwise([7, 9, 11, 13, 15], 20) returns 6.
 * The pairs that sum to 20 are [7, 13] and [9, 11].
 * We can then write out the array with their indices and values.
 */

function pairwise(arr, arg) {
  let indices = [];
  let sumOfIndices = 0;
  let copyArr = arr.slice();
  copyArr.forEach((item, idx) => {
    const index = copyArr.indexOf(arg - item);
    if (index >= 0 && !indices.includes(index) && !indices.includes(idx) && idx != index) {
      indices = [...indices, idx, index];
      sumOfIndices += (idx + index);
      [copyArr[idx], copyArr[index]] = [null, null];
    }
  })
  console.log(sumOfIndices);
  // return sumOfIndices;
}

pairwise([1, 4, 2, 3, 0, 5], 7) //should return 11.
pairwise([1, 3, 2, 4], 4) // should return 1.
pairwise([1, 1, 1], 2)// should return 1.
pairwise([0, 0, 0, 0, 1, 1], 1) //should return 10.
pairwise([], 100) // should return 0.