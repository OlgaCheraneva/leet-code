// Iterative + memory (bottom-up)
// Time: O(n)
// Space: O(n)

// 48 ms

// Stores max robbery loot that was collected form houses before a certain index
const memory = [];

/**
 * @param {number[]} numbers
 * @return {number}
 */
var rob = function(numbers) {
    memory[0] = 0;
    memory[1] = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        memory[i + 1] = Math.max(memory[i], numbers[i] + memory[i - 1]);
    }

    return memory[numbers.length];
};
