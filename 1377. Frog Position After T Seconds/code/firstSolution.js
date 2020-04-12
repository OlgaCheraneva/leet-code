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
    if (Array.isArray(edges) && edges.length === 0) {
        if (t === 1 && target === 1) {
            return 1;
        } else {
            return 0;
        }
    }
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
    const stack = [{depth: 0, node: 1, prob: 1}];

    while (stack.length > 0) {
        const {node, depth, prob} = stack.pop();
        visited.push(node);
        const unvisitedConnected = connected
            .get(node)
            .filter((node) => !visited.includes(node));
        if (node === target) {
            if (unvisitedConnected.length === 0 || depth === t) {
                return prob;
            } else {
                return 0;
            }
        }
        if (depth === t) {
            continue;
        }
        unvisitedConnected.forEach((currentNode) => {
            stack.push({
                depth: depth + 1,
                node: currentNode,
                prob: prob / unvisitedConnected.length
            });
        });
    }

    return 0;
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
