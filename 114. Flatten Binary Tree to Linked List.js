var flatten = function(root) {
  flattenHelper(root, null); 
}

var flattenHelper = function(root, pre) {
    if(root === null) {
        return pre; 
    }

    pre = flattenHelper(root.right, pre); 
    pre = flattenHelper(root.left, pre); 
    root.right = pre; 
    root.left = null; 
    pre = root; 
    return pre;
};
