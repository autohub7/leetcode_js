var postorderTraversal = function(root) {
    var result = []; 
    var stack = []; 
    p = root;
    while(stack.length>0 || p !== null) {
        if(p != null) {
            stack.push(p);
            result.unshift(p.val);  // Reverse the process of preorder
            p = p.right;             
        } else {
            node = stack.pop();
            p = node.left;           
        }
    }
    
    return result
};

// https://leetcode.com/problems/binary-tree-postorder-traversal/discuss/45551/Preorder-Inorder-and-Postorder-Iteratively-Summarization