var isValidBST = function(root) {
    if(root == null) return true; 
    function isValidBSTHelper(node, min, max) {
        if(node == null) return true; 
        if( (min != null & node.val <= min) || (max != null & node.val >= max) ) return false; 
        return isValidBSTHelper(node.left, min, node.val) && isValidBSTHelper(node.right, node.val, max); 
    }
    
    return isValidBSTHelper(root, null, null) 
};
