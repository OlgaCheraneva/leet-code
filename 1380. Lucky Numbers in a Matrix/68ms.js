// Runtime: 68 ms
// Memory Usage: 37 MB

// Given a m * n matrix of distinct numbers, return all lucky numbers in the matrix in any order.
// A lucky number is an element of the matrix such that it is the minimum element in its row and maximum in its column.

// All elements in the matrix are distinct.
// 1 <= n, m <= 50
// 1 <= matrix[i][j] <= 10^5

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const luckyNumbers = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    const minimums = new Array(m).fill(Number.MAX_VALUE);
    const maximums = new Array(n).fill(Number.MIN_VALUE);

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const el = matrix[i][j];
            minimums[i] = Math.min(minimums[i], el);
            maximums[j] = Math.max(maximums[j], el);
        }
    }

    return minimums.filter((el, i) => maximums.includes(el));
};

const matrix1 = [
    [3, 7, 8],
    [9, 11, 13],
    [15, 16, 17]
];
console.log(luckyNumbers(matrix1)); // 15

const matrix2 = [
    [1, 10, 4, 2],
    [9, 3, 8, 7],
    [15, 16, 17, 12]
];
console.log(luckyNumbers(matrix2)); // 12

const matrix3 = [
    [7, 8],
    [1, 2]
];
console.log(luckyNumbers(matrix3)); // 7
