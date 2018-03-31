/*
Single Value Tree
https://crazycoderzz.wordpress.com/count-the-number-of-unival-subtrees-in-a-binary-tree/
*/

function TreeNode(data) {
    this.data = data;
    this.left = this.right = null;
}

function findSingleValueTrees(node) {
    //console.log(node)
    var counter = 0; 
    
    function fsvHelper(node) {
        if(!node) return true;

        l=fsvHelper(node.left);
        r=fsvHelper(node.right);
        
        if(l&&r) {
            nl = node.left; 
            nr = node.right; 
            
            if(!nl && !nr)
            {
                counter++; 
                return true;
            }
            // left and right child exists and their data is also same as root's data
            else if(nl && nr && nl.val==node.val && nr.val==node.val)
            {
                
                counter++
                return true;
            }
            // only left child exists and its data is same as root's data
            else if(nl && nl.val==node.val)
            {
                counter++
                return true;
            }
            // only right child exists and its data is same as root's data
            else if(nr && nr.val==node.val)
            {
                counter++
                return true;
            }
            
        }
        return false 
    }
    
    fsvHelper(node); 
    return counter; 
}



var tn = new TreeNode(1); 
tn.left = new TreeNode(2); 
tn.left.left = new TreeNode(3); 
tn.left.right = new TreeNode(4); 
tn.right = new TreeNode(5); 