var bestProfit = function(arr) {
	var min = Number.MAX_SAFE_INTEGER;  
	var max = Number.MIN_SAFE_INTEGER;

	arr.forEach(ele => {
		min = Math.min(min, ele); 
		max = Math.max(max, ele-min); 
	})
	
	return max; 
}

var testcase1 = [7, 1, 5, 3, 6, 4];
var testcase2 = [7, 6, 4, 3, 1]; 
console.log(bestProfit(testcase2))