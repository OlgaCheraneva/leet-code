// Given a binary search tree, return a balanced binary search tree with the same node values.
// A binary search tree is balanced if and only if the depth of the two subtrees of every node never differ by more than 1.
// If there is more than one answer, return any of them.

// Best time solution. 156 ms, 54.1 MB

// Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const sortedArrayToBST = function(nodes, start, end) {
    if (start > end) return null;

    const middle = (start + end) >> 1;
    const root = nodes[middle];
    root.left = sortedArrayToBST(nodes, start, middle - 1);
    root.right = sortedArrayToBST(nodes, middle + 1, end);

    return root;
};

const bstToSortedArray = function(root, sortedNodes = []) {
    if (root === null) return;

    bstToSortedArray(root.left, sortedNodes);
    sortedNodes.push(root);
    bstToSortedArray(root.right, sortedNodes);

    return sortedNodes;
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
