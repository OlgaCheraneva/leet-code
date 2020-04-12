/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var hasValidPath = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const dir2 = [0, 1, 0, -1, 0]; // r, d, l, u
    // trans[block][dir] = [valid blocks, next dir]
    const trans = [
        [[[0, 2, 4], 0], null, [[0, 3, 5], 2], null],
        [null, [[1, 4, 5], 1], null, [[1, 2, 3], 3]],
        [[[1, 4, 5], 1], null, null, [[0, 3, 5], 2]],
        [null, null, [[1, 4, 5], 1], [[0, 2, 4], 0]],
        [[[1, 2, 3], 3], [[0, 3, 5], 2], null, null],
        [null, [[0, 2, 4], 0], [[1, 2, 3], 3], null]
    ];

    const trial = (iniDir) => {
        let dir = iniDir;
        let r = 0,
            c = 0;
        while (r !== m - 1 || c !== n - 1) {
            const next = trans[grid[r][c] - 1][dir];
            // console.log({r,c, dir, blk: grid[r][c], next});
            if (!next) {
                return false;
            }
            const nextDir = next[1];
            const dr = dir2[nextDir];
            const dc = dir2[nextDir + 1];
            const nr = r + dr;
            const nc = c + dc;
            // console.log({nr, nc});
            if (
                nr < 0 ||
                nr >= m ||
                nc < 0 ||
                nc >= n ||
                next[0].indexOf(grid[nr][nc] - 1) === -1
            ) {
                return false;
            }
            r = nr;
            c = nc;
            dir = nextDir;
            if (r === 0 && c === 0) {
                // cycle
                return false;
            }
        }
        return r === m - 1 && c === n - 1;
    };
    return trial(0) || trial(1) || trial(2) || trial(3);
};
