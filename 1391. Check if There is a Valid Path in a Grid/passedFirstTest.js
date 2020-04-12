// Given a m x n grid. Each cell of the grid represents a street. The street of grid[i][j] can be:
// 1 which means a street connecting the left cell and the right cell.
// 2 which means a street connecting the upper cell and the lower cell.
// 3 which means a street connecting the left cell and the lower cell.
// 4 which means a street connecting the right cell and the lower cell.
// 5 which means a street connecting the left cell and the upper cell.
// 6 which means a street connecting the right cell and the upper cell.

const directionMap = new Map();
directionMap.set('up', {types: [2, 3, 4], coordinateDiff: {i: -1, j: 0}});
directionMap.set('down', {types: [2, 5, 6], coordinateDiff: {i: 1, j: 0}});
directionMap.set('right', {types: [1, 3, 5], coordinateDiff: {i: 0, j: 1}});
directionMap.set('left', {types: [1, 4, 6], coordinateDiff: {i: 0, j: -1}});
const directionFromTo = new Map([
    [1, ['left', 'right']],
    [2, ['up', 'down']],
    [3, ['left', 'down']],
    [4, ['right', 'down']],
    [5, ['left', 'up']],
    [6, ['right', 'up']]
]);
const map = new Map();
map.set(
    1,
    new Map([
        [3, 'left'],
        [4, 'right'],
        [5, 'left'],
        [6, 'right']
    ])
);
map.set(
    2,
    new Map([
        [3, 'down'],
        [4, 'down'],
        [5, 'up'],
        [6, 'up']
    ])
);
map.set(
    3,
    new Map([
        [1, 'right'],
        [2, 'up'],
        [4, 'right'],
        [5, 'up'],
        [6, 'up']
    ])
);
map.set(
    4,
    new Map([
        [1, 'left'],
        [2, 'up'],
        [3, 'left'],
        [5, 'up'],
        [6, 'up']
    ])
);
map.set(
    5,
    new Map([
        [1, 'right'],
        [2, 'down'],
        [3, 'down'],
        [4, 'down'],
        [6, 'right']
    ])
);
map.set(
    6,
    new Map([
        [1, 'left'],
        [2, 'down'],
        [3, 'down'],
        [4, 'down'],
        [5, 'left']
    ])
);

/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var hasValidPath = function(grid) {
    if (
        !Array.isArray(grid) ||
        grid.length === 0 ||
        !Array.isArray(grid[0]) ||
        grid[0].length === 0 ||
        grid[0][0] === 5
    )
        return false;
    const m = grid.length;
    const n = grid[0].length;
    let i = 0;
    let j = 0;
    let from = getPrevDirectionForStart(grid[i][j]);
    while (true) {
        if (i === m - 1 && j === n - 1) return true;
        const nextDir = directionFromTo
            .get(grid[i][j])
            .filter(d => d !== from)[0];
        console.log(nextDir);
        const newI = i + directionMap.get(nextDir).coordinateDiff.i;
        const newJ = j + directionMap.get(nextDir).coordinateDiff.j;
        if (0 <= newI && newI < m && 0 <= newJ && newJ < n) {
            const newFrom = map.get(grid[i][j]).get(grid[newI][newJ]);
            from = newFrom;
            i = newI;
            j = newJ;
            continue;
        } else {
            return false;
        }
    }
};

function getPrevDirectionForStart(x) {
    switch (x) {
        case 2:
        case 6:
            return 'up';
        case 1:
        case 3:
            return 'left';
        default:
            throw new Error('Start error');
    }
}

const grid = [
    [2, 4, 3],
    [6, 5, 2]
];
console.log(hasValidPath(grid));