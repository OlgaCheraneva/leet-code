// Given a binary search tree, return a balanced binary search tree with the same node values.
// A binary search tree is balanced if and only if the depth of the two subtrees of every node never differ by more than 1.
// If there is more than one answer, return any of them.

// Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const sortedArrayToBST = function(arr, start, end) {
    if (start > end) return null;

    const middle = Math.floor((start + end) / 2);
    const root = new TreeNode(arr[middle]);
    root.left = sortedArrayToBST(arr, start, middle - 1);
    root.right = sortedArrayToBST(arr, middle + 1, end);

    return root;
};

const bstToSortedArray = function(root, result = []) {
    if (root === null) return;

    bstToSortedArray(root.left, result);
    result.push(root.val);
    bstToSortedArray(root.right, result);

    return result;
};

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const balanceBST = function(root) {
    const sortedArray = bstToSortedArray(root);

    return sortedArrayToBST(sortedArray, 0, sortedArray.length - 1);
};

const root = new TreeNode(1);
root.left = null;
root.right = new TreeNode(2);
root.right.left = null;
root.right.right = new TreeNode(3);
root.right.right.left = null;
root.right.right.right = new TreeNode(4);
root.right.right.right.left = null;
root.right.right.right.right = null;
console.log(JSON.stringify(balanceBST(root)));
