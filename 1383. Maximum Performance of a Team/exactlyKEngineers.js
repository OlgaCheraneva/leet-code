// There are n engineers numbered from 1 to n and two arrays: speed and efficiency, where speed[i] and efficiency[i] represent the speed and efficiency for the i-th engineer respectively. Return the maximum performance of a team composed of at most k engineers, since the answer can be a huge number, return this modulo 10^9 + 7.
// The performance of a team is the sum of their engineers' speeds multiplied by the minimum efficiency among their engineers.

// (This problem is very similar to the problem 857 Minimum Cost to Hire K Workers https://leetcode.com/problems/minimum-cost-to-hire-k-workers/. Employ priority queue to get the O(NlogN) solution. You can just check it.)
// Each engineer is characterized by his/her speed and efficiency.
// Step1. We sort engineers by their efficiency in decreasing order. O(NlogN)
// Step2. With the sorted array, for index i = 0, 1, ..., k-1, we push the speed into the min_heap and calculate the performance with first (i+1) engineers. We only need to record the max performance.
// Step3. With the sorted array, for index i = k, k+1, ..., n-1, if the speed of the current engineer is greater than the top of the min_heap, we pop and push with it. In this way, we can calculate the max performance with respect to the i-th largest efficiency since we have the engineers with the k largest speeds in the min_heap. O(NlogK)

/**
 * @param {number} n
 * @param {number[]} speed
 * @param {number[]} efficiency
 * @param {number} k
 * @return {number}
 */
var maxPerformance = function(n, speed, efficiency, k) {
    const workers = [];
    for (let i = 0; i < n; i++) {
        workers.push({number: i, speed: speed[i], efficiency: efficiency[i]});
    }
    workers.sort(
        (firstWorker, secondWorker) =>
            secondWorker.efficiency - firstWorker.efficiency
    );
    const speeds = [];
    let performance = 0;
    let minEfficiency = workers[k - 1].efficiency;
    let speedSum = 0;
    for (let i = 0; i < k; i++) {
        speedSum += workers[i].speed;
        speeds.push(workers[i].speed);
        speeds.sort((a, b) => b - a);
    }
    performance = speedSum * minEfficiency;
    for (let i = k; i < n; i++) {
        if (workers[i].speed <= speeds[k - 1]) {
            continue;
        }
        const newPerformance =
            (speedSum - speeds[k - 1] + workers[i].speed) *
            workers[i].efficiency;
        if (newPerformance > performance) {
            speeds.pop();
            speeds.push(workers[i].speed);
            speeds.sort((a, b) => b - a);
            performance = newPerformance;
            minEfficiency = workers[i].efficiency;
            speedSum = speedSum - speeds[k - 1] + workers[i].speed;
        }
    }

    return performance;
};

// const n = 6,
//     speed = [2, 10, 3, 1, 5, 8],
//     efficiency = [5, 4, 3, 9, 7, 2],
//     k = 2;
// const n = 6,
//     speed = [2, 10, 3, 1, 5, 8],
//     efficiency = [5, 4, 3, 9, 7, 2],
//     k = 3;
// console.log(maxPerformance(n, speed, efficiency, k) === 60);
// console.log(maxPerformance(n, speed, efficiency, k) === 68);
