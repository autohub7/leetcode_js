var permute = function(nums) {
  var n = nums.length; 
  var res = []; 
  if(n==0) return 
  permuHelper(nums, 0, n, res); 
  return res; 
};

function permuHelper(str, idx, n, res) {
	if(idx==n-1) {
		res.push(str.slice())
		return 
	}
	else {
		for(var i=idx;i<n;i++) {
			str = swap(str, idx, i);
			permuHelper(str, idx+1, n, res); 
			str = swap(str, idx, i);
		}
	}
}

function swap(arr,i,j) {
	[arr[i], arr[j]] = [arr[j], arr[i]]
	return arr
}

