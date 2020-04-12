// Given an array of integers arr, you are initially positioned at the first index of the array.

// In one step you can jump from index i to index:

// i + 1 where: i + 1 < n.
// i - 1 where: i - 1 >= 0.
// j where: arr[i] == arr[j] and i != j.
// Return the minimum number of steps to reach the last index of the array.

// Notice that you can not jump outside of the array at any time.

// Example 1:
// Input: arr = [100,-23,-23,404,100,23,23,23,3,404]
// Output: 3
// Explanation: You need three jumps from index 0 --> 4 --> 3 --> 9. Note that index 9 is the last index of the array.

// Example 2:
// Input: arr = [7]
// Output: 0
// Explanation: Start index is the last index. You don't need to jump.

/**
 * @param {number[]} arr
 * @return {number}
 */
var minJumps = function (arr) {
    if (arr.length < 2) return 0;

    const n = arr.length;
    const valueIndexes = arr.reduceRight((map, el, i) => {
        if (!map.has(el)) {
            map.set(el, []);
        }
        map.get(el).push(i);
        return map;
    }, new Map());
    let stepsCount = 0;
    const queue = [0];
    const seen = new Set([0]);
    while (queue.length) {
        const length = queue.length;
        for (let s = 0; s < length; s++) {
            const i = queue.shift();
            if (i === n - 1) return stepsCount;
            if (i === n - 2) return stepsCount + 1;
            const next = [...valueIndexes.get(arr[i]), i - 1, i + 1];
            for (let k = 0; k < next.length; k++) {
                const j = next[k];
                if (j >= 0 && j < n && !seen.has(j)) {
                    if (j === n - 1) return stepsCount + 1;
                    queue.push(j);
                    seen.add(j);
                }
            }
        }
        stepsCount++;
    }
};

console.log(minJumps([100, -23, -23, 404, 100, 23, 23, 23, 3, 404])); // 3
console.log(minJumps([7, 6, 9, 6, 9, 6, 9, 7])); // 1
console.log(minJumps([1])); // 0
