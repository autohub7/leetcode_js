var invertTree = function (root) {
    if (root !== null) {
        var child = new TreeNode(root.val);
        child.left = invertTree(root.right);
        child.right = invertTree(root.left);
        return child;
    }
    return null;
};