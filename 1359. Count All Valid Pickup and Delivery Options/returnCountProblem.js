// Given n orders, each order consist in pickup and delivery services.
// Count all valid pickup/delivery possible sequences such that delivery(i) is always after of pickup(i).
// Since the answer may be too large, return it modulo 10^9 + 7.

let count = 0;

/**
 * @param {number} n
 * @return {number}
 */
var countOrders = function(n) {
    const availableP = [];
    for (let i = 1; i <= n; i++) {
        availableP.push(i);
    }
    return recursion(0, availableP, [], n, 0);
};

function recursion(currentLength, availableP, queueD, n, count) {
    if (currentLength === 2 * n) {
        return count++;
    }

    availableP.forEach((p) => {
        const newP = availableP.filter((np) => np !== p);
        queueD.push(p);
        count = recursion(currentLength + 1, newP, queueD, n, count);
    });
    if (queueD.length !== 0) {
        queueD.shift();
        count = recursion(currentLength + 1, availableP, queueD, n, count);
    }

    if (availableP.length === 0 && queueD.length === 0) return count;
}

console.log(countOrders(2));
