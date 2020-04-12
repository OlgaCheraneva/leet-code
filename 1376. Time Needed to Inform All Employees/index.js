// A company has n employees with a unique ID for each employee from 0 to n - 1. The head of the company has is the one with headID.
// Each employee has one direct manager given in the manager array where manager[i] is the direct manager of the i-th employee,
// manager[headID] = -1. Also it's guaranteed that the subordination relationships have a tree structure.
// The head of the company wants to inform all the employees of the company of an urgent piece of news. He will inform his direct
// subordinates and they will inform their subordinates and so on until all employees know about the urgent news.
// The i-th employee needs informTime[i] minutes to inform all of his direct subordinates (i.e After informTime[i] minutes,
// all his direct subordinates can start spreading the news).
// Return the number of minutes needed to inform all the employees about the urgent news.

// Input: n = 15, headID = 0, manager = [-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6], informTime = [1,1,1,1,1,1,1,0,0,0,0,0,0,0,0]
// Output: 3
// Explanation: The first minute the head will inform employees 1 and 2.
// The second minute they will inform employees 3, 4, 5 and 6.
// The third minute they will inform the rest of employees.

const dfs = function(startNode, children, weights) {
    let time = 0;

    if (children[startNode]) {
        children[startNode].forEach((node) => {
            // Get the max time to reach the last child under the current node.
            time = Math.max(time, dfs(node, children, weights));
        });
    }

    //Return the time required for this employee to inform + the time for it's children to inform all under them
    return weights[startNode] + time;
};

/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
const numOfMinutes = function(n, headID, manager, informTime) {
    const children = [];
    manager.forEach((m, i) => {
        if (m === -1) return;
        if (children[m]) {
            children[m].push(i);
        } else {
            children[m] = [i];
        }
    });

    return dfs(headID, children, informTime);
};

const n = 15,
    headID = 0,
    manager = [-1, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6],
    informTime = [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0];
console.log(numOfMinutes(n, headID, manager, informTime));
