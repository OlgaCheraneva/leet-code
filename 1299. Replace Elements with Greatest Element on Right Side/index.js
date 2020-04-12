// Given an array arr, replace every element in that array with the greatest element among
// the elements to its right, and replace the last element with -1.

// After doing so, return the array.

// 72 ms
// Time: O(n)
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    if (!Array.isArray(arr) || arr.length === 0) return [];

    for (let i = arr.length - 2; i > 0; i--) {
        arr[i] = Math.max(arr[i], arr[i + 1]);
    }
    arr.shift();
    arr.push(-1);

    return arr;
};
