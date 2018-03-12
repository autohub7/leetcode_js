var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        var start = 1, end = n;
        while (start < end) {
            mid = start + parseInt((end-start) / 2);
            if (!isBadVersion(mid)) start = mid + 1;
            else end = mid;            
        }        
        return start;
    };
};

return function(n) {
    var start = 1, end = n;
    while(start<end) {
        mid = start + 
    }
}