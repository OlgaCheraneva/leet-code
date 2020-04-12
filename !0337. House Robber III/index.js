// The thief has found himself a new place for his thievery again. There is only one entrance to this area, called the "root."
// Besides the root, each house has one and only one parent house. After a tour, the smart thief realized that "all houses in
// this place forms a binary tree". It will automatically contact the police if two directly-linked houses were broken into on
// the same night.

// Determine the maximum amount of money the thief can rob tonight without alerting the police.

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

let rootIndex = 0;
function robRecursively(root, memory) {
    if (root === null) {
        return 0;
    }

    if (!memory.has(rootIndex))
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function(root) {
    return robRecursively(root, new Map());
};
