// Given an array of integers arr, a lucky integer is an integer which has a frequency in the array equal to its value.
// Return a lucky integer in the array. If there are multiple lucky integers return the largest of them. If there is no lucky integer return -1.

/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    const valueCount = new Map();
    arr.forEach((v) => {
        if (valueCount.has(v)) {
            valueCount.set(v, valueCount.get(v) + 1);
        } else {
            valueCount.set(v, 1);
        }
    });
    let luckyInteger = -1;
    for (let [key, value] of valueCount.entries()) {
        if (value === key && value > luckyInteger) luckyInteger = value;
    }
    // valueCount.forEach((value, key) => {
    //     if (value === key && value > luckyInteger) luckyInteger = value;
    // });

    return luckyInteger;
};

findLucky([1, 1, 2, 2, 3, 4, 4]);
