/**
 * Problem Statement :
 * Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery.
 * Update the current existing inventory item quantities (in arr1).
 * If an item cannot be found, add the new item and quantity into the inventory array.
 * The returned inventory array should be in alphabetical order by item.
 */

function updateInventory(arr1, arr2) {
  arr2.forEach((item) => {
    let found = false;
    arr1.forEach((prod) => {
      if (prod[1] == item[1]) {
        found = true;
        prod[0] += item[0];
      }
    });
    if (!found) {
      arr1.push(item);
    }
  });
  arr1.sort((a, b) => a[1].localeCompare(b[1]));
  return arr1;
}

// Example inventory lists
var curInv = [
  [21, 'Bowling Ball'],
  [2, 'Dirty Sock'],
  [1, 'Hair Pin'],
  [5, 'Microphone'],
];

var newInv = [
  [2, 'Hair Pin'],
  [3, 'Half-Eaten Apple'],
  [67, 'Bowling Ball'],
  [7, 'Toothpaste'],
];

updateInventory(curInv, newInv);
updateInventory(
  [
    [21, 'Bowling Ball'],
    [2, 'Dirty Sock'],
    [1, 'Hair Pin'],
    [5, 'Microphone'],
  ],
  [
    [2, 'Hair Pin'],
    [3, 'Half-Eaten Apple'],
    [67, 'Bowling Ball'],
    [7, 'Toothpaste'],
  ]
); // should return an array with a length of 6.

updateInventory(
  [
    [21, 'Bowling Ball'],
    [2, 'Dirty Sock'],
    [1, 'Hair Pin'],
    [5, 'Microphone'],
  ],
  [
    [2, 'Hair Pin'],
    [3, 'Half-Eaten Apple'],
    [67, 'Bowling Ball'],
    [7, 'Toothpaste'],
  ]
); // should return [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]].

updateInventory(
  [
    [21, 'Bowling Ball'],
    [2, 'Dirty Sock'],
    [1, 'Hair Pin'],
    [5, 'Microphone'],
  ],
  []
); //should return [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]].

updateInventory(
  [],
  [
    [2, 'Hair Pin'],
    [3, 'Half-Eaten Apple'],
    [67, 'Bowling Ball'],
    [7, 'Toothpaste'],
  ]
); //should return [[67, "Bowling Ball"], [2, "Hair Pin"], [3, "Half-Eaten Apple"], [7, "Toothpaste"]].

updateInventory(
  [
    [0, 'Bowling Ball'],
    [0, 'Dirty Sock'],
    [0, 'Hair Pin'],
    [0, 'Microphone'],
  ],
  [
    [1, 'Hair Pin'],
    [1, 'Half-Eaten Apple'],
    [1, 'Bowling Ball'],
    [1, 'Toothpaste'],
  ]
); // should return [[1, "Bowling Ball"], [0, "Dirty Sock"], [1, "Hair Pin"], [1, "Half-Eaten Apple"], [0, "Microphone"], [1, "Toothpaste"]].
