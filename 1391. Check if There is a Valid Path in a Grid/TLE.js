// Given a m x n grid. Each cell of the grid represents a street. The street of grid[i][j] can be:
// 1 which means a street connecting the left cell and the right cell.
// 2 which means a street connecting the upper cell and the lower cell.
// 3 which means a street connecting the left cell and the lower cell.
// 4 which means a street connecting the right cell and the lower cell.
// 5 which means a street connecting the left cell and the upper cell.
// 6 which means a street connecting the right cell and the upper cell.

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
                {i: 0, j: 1, dir: 'right'},
                {i: 0, j: -1, dir: 'left'}
            ]
        ],
        [
            2,
            [
                {i: 1, j: 0, dir: 'down'},
                {i: -1, j: 0, dir: 'up'}
            ]
        ],
        [
            3,
            [
                {i: 0, j: -1, dir: 'left'},
                {i: 1, j: 0, dir: 'down'}
            ]
        ],
        [
            4,
            [
                {i: 0, j: 1, dir: 'right'},
                {i: 1, j: 0, dir: 'down'}
            ]
        ],
        [
            5,
            [
                {i: -1, j: 0, dir: 'up'},
                {i: 0, j: -1, dir: 'left'}
            ]
        ],
        [
            6,
            [
                {i: -1, j: 0, dir: 'up'},
                {i: 0, j: 1, dir: 'right'}
            ]
        ]
    ]);
    const directionToTypes = new Map([
        ['right', [1, 3, 5]],
        ['left', [1, 4, 6]],
        ['up', [2, 3, 4]],
        ['down', [2, 5, 6]]
    ]);
    const stack = [{i: 0, j: 0, type: grid[0][0]}];
    // Cell's number array in range from 0 to (m * n - 1)
    // From left to right, from top to down
    const visited = [];
    while (stack.length !== 0) {
        const cell = stack.pop();
        visited.push(n * cell.i + cell.j);
        const cellDirs = directions.get(cell.type);
        for (let idx = 0; idx < 2; idx++) {
            const {i, j, dir} = cellDirs[idx];
            const newI = cell.i + i;
            const newJ = cell.j + j;
            if (
                0 > newI ||
                newI >= m ||
                0 > newJ ||
                newJ >= n ||
                visited.includes(n * newI + newJ)
            )
                continue;
            const newType = grid[newI][newJ];
            if (directionToTypes.get(dir).includes(newType))
                stack.push({i: newI, j: newJ, type: newType});
        }
    }

    return visited.includes(m * n - 1);
};

const grid = [
    [2, 4, 3],
    [6, 5, 2]
];
console.log(hasValidPath(grid));
