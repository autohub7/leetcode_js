class shortestpath {
	constructor(graph) {
		this.graph = graph; 
	}
	
	dijkstra(src) { 
	  	var dist = [], visited = [], 
	  	length = this.graph.length; 

		for (var i = 0; i < length; i++) { //{1} 
		   dist[i] = Number.MAX_SAFE_INTEGER; 
		   visited[i] = false; 
		} 
	 
	  	dist[src] = 0; //{2} 
	 
	 	for (var i = 0; i < length-1; i++){ //{3} 
		    var u = this.minDistance(dist, visited); //{4}
		    visited[u] = true; //{5} 
		    for (var v = 0; v < length; v++){ 
		      if (!visited[v] && 
		      this.graph[u][v]!=0 && dist[u] != Number.MAX_SAFE_INTEGER && 
		      dist[u]+this.graph[u][v] < dist[v]){ //{6} 
		        dist[v] = dist[u] + this.graph[u][v]; //{7} 
		      } 
		    } 
	  	} 
	  	return dist; //{8} 
	}; 

  	minDistance (dist, visited){ 
	  	var min = Number.MAX_SAFE_INTEGER, minIndex = -1; 
	  	for (var v = 0; v < dist.length; v++){ 
	    	if (visited[v] == false && dist[v] <= min){ 
	      		min = dist[v]; 
	      		minIndex = v; 
	    	} 
	  	} 
	  	return minIndex; 
	}; 
}

var graph = [[0, 2, 4, 0, 0, 0], 
             [0, 0, 2, 4, 2, 0], 
             [0, 0, 0, 0, 3, 0], 
             [0, 0, 0, 0, 0, 2], 
             [0, 0, 0, 3, 0, 2], 
             [0, 0, 0, 0, 0, 0]]; 

var sp = new shortestpath(graph); 
console.log(sp.dijkstra(0)); 