/**
 * Problem Statement
 * Return the number of total permutations of the provided string that don't have repeated consecutive letters.
 * Assume that all characters in the provided string are each unique.
 * For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.
 */

// My Solution
let permutations = [];
const REGEX = /([a-z])\1+/;

const swap = (arr, index1, index2) => {
	[arr[index1], arr[index2]] = [arr[index2], arr[index1]];
};

// Recursive function to findAll permutations of an array/string
function permute(arr, left, right) {
	const str = arr.join('');
	if (left == right && !REGEX.test(str)) {
		permutations.push(str);
	} else {
		for (let idx = left; idx <= right; idx++) {
			swap(arr, left, idx);
			permute(arr, left + 1, right);
			swap(arr, left, idx);
		}
	}
}

function permAlone(str) {
	let arr = str.split('');
	permutations = [];
	permute(arr, 0, arr.length - 1);
	console.log(permutations.length);
}

permAlone('aab'); //should return 2.
permAlone('aaa'); //should return 0.
permAlone('aabb'); //should return 8.
permAlone('abcdefa'); //should return 3600.
permAlone('abfdefa'); //should return 2640.
permAlone('zzzzzzzz'); //should return 0.
permAlone('a'); //should return 1.
permAlone('aaab'); //should return 0.
permAlone('aaabb'); //should return 12
