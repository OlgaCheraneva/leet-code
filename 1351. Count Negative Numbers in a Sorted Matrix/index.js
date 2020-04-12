// Given a m * n matrix grid which is sorted in non-increasing order both row-wise and column-wise.
// Return the number of negative numbers in grid.

// /**
//  * @param {number[][]} grid
//  * @return {number}
//  */
// var countNegatives = function(grid) {
//     if (
//         !Array.isArray(grid) ||
//         grid.length === 0 ||
//         !Array.isArray(grid[0]) ||
//         grid[0].length === 0
//     ) {
//         return 0;
//     }

//     const m = grid.length;
//     const n = grid[0].length;
//     let result = 0;
//     // Starts in the bottom left corner
//     let i = m - 1;
//     let j = 0;
//     while (i >= 0 && j < n) {
//         if (grid[i][j] < 0) {
//             result += n - j;
//             i--;
//         } else {
//             j++;
//         }
//     }

//     return result;
// };

/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    if (
        !Array.isArray(grid) ||
        grid.length === 0 ||
        !Array.isArray(grid[0]) ||
        grid[0].length === 0
    ) {
        return 0;
    }

    const m = grid.length;
    const n = grid[0].length;

    if (grid[0][0] < 0) return m * n;
    if (grid[m - 1][n - 1] > 0) return 0;

    let result = 0;
    // Starts in the bottom left corner
    for (let i = m - 1; i >= 0; i--) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] < 0) {
                result += n - j;
                break;
            }
        }
    }

    return result;
};

const grid = [
    [4, 3, 2, -1],
    [3, 2, 1, -1],
    [1, 1, -1, -2],
    [-1, -1, -2, -3]
];
console.log(countNegatives(grid));
