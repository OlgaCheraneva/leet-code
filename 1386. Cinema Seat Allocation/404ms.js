// 404 ms
// 79 MB
/**
 * @param {number} n
 * @param {number[][]} reservedSeats
 * @return {number}
 */
var maxNumberOfFamilies = function(n, reservedSeats) {
    reservedSeats.sort(([r1, c1], [r2, c2]) => {
        if (r1 === r2) {
            return c1 - c2;
        }
        return r1 - r2;
    });
    const reservedCount = reservedSeats.length;
    // False means that the side is free
    let left = false;
    let center = false;
    let right = false;
    let previousRow = 1;
    let result = 2 * n;

    for (let i = 0; i < reservedCount; i++) {
        const [reservedRow, reservedCol] = reservedSeats[i];
        if (reservedRow !== previousRow) {
            if (!left && !right) {
                console.log('2 families for row ' + reservedRow);
            } else if (!left || !center || !right) {
                console.log('1 family for row ' + reservedRow);
                result--;
            } else {
                console.log('0 families for row ' + reservedRow);
                result -= 2;
            }
            left = false;
            center = false;
            right = false;
            previousRow = reservedRow;
        }
        if (2 <= reservedCol && reservedCol <= 5) {
            left = true;
        }
        if (4 <= reservedCol && reservedCol <= 7) {
            center = true;
        }
        if (6 <= reservedCol && reservedCol <= 9) {
            right = true;
        }
        if (i === reservedCount - 1) {
            if (!left && !right) {
                console.log('2 families for row ' + reservedRow);
            } else if (!left || !center || !right) {
                console.log('1 family for row ' + reservedRow);
                result--;
            } else {
                console.log('0 families for row ' + reservedRow);
                result -= 2;
            }
        }
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
