// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.
// Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.

// Example 1:

// Input: [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
//              Total amount you can rob = 1 + 3 = 4.

// Example 2:

// Input: [2,7,9,3,1]
// Output: 12
// Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
//              Total amount you can rob = 2 + 9 + 1 = 12.

// Iterative + 2 variables (bottom-up)
// Time: O(n)
// Space: O(1)

// 52 ms

/**
 * @param {number[]} numbers
 * @return {number}
 */
var rob = function(numbers) {
    if (numbers.length === 0) return 0;

    let previous = 0;
    let current = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        const tmp = current;
        current = Math.max(current, numbers[i] + previous);
        previous = tmp;
    }

    return current;
};
