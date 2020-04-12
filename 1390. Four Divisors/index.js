// Given an integer array nums, return the sum of divisors of the integers in that array that have exactly four divisors.
// If there is no such integer in the array, return 0.

// 20 min

const getDevisors = function(n) {
    if (n === 0) return [];
    if (n === 1) return [1];

    const devisors = [1, n];
    const sqrt = Math.sqrt(n);
    for (let i = 2; i <= sqrt; i++) {
        if (n % i === 0) {
            devisors.push(i);
            if (n / i !== i) {
                devisors.push(n / i);
            }
        }
    }

    return devisors;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var sumFourDivisors = function(nums) {
    return nums.reduce((devisorsSum, n) => {
        const devisors = getDevisors(n);
        if (devisors.length === 4) {
            devisors.forEach(devisor => {
                devisorsSum += devisor;
            });
        }
        return devisorsSum;
    }, 0);
};

const nums = [21, 4, 7];
console.log(sumFourDivisors(nums)); // 32
