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

class Graph {
	constructor() {
		this.vertices = []; 
		this.adjList = new Dictionary(); 
	}

	addVertex(v) {
		this.vertices.push(v); 
  		this.adjList.set(v, []); 
	}

	addEdge(v, w, weight){ 
		var negWeight = -parseInt(weight)
  		this.adjList.get(v).push({w, negWeight}); 
  		//this.adjList.get(w).push(v); //  Comment out this line if you want a directed graph 
	}

}

class tpSort {
	constructor(v) {
		this.v = v;
		this.len = v.vertices.length; 
	}


    topologicalSortUtil(v, visited, stack)
    {
        // Mark the current node as visited.
        visited[v] = true;
 		var it = this.v.adjList.items[v]
        // Recur for all the vertices adjacent to this vertex
        for(var i=0; i<it.length;i++) {
        	if(!visited[it[i].w]) this.topologicalSortUtil(it[i].w, visited, stack)
        }
        // Push current vertex to stack which stores result
        stack.push(v);
    }

    // The function to find shortest paths from given vertex. It
    // uses recursive topologicalSortUtil() to get topological
    // sorting of given graph.
    shortestPath()
    {
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
    	
        // Initialize distances to all vertices as infinite and
        // distance to source as 0
        var dist = new Array(this.len).fill(Number.MAX_SAFE_INTEGER); 
        
        dist[stack[stack.length-1]] = 0;
        // Process vertices in topological order
        while(stack.length>0)
        {
            // Get the next vertex from topological order
            var u = stack.pop();

            // Update distances of all adjacent vertices
            if (dist[u] !== Number.MAX_SAFE_INTEGER)
            {
                var it = this.v.adjList.items[u]
                for(var i=0; i<it.length;i++) {
                	var node = it[i].w
                	var weight = it[i].negWeight
		          	if (dist[node] > dist[u] + weight)
                    dist[node] = dist[u] + weight
		        }
            }
        }
        
        // Print the calculated shortest distances
        /*
        for (var i = 0; i < this.len; i++)
        {
            if (dist[i] == Number.MAX_SAFE_INTEGER)
            	console.log("INF "); 
            else
                console.log(dist[i]);
        }
        */
        // Negate back 
        return -1*dist[dist.length-1]; 
    }
}

var g = new Graph(); 
var myVertices = [0, 1, 2, 3, 4, 5, 6, 7]; 
for (var i=0; i<myVertices.length; i++){ 
	g.addVertex(myVertices[i]); 
} 

g.addEdge(0, 1, 3);
g.addEdge(0, 2, 6);
g.addEdge(1, 2, 4);
g.addEdge(1, 3, 4);
g.addEdge(1, 4, 11);
g.addEdge(2, 3, 8);
g.addEdge(2, 6, 11);
g.addEdge(3, 4, -4);
g.addEdge(3, 5, 5);
g.addEdge(3, 6, 2);
g.addEdge(4, 7, 9);
g.addEdge(5, 7, 1);
g.addEdge(6, 7, 2);

var topo = new tpSort(g); 
console.log(topo.shortestPath())
