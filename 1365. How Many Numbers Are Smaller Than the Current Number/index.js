/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    const res = [];
    const length = nums.length;
    for (let i = 0; i < length; i++) {
        let count = 0;
        for (let j = 0; j < length; j++) {
            if (nums[j] < nums[i]) count++;
        }
        res.push(count);
    }

    return res;
    // const length = nums.length;
    // const sorted = [...nums].sort((a, b) => b - a);
    // const count = new Map();
    // const smaller = new Map();
    // nums.forEach((n) => {
    //     if (count.has(n)) {
    //         count.set(n, count.get(n) + 1);
    //     } else {
    //         count.set(n, 1);
    //     }
    // });
    // sorted.forEach((n, ind) => {
    //     if (!smaller.has(n)) {
    //         smaller.set(n, length - count.get(n) - ind);
    //     }
    // });
    // return nums.map((n) => smaller.get(n));
};

const nums = [6, 5, 4, 8];
console.log(smallerNumbersThanCurrent(nums)); // [2,1,0,3]
