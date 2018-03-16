var numSquares = function(n) {
 	if(n<=0) return 0; 
 	var res = new Array(n+1).fill(Number.MAX_SAFE_INTEGER); 
 	res[0] = 0; 
 	for(var i=1;i<=n;++i) {
 		var min = Number.MAX_SAFE_INTEGER; 
 		var j = 1; 
 		while(i - j*j >=0 ) {
 			min = Math.min(min, res[i-j*j]+1);
 			++j;
 		}
 		res[i] = min; 
 	}
 	return res[n]; 
};

// console.log(numSquares(2))