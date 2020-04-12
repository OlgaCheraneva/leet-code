/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function (groupSizes) {
    const groups = [];
    const hash = [];

    for (let i = 0; i < groupSizes.length; i++) {
        const size = groupSizes[i];
        if (hash[size] == undefined) hash[size] = [];
        hash[size].push(i);

        if (hash[size].length == size) {
            groups.push(hash[size].slice());
            hash[size] = [];
        }
    }

    return groups;
};
