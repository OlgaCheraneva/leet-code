// Given a m x n grid. Each cell of the grid represents a street. The street of grid[i][j] can be:
// 1 which means a street connecting the left cell and the right cell.
// 2 which means a street connecting the upper cell and the lower cell.
// 3 which means a street connecting the left cell and the lower cell.
// 4 which means a street connecting the right cell and the lower cell.
// 5 which means a street connecting the left cell and the upper cell.
// 6 which means a street connecting the right cell and the upper cell.

// 228 ms
// 57.5 MB
/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var hasValidPath = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const directions = new Map([
        [
            1,
            [
                {i: 0, j: 1},
                {i: 0, j: -1}
            ]
        ],
        [
            2,
            [
                {i: 1, j: 0},
                {i: -1, j: 0}
            ]
        ],
        [
            3,
            [
                {i: 0, j: -1},
                {i: 1, j: 0}
            ]
        ],
        [
            4,
            [
                {i: 0, j: 1},
                {i: 1, j: 0}
            ]
        ],
        [
            5,
            [
                {i: -1, j: 0},
                {i: 0, j: -1}
            ]
        ],
        [
            6,
            [
                {i: -1, j: 0},
                {i: 0, j: 1}
            ]
        ]
    ]);
    const stack = [{i: 0, j: 0, type: grid[0][0]}];
    const visited = [true];
    while (stack.length !== 0) {
        const cell = stack.pop();
        const cellDirs = directions.get(cell.type);
        for (let idx = 0; idx < 2; idx++) {
            const newI = cell.i + cellDirs[idx].i;
            const newJ = cell.j + cellDirs[idx].j;
            if (
                0 > newI ||
                newI >= m ||
                0 > newJ ||
                newJ >= n ||
                visited[n * newI + newJ]
            )
                continue;
            const backDirs = directions.get(grid[newI][newJ]);
            for (let idx2 = 0; idx2 < 2; idx2++) {
                const diffI = cellDirs[idx].i + backDirs[idx2].i;
                const diffJ = cellDirs[idx].j + backDirs[idx2].j;
                if (diffI === 0 && diffJ === 0) {
                    stack.push({i: newI, j: newJ, type: grid[newI][newJ]});
                    visited[n * newI + newJ] = true;
                }
            }
        }
    }

    return Boolean(visited[m * n - 1]);
};

const grid = [
    [2, 4, 3],
    [6, 5, 2]
];
console.log(hasValidPath(grid));
