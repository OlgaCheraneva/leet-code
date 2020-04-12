// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Example:

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Note:

// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.

// Time: 5 min

// 64 ms
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let end = nums.length;
    for (let i = 0; i < end; i++) {
        if (nums[i] === 0) {
            nums.splice(i, 1);
            nums.push(0);
            i--;
            end--;
        }
    }
};

// 68 ms
// /**
//  * @param {number[]} nums
//  * @return {void} Do not return anything, modify nums in-place instead.
//  */
// var moveZeroes = function (nums) {
//     let end = nums.length;
//     for (let i = 0, lastNonZeroInd = 0; i < end; i++) {
//         if (nums[i] !== 0) {
//             [nums[lastNonZeroInd], nums[i]] = [nums[i], nums[lastNonZeroInd]];
//             lastNonZeroInd++;
//         }
//     }
// };
