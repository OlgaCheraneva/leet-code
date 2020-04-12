// Given two integer arrays arr1 and arr2, and the integer d, return the distance value between the two arrays.
// The distance value is defined as the number of elements arr1[i] such that there is not any element arr2[j] where |arr1[i]-arr2[j]| <= d.

// 18 min
// 60 ms

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function(arr1, arr2, d) {
    let count = 0;
    for (let i = 0; i < arr1.length; i++) {
        let flag = false;
        for (let j = 0; j < arr2.length; j++) {
            if (Math.abs(arr1[i] - arr2[j]) <= d) {
                flag = true;
                break;
            }
        }
        if (!flag) {
            count++;
        }
    }

    return count;
};

const arr1 = [1, 4, 2, 3],
    arr2 = [-4, -3, 6, 10, 20, 30],
    d = 3;
console.log(findTheDistanceValue(arr1, arr2, d)); // 2
