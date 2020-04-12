// Given two arrays of integers nums and index. Your task is to create target array under the following rules:

// Initially target array is empty.
// From left to right read nums[i] and index[i], insert at index index[i] the value nums[i] in target array.
// Repeat the previous step until there are no elements to read in nums and index.
// Return the target array.

// It is guaranteed that the insertion operations will be valid.

// 15 min

/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    const target = [];
    nums.forEach((n, i) => {
        target.splice(index[i], 0, n);
    });

    return target;
};

const nums = [0, 1, 2, 3, 4];
const index = [0, 1, 2, 2, 1];
console.log(JSON.stringify(createTargetArray(nums, index)));
