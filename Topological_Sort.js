var Graph = require('../DS/graph.js');
var Dictionary = require('../dictionary.js');

class Graph {
    constructor() {
        this.vertices = []; 
        this.adjList = new Dictionary(); 
    }

    addVertex(v) {
        this.vertices.push(v); 
        this.adjList.set(v, []); 
    }

    addEdge(v, w){ 
        this.adjList.get(v).push(w); 
        //this.adjList.get(w).push(v); // Comment out this line if you want a directed graph 
    }
}

class Dictionary {
    constructor() {
        this.items = {}; 
    }
    set(key, value) {
        this.items[key] = value;
    }
    has(key) {
        return key in this.items; 
    }
    delete(key) {
        if (this.has(key)) {
            delete this.items[key]; 
            return true; 
        }
        return false; 
    }
    get(key) {
        return this.has(key)? this.items[key] : undefined; 
    }
}

class tpSort {
	constructor(v) {
		this.v = v;
		this.len = v.vertices.length; 
	}

	topoSort() {
		var visited = []; 
		var stack = []; 
	    // Mark all the vertices as not visited
	    
		for(var i=0;i<this.len;i++) visited[i] = false; 
        // Call the recursive helper function to store
        // Topological Sort starting from all vertices
        // one by one
  
        for (var i = 0; i < this.len; i++) {
        	if (visited[i] == false)
            this.topologicalSortUtil(this.v.vertices[i], visited, stack);
    	}
    	while(stack.length>0) {
    		console.log(stack.pop())	
    	}
	}

    topologicalSortUtil(v, visited, stack)
    {
        // Mark the current node as visited.
        visited[v] = true;
 		var it = this.v.adjList.items[v]

         // Recur for all the vertices adjacent to this
        // vertex
        for(var i=0; i<it.length;i++) {
        	if(!visited[it[i]])
        	this.topologicalSortUtil(it[i], visited, stack)
        }
        // Push current vertex to stack which stores result
        stack.push(v);
    }
}

var g = new Graph(); 
var myVertices = [0,1,2,3,4,5]; //{7} 
for (var i=0; i<myVertices.length; i++){ //{8} 
	g.addVertex(myVertices[i]); 
} 
g.addEdge(5, 2);
g.addEdge(5, 0);
g.addEdge(4, 0);
g.addEdge(4, 1);
g.addEdge(2, 3);
g.addEdge(3, 1);

var heySort = new tpSort(g); 
heySort.topoSort(); 


/*
https://www.geeksforgeeks.org/topological-sorting/
Time Complexity: The above algorithm is simply DFS with an extra stack. So time complexity is same as DFS which is O(V+E).
*/
