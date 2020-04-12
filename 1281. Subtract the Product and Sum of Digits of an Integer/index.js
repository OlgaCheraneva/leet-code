// Given an integer number n, return the difference between the product of its digits and the sum of its digits.

/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
    if (n === 0) return 0;

    const digits = String(n)
        .split('')
        .map((d) => Number(d));
    let product = 1;
    let sum = 0;
    for (let i = 0; i < digits.length; i++) {
        product *= digits[i];
        sum += digits[i];
    }

    return product - sum;
};

console.log(subtractProductAndSum(234));
