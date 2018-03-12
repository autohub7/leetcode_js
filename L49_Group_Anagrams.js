var groupAnagrams = function(strs) {
    var hash = {};
    var base = 'a'.charCodeAt(0);
    
    for(var i = 0; i < strs.length; i++) {
        var str = strs[i];
        var arr = Array(26).fill(0);
        for(var j = 0; j < str.length; j++) {
            var code = str[j].charCodeAt(0) - base;
            arr[code]++;
        }

        var key = arr.join('');
        hash[key] = hash[key] || [];
        hash[key].push(strs[i]);
    }
    
    var res = [];
    
    for(i in hash) {
        res.push(hash[i]);
    }
    
    return res;
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))