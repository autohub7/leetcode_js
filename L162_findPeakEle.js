var findPeak = function(arr) {
	var l=0; r=arr.length-1; 
	while(l<r) {
		var mid = parseInt((l+r)/2); 
		if(arr[mid] > arr[mid+1]) r = mid; 
		else l = mid+1; 
	}
	return l;
}

console.log(findPeak([1,2,3,1]))
// https://leetcode.com/problems/find-peak-element/solution/Find Peak Element