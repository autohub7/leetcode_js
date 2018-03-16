function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

// BFS
var mergeTrees = function(t1, t2) {
	if(t1 == null) return t2; 
	if(t2 == null) return t1; 
		t1.val += t2.val; 
  		mergeTrees(t1.left, t2.left)  
  		mergeTrees(t1.right, t2.right)  
  	
  	return t1; 
};

/* DFS
var mergeTrees = function(t1, t2) {
	if(t1 == null) return t2; 
	var stack = []; 
  	stack.push([t1, t2]); 
  	while(stack.length>0) {
  		t = stack.pop(); 
  		if(t[0] == null || t[1] == null) continue; 
  		t[0].val += t[1].val; 
  		if(t[0].left == null) t[0].left = t[1].left; 
  		else stack.push([t[0].left, t[1].left]); 
  		if(t[0].right == null) t[0].right = t[1].right; 
  		else stack.push([t[0].right, t[1].right]); 	
  	}
  	return t1; 
};
*/
