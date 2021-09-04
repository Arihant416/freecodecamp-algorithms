function mergeUtil(left, right) {
	let resList = [],
		leftIndex = 0,
		rightIndex = 0;
	while (leftIndex < left.length && rightIndex < right.length) {
		if (left[leftIndex] < right[rightIndex]) {
			resList.push(left[leftIndex++]);
		} else {
			resList.push(right[rightIndex++]);
		}
	}
	return resList.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

function mergeSort(list) {
	if (list.length == 1) {
		return list;
	}
	let midIndex = Math.floor(list.length / 2);
	let leftList = list.slice(0, midIndex);
	let rightList = list.slice(midIndex);
	return mergeUtil(mergeSort(leftList), mergeSort(rightList));
}

console.log(
	mergeSort([
		1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92,
	])
);
console.log(mergeSort([10, 9, 8, 7, 1, 4, 3, 2]));
