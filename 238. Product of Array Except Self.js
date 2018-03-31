var productExceptSelf = function(nums) {
    if(nums.length == 0) return 
    var res = []; 
    res[0] = 1; 
    for(var i=1;i<nums.length;i++) {
        res[i] = res[i-1]*nums[i-1]; 
    }
    
    var prev = 1; 
    for(var i=nums.length-1; i>=0;i--) {
        res[i] = res[i]*prev; 
        prev *= nums[i]
    }
    
    return res; 
};