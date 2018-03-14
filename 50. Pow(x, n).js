var myPow = function(x, n) {
	if(n < 0)   {
        return 1.0/myPow(x, -n);
    }
    if(n === 0) {
        return 1.0;
    }
    var half = myPow(x, parseInt(n/2));
    if (n % 2 == 0) {
        return half * half;
    } else {
        return half * half * x;
    }
};

//console.log(myPow(2.10000,-3))