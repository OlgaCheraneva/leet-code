// Given n orders, each order consist in pickup and delivery services.
// Count all valid pickup/delivery possible sequences such that delivery(i) is always after of pickup(i).
// Since the answer may be too large, return it modulo 10^9 + 7.

let count = 0;
let sequence = '';

/**
 * @param {number} n
 * @return {number}
 */
var countOrders = function(n) {
    const availableP = [];
    for (let i = 1; i <= n; i++) {
        availableP.push(i);
    }
    recursion(0, availableP, [], n);

    return count;
};

function recursion(currentLength, availableP, queueD, n) {
    if (currentLength === 2 * n) {
        count++;
        console.log(sequence);
        sequence = '';
    }
    availableP.forEach((p) => {
        sequence += 'P' + p + ' ';
        const newP = availableP.filter((np) => np !== p);
        queueD.push(p);
        recursion(currentLength + 1, newP, queueD, n);
    });
    if (queueD.length !== 0) {
        const d = queueD.shift();
        sequence += 'D' + d + ' ';
        recursion(currentLength + 1, availableP, queueD, n);
    }
}

console.log(countOrders(2));
