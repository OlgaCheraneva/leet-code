/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let max = -Infinity;
    for (let subLength = 1; subLength <= nums.length; subLength++) {
        for (let start = 0; start <= nums.length - subLength; start++) {
            let sum = 0;
            for (let i = start; i < start + subLength; i++) {
                sum += nums[i];
            }
            max = Math.max(max, sum);
        }
    }

    return max;
};
