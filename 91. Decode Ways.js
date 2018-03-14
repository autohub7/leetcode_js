var numDecodings = function(s) {
	var n = s.length; 
	if (n==0) return 0; 

	var memo = new Array(n+1).fill(0); 
	memo[n] = 1; 
	memo[n-1] = s.charAt(n-1) != '0' ? 1 : 0;
	console.log(memo)
	for (var i = n - 2; i >= 0; i--)
	if (s.charAt(i) == '0') continue;
    else memo[i] = (parseInt(s.substring(i,i+2))<=26) ? memo[i+1]+memo[i+2] : memo[i+1];
	return memo[0];
};
