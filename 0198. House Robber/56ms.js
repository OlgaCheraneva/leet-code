// Recursive + memory (top-down)
// Time: O(n)
// Space: O(n)

// 56 ms

// Stores max robbery loot starting form house index
let memory;

/**
 * @param {number[]} numbers
 * @return {number}
 */
var rob = function(numbers) {
    memory = new Array(numbers.length + 1).fill(-1);
    return robRecursion(numbers, numbers.length - 1);
};

function robRecursion(numbers, i) {
    if (i < 0) {
        return 0;
    }

    if (memory[i] >= 0) {
        return memory[i];
    }

    const result = Math.max(
        numbers[i] + robRecursion(numbers, i - 2),
        robRecursion(numbers, i - 1)
    );
    memory[i] = result;

    return result;
}
