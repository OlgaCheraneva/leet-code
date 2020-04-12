// There are n people, each person has a unique id between 0 and n-1. Given the arrays watchedVideos and friends, where watchedVideos[i] and friends[i] contain the list of watched videos and the list of friends respectively for the person with id = i.
// Level 1 of videos are all watched videos by your friends, level 2 of videos are all watched videos by the friends of your friends and so on. In general, the level k of videos are all watched videos by people with the shortest path exactly equal to k with you. Given your id and the level of videos, return the list of videos ordered by their frequencies (increasing). For videos with the same frequency order them alphabetically from least to greatest.

// Example 1:

// Input: watchedVideos = [["A","B"],["C"],["B","C"],["D"]], friends = [[1,2],[0,3],[0,3],[1,2]], id = 0, level = 1
// Output: ["B","C"]
// Explanation:
// You have id = 0 (green color in the figure) and your friends are (yellow color in the figure):
// Person with id = 1 -> watchedVideos = ["C"]
// Person with id = 2 -> watchedVideos = ["B","C"]
// The frequencies of watchedVideos by your friends are:
// B -> 1
// C -> 2

// Constraints:

// n == watchedVideos.length == friends.length
// 2 <= n <= 100
// 1 <= watchedVideos[i].length <= 100
// 1 <= watchedVideos[i][j].length <= 8
// 0 <= friends[i].length < n
// 0 <= friends[i][j] < n
// 0 <= id < n
// 1 <= level < n
// if friends[i] contains j, then friends[j] contains i

/**
 * @param {string[][]} watchedVideos
 * @param {number[][]} friends
 * @param {number} id
 * @param {number} level
 * @return {string[]}
 */
var watchedVideosByFriends = function (watchedVideos, friends, id, level) {
    const viewCountMap = new Map();

    const stack = [{id, depth: 0}];
    const seen = [];
    while (stack.length) {
        const {id, depth} = stack.pop();
        seen.push(id);
        if (depth === level) {
            watchedVideos[id].forEach((v) => {
                if (viewCountMap.has(v)) {
                    viewCountMap.set(v, viewCountMap.get(v) + 1);
                } else {
                    viewCountMap.set(v, 1);
                }
            });
            continue;
        }
        friends[id].forEach((id) => {
            if (!seen.includes(id)) {
                stack.push({id, depth: depth + 1});
            }
        });
    }
    const result = [...viewCountMap.entries()]
        .sort(([v1, c1], [v2, c2]) => {
            if (c1 === c2) {
                return v1.localeCompare(v2);
            }

            return c1 - c2;
        })
        .map(([video]) => video);

    return result;
};

const watchedVideos = [['A', 'B'], ['C', 'A'], ['B', 'C', 'A'], ['D']];
const friends = [
    [1, 2],
    [0, 3],
    [0, 3],
    [1, 2],
];
const id = 0;
const level = 1;
console.log(watchedVideosByFriends(watchedVideos, friends, id, level));
