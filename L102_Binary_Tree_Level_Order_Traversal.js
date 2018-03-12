/*
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
*/
var levelOrder = function(root) {
    var result = [];
    
    if(root === null){
        return result;
    }
    
    var queue = [];
    var temp = [];
    var curLvlCnt = 1;
    var nextLvlCnt = 0;
    
    queue.push(root);
    
    while(queue.length !== 0){
        var p = queue.shift();
        temp.push(p.val);
        curLvlCnt--;
        
        if(p.left){
            queue.push(p.left);
            nextLvlCnt++;
        }
        if(p.right){
            queue.push(p.right);
            nextLvlCnt++;
        }
        
        if(curLvlCnt === 0){
            result.push(temp);
            curLvlCnt = nextLvlCnt;
            nextLvlCnt = 0;
            temp = [];
        }
    }
    
    return result;
};

/*
var node = new TreeNode(3); 
node.left = new TreeNode(9);
node.right = new TreeNode(20); 
node.right.left =  new TreeNode(15); 
node.right.right = new TreeNode(10); 
console.log(levelOrder(node)); 
*/