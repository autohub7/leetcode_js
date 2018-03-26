var lengthOfLongestSubstring = function(s) {
    if(s.length == 0) return 0
    var map = new Map();  
    var ans = 0;
    for(var i=0, j=0;j<s.length; j++) {
        if(map.has(s[j])) {
            i = Math.max(map.get(s[j]), i)
        } 
        ans = Math.max(ans, j-i+1); 
        map.set(s[j], j+1)
    }
    return ans
};

// console.log(lengthOfLongestSubstring("tmmzuxt"))