// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Example:
// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
// Follow up:

// If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

// Time: O(n)
// Memory: O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    const length = nums.length;
    // Keeps max sum of subarray (index represents length of this subarray)
    // Subarray elements have indexes from 0 to i - 1
    const dp = [-Infinity];
    for (let i = 1; i <= length; i++) {
        dp[i] = Math.max(
            dp[i - 1] + nums[i - 1], // Keep accumulating the sum,
            nums[i - 1] // Start all over
        );
    }

    let max = -Infinity;
    dp.forEach((dpElem) => {
        max = Math.max(dpElem, max);
    });

    return max;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([-1, -3]));
