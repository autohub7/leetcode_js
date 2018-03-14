function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var serialize = function(root) {
    var result = [];
    serializer(root, result);
    
    return result.join(",");
};

var serializer = function(node, output) {
    if(node === null) {
        // mark null as *
        output.push("*");
        return;
    }
    
    output.push(node.val);
    serializer(node.left, output);
    serializer(node.right, output);
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    // ES6 Style
    class deserial {
        constructor(data) {
            this.data = data.split(",");
            this.index = 0; 
        }

        deserializer(data) {
            return this.deserializerHelper(this.data)
        }
        deserializerHelper(data) {
            if(data[this.index] === "*") {
                return null;
            }

            var node = new TreeNode(parseInt(data[this.index]));
            this.index++;
            node.left = this.deserializerHelper(data);
            this.index++;
            node.right = this.deserializerHelper(data);
            return node;
        }
    }
    var des = new deserial(data); 
    return des.deserializer(); 
};
