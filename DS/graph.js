//const { Dictionary } = require('./dictionary.js') 
//import Dictionary from './dictionary';
var Dictionary = require('./dictionary.js');
var Queue = require('./Queue.js');

class Graph {
	constructor() {
		this.vertices = []; 
		this.adjList = new Dictionary(); 
	}

	addVertex(v) {
		this.vertices.push(v); //{3} 
  		this.adjList.set(v, []); //{4} 
	}

	addEdge(v, w){ 
  		this.adjList.get(v).push(w); //{5} 
  		//this.adjList.get(w).push(v); //{6} Comment out this line if you want a directed graph 
	}

	toString(){ 
	  var s = ''; 
	  for (var i=0; i<this.vertices.length; i++){ //{10} 
	    s += this.vertices[i] + ' -> '; 
	    var neighbors = this.adjList.get(this.vertices[i]); //{11} 
	    for (var j=0; j<neighbors.length; j++){ //{12} 
	      s += neighbors[j] + ' '; 
	    } 
	    s += '\n'; //{13} 
	  } 
	  return s; 
	}; 

	initializeColor() {
	  var color = []; 
	  for (var i=0; i<this.vertices.length; i++){ 
	    color[this.vertices[i]] = 'white'; //{1} 
	  } 
	  return color; 
	}

	bfs(v, callback) {
		var color = this.initializeColor(), //{2} 
  		queue = new Queue();       //{3} 
  		queue.enqueue(v);              //{4} 
  		//color[0] = 'white';    // Add starting point if you skip grey
 		//console.log(queue)
  		while (!queue.isEmpty()){      //{5} 
    		var u = queue.dequeue(),       //{6} 
    		neighbors = this.adjList.get(u); //{7} 
    		color[u] = 'grey';               //{8} 
    		if(!neighbors) break; 
    		for (var i=0; i<neighbors.length; i++){ //{9} 
      			var w = neighbors[i];               //{10} 
	      		if (color[w] === 'white'){          //{11} 
	        		color[w] = 'grey';              //{12} 
	        		// color[w] = 'black';              //{12} 
	        		queue.enqueue(w);               //{13} 
	      		} 
	    	} 

    		color[u] = 'black'; //{14} // remove if you skip grey
    		if (callback) {     //{15} 
      			callback(u); 
    		} 
  		} 	
	}

	dfs(callback){ 
	  var color = this.initializeColor(); //{1} 
	  for (var i=0; i<this.vertices.length; i++){ //{2} 
	    if (color[this.vertices[i]] === 'white'){ //{3} 
	      this.dfsVisit(this.vertices[i], color, callback); //{4} 
	    } 
	  } 
	}; 
	 
	dfsVisit(u, color, callback){ 
	  color[u] = 'grey'; //{5} 
	  if (callback) {    //{6} 
	    callback(u); 
	  } 
	  var neighbors = this.adjList.get(u);         //{7} 
	  for (var i=0; i<neighbors.length; i++){ //{8} 
	    var w = neighbors[i];               //{9} 
	    if (color[w] === 'white'){          //{10} 
	      this.dfsVisit(w, color, callback);   //{11} 
	    } 
	  } 
	  color[u] = 'black'; //{12} 
	}; 
}
 
 module.exports = Graph; 
