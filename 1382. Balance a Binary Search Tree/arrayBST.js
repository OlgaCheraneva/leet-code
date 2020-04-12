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

const BSTtoArray = function(root, result) {
    if (root === null) {
        result.push(root);
        return;
    }
    result.push(
        root.left === null ? null : root.left.val,
        root.right === null ? null : root.right.val
    );
    if (root.left !== null) BSTtoArray(root.left, result);
    if (root.right !== null) BSTtoArray(root.right, result);
};

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const balanceBST = function(root) {
    const sortedArray = root.filter(node => node !== null).sort();
    const balancedTreeRoot = sortedArrayToBST(
        sortedArray,
        0,
        sortedArray.length - 1
    );

    if (balancedTreeRoot === null) return [null];
    const result = [balancedTreeRoot.val];
    BSTtoArray(balancedTreeRoot, result);

    return result;
};

const root = [1, null, 2, null, 3, null, 4, null, null];
console.log(JSON.stringify(balanceBST(root)));
