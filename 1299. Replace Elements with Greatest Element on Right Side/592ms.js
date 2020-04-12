// Given an array arr, replace every element in that array with the greatest element among
// the elements to its right, and replace the last element with -1.

// After doing so, return the array.

// 592 ms
// Time: O(n log n)
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    if (!Array.isArray(arr) || arr.length === 0) return [];

    const l = arr.length;
    for (let i = 0; i < l - 1; i++) {
        arr[i] = arr[i + 1];
        for (let j = i + 2; j < l; j++) {
            arr[i] = Math.max(arr[i], arr[j]);
        }
    }
    arr[l - 1] = -1;

    return arr;
};
