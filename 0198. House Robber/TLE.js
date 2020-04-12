// Recursive (top-down)
// Time: O(2^n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(numbers) {
    return robRecursion(numbers, numbers.length - 1);
};

function robRecursion(numbers, i) {
    if (i < 0) {
        return 0;
    }

    return Math.max(
        numbers[i] + robRecursion(numbers, i - 2),
        robRecursion(numbers, i - 1)
    );
}
