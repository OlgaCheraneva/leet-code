/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function (groupSizes) {
    const groupObjects = groupSizes.map((size, id) => ({size, id}));
    groupObjects.sort((a, b) => a.size - b.size);

    const n = groupSizes.length;
    const groups = [];
    for (let i = 0; i < n; i++) {
        const size = groupObjects[i].size;
        const group = [];
        for (let j = i; j < i + size; j++) {
            group.push(groupObjects[j].id);
        }
        i += size - 1;
        groups.push(group);
    }

    return groups;
};
