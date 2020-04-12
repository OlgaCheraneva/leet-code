const { assert } = require('chai');
const frogPosition = require('./index');

// mocha is a test runner
describe('Frog Position', () => {
    it('Returns the probability that after t seconds the frog is on the vertex target.', () => {
        const n = 7,
            edges = [
                [1, 2],
                [1, 3],
                [1, 7],
                [2, 4],
                [2, 6],
                [3, 5]
            ],
            t = 2,
            target = 4;
        const result = frogPosition(n, edges, t, target);
        assert(Math.abs(result - 0.16666666666666666) < Number.EPSILON);
    });
    it('Returns the probability that after t seconds the frog is on the vertex target.', () => {
        const n = 8,
            edges = [
                [2, 1],
                [3, 2],
                [4, 1],
                [5, 1],
                [6, 4],
                [7, 1],
                [8, 7]
            ],
            t = 7,
            target = 7;
        const result = frogPosition(n, edges, t, target);
        assert(result === 0);
    });
});
