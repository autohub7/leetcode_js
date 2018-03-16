var ladderLength = function(beginWord, endWord, wordList) {
    var len = 1;
    var beginSet = new Set();
    var endSet = new Set();
    var visited = new Set();
    var wordDict = new Set(wordList); 
    beginSet.add(beginWord);
    endSet.add(endWord);

    var word, ch; 
    while (beginSet.size > 0 && endSet.size > 0) {
        if(beginSet.size > endSet.size) {
            var temp = beginSet; 
            beginSet = endSet; 
            endSet = temp; 
        } 
        var next = new Set(); 
        for (var str of beginSet) {
            // construct all possible words
            for (var i = 0; i < str.length; i++) {
                for (var j = 'a'.charCodeAt(0); j <= 'z'.charCodeAt(0); j++) {
                    ch = String.fromCharCode(j)
                    var sb = str; 
                    sb = setCharAt(sb, i, ch);
                    word = sb.toString();
                    if (endSet.has(word)) {
                        return len+1;
                    }
                    if (wordDict.has(word) && !visited.has(word)) {
                        visited.add(word);
                        next.add(word);
                    }
                }
            }
        }
        beginSet = next; 
        len++; 
    }
    return 0;
}; 

function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substr(0,index) + chr + str.substr(index+1);
}
// var b = "hit"
// var e = "cog"
// var w = ["hot","dot","dog","lot","log","cog"]
// console.log(ladderLength(b,e,w))