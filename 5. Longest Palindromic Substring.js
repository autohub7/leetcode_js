var longestPalindrome = function(s) {
	var start = 0; var end = 0; 

    // Expand around the center 
    var palin1, palin2, size; 
    var l = parseInt(s.length- (s.length/2)); 
    var r = l+1; 
	for (var i = 0; i < s.length; i++) {
		palin1= searchPalin(s, i, i); 
		palin2= searchPalin(s, i, i+1); 
		size = Math.max(palin1, palin2); 

		if(size > end-start) {
			start = i - parseInt((size-1)/2);
			end = i + parseInt(size/2); 
		}
	}


	return s.substring(start, end+1)
};

function searchPalin(s, l, r) {
	while(s[l] == s[r] && l>0 && r < s.length) {
		l--; 
		r++; 
	}
	return r-l-1; 
}

console.log(longestPalindrome('qlkwjjwiqwe')); 
/*
Time complexity : O(n^2)
Space complexity : O(1)
*/