var addBinary = function(a, b) {
    var i = a.length-1;
    var j = b.length-1;
    var c = 0; 
    var res = '';
    while(i>=0|| j>=0) {
    	str = ''
    	if(a[i]==1&&b[j]==1) {
    		if(c==1) { c='1';str='1';}
    		else {c='1';str='0';}
		}
    	else if(a[i]==1||b[j]==1) {
    		if(c==1) {c='1';str='0';} 
    		else {c='0';str='1';}
    	}
    	else {
    		if(c==1) {c='0'; str='1'}
    		else {c='0'; str='0'}
    	}
    	res = str+res;
    	i--; 
    	j--;
    }   
    return (c==1)?(c+res):res; 
};
/*
var a = "100"
var b = "110"
console.log(addBinary(a, b))
*/