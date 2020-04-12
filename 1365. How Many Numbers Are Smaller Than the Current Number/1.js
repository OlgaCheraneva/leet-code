// Too long
// const getDevisors = function(num) {
//     const res = [];

//     for (let i = 1; i <= num; i++) {
//         if (num % i === 0) {
//             res.push(i);
//         }
//     }

//     return res;
// };

// /**
//  * @param {number} num
//  * @return {number[]}
//  */
// var closestDivisors = function(num) {
//     const divisors = getDevisors(num + 1);
//     const length = divisors.length;
//     if (length % 2 === 1) {
//         return [
//             divisors[Math.floor(length / 2)],
//             divisors[Math.floor(length / 2)]
//         ];
//     }
//     const divisors2 = getDevisors(num + 2);
//     const length2 = divisors2.length;
//     if (length2 % 2 === 1) {
//         return [
//             divisors2[Math.floor(length2 / 2)],
//             divisors2[Math.floor(length2 / 2)]
//         ];
//     }

//     let diff = Math.abs(divisors[length / 2] - divisors[length / 2 - 1]);
//     let diff2 = Math.abs(divisors2[length2 / 2] - divisors2[length2 / 2 - 1]);
//     if (diff < diff2) {
//         return [divisors[length / 2], divisors[length / 2 - 1]];
//     }
//     return [divisors2[length2 / 2], divisors2[length2 / 2 - 1]];
// };

const getResult = function(num) {
    for (let i = Math.ceil(Math.sqrt(num)); i >= 1; i--) {
        if (num % i === 0) {
            return {
                factors: [i, num / i],
                diff: Math.abs(i - num / i)
            };
        }
    }
};

/**
 * @param {number} num
 * @return {number[]}
 */
var closestDivisors = function(num) {
    const res1 = getResult(num + 1);
    const res2 = getResult(num + 2);
    return res1.diff < res2.diff ? res1.factors : res2.factors;
};
// console.log(getDevisors(1000).join(' '));
const start = Date.now();
console.log(closestDivisors(8));
console.log(Date.now() - start);
