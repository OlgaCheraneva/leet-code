// Given an array of integers target. From a starting array, A consisting of all 1's, you may perform the following procedure :

// let x be the sum of all elements currently in your array.
// choose index i, such that 0 <= i < target.size and set the value of A at index i to x.
// You may repeat this procedure as many times as needed.
// Return True if it is possible to construct the target array from A otherwise return False.

// 52 ms
// 39.1 MB
/**
 * @param {number[]} target
 * @return {boolean}
 */
var isPossible = function(target) {
    let sum = target.reduce((acc, el) => acc + el, 0);
    let maxElementId = getMaxElementId(target);
    while (sum > 1 && target[maxElementId] > sum / 2) {
        sum -= target[maxElementId];
        if (sum === 1) return true;
        if (sum < 1) return false;
        target[maxElementId] %= sum;
        sum += target[maxElementId];
        maxElementId = getMaxElementId(target);
    }

    return sum === target.length;
};

function getMaxElementId(array) {
    let maxElementId = 0;
    for (let i = 1; i < array.length; i++) {
        if (array[maxElementId] < array[i]) {
            maxElementId = i;
        }
    }

    return maxElementId;
}

const target = [9, 3, 5];
console.log(isPossible(target));
