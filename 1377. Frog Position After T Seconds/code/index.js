// Given an undirected tree consisting of n vertices numbered from 1 to n. A frog starts jumping from the vertex 1. In one second, the frog jumps from its current vertex to another unvisited vertex if they are directly connected. The frog can not jump back to a visited vertex. In case the frog can jump to several vertices it jumps randomly to one of them with the same probability, otherwise, when the frog can not jump to any unvisited vertex it jumps forever on the same vertex.
// The edges of the undirected tree are given in the array edges, where edges[i] = [fromi, toi] means that exists an edge connecting directly the vertices fromi and toi.
// Return the probability that after t seconds the frog is on the vertex target.

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} t
 * @param {number} target
 * @return {number}
 */
var frogPosition = function(n, edges, t, target) {
    if (n === 1) return 1;

    const connected = new Map();
    edges.forEach(([from, to]) => {
        if (connected.has(from)) {
            connected.set(from, connected.get(from).concat(to));
        } else {
            connected.set(from, [to]);
        }
        if (connected.has(to)) {
            connected.set(to, connected.get(to).concat(from));
        } else {
            connected.set(to, [from]);
        }
    });

    const visited = [];

    const dfs = (node, t) => {
        // If it's a dead end or no time left
        if ((node !== 1 && connected.get(node).length === 1) || t === 0) {
            return node === target ? 1 : 0;
        }
        visited.push(node);
        let result = 0;
        connected
            .get(node)
            .filter((node) => !visited.includes(node))
            .forEach((next) => {
                result += dfs(next, t - 1);
            });
        return result / (connected.get(node).length - Number(node !== 1));
    };

    return dfs(1, t);
};

// const n = 8,
//     edges = [
//         [2, 1],
//         [3, 2],
//         [4, 1],
//         [5, 1],
//         [6, 4],
//         [7, 1],
//         [8, 7]
//     ],
//     t = 7,
//     target = 7;
const n = 9,
    edges = [
        [2, 1],
        [3, 1],
        [4, 2],
        [5, 3],
        [6, 5],
        [7, 4],
        [8, 7],
        [9, 7]
    ],
    t = 1,
    target = 8;
console.log(frogPosition(n, edges, t, target));
console.log(Math.abs(frogPosition(n, edges, t, target) - 0) < Number.EPSILON);

module.exports = frogPosition;
