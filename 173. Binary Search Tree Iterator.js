var BSTIterator = function(root) {
 	this.stack = []; 
 	var cur = root; 
 	while(cur != null) {
 		stack.push(cur); 
 		if(cur.left !== null) cur = cur.left; 
 		else break; 
 	}
};

/**
 * @this BSTIterator
 * @returns {boolean} - whether we have a next smallest number
 */
BSTIterator.prototype.hasNext = function() {
    return !(this.stack==0)
};

/**
 * @this BSTIterator
 * @returns {number} - the next smallest number
 */
BSTIterator.prototype.next = function() {
	var node = this.stack.pop(); 
	cur = node; 
	if(cur.right !== null) {
		cur = cur.right; 
		while(cur !== null) {
			this.stack.push(cur); 
			if(cur.left !== null) cur = cur.next; 
			else break; 
		}
	}
	return node.val; 
};