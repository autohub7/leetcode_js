function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var binaryTreePaths = function(root) {
	function helper(node, curr, res) {
		if(node === null) {
		 return;
		}

		curr.push(node.val);
		if(node.left === null && node.right === null) {
			res.push(curr.join('->'));
		} else {
			helper(node.left, curr, res);
			helper(node.right, curr, res);
		}
		curr.pop();
	}
	var res = []; 
	helper(root, [], res); 
	return res
};