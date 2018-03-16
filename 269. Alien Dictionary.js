var alienOrder = function(words) {
	var map = new Map(); 
	var degree = new Map(); 
	var result = ""; 
	if(words==null || words.length==0) return result; 
	// Build a degree map for each character 
	words.forEach(s => {
		for(var c of s) degree.set(c, 0); 		
	})

	// build the hashmap by comparing the adjacent words, 
	// the first character that is different 
	// between two adjacent words reflect the lexicographical order. 
	var cur, next, c1, c2; 
	for(var i=0; i<words.length-1; i++){
		cur = words[i]; 
		next = words[i+1]; 
		var length = Math.min(cur.length, next.length); 
		for(var j=0; j<length; j++) {
			c1=cur.charAt(j);
			c2=next.charAt(j); 
			if(c1!=c2) {
				var set = new Set(); 
				if(map.has(c1)) set=map.get(c1); 
				if(!set.has(c2)) {
					set.add(c2); 
					map.set(c1, set); 
					degree.set(c2, degree.get(c2)+1); 
				}
				break; 
			}
		}
	}
	console.log(map)
	var q = []; 
	for (var [key, value] of degree.entries()) {	
  		if(value == 0) q.push(key)
	}
	
	// Get how many letters come before the key
    while(q.length>0){
        var c=q.shift();
        result+=c;
     
        if(map.has(c)){
        	var c2 = map.get(c); 
        	for(var char of c2) {
        		var getDegree = degree.get(char)-1; 
        		degree.set(char,getDegree);
        		if(degree.get(char)==0) q.push(char);
        	}
        }
    }
	if(result.length !== degree.size) return "";
    return result; 
};

console.log(alienOrder(["wrt","wrf","er","ett","rftt"]))
