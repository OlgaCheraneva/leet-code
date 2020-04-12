// There are n people whose IDs go from 0 to n - 1 and each person belongs exactly to one group. Given the array groupSizes of length n telling the group size each person belongs to, return the groups there are and the people's IDs each group includes.

// You can return any solution in any order and the same applies for IDs. Also, it is guaranteed that there exists at least one solution.

// Example 1:
// Input: groupSizes = [3,3,3,3,3,1,3]
// Output: [[5],[0,1,2],[3,4,6]]
// Explanation:
// Other possible solutions are [[2,1,6],[5],[0,4,3]] and [[5],[0,6,2],[4,3,1]].

// Constraints:
// groupSizes.length == n
// 1 <= n <= 500
// 1 <= groupSizes[i] <= n

/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function (groupSizes) {
    const n = groupSizes.length;
    const groups = [];
    const seen = [];
    for (let i = 0; i < n; i++) {
        if (seen.includes(i)) continue;
        const size = groupSizes[i];
        const group = [];
        let rest = size;
        for (let j = i; j < n && rest > 0; j++) {
            if (groupSizes[j] === size && !seen.includes(j)) {
                group.push(j);
                seen.push(j);
                rest--;
            }
        }
        groups.push(group);
    }

    return groups;
};

console.log(JSON.stringify(groupThePeople([3, 3, 3, 3, 3, 1, 3])));
