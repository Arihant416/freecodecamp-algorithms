'''
 # Write a function mergeSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest.
 # A good way to implement this is to write one function, for instance merge, which is responsible for merging two sorted arrays, and another function, for instance mergeSort, which is responsible for the recursion that produces single-item arrays to feed into merge.
'''


def mergeSort(array: list):
    length = len(array)
    if(length > 1):
        mid = length//2
        left = array[:mid]
        right = array[mid:]
        mergeSort(left)
        mergeSort(right)
        i = j = k = 0
        while i < len(left) and j < len(right):
            if left[i] < right[j]:
                array[k] = left[i]
                i += 1
            else:
                array[k] = right[j]
                j += 1
            k += 1
        while i < len(left):
            array[k] = left[i]
            i += 1
            k += 1
        while j < len(right):
            array[k] = right[j]
            j += 1
            k += 1
    # print(array) Uncomment this line to see how array is broken down
    return array


print(mergeSort([1, 4, 2, 8, 345, 123, 43, 32,
                 5643, 63, 123, 43, 2, 55, 1, 234, 92]))
