/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const luckyNumbers = function(matrix) {
    const result = [];
    const m = matrix.length;

    for (let i = 0; i < m; i++) {
        let minIndex = getMinIndex(matrix[i]);

        for (let j = 0; j < m; j++) {
            if (matrix[j][minIndex] > matrix[i][minIndex]) {
                minIndex = -1;
                break;
            }
        }
        if (minIndex !== -1) {
            result.push(matrix[i][minIndex]);
        }
    }

    return result;
};

const getMinIndex = row => {
    const n = row.length;
    let index = 0;
    for (let i = 1; i < n; i++) {
        if (row[i] < row[index]) {
            index = i;
        }
    }

    return index;
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
