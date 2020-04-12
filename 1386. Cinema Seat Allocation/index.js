// 104 ms
// 43.7 MB
/**
 * @param {number} n
 * @param {number[][]} reservedSeats
 * @return {number}
 */
const maxNumberOfFamilies = function(n, reservedSeats) {
    const reservedRows = new Map();
    reservedSeats.forEach(([row, col]) => {
        reservedRows.set(row, (reservedRows.get(row) || 0) | (1 << (col - 1)));
    });
    const familiesFit = row => {
        if ((row & 0b0111111110) === 0) return 2;
        if (
            (row & 0b0111100000) === 0 ||
            (row & 0b0000011110) === 0 ||
            (row & 0b0001111000) === 0
        )
            return 1;
        return 0;
    };

    let result = 2 * n;
    for (const row of reservedRows.values()) {
        result -= 2 - familiesFit(row);
    }
    return result;
};

const n = 2;
const reservedSeats = [
    [2, 1],
    [1, 8],
    [2, 6]
];
console.log(maxNumberOfFamilies(n, reservedSeats));
