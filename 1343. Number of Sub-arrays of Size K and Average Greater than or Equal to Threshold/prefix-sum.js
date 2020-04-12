// Given an array of integers arr and two integers k and threshold.
// Return the number of sub-arrays of size k and average greater than or equal to threshold.

// Example 1:
// Input: arr = [2,2,2,2,5,5,5,8], k = 3, threshold = 4
// Output: 3
// Explanation: Sub-arrays [2,5,5],[5,5,5] and [5,5,8] have averages 4, 5 and 6 respectively. All other sub-arrays of size 3 have averages less than 4 (the threshold).

// Example 2:
// Input: arr = [1,1,1,1,1], k = 1, threshold = 0
// Output: 5

// Constraints:
// 1 <= arr.length <= 10^5
// 1 <= arr[i] <= 10^4
// 1 <= k <= arr.length
// 0 <= threshold <= 10^4

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function (arr, k, threshold) {
    const n = arr.length;
    const prefixSum = [0];
    for (let i = 0; i < n; i++) {
        prefixSum[i + 1] = prefixSum[i] + arr[i];
    }
    let count = 0;
    for (let i = 0; i < n + 1 - k; i++) {
        if (prefixSum[i + k] - prefixSum[i] >= k * threshold) {
            count++;
        }
    }

    return count;
};

const arr = [2, 2, 2, 2, 5, 5, 5, 8];
const k = 3;
const threshold = 4;
console.log(numOfSubarrays(arr, k, threshold)); // 3
