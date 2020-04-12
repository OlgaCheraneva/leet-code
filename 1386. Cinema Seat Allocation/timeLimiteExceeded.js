// A cinema has n rows of seats, numbered from 1 to n and there are ten seats in each row, labelled from 1 to 10 as shown in the figure above.
// Given the array reservedSeats containing the numbers of seats already reserved, for example, reservedSeats[i]=[3,8] means the seat located in row 3 and labelled with 8 is already reserved.
// Return the maximum number of four-person families you can allocate on the cinema seats. A four-person family occupies fours seats in one row, that are next to each other. Seats across an aisle (such as [3,3] and [3,4]) are not considered to be next to each other, however, It is permissible for the four-person family to be separated by an aisle, but in that case, exactly two people have to sit on each side of the aisle.

// Time Limit Exceeded
// 48 / 53 test cases passed
/**
 * @param {number} n
 * @param {number[][]} reservedSeats
 * @return {number}
 */
var maxNumberOfFamilies = function(n, reservedSeats) {
    const map = mapReservedSeats(reservedSeats);

    let result = 0;
    for (let row = 1; row <= n; row++) {
        const rowReserved = map.get(row);
        if (rowReserved === undefined) {
            result += 2;
            continue;
        }
        const left = isAvailable(rowReserved, 2, 5);
        const right = isAvailable(rowReserved, 6, 9);
        if (left && right) {
            result += 2;
            continue;
        }
        const center = isAvailable(rowReserved, 4, 7);
        if (left || center || right) result++;
    }

    return result;
};

function mapReservedSeats(reservedSeats) {
    const map = new Map();
    reservedSeats.forEach(([row, col]) => {
        if (map.has(row)) {
            map.get(row).push(col);
        } else {
            map.set(row, [col]);
        }
    });

    return map;
}

function isAvailable(row, start, end) {
    let flag = true;
    for (let i = start; i <= end; i++) {
        if (row.includes(i)) flag = false;
    }

    return flag;
}

const n = 4,
    reservedSeats = [
        [4, 3],
        [1, 4],
        [4, 6],
        [1, 7]
    ];
console.log(maxNumberOfFamilies(n, reservedSeats)); // 4
